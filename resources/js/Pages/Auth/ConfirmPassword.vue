<template>
    <BreezeGuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <confirm-password-form @submitted="submit" />
    </BreezeGuestLayout>
</template>

<script>
    import BreezeGuestLayout from '@/Layouts/Guest.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import ConfirmPasswordForm from '@/Pages/Auth/Partials/ConfirmPasswordForm.vue';

    export default {
        components: {
            BreezeGuestLayout,
            Head,
            ConfirmPasswordForm
        },

        methods: {
            submit(data){
                this.$inertia.post(this.route('password.confirm'), data)
            }
        },
    }
</script>

<style>
    body {
        padding: 0px;
    }
</style>
