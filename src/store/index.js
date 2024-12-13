import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStep: 1,
    newUser: {
      formName: {
        name: '',
        isComplete: false
      },
      formEmail: {
        email: '',
        isComplete: false
      },
      formPhone: {
        phone: '',
        isComplete: false
      },
      formPlan: {
        id: 1,
        planName: 'Arcade',
        planPrice: {
            monthly: 9,
            yearly: 9 * (12 - 2)
        },
        planImage: '../assets/images/icon-arcade.svg',
        inputID: 'arcade'
      },
      formBill: false,
      addOns: [{
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
      }
    ]
    },
    isFinished: false,
    isConfirm: false
  },
  getters: {
  },
  mutations: {
    setName(state, newName){
      state.newUser.formName.name = newName
    },
    setEmail(state, newEmail){
      state.newUser.formEmail.email = newEmail
    },
    setPhone(state, newPhone){
      state.newUser.formPhone.phone = newPhone
    },
    setPlan(state, newPlan){
      state.newUser.formPlan = newPlan
    },
    setBill(state, newBill){
      state.newUser.formBill = newBill
    },
    setAddOns(state, newAddOn){
      state.newUser.addOns = newAddOn
    },
    setFormNameComplete(state, isComplete) {
      state.newUser.formName.isComplete = isComplete;
    },
    setFormEmailComplete(state, isComplete) {
      state.newUser.formEmail.isComplete = isComplete;
    },
    setFormPhoneComplete(state, isComplete) {
      state.newUser.formPhone.isComplete = isComplete;
    },
  },
  actions: {
  },
  modules: {
  }
})
