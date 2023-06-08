import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';



const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:9292/expenses');
      setExpenses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      setIsLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      setIsLoading(true);
      await axios.post('http://localhost:9292/expenses', expense);
      fetchExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
      setIsLoading(false);
    }
  };

  const handleUpdateExpense = async (expense) => {
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:9292/expenses/${expense.id}`, expense);
      fetchExpenses();
    } catch (error) {
      console.error('Error updating expense:', error);
      setIsLoading(false);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      setIsLoading(true);
      await axios.delete(`http://localhost:9292/expenses/${expenseId}`);
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
      setIsLoading(false);
    }
  };

  const handleFilter = async (filter) => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:9292/expenses', { params: filter });
      setExpenses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error filtering expenses:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onUpdateExpense={handleUpdateExpense}
        onDeleteExpense={handleDeleteExpense}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
