<template>
  <div class="container">
    <h2>My Notes</h2>

    <textarea
      v-model="noteText"
      placeholder="Write your notes here..."
    ></textarea>

    <p>Last saved: {{ lastSaved }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const noteText = ref("");
const lastSaved = ref("");

onMounted(() => {
  let note = localStorage.getItem("note");

  if (note) {
    noteText.value = note;
  }
  else{
    noteText.value = "";
  }

  let lastSavedTime = localStorage.getItem("lastSavedTime");
  if (lastSaved) {
    lastSaved.value = lastSavedTime;
  }
  else{
    lastSaved.value = "";
  }
  
});

onUnmounted(() => {
 localStorage.setItem("note", noteText.value);
  let now = new Date();
  lastSaved.value = now.toLocaleString();
  localStorage.setItem("lastSavedTime", lastSaved.value);
});
</script>

<style scoped>
.container{
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
}

textarea{
  width: 80%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>