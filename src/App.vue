<script>
import Homes from "@/components/Homes/homes.vue";
import {defineComponent} from "vue";
import Popular from "@/components/Popular_Exersices/popular.vue";


export default defineComponent({
  components: {Homes, Popular},
})

</script>

<template>
<Homes/>
<Popular/>
</template>

<style>

</style>
