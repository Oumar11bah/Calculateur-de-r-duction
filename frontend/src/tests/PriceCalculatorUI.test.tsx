import { render, screen, fireEvent } from "@testing-library/react";
import PriceCalculatorUI from "../components/PriceCalculatorUI";

test("affiche un résultat correct après saisie et clic", () => {
  render(<PriceCalculatorUI />);

  // Remplir les champs
  fireEvent.change(screen.getByLabelText(/Prix/i), { target: { value: "200" } });
  fireEvent.change(screen.getByLabelText(/Réduction/i), { target: { value: "25" } });

  // Clic sur calculer
  fireEvent.click(screen.getByText(/Calculer/i));

  // Vérifier le résultat
  expect(screen.getByText(/Prix final : 150 €/i)).toBeInTheDocument();
});

test("affiche un message d'erreur avec des valeurs invalides", () => {
  render(<PriceCalculatorUI />);

  fireEvent.change(screen.getByLabelText(/Prix/i), { target: { value: "-10" } });
  fireEvent.change(screen.getByLabelText(/Réduction/i), { target: { value: "50" } });

  fireEvent.click(screen.getByText(/Calculer/i));

  expect(screen.getByText(/Veuillez entrer des valeurs valides./i)).toBeInTheDocument();
});
