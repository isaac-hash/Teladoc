<script setup>
// import libraries
import { ref } from 'vue';
import { useformstore } from '../stores/formstore';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

// initialize store function
const formstore = useformstore()

// validate inputs
const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      memberid: yup.string().required(''),
      company: yup.string().required(''),
    }),
  ),
});

// define inputs and attributes and assign them to their fields
const [memberid, memberidAttrs] = defineField('memberid');
const [company, companyAttrs] = defineField('company');

const next_step = async () => { 
  const { errors } = validate();
  if (Object.keys(errors).length === 0) {
    formstore.updateFormData('memberid', memberid.value);
    formstore.updateFormData('company', company.value);
    formstore.nextStep();
  }
};
</script>

<template>
  <!-- form start -->
    <form class="p-2">
        <h2 class="mb-3">Add your coverage</h2>

        <small class="">
            *Required
        </small> <br>
    
        <p class="mt-5"></p>
        
        <!-- input section start  -->

        <label for="company">Insurance company*</label>
        <select class="bg-transparent border border-black rounded-lg  p-3 mb-10" name="" id="" v-model="formstore.formData.company" v-bind="companyAttrs" >
            <option value="" class="bg-white option">Name of insurance company</option>
            <option value="medhealth">Medhealth</option>
            <option value="adenis">Adenis</option>

        </select>
        <!-- <div class="mb-5 flex gap-3 ml-2 -mt-7" v-if="errors.company"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.company }}</div> -->

        <label for="memberid">Member ID*</label>
        <input v-model="formstore.formData.memberid" v-bind="memberidAttrs" />
        <!-- <div class="mb-5 flex gap-3 ml-2 " v-if="errors.memberid"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.memberid }}</div> -->

        <!-- input section end -->

        <div class="bg-gray-50 p-5">
            <p>No insurance coverage? <a href="#"  class="text-blue-700 underline font-semibold text-sm"> You can also pay per visit</a></p>
        </div>
      

    </form>
    <!-- form end -->
</template> 




  