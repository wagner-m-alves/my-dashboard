<template>
    <form @submit.prevent="submitted" class="p-6 space-y-4">
        <div class="mb-3">
            <outline-text-input id="name" label="Nome" :hasError="v$.form.name.$error" :errorList="v$.form.name.$errors" :otherError="$page.props.errors.name" v-model="form.name"/>
        </div>
        <div class="mb-3">
            <outline-text-input id="email" label="Email" :hasError="v$.form.email.$error" :errorList="v$.form.email.$errors" :otherError="$page.props.errors.email" v-model="form.email"/>
        </div>
        <div class="mb-3">
            <outline-password-input id="password" label="Senha" :hasError="v$.form.password.$error" :errorList="v$.form.password.$errors" :otherError="$page.props.errors.password" v-model="form.password"/>
        </div>
        <div class="mb-3">
            <outline-password-input id="password_confirmation" label="Confirmar Senha" :hasError="v$.form.password_confirmation.$error" :errorList="v$.form.password_confirmation.$errors" :otherError="$page.props.errors.password_confirmation" v-model="form.password_confirmation"/>
        </div>

        <div class="flex items-center justify-end">
            <basic-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Registrar
            </basic-button>
        </div>
    </form>
</template>

<script>
    import useValidate from '@vuelidate/core'
    import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
    import OutlineTextInput from '@/Components/Inputs/OutlineTextInput.vue'
    import OutlinePasswordInput from '@/Components/Inputs/OutlinePasswordInput.vue'
    import BasicButton from '@/Components/Buttons/BasicButton.vue'

    export default {
        components: {
            OutlineTextInput,
            OutlinePasswordInput,
            BasicButton,
        },

        data() {
            return {
                v$: useValidate(),

                form: this.$inertia.form({
                    name:                   '',
                    email:                  '',
                    password:               '',
                    password_confirmation:  '',
                }),
            }
        },

        emits: ['cancel', 'submitted'],

        methods: {
            cancel(){
                this.$emit('cancel')
            },

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
                    name: {
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(80),
                    },

                    email: {
                        required,
                        email,
                    },

                    password: {
                        required,
                        minLength: minLength(8),
                    },

                    password_confirmation: {
                        required,
                        minLength: minLength(8),
                        sameAs: sameAs(this.form.password)
                    }
                }
            }
        },
    }
</script>
