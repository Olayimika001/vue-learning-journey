<template>
  <div class="calculator">
    <h1>Simple Calculator</h1>
    
    <input v-model.number="num1" type="number" placeholder="First number">
    <input v-model.number="num2" type="number" placeholder="Second number">

    <div class="buttons">
      <button @click="add">Add</button>
      <button @click="subtract">Subtract</button>
      <button @click="multiply">Multiply</button>
      <button @click="divide">Divide</button>
    </div>

    <h2>Result: {{ result }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref(0)
const num2 = ref(0)
const result = ref(0)

const add = () => {
  result.value = num1.value + num2.value
}

const subtract = () => {
  result.value = num1.value - num2.value
}

const multiply = () => {
  result.value = num1.value * num2.value
}

const divide = () => {
  if (num2.value === 0) {
    alert("Cannot divide by zero!")
  } else {
    result.value = num1.value / num2.value
  }
}
</script>

<style scoped>
.calculator {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b883;
  text-align: center;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

input {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #42b883;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #35495e;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
}

button {
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #35495e;
}

.clear-btn {
  width: 100%;
  background: #e74c3c;
}

.clear-btn:hover {
  background: #c0392b;
}

h2{
  color: #c0392b;
}


</style>