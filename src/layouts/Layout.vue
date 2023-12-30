<template>
    <div>
        <div class="md:m-auto md:w-3/4">
            <NavBar />
            <RouterView class=""></RouterView>
            <Footer class="" />
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>

</style>