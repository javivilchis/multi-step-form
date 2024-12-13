<template>
    <div class="step-description">
        <h1>Finishing up</h1>
        <p>Double check everything looks OK before confirming</p>
    </div>
    <div class="summary-box">
        <div class="bill-state">
            <div>
                <p class="bill">

                    {{ $store.state.newUser.formPlan.planName }}
                    <span v-if="!$store.state.newUser.formBill">(Monthly)</span>
                    <span v-if="$store.state.newUser.formBill">(Yearly)</span>
                </p>
                <a role="button" @click="goStep2">Change</a>
            </div>
            <p class="bill-price" v-if="!$store.state.newUser.formBill">${{$store.state.newUser.formPlan.planPrice.monthly}}/mo</p>
            <p class="bill-price" v-if="$store.state.newUser.formBill">${{$store.state.newUser.formPlan.planPrice.yearly}}/yr</p>
        </div>
        <div class="service-adds" v-for="item in $store.state.newUser.addOns" :key="item.id">
            <div>
                <p class="service-name">
                   {{ item.addName }}
                </p>
                <p class="service-price" v-if="!$store.state.newUser.formBill">+${{item.planPrice.monthly}}/mo</p>
                <p class="service-price" v-if="$store.state.newUser.formBill">+${{item.planPrice.yearly}}/yr</p>
            </div>
        </div>
    </div>
    <div class="bill-total">
        <span v-if="!$store.state.newUser.formBill">Total (per month)</span>
        <span v-if="$store.state.newUser.formBill">Total (per year)</span>
        <p v-if="!$store.state.newUser.formBill">+${{overallMonth}}/mo</p>
        <p v-if="$store.state.newUser.formBill">+${{overallYear}}/yr</p>
    </div>
    <div class="form-buttons">
        <button class="btn-secondary" @click="handleReturn">Go back</button>
        <button class="btn btn-primary" @click="handleMessage">Confirm</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const goStep2 = () => {
    store.state.currentStep = 2
    store.state.isFinished = false
}


let totalSumMonth = store.state.newUser.addOns.map(item => item.planPrice.monthly)
let totalSumYear = store.state.newUser.addOns.map(item => item.planPrice.yearly)

const totalMonth = totalSumMonth.reduce( (a,b) => {
    return (a+b)
},0)

const totalYear = totalSumYear.reduce( (a,b) => {
    return (a+b)
},0)

const overallMonth = totalMonth + store.state.newUser.formPlan.planPrice.monthly
const overallYear = totalYear + store.state.newUser.formPlan.planPrice.yearly

const goBack = () => {
    store.state.currentStep--
}

const handleReturn = () => {
    store.state.currentStep--
    store.state.isFinished = false
}
const handleMessage = () => {
    store.state.isConfirm = true
    store.state.isFinished = false
}

</script>
