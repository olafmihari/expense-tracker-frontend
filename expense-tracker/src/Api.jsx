// const BASE_URL = 'http://localhost:9292'; // Replace with API base URL

// // Function to handle API requests
// export const apiRequest = async (url, method = 'GET', body = null) => {
//   try {
//     const options = {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     if (body) {
//       options.body = JSON.stringify(body);
//     }

//     const response = await fetch(`${BASE_URL}${url}`, options);

//     if (!response.ok) {
//       throw new Error('Request failed');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('API request error:', error);
//     throw error;
//   }
// };

// // Function to fetch expenses
// export const fetchExpenses = async () => {
//   try {
//     const expenses = await apiRequest('/expenses');
//     return expenses;
//   } catch (error) {
//     console.log('Error fetching expenses:', error);
//     throw error;
//   }
// };

// // Function to add an expense
// export const addExpense = async (expense) => {
//   try {
//     const newExpense = await apiRequest('/expenses', 'POST', expense);
//     return newExpense;
//   } catch (error) {
//     console.log('Error adding expense:', error);
//     throw error;
//   }
// };

// // Function to update an expense
// export const updateExpense = async (expenseId, updatedExpense) => {
//   try {
//     const updated = await apiRequest(`/expenses/${expenseId}`, 'PUT', updatedExpense);
//     return updated;
//   } catch (error) {
//     console.log('Error updating expense:', error);
//     throw error;
//   }
// };

// // Function to delete an expense
// export const deleteExpense = async (expenseId) => {
//   try {
//     await apiRequest(`/expenses/${expenseId}`, 'DELETE');
//     console.log('Expense deleted');
//   } catch (error) {
//     console.log('Error deleting expense:', error);
//     throw error;
//   }
// };

// export default Api;