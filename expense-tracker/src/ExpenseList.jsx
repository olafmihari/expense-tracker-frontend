import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    fetch('http://localhost:9292/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error(error));
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
