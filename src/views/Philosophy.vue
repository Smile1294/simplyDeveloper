<template>
    <div class="justify-center flex mt-8 text-5xl flex flex-col">
        <p class="font-bold text-center">Here I will share my views on philosophy</p>
        <div v-html="postContent"  class="font-semibold text-lg"></div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const postModules = import.meta.glob('../philosophy/index.md');
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default {
    setup() {
        const postContent = ref('');
        const route = useRoute();
        const md = new MarkdownIt({ html: true });

        onMounted(async () => {
            const postId = route.params.id;
            const path = `../philosophy/index.md`;
            if (postModules[path] !== undefined) {
                const markdown = await import(`../philosophy/index.md?raw`);
                const { content } = matter(markdown.default || markdown);
                postContent.value = md.render(content);   
            }
        });

        return { postContent };
    }
};
</script>
