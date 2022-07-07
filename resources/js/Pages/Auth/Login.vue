<template>
    <BreezeGuestLayout>
        <Head title="Log in" />

        <login-form @cancel="cancel" @submitted="submit"/>
    </BreezeGuestLayout>
</template>

<script>
    import BreezeGuestLayout from '@/Layouts/Guest.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import LoginForm from '@/Pages/Auth/Partials/LoginForm.vue';

    export default {
        components: {
            BreezeGuestLayout,
            Head,
            LoginForm
        },

        methods: {
            cancel(){
                this.$inertia.get(this.route('site.welcome'))
            },

            submit(data){
                this.$inertia.post(this.route('login'), data)
            }
        },
    }
</script>

<style>
    body {
        padding: 0px;
    }
</style>
