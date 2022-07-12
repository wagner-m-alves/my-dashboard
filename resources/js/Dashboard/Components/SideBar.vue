<template>
    <div class="sidebar h-full fixed lg:relative lg:left-0 w-56 lg:w-full text-center hover:overflow-y-auto bg-gray-800 dark:bg-gray-850 invisible lg:visible" id="sidebar">
        <side-bar-brand homeRouteName="dashboard"/>

        <side-bar-simple-menu icon="fa-solid fa-house-chimney" label="Home" @action="home" />

        <side-bar-toggle-menu icon="fa-solid fa-table-list" label="Opções" :submenuList="sideBarToggleSubmenuList" />
    </div>
</template>

<script setup>
    import SideBarBrand from '@/Dashboard/Components/SideBarBrand.vue'
    import SideBarSimpleMenu from '@/Dashboard/Components/SideBarSimpleMenu.vue'
    import SideBarToggleMenu from '@/Dashboard/Components/SideBarToggleMenu.vue'
    import { computed, watch } from 'vue'
    import { useMainStore } from '@/Stores/Main'
    import { Inertia } from '@inertiajs/inertia'

    const mainStore = useMainStore()

    const sideBarVisibilityMobile = computed(() => mainStore.sideBarVisibilityMobile)

    const sideBarToggleSubmenuList = [
        {
            icon:       'fa-solid fa-font-awesome',
            label:      'Item 1',
            routeName:  ''
        },
        {
            icon:       'fa-solid fa-font-awesome',
            label:      'Item 2',
            routeName:  ''
        },
        {
            icon:       'fa-solid fa-font-awesome',
            label:      'Item 3',
            routeName:  ''
        },
    ]

    function home(){
        Inertia.get(route('dashboard'))
    }

    watch(sideBarVisibilityMobile, () => {
        var el = document.getElementById('sidebar')

        if(sideBarVisibilityMobile.value){
            el.classList.remove('invisible')
            el.classList.add('visible')
        }
        else{
            el.classList.remove('visible')
            el.classList.add('invisible')
        }
    })
</script>
