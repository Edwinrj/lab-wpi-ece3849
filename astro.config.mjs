// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import decapCmsOauth from "astro-decap-cms-oauth";
import mermaid from 'astro-mermaid';
import vercel from '@astrojs/vercel';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightGiscus from 'starlight-giscus';
import starlightGitHubAlerts from 'starlight-github-alerts'
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	integrations: [
		decapCmsOauth(),
		mermaid({
			theme: 'forest',
			autoTheme: true
		}),
		starlight({
			title: 'ECE3849: Real-Time Embedded Systems',
			description: 'Labs and resources for Real-Time Embedded Systems course',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/your-username/ece3849-labs'
				}
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Head: './src/components/head.astro',
				Search: './src/components/DocSearch.astro',
			},
			sidebar: [
				{
					label: 'Laboratories',
					autogenerate: { directory: 'labs' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'FAQ',
					autogenerate: { directory: 'faq' },
				},
			],
			plugins: [
				starlightDocSearch({
					appId: '9QKX94D59B',
					apiKey: 'a4656b080a9180341a3c8e4f646a949b',
					indexName: '´DOCS',
					askAi: 'eMYOn7glOEWM',
					}),
				starlightGitHubAlerts(),
				starlightScrollToTop({
					position: 'right',
					tooltipText: 'Back to top',
					showTooltip: true,
					smoothScroll: true,
					threshold: 10,
				}),
				starlightGiscus({
					repo: 'Edwinrj/lab-wpi-ece3849',
					repoId: 'R_kgDOPKCuOw',
					category: 'Q&A',
					categoryId: 'DIC_kwDOPKCuO84Cswiv',
					reactions: true,
					lazy: true,
				}),
			],
		}),
	],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	image: {
		service: {
			entrypoint: "astro/assets/services/sharp", // 👈 usa Sharp directamente
		},
	},
});