import React, { useState } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  // Sample initial list of transactions for testing
  const initialTransactions = [
    { date: '4/29/2024', description: 'Groceries', category: 'Food', amount: 2500 },
    { date: '4/29/2024', description: 'Fuel', category: 'Transport', amount: 5000 },
    { date: '4/29/2024', description: 'Dinner', category: 'Food', amount: 1200 }
  ];

  // State to hold the list of transactions
  const [transactions, setTransactions] = useState(initialTransactions);

  // Function to add a new transaction to the list
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Royal Bank of Flatiron</h1>
        <SearchBar onSearch={setSearchTerm} />
        <div className="input-section">
          <TransactionForm onSubmit={addTransaction} />
        </div>
        <TransactionTable transactions={filteredTransactions} />
      </header>
    </div>
  );
}

export default App;


