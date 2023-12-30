<template>
    <div v-html="postContent" class="mb-24"></div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const postModules = import.meta.glob('../projects/*/index.md');
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default {
    setup() {
        const postContent = ref('');
        const route = useRoute();
        const md = new MarkdownIt({ html: true });

        onMounted(async () => {
            const postId = route.params.id;
            const path = `../projects/${postId}/index.md`;
            if (postModules[path] !== undefined) {
                const markdown = await import(`../projects/${postId}/index.md?raw`);
                const { content } = matter(markdown.default || markdown);
                postContent.value = md.render(content);
            }
        });

        return { postContent };
    }
};
</script>
