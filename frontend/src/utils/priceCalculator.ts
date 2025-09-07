// Fonction qui calcule le prix après réduction
export function calculateDiscountedPrice(price: number, discount: number): number | null {
  // Vérification des valeurs
  if (price <= 0 || discount < 0 || discount > 100) {
    return null;
  }

  const finalPrice = price - (price * discount) / 100;
  return parseFloat(finalPrice.toFixed(2)); // Arrondi à 2 décimales
}
