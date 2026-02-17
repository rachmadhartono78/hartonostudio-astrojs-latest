// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [markdoc(), react(), keystatic(), mdx(), sitemap()],
});
