<template>
    <div class="justify-center flex mt-8 text-5xl flex flex-col">
        <p class="font-bold text-center">Here I will share my views on philosophy</p>
        <div class="mt-10 w-full relative">
            <template v-for="(post,index) in paginatedPosts" :key="index">
                <div class="text-left">
                    <div class="text-xl font-semibold" @click="expandCollapse(index)">
                        {{ post.title }}
                        {{ post.author }}
                        <div class="badge badge-outline cursor-pointer">Expad</div>
                    </div>
                </div>
                <template v-if="index == currentIndex">
                    <div class="text-sm">
                        <p class="" v-html="post.content"></p>
                    </div>
                </template>
            </template>

        </div>
        <div class="mb-24 mt-12 w-full justify-center gap-5 flex">
            <button class="btn btn-primary" v-if="!currentPage <= 0" @click="prevPage"
                :disabled="currentPage <= 0">Previous</button>
            <button class="btn btn-primary" v-if="currentPage >= !maxPage" @click="nextPage"
                :disabled="currentPage >= maxPage">Next</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const postModules = import.meta.glob('../philosophy/*/index.md');
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default {
    data() {
        return {
            currentIndex: null
        }
    },
    setup() {
        const allPosts = ref([]);
        const currentPage = ref(0);
        const postsPerPage = 9;
        const md = new MarkdownIt({ html: true });
        onMounted(async () => {
            for (const path in postModules) {
                const postId = path.split('/')[2]; // Adjust this according to your path structure
                const markdown = await import(`../philosophy/${postId}/index.md?raw`);
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
    },
    methods: {
        expandCollapse(index) {
            if (this.currentIndex == index) {
                this.currentIndex = null;
            } else {
                this.currentIndex = index;
            }
        }
    }
};
</script>
<style scoped></style>