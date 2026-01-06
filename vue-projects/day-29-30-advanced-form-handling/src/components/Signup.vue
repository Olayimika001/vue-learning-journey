<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'

// Validation rules 
const signupSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const isLoading = ref(false)
const apiError = ref('')
const successMessage = ref('')

const onSubmit = async (values, { resetForm }) => {
  isLoading.value = true
  apiError.value = ''
  successMessage.value = ''
  
  try {
    // Fixed: Use '[]' as string, not array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Fixed: Case-insensitive email comparison
    const userExists = existingUsers.find(
      user => user.email.toLowerCase() === values.email.toLowerCase()
    )
    
    if (userExists) {
      apiError.value = 'Email already exists. Please login instead.'
    } else {
      // Create new user object
      const newUser = {
        id: Date.now(),
        name: values.name,
        email: values.email.toLowerCase(), // Store as lowercase
        password: values.password, // In real app, this would be hashed!
        createdAt: new Date().toISOString()
      }
      
      // Add user to users array
      existingUsers.push(newUser)
      
      // Save updated users array to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers))
      
      // Create a "token" (just the user ID for now)
      const fakeToken = `token_${newUser.id}`
      
      // Save token and current user
      localStorage.setItem('token', fakeToken)
      localStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }))
      
      successMessage.value = 'Account created successfully! Redirecting...'
      
      // Reset form after success
      resetForm()
      
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 2000)
    }
    
  } catch (error) {
    apiError.value = 'Something went wrong. Please try again.'
    console.error('Signup error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
      
      <!-- Success Message -->
      <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        {{ successMessage }}
      </div>
      
      <!-- API Error Message -->
      <div v-if="apiError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ apiError }}
      </div>

      <Form @submit="onSubmit" :validation-schema="signupSchema" v-slot="{ errors }">
        
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
          <Field
            id="name"
            name="name"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            :class="{ 'border-red-500': errors.name }"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" class="text-red-500 text-sm mt-1 block" />
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            :class="{ 'border-red-500': errors.email }"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm mt-1 block" />
        </div>

        <!-- Password Field -->
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            :class="{ 'border-red-500': errors.password }"
            placeholder="Enter your password (min 8 characters)"
          />
          <ErrorMessage name="password" class="text-red-500 text-sm mt-1 block" />
        </div>

        <!-- Confirm Password Field -->
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            :class="{ 'border-red-500': errors.confirmPassword }"
            placeholder="Confirm your password"
          />
          <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-1 block" />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Signing up...' : 'Sign Up' }}
        </button>
      </Form>

      <p class="text-center mt-4 text-gray-600 text-sm">
        Already have an account? 
        <a href="/login" class="text-blue-600 hover:underline font-medium">Sign In</a>
      </p>
    </div>
  </div>
</template>