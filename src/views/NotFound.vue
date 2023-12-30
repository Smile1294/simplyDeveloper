<template>
    <div class="w-full px-16 md:px-0 flex items-center justify-center mt-24">
        <div class="card bg-base-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
            <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider">404</p>
            <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider mt-4">Page Not Found</p>
            <p class="mt-4 pb-4 text-center">Sorry, the page you are looking for could not be found.</p>
            <router-link to="/">
                <button class="btn btn-outline btn-primary" title="Return Home">
                    <template>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </template>
                    <span>Return Home</span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style scoped>


</style>