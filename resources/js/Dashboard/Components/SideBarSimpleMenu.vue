<template>
    <div class="py-2.5 px-4 flex items-center duration-300 cursor-pointer hover:bg-blue-700" :class="textColor" @click="action">
        <i v-if="icon" class="mr-4" :class="icon"></i>
        <span class="font-semibold text-sm">{{label}}</span>
    </div>
</template>

<script setup>
    const emit = defineEmits(['action'])

    const props = defineProps({
        icon: {
            type:       String,
            default:    ''
        },

        label: {
            type:       String,
            required:   true
        },

        textColor: {
            type:       String,
            default:    'text-white'
        },
    })

    function action(){
        emit('action')
    }
</script>
