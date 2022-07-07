<template>
    <form @submit.prevent="submitted" class="p-6 space-y-4">
        <div class="mb-3">
            <outline-text-input id="email" label="Email" :hasError="v$.form.email.$error" :errorList="v$.form.email.$errors" :otherError="$page.props.errors.email" v-model="form.email"/>
        </div>

        <div class="flex items-center justify-end">
            <basic-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Enviar
            </basic-button>
        </div>
    </form>
</template>

<script>
    import useValidate from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
    import OutlineTextInput from '@/Components/Inputs/OutlineTextInput.vue'
    import BasicButton from '@/Components/Buttons/BasicButton.vue'

    export default {
        components: {
            OutlineTextInput,
            BasicButton,
        },

        data() {
            return {
                v$: useValidate(),

                form: this.$inertia.form({
                    email: '',
                }),
            }
        },

        emits: ['cancel', 'submitted'],

        methods: {
            submitted(){
                this.v$.$validate()

                if(this.v$.$error)
                    return

                this.$emit('submitted', this.form)
            }
        },

        validations(){
            return {
                form: {
                    email: {
                        required,
                        minLength: minLength(8),
                    },
                }
            }
        },
    }
</script>
