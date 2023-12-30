<template>
    <div class="w-full h-full">
        <div class="grid grid-rows-auto grid-cols-3 gap-10 mt-10 w-full relative">
            <router-link class="card bg-base-100 shadow-2xl w-full" :to="`/blog/${post.id}`" v-for="post in paginatedPosts" :key="post.id">
                <figure><img :src="post.img" :alt="post.alt" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {{ post.title }}
                        <template  v-if="post.tags">
                            <div class="badge badge-neutral" v-for="tag in post.tags" :key="tag">
                                {{ tag }}
                            </div>
                        </template>
                    </h2>
                    <p>{{ post.description }}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Read</div> 
                    </div>
                </div>
            </router-link>
            
        </div>
        <div class="mb-24 mt-12 w-full justify-center gap-5 flex">
            <button class="btn btn-primary" v-if="!currentPage <= 0" @click="prevPage" :disabled="currentPage <= 0">Previous</button>
            <button class="btn btn-primary" v-if="currentPage >= !maxPage" @click="nextPage" :disabled="currentPage >= maxPage">Next</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const postModules = import.meta.glob('../blog/*/index.md');
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default {
    setup() {
        const allPosts = ref([]);
        const currentPage = ref(0);
        const postsPerPage = 9;
        const md = new MarkdownIt({ html: true });
        onMounted(async () => {
            for (const path in postModules) {
                const postId = path.split('/')[2]; // Adjust this according to your path structure
                const markdown = await import(`../blog/${postId}/index.md?raw`);
                const { content, data } = matter(markdown.default || markdown);
                allPosts.value.push({ ...data, id: postId, content: md.render(content), path });
            }
            allPosts.value.sort((a, b) => {
                const dateA = a.date.split('-').reverse().join('-');
                const dateB = b.date.split('-').reverse().join('-');
                return new Date(dateB) - new Date(dateA);
            });
        });

        const paginatedPosts = computed(() => {
            const start = currentPage.value * postsPerPage;
            return allPosts.value.slice(start, start + postsPerPage);
        });

        const maxPage = computed(() => Math.ceil(allPosts.value.length / postsPerPage) - 1);

        const nextPage = () => {
            if (currentPage.value < maxPage.value) {
                currentPage.value++;
            }
        };

        const prevPage = () => {
            if (currentPage.value > 0) {
                currentPage.value--;
            }
        };

        return { paginatedPosts, currentPage, nextPage, prevPage, maxPage };
    }
};
</script>
<style scoped>

</style>