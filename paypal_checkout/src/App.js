import logo from './logo.svg';
import './App.css';

import React from 'react';
import paypalCheckoutButton from './components/paypalCheckoutButton';

function App() {

  const order = {
    customer: 'Enrique Torres',
    total: '12,957.00',
    items: [
      {
        sku:'142',
        name: 'Jordan Why Not .5?',
        price: '$2,699',
        quantity: 1,
        currency: 'MXN'
      },
      {
        sku:'154',
        name: 'LeBron 19',
        price: '$5,129',
        quantity: 2,
        currency: 'MXN'
      }
    ]
  }



  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <paypalCheckoutButton order={order}/>
      </header>
    </div>
  );
}

export default App;
