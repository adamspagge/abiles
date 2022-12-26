<script setup lang="ts">
defineProps(['small'])

</script>
<template>
    <header flex flex-col items-center>
        <div text-4xl>{{ $site.title }}</div>
        <nav>
            <!-- <ContentNavigation v-slot="{ navigation }" :query="navQuery">
                <ul list-none flex font-bold text-gray-500 pl-0 gap-4>
                    <li v-for="link of navigation" :key="link._path" transition-all duration-150 hover:text-black>
                        <NuxtLink :to="link._path" transition-all duration-150 class="main-nav">{{ link.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </ContentNavigation> -->
        </nav>
    </header>
</template>