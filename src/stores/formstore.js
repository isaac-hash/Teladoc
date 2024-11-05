import { defineStore } from "pinia";

export const useformstore = defineStore('formstore', {
    state: () => ({
        current_step : 1,
        formData : {
            firstname : '',
            lastname : '',
            email : '',
            country : '',
            zipcode : '',
            sex : '',
            D_o_b : '',
            hcode : '',
            company : '',
            memberid : '',

        }
    }),
    actions: {
        nextStep() {
            if (this.currentStep < 4) {
              this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
              this.currentStep--;
            }
        },
        updateFormData(field, value) {
            this.formData[field] = value;
            
        },
        
    }

    })