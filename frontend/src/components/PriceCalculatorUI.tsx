import React, { useState } from "react";
import { calculateDiscountedPrice } from "../utils/priceCalculator";

export default function PriceCalculatorUI() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (price.trim() === '' || discount.trim() === '') {
      setResult(null);
      return;
    }
    const priceNum = Number(price);
    const discountNum = Number(discount);
    
    if (isNaN(priceNum) || isNaN(discountNum)) {
      setResult(null);
      return;
    }
    
    const final = calculateDiscountedPrice(priceNum, discountNum);
    setResult(final);
  };

  const formatGNF = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  return (
    <div className="calculator-container">
      <h2>Calculateur de réduction</h2>

      <div className="input-group">
        <label>Prix (GNF) : </label>
        <input
          type="number"
          value={price}
          min="0.01"
          step="0.01"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Entrez le prix"
        />
      </div>

      <div className="input-group">
        <label>Réduction (%) : </label>
        <input
          type="number"
          value={discount}
          min="0"
          max="100"
          step="1"
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Entrez le pourcentage"
        />
      </div>

      <button onClick={handleCalculate}>Calculer</button>

      <div className="result">
        {result !== null ? (
          <p>Prix final : {formatGNF(result)} GNF</p>
        ) : (
          <p className="error-message">Veuillez entrer un prix positif et une réduction entre 0 et 100%.</p>
        )}
      </div>
    </div>
  );
}
