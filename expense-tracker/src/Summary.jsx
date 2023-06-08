import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ expenses }) => {
  const calculateTotalAmount = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += parseFloat(expense.amount);
    });
    return total.toFixed(2);
  };

  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summary-item">
        <strong>Total Amount Spent:</strong> Ksh{calculateTotalAmount()}
      </div>
    </div>
  );
};

Summary.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string,
    })
  ).isRequired,
};

export default Summary;
