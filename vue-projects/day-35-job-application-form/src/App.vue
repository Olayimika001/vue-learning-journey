<template>
  <div class="job-application">
    <h1 v-once>Job Application Form</h1>
    
    <!-- Progress Indicator -->
    <div class="progress-bar">
      <div 
        v-for="step in totalSteps" 
        :key="step"
        :class="{ 
          active: step === currentStep,
          completed: step < currentStep 
        }"
        class="progress-step"
      >
        <span class="step-number">{{ step }}</span>
        <span class="step-label">{{ getStepLabel(step) }}</span>
      </div>
    </div>


    <div class="form-content">
      <!--  Personal Info -->
      <div v-if="currentStep === 1" class="step">
        <h2>Personal Information</h2>
        <div class="form-group">
          <label>Full Name *</label>
          <input 
            v-model="formData.fullName"
            v-focus
            type="text"
            placeholder="Enter your full name"
          />
          <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
        </div>
        
        <div class="form-group">
          <label>Email *</label>
          <input 
            v-model="formData.email"
            type="email"
            placeholder="your.email@example.com"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
        
        <div class="form-group">
          <label>Phone *</label>
          <input 
            v-model="formData.phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        </div>
        
        <div class="form-group">
          <label>LinkedIn URL</label>
          <input 
            v-model="formData.linkedin"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
      </div>

      <!-- Step 2: Experience -->
      <div v-if="currentStep === 2" class="step">
        <h2>Experience & Education</h2>
        <div class="form-group">
          <label>Current Job Title *</label>
          <input 
            v-model="formData.jobTitle"
            v-focus
            type="text"
            placeholder="e.g., Frontend Developer"
          />
          <span v-if="errors.jobTitle" class="error">{{ errors.jobTitle }}</span>
        </div>
        
        <div class="form-group">
          <label>Years of Experience *</label>
          <input 
            v-model="formData.yearsExperience"
            type="number"
            min="0"
            placeholder="e.g., 3"
          />
          <span v-if="errors.yearsExperience" class="error">{{ errors.yearsExperience }}</span>
        </div>
        
        <div class="form-group">
          <label>Education Level *</label>
          <select v-model="formData.education">
            <option value="">Select...</option>
            <option value="high-school">High School</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
          <span v-if="errors.education" class="error">{{ errors.education }}</span>
        </div>
        
        <div class="form-group">
          <label>Resume Upload *</label>
          <input 
            type="file" 
            @change="handleFileUpload"
            accept=".pdf,.doc,.docx"
          />
          <div v-if="formData.resume" class="file-preview">
            📄 {{ formData.resume.name }}
            <button @click="removeFile" type="button">✕</button>
          </div>
          <span v-if="errors.resume" class="error">{{ errors.resume }}</span>
        </div>
      </div>

      <!-- Step 3: Review -->
      <div v-if="currentStep === 3" class="step">
        <h2>Review & Submit</h2>
        
        <div class="review-section">
          <h3>Personal Information 
            <button @click="goToStep(1)" class="edit-btn">Edit</button>
          </h3>
          <p><strong>Name:</strong> {{ formData.fullName }}</p>
          <p><strong>Email:</strong> {{ formData.email }}</p>
          <p><strong>Phone:</strong> {{ formData.phone }}</p>
          <p v-if="formData.linkedin"><strong>LinkedIn:</strong> {{ formData.linkedin }}</p>
        </div>
        
        <div class="review-section">
          <h3>Experience & Education 
            <button @click="goToStep(2)" class="edit-btn">Edit</button>
          </h3>
          <p><strong>Job Title:</strong> {{ formData.jobTitle }}</p>
          <p><strong>Experience:</strong> {{ formData.yearsExperience }} years</p>
          <p><strong>Education:</strong> {{ formData.education }}</p>
          <p v-if="formData.resume"><strong>Resume:</strong> {{ formData.resume.name }}</p>
        </div>
        
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="formData.agreeToTerms">
            I agree to the terms and conditions *
          </label>
          <span v-if="errors.agreeToTerms" class="error">{{ errors.agreeToTerms }}</span>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="form-actions">
      <button 
        v-if="currentStep > 1"
        @click="prevStep"
        class="btn btn-secondary"
      >
        Previous
      </button>
      
      <button 
        v-if="currentStep < totalSteps"
        @click="nextStep"
        class="btn btn-primary"
      >
        Next
      </button>
      
      <button 
        v-if="currentStep === totalSteps"
        @click="submitForm"
        class="btn btn-success"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';

// Custom directive: v-focus
const vFocus = {
  mounted(el) {
    el.focus();
  }
};

// Form state
const currentStep = ref(1);
const totalSteps = 3;
const isSubmitting = ref(false);

const formData = reactive({
  // Step 1
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  
  // Step 2
  jobTitle: '',
  yearsExperience: '',
  education: '',
  resume: null,
  
  // Step 3
  agreeToTerms: false
});

const errors = reactive({
  fullName: '',
  email: '',
  phone: '',
  jobTitle: '',
  yearsExperience: '',
  education: '',
  resume: '',
  agreeToTerms: ''
});

// Step labels
const getStepLabel = (step) => {
  const labels = ['Personal', 'Experience', 'Review'];
  return labels[step - 1];
};

// Validation functions
const validateStep1 = () => {
  let isValid = true;
  
  if (!formData.fullName || formData.fullName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
    isValid = false;
  } else {
    errors.fullName = '';
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  } else {
    errors.email = '';
  }
  
  if (!formData.phone || formData.phone.length < 10) {
    errors.phone = 'Please enter a valid phone number';
    isValid = false;
  } else {
    errors.phone = '';
  }
  
  return isValid;
};

const validateStep2 = () => {
  let isValid = true;
  
  if (!formData.jobTitle) {
    errors.jobTitle = 'Job title is required';
    isValid = false;
  } else {
    errors.jobTitle = '';
  }
  
  if (!formData.yearsExperience || formData.yearsExperience < 0) {
    errors.yearsExperience = 'Please enter valid years of experience';
    isValid = false;
  } else {
    errors.yearsExperience = '';
  }
  
  if (!formData.education) {
    errors.education = 'Please select your education level';
    isValid = false;
  } else {
    errors.education = '';
  }
  
  if (!formData.resume) {
    errors.resume = 'Please upload your resume';
    isValid = false;
  } else {
    errors.resume = '';
  }
  
  return isValid;
};

const validateStep3 = () => {
  if (!formData.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms and conditions';
    return false;
  } else {
    errors.agreeToTerms = '';
    return true;
  }
};

// Navigation
const nextStep = () => {
  if (currentStep.value === 1 && !validateStep1()) {
    return;
  }
  
  if (currentStep.value === 2 && !validateStep2()) {
    return;
  }
  
  if (currentStep.value < totalSteps) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const goToStep = (step) => {
  currentStep.value = step;
};

// File handling
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.resume = file;
    errors.resume = '';
  }
};

const removeFile = () => {
  formData.resume = null;
};

// Form submission
const submitForm = async () => {
  if (!validateStep3()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    
    // Clear localStorage
    localStorage.removeItem('jobApplicationDraft');
    
    // Reset form
    Object.keys(formData).forEach(key => {
      if (key === 'agreeToTerms') {
        formData[key] = false;
      } else if (key === 'resume') {
        formData[key] = null;
      } else {
        formData[key] = '';
      }
    });
    
    currentStep.value = 1;
    
  } catch (error) {
    console.error('Submission error:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

// Auto-save to localStorage
watch(formData, (newData) => {
  const dataToSave = { ...newData };
  delete dataToSave.resume; // Can't save File object to localStorage
  localStorage.setItem('jobApplicationDraft', JSON.stringify(dataToSave));
}, { deep: true });

// Load saved data
onMounted(() => {
  const saved = localStorage.getItem('jobApplicationDraft');
  if (saved) {
    const parsedData = JSON.parse(saved);
    Object.assign(formData, parsedData);
  }
});
</script>

<style scoped>
.job-application {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #42b883;
  margin-bottom: 40px;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
}

.progress-bar::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ddd;
  z-index: 0;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ddd;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s;
}

.progress-step.active .step-number {
  background: #42b883;
  color: white;
}

.progress-step.completed .step-number {
  background: #35a372;
  color: white;
}

.step-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.form-content {
  margin-bottom: 30px;
}

.step {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b883;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
input[type="number"],
select {
  width: 90%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus,
select:focus {
  outline: none;
  border-color: #42b883;
}

input[type="file"] {
  padding: 8px 0;
}

.error {
  display: block;
  color: #e74c3c;
  font-size: 13px;
  margin-top: 5px;
}

.file-preview {
  margin-top: 10px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file-preview button {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}

.review-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.review-section h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c3e50;
  margin-bottom: 15px;
}

.edit-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.edit-btn:hover {
  background: #35a372;
}

.review-section p {
  margin: 8px 0;
  color: #555;
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary {
  background: #ddd;
  color: #555;
}

.btn-secondary:hover {
  background: #ccc;
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-primary:hover {
  background: #35a372;
}

.btn-success {
  background: #27ae60;
  color: white;
}

.btn-success:hover {
  background: #229954;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
}
</style>