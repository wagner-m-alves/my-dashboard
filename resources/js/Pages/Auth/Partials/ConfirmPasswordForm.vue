<template>
    <form @submit.prevent="submitted" class="p-6 space-y-4">
        <div class="mb-3">
            <outline-password-input id="password" :hasError="v$.form.password.$error" :errorList="v$.form.password.$errors" :otherError="$page.props.errors.password" v-model="form.password"/>
        </div>

        <div class="flex items-center justify-end">
            <basic-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Confirmar
            </basic-button>
        </div>
    </form>
</template>

<script>
    import useValidate from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
    import BasicLabel from '@/Components/Label.vue';
    import OutlinePasswordInput from '@/Components/Inputs/OutlinePasswordInput.vue'
    import BasicButton from '@/Components/Buttons/BasicButton.vue'

    export default {
        components: {
            BasicLabel,
            OutlinePasswordInput,
            BasicButton,
        },

        data() {
            return {
                v$: useValidate(),

                form: this.$inertia.form({
                    password: '',
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
                    password: {
                        required,
                        minLength: minLength(8),
                    },
                }
            }
        },
    }
</script>
