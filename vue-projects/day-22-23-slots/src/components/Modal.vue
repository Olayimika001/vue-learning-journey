<template>
  <div v-if="isOpen" class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <slot name="header">
          <h2>Default Title</h2>
        </slot>
        <button @click="closeModal" class="close-btn">✕</button>
      </div>

      <div class="modal-body">
        <slot name="body">
          <p>Default body content</p>
        </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button @click="closeModal">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #000;
}

.modal-body {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-footer button {
  padding: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
}
</style>