import { ref } from 'vue'

export function useToggle(initialValue = false) {
  const value = ref(initialValue)
  
  function toggle() {
    value.value = !value.value
  }
  
  function setTrue() {
    value.value = true
  }
  
  function setFalse() {
    value.value = false
  }
  
  return { value, toggle, setTrue, setFalse }
}