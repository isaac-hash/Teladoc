<script setup>
// import libraries
import { ref } from 'vue';
// import { useForm } from 'vee-validate';
// import { toTypedSchema } from '@vee-validate/yup';
// import * as yup from 'yup';
import { useformstore } from '../stores/formstore';
import { computed } from 'vue';
import { onMounted } from 'vue';

// initialize store function
const formstore = useformstore()

// display stored data

console.log('Form Data:', formstore.formData);
// console.log('displayed data', displayeddata);
console.log('fname: ', formstore.formData.firstname);

// const displaydata = formstore.formData;

// const displaydata = computed(() => formstore.formData);
const displaydata = computed({
  get() {
    return formstore.formData;
  },
  set(newValue) {
    formstore.updateFormData(newValue);
  }
});

function updatedisplaydata() {
  formstore.updateFormData(displaydata.value);
}


onMounted(() => {
      // Access the element 
      const inputs = document.getElementsByTagName('input')
      const myelement = document.getElementById('myelement')
      
    });




const next_step = async () => { 

};
</script>

<template>

  <!-- fontawesome icon online cdn -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <!-- form start -->
       
      <form class="p-2">
      <h2 class="">Let's double check your information</h2>
      <p class="mt-3 mb-5">Make sure these details match your card.</p>
  
      <small class="">
        *Required
      </small> <br>
  
      <p class="mt-5"></p>
  
      <!-- input section start -->
  
      <label for="company">Insurance Company*</label>
      <input v-model="displaydata.company" v-bind="companyAttrs" class="mb-10" @input="updatedisplaydata"/>
      <!-- <div class="mb-5 flex gap-3 ml-2 " v-if="errors.company"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.company }}
      </div>
   -->
  
      <label for="memberid">Member ID*</label>
      <input v-model="displaydata.memberid" v-bind="memberidAttrs" class="mb-10" @input="updatedisplaydata"/>
      <!-- <div class="mb-5 flex gap-3 ml-2 " v-if="errors.memberid"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.memberid }}
      </div>
   -->
      <label for="firstname">First Name*</label>
      <input class="mb-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="displaydata.firstname" v-bind="firstnameAttrs" placeholder="First Name" @input="updatedisplaydata">
      <!-- <div v-if="errors.firstname" class="mb-5 flex gap-3 ml-2 -mt-5">  
        <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
        {{ errors.firstname }} -->
      <!-- </div> -->
  
  
      <label  for="lastname">Last Name*</label>
      <input class="mb-10" type="text" v-model="displaydata.lastname" placeholder="Last Name" v-bind="lastnameAttrs" @input="updatedisplaydata">
      <!-- <div v-if="errors.lastname" class="mb-5 flex gap-3 ml-2 -mt-5">
        <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
        {{ errors.lastname}} -->
      <!-- </div> -->
  
  
      <label  for="email">Email*</label>
      <input class="mb-10" type="text" v-model="displaydata.email" placeholder="" v-bind="emailAttrs" @input="updatedisplaydata">
      <!-- <div v-if="errors.email" class="mb-5 flex gap-3 ml-2 -mt-5">
        <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
        {{ errors.email }} -->
      <!-- </div> -->
  
  
      <label for="">Date Of Birth*</label><br>
      <small>MM/DD/YYYY</small>
      <input class="mb-10" type="date" v-model="displaydata.D_o_b" v-bind="D_o_bAttrs"  placeholder="MM/DD/YYYY" @input="updatedisplaydata">
      <!-- <div v-if="errors.D_o_b" class="mb-5 flex gap-3 ml-2 -mt-5">
        <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
        {{ errors.D_o_b }} -->
      <!-- </div> -->

  
      <!-- input section end -->
  
    </form>
    <!-- form end -->











</template>

<style scoped>

</style> 



