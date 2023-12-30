<template>
    <div class="flex flex-col sm:flex-row w-full justify-center gap-5 mt-10">
        <div class="font-bold text-lg text-center sm:text-left w-full sm:w-full w-full lg:w-1/3 mb-4 sm:mb-0 flex flex-col md:flex-row mr-auto">
            <router-link to="/" class="btn btn-outline btn-primary">David Michalco A.K.A Simply Developer</router-link>
        </div>
        <div class="flex flex-col sm:flex-row w-full sm:w-1/3 justify-center gap-3">
            <router-link class="btn btn-outline btn-primary" to="/blog">Blog</router-link>
            <router-link class="btn btn-outline btn-primary" to="/timeline">Timeline</router-link>
            <router-link class="btn btn-outline btn-primary" to="/projects">Projects</router-link>
            <router-link class="btn btn-outline btn-primary" to="/philosophy">Philosophy</router-link>
        </div>
        <div class="flex justify-center sm:justify-start flex flex flex-col md:flex-row">
            <label class="flex cursor-pointer gap-2 btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <input type="checkbox" value="autumn" class="toggle theme-controller">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
        </label>
    </div>
</div></template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

</style>