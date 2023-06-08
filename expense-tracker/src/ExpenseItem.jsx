import React, { useState } from 'react';

const ExpenseItem = ({ expense, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAmount, setUpdatedAmount] = useState(expense.amount);
  const [updatedDescription, setUpdatedDescription] = useState(expense.description);
  const [updatedDate, setUpdatedDate] = useState(expense.date);

  const handleUpdate = () => {
    fetch(`http://localhost:9292/expenses/${expense.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: updatedAmount,
        description: updatedDescription,
        date: updatedDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:9292/expenses/${expense.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onDelete(expense.id);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <div>
          <label>Amount</label>
          <input type="text" value={updatedAmount} onChange={(e) => setUpdatedAmount(e.target.value)} />
          <label>Description</label>
          <input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
          <label>Date</label>
          <input type="text" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>Amount: {expense.amount}</div>
          <div>Description: {expense.description}</div>
          <div>Date: {expense.date}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
