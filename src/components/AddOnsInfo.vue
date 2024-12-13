<template>
    <div class="step-description">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
    </div>
    <form @submit.prevent="validateStep">
        <div class="form-group-check" v-for="item in addOnsList" :key="item.id">
            <label class="form-group-check-container" :for="item.addCode">
                <input type="checkbox" class="checkbox" :id="item.addCode" :value="item" v-model="addOns" />
                <span class="checkbox-icon"></span>
                <div class="adds-details">
                    <div>
                        <p>{{ item.addName }}</p>
                        <span>{{ item.description }}</span>
                    </div>
                    <p v-if="!$store.state.newUser.formBill" class="adds-price">+${{item.planPrice.monthly}}/mo</p>
                    <p v-if="$store.state.newUser.formBill"class="adds-price">+${{item.planPrice.yearly}}/yr</p>
                </div>
            </label>
        </div>
        <div class="form-buttons">
        <button class="btn-secondary" @click="$store.state.currentStep--">Go back</button>
        <button class="btn btn-primary">Next Step</button>
    </div>
    </form>
    
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const addOnsList = [
    {
        id: 1,
        addName: 'Online Service',
        addValue: 'ao1',
        addCode: 'onlineService',
        description: 'Access to multi player games',
        planPrice: {
            monthly: 1,
            yearly: 1 * (12 - 2)
        }
    },
    {
        id: 1,
        addName: 'Larger storage',
        addValue: 'ao2',
        addCode: 'largerstorage',
        description: 'Extra 1TB of cloud save',
        planPrice: {
            monthly: 2,
            yearly: 2 * (12 - 2)
        }
    },
    {
        id: 1,
        addName: 'Customizable Profile',
        addValue: 'ao3',
        addCode: 'customizableprofile',
        description: 'Custom theme on your profile',
        planPrice: {
            monthly: 2,
            yearly: 2 * (12 - 2)
        }
    }
]
const addOns = computed({
    get() {
      return store.state.newUser.addOns
    },
    set(newAdds) {
      return store.commit('setAddOns', newAdds)
    }
  })

  const validateStep = () => {
    store.state.currentStep++
    store.state.isFinished = true
  }
</script>
