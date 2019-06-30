// Vue main file

import {main} from './moduels'
import Vue from 'vue'
import LoginForm from './components/forms/LoginForm'
import RegisterForm from './components/forms/RegisterForm'
import CallbackForm from './components/forms/CallbackForm'

window.onload = () => {
    main()
}

// ----------------------use-section-------------------------------------------->

Vue.component('login-form', LoginForm)
Vue.component('register-form', RegisterForm)
Vue.component('callback-form', CallbackForm)

// ----------------------------------------------------------------------------->


// ----------------------component-section-------------------------------------->

// ----------------------------------------------------------------------------->


// ---------------------Main-instance-of-Vue------------------------------------>

const app = new Vue({
    el: '#app'
});

// -------------------------Instances-of-Vue------------------------------------>

// ----------------------------------------------------------------------------->





