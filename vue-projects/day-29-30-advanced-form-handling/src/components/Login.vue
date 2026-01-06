<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'

// Validation rules
const loginSchema = yup.object({
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is required')
})

const isLoading = ref(false)
const apiError = ref('')

// Handle login with localStorage
const onSubmit = async (values) => {
  isLoading.value = true
  apiError.value = ''
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  try {
    // Get all users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Find user with matching email and password
    const user = existingUsers.find(
      u => u.email === values.email && u.password === values.password
    )
    
    if (!user) {
      apiError.value = 'Invalid email or password'
      return
    }
    
    // Create a "token" (just the user ID)
    const fakeToken = `token_${user.id}`
    
    // Save token and current user
    localStorage.setItem('token', fakeToken)
    localStorage.setItem('currentUser', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email
    }))
    
    // Redirect to dashboard
    setTimeout(() => {
      // router.push('/dashboard')
      window.location.href = '/dashboard'
    }, 500)
    
  } catch (error) {
    apiError.value = 'Something went wrong. Please try again.'
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      
      <!-- API Error Message -->
      <div v-if="apiError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ apiError }}
      </div>

      <Form @submit="onSubmit" :validation-schema="loginSchema" v-slot="{ errors }">
        
        <!-- Email Field -->
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">Email</label>
          <Field
            name="email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': errors.email }"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
        </div>

        <!-- Password Field -->
        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-2">Password</label>
          <Field
            name="password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': errors.password }"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </Form>

      <p class="text-center mt-4 text-gray-600">
        Don't have an account? 
        <a href="/signup" class="text-blue-600 hover:underline">Sign Up</a>
      </p>
    </div>
  </div>
</template>