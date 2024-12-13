<template>
  <div class="steps-mobile">
    <div class="steps-mobile-container">
      <Step v-for="step in steps" :key="step.id" :stepProp="step"/>
    </div>
  </div>
  <MultiStep />
</template>

<script setup>
import MultiStep from './components/MultiStep.vue'
import Step from './components/Steps/Steps.vue'


const steps = [
    { 
      id: 1, 
      stepNumber: 1, 
      stepTitle: 'Step 1',
      stepDetail: 'Your Info'
    },
    { 
      id: 2,
      stepNumber: 2, 
      stepTitle: 'Step 2',
      stepDetail: 'Select Plan'
    },
    { 
      id: 3,
      stepNumber: 3, 
      stepTitle: 'Step 3',
      stepDetail: 'Add-ons'
    },
    { 
      id: 4,
      stepNumber: 4, 
      stepTitle: 'Step 4',
      stepDetail: 'Summary'
    }
  ]
</script>

<style></style>
