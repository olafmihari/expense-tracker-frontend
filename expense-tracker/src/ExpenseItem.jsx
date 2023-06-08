import React, { useState } from 'react';
import axios from 'axios';

const ExpenseItem = ({ expense, handleDeleteExpense, handleUpdateExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAmount, setUpdatedAmount] = useState(expense.amount.toString());
  const [updatedDate, setUpdatedDate] = useState(expense.date);
  const [updatedDescription, setUpdatedDescription] = useState(expense.description);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9292/expenses/${expense.id}`);
      handleDeleteExpense(expense.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    const updatedExpense = {
      amount: parseFloat(updatedAmount),
      date: updatedDate,
      description: updatedDescription,
    };

    try {
      await axios.put(`http://localhost:9292/expenses/${expense.id}`, updatedExpense);
      handleUpdateExpense(updatedExpense);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <div className="expense-item-edit">
          <input
            type="number"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(e.target.value)}
          />
          <input
            type="date"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className="expense-item-details">
          <div>{expense.amount}</div>
          <div>{expense.date}</div>
          <div>{expense.description}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
