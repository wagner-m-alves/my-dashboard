<template>
    <BreezeGuestLayout>
        <Head title="Forgot Password" />

        <div class="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <forgot-password-form @submitted="submit" />
    </BreezeGuestLayout>
</template>

<script>
    import BreezeGuestLayout from '@/Layouts/Guest.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import ForgotPasswordForm from '@/Pages/Auth/Partials/ForgotPasswordForm.vue';

    export default {
        components: {
            BreezeGuestLayout,
            Head,
            ForgotPasswordForm
        },

        methods: {
            submit(data){
                this.$inertia.post(this.route('password.email'), data)
            }
        },
    }
</script>

<style>
    body {
        padding: 0px;
    }
</style>
