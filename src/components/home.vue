<script setup>
// import libraries
import {ref, computed} from 'vue';
// import components
import step1 from '../components/step1.vue';
import step2 from '../components/step2.vue';
import step3 from '../components/step3.vue';
import step4 from '../components/step4.vue';
import loadingcomponent from '../components/loadingcomponent.vue';

// define current step
const current_step = ref(1);

// define loading state
const isLoading = ref(false);

// switch between steps
const current_step_component = computed(() => {
 return {
   1: step1,
   2: step2,
   3: step3,
   4: step4,
 }[current_step.value];
});


// compute value of step and add loading delay
const next_step = async () => {
 if (current_step.value < 4 ) {
   isLoading.value = true;
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   current_step.value++;
   console.log(current_step.value);
   
   isLoading.value = false;
 }
};

const prev_step = () => {
    if(current_step.value > 1){
        current_step.value--;
        console.log(current_step.value);
    }

};


</script>

<template>
    <!-- fontawesome online icon cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- nav bar start -->
    <nav>
        <div>
            <div class="bar">
                <div class="left">
                    <img src="../assets/images/logo.svg" alt="logo">
                </div>
                <div class="overflow-visible group">

                    <div class="right flex ">
                       <img src="../assets/images/globe-icon.svg" class="w-11 drop-shadow-md" alt="">
                       <span class="mt-3 text-bold">ENG</span>
                    </div>

                    <div class="border border-gray-300 absolute bg-white hidden group-hover:block rounded-lg">
                        <div class="p-2 w-72 border language">
                            <a href="#">English</a>
                        </div>
                        <div class="p-2 w-72 border language">
                            <a href="#">Spanish</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- nav bar end -->
    </nav>

    <!-- Back button -->
    
    <div class="mb-20">
        
        <div class="prev" style="max-width: 30rem; margin: auto">
    
            <a id="prev" class="w-1/3 mt-5" @click="prev_step" v-if="current_step > 1" ><i class="fa fa-angle-left mr-3" aria-hidden="true"></i>Back</a>
        </div>
     
    
        <!-- loading component -->
        <div>
            <component :is="currentComponent" />
            <loadingcomponent v-if="isLoading" />
        </div>
     <component :is="current_step_component"/>

     <!-- next button -->
     <div class="nxt">
         <button class="focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 " id="next" @click="next_step" v-if="current_step < 4" >Next</button>
     </div>
     
    </div>

    <!-- footer start -->
    <footer>

        <div class="flex flex-col md:flex-row-reverse footer">
            
            <div>
                <a href="" class="hover:text-purple-400"> Notice of Non-Discrimination and Language Assistance</a>
            </div>
            <div>
                <a href="" class="hover:text-purple-400"> Notice of Privacy  Practices</a>
            </div>
            <div>
                <a href="" class="hover:text-purple-400"> Terms of  Service</a>
            </div>
                <div class="text-gray-900 font-thin">
                    © 2002-2024 Teladoc, Inc. All rights reserved.
                </div>
        </div>
    </footer>
    <!-- footer end -->
 </template>



