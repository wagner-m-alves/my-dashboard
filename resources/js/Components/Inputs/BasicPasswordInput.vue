<template>
    <div class="relative">
        <input @blur="eventBlur" type="password" :id="id" @input="$emit('update:modelValue', $event.target.value)" class="w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="" :value="modelValue" />

        <p class="text-center text-xs text-red-700" v-if="hasError">{{ errorList[0].$message }}</p>
        <p class="text-center text-xs text-red-700" v-else-if="otherError">{{ otherError }}</p>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        methods: {
            eventBlur(){
                this.$emit('eventBlur')
            }
        },

        props: {
            id: {
                required: true,
                type: String
            },

            label: {
                required: true,
                type: String
            },

            modelValue: {
                type: String
            },

            hasError: {
                required: true,
                type: Boolean
            },

            errorList: {
                required: true,
                type: Array
            },

            otherError: {
                required: true,
            }
        }
    })
</script>
