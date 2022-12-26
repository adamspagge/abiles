<script setup lang="ts" >
const documents = useDocuments('~/pages/')
console.log(documents.value)
</script>
<template>
    <h1>Index page</h1>
    <pre>
        {{ documents }}
    </pre>
</template>
