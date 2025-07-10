// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import decapCmsOauth from "astro-decap-cms-oauth";

import vercel from '@astrojs/vercel';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightGiscus from 'starlight-giscus';

// https://astro.build/config
export default defineConfig({
	integrations: [
		decapCmsOauth(),
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/head.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightScrollToTop({
					// Button position
					position: 'right', // 'left' or 'right'      
					// Tooltip text
					tooltipText: 'Back to top',
					showTooltip: true,
					// Use smooth scrolling
					smoothScroll: true,
					// Visibility threshold (show after scrolling 20% down)
					threshold: 10,
				}),
				starlightGiscus({
					repo: "Edwinrj/lab-wpi-ece3849",
					repoId: 'R_kgDOPKCuOw',
					category: 'Q&A',
					categoryId: 'DIC_kwDOPKCuO84Cswiv',
					reactions: true,
					lazy: true
				})
			],

		},
	],

	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});