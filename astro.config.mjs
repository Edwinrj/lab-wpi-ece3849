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
			},
			sidebar: [
				{
					label: 'Course Information',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Schedule', slug: 'schedule' },
						{ label: 'Evaluation', slug: 'evaluation' },
					],
				},
				{
					label: 'Laboratories',
					autogenerate: { directory: 'labs' },
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
});