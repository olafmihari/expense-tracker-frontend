import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:9292/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} handleDeleteExpense={handleDeleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
