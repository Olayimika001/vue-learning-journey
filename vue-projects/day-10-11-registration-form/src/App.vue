<template>
  <div class="container">
    <div class="form">
    <h1>User Information Form</h1>
    
      <label for="name">Name:</label>
      <input class="name" type="text" v-model.trim="name">
      <label for="email">Email:</label>
      <input class="email" type="email" v-model.trim="email">
      <label for="age">Age:</label>
      <input class="age" type="number" v-model.number="age">

        <div class="gender">
          <h3 for="gender">Gender:</h3>
          <input type="radio" v-model="picked" value="Male">
          <label for="Male">Male</label><br>
          <input type="radio" v-model="picked" value="Female">
          <label for="Female">Female</label><br>
          <input type="radio" v-model="picked" value="Other">
          <label for="Other">Other</label>
        </div>

        <div class="interests">
          <h3 for="interests">Interests:</h3>
          <input type="checkbox" v-model="checked" value="Coding">
          <label for="Coding">Coding</label><br>
          <input type="checkbox" v-model="checked" value="Reading">
          <label for="Reading">Reading</label><br>
          <input type="checkbox" v-model="checked" value="Movies">
          <label for="Movies">Movies</label><br>
          <input type="checkbox" v-model="checked" value="Gaming">
          <label for="Gaming">Gaming</label>
        </div>

      <label class="bio">Tell us about yourself:</label>
      <textarea v-model.lazy="bio"></textarea>
    </div>

    <div class="information">
      <div class="data">
        <h2>User Information</h2>
        <h4>Name : {{ name }} </h4>
        <h4>Email : {{ email }} </h4>
        <h4>Age : {{ age }} </h4>
        <h4>Gender : {{ picked }} </h4>
        <h4>Interests : {{ checked }}</h4>
        <h4>Bio : {{ bio }} </h4>
      </div>

      <div class="modifiers-demo">
        <h3 style="color: #006989 ;">Modifiers in Action:</h3>
        <p>Name length: <span> {{ name.length }}</span> characters</p>
        <p>Age type: <span>  {{ typeof age }} </span></p>
        <p>Bio updates: {{ bio }} </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const age = ref(0)
const bio = ref('')
const picked = ref('')
const checked = ref([])
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  width: 700px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #eaebed;
  color: black;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding-top: 30px;
}

.form{
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

h1, h2{
  color: #006989;
  font-weight: bold;
}

label{
  margin-left: 5px;
  font-weight: bold;
  margin-top: 10px;
}

input{
  border: none;
  padding: 10px;
}

.name, .email{
  border-radius: 10px;
  height: 35px;
}

.age{
  border-radius: 10px;
  height: 35px;
  width: 60px;
  padding: 10px;
}

.bio , h3{
  font-size: large;
  font-weight: bold;
}

textarea{
  border-radius: 10px;
  height: 100px;
  width: 100%;
  padding: 10px;
  resize: none;
}

span{
  font-weight: bold;
}

.information{
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>