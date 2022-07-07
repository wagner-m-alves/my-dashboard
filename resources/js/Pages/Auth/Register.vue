<template>
    <BreezeGuestLayout>
        <Head title="Register" />

        <register-form @cancel="cancel" @submitted="submit"/>
    </BreezeGuestLayout>
</template>

<script>
    import BreezeGuestLayout from '@/Layouts/Guest.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import RegisterForm from '@/Pages/Auth/Partials/RegisterForm.vue';

    export default {
        components: {
            BreezeGuestLayout,
            Head,
            RegisterForm
        },

        methods: {
            cancel(){
                this.$inertia.get(this.route('site.welcome'))
            },

            submit(data){
                this.$inertia.post(this.route('register'), data)
            }
        },
    }
</script>

<style>
    body {
        padding: 0px;
    }
</style>
