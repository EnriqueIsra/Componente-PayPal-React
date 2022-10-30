import logo from "./logo.svg";
import "./App.css";

import React from "react";
import PayPalCheckoutButton from "./components/paypalCheckoutButton";

function App() {
  const order = {
    customer: "Enrique_Torres",
    total: "15.00",
    items: [
      {
        sku: "142",
        name: "Jordan Why Not .5?",
        price: "5",
        quantity: 1,
        currency: "MXN",
      },
      {
        sku: "154",
        name: "LeBron 19",
        price: "5",
        quantity: 2,
        currency: "MXN",
      },
    ],
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <PayPalCheckoutButton order={order}/>
      </header>
    </div>
  );
}

export default App;
