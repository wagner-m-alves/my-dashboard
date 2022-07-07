<template>
    <div class="relative">
        <input @blur="eventBlur" type="text" :id="id" @input="$emit('update:modelValue', $event.target.value)" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " :value="modelValue" />
        <label :for="id" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{{label}}</label>

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
