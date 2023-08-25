<script>
import Homes from "@/components/Homes/homes.vue";
import {defineComponent} from "vue";
import Popular from "@/components/Popular_Exersices/popular.vue";
import {PlayIcon} from "@vue-hero-icons/outline"


export default defineComponent({
  components: {Homes, Popular},
})

</script>

<template>
<Homes/>
<Popular/>
<PlayIcon/>
</template>

<style>

</style>
