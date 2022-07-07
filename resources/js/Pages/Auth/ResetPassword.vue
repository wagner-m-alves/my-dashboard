<template>
    <BreezeGuestLayout>
        <Head title="Reset Password" />

        <reset-password-form :token="token" :email="email" @submitted="submit" />
    </BreezeGuestLayout>
</template>

<script>
    import BreezeGuestLayout from '@/Layouts/Guest.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import ResetPasswordForm from '@/Pages/Auth/Partials/ResetPasswordForm.vue';

    export default {
        components: {
            BreezeGuestLayout,
            Head,
            ResetPasswordForm
        },

        props: {
            email: String,
            token: String,
        },

        methods: {
            submit(data){
                this.$inertia.post(this.route('password.update'), data)
            }
        }
    }


const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<style>
    body {
        padding: 0px;
    }
</style>
