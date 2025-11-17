<template>
  <div class="app">
    <h1>Expense Tracker</h1>
    <div class="adding-expense">
      <input v-model="expense" type="text" placeholder="Add expense">
      <input v-model.number="amount" type="number" placeholder="Enter amount">
      <button @click="addExpense">Add Expense</button>
    </div>

    <h2>Total Expense: ${{ totalAmount() }}</h2>

    <div class="expense-list" v-if="expenses.length !== 0">
      <div class="expense-item" v-for="exp in expenses" :key="exp.id">
        <h2> {{ exp.name }} </h2>
        <h3> ${{ (exp.amount).toFixed(2) }} </h3>
        <button @click="deleteExpense(exp.id)" class="delete-btn">Delete</button>
      </div>
    </div>
    <div v-else class="no-expenses">
      <h3>No expense added yet!</h3>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expense = ref('')
const amount = ref(null)
const expenses = ref([])

const addExpense = () => {
  if (expense.value && amount.value) {
    expenses.value.push({
      id: Date.now(),
      name: expense.value,
      amount: amount.value,
    })
    expense.value = ''
    amount.value = null
  } else {
    alert('Please enter both expense name and amount')
  }
}

const totalAmount = () => {
  return (expenses.value.reduce((total, exp) => total + Number(exp.amount), 0)).toFixed(2)
}

const deleteExpense = (id) => {
  expenses.value = expenses.value.filter(exp => exp.id !== id)
}

</script>

<style scoped>
.app{
  max-width: 1000px;
  height: auto;
  margin: 20px auto;
  padding: 15px;
  text-align: center;
  background-color: White;
  border-radius: 20px;
}

h1{
  color: #42b883;
  font-weight: bold;
}

.adding-expense {
  margin: 20px 0;
}

input{
  padding: 8px;
  margin-right: 8px;
  font-size: 16px;
}

button {
  padding: 8px 15px;
  font-size: 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h2{
  color: #35495e;
  font-weight: bold;
}

.expense-list {
  margin-top: 20px;
  text-align: left;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
}

.delete-btn{
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}

.no-expenses {
  margin-top: 20px;
  color: #888;
  font-style: italic;
}
</style>