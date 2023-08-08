<script setup>
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router"


// router
const router = useRouter()

onMounted(() => {
})

</script>

<template>
<h1>Hello</h1>
</template>

<style lang="less">
h1{
  font-size: 16px;
}
@media screen and (max-width: 750px) {
  h1{
    font-size: 750dvw;
  }
}
</style>