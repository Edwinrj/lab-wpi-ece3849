// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import decapCmsOauth from "astro-decap-cms-oauth";
import mermaid from 'astro-mermaid';
import vercel from '@astrojs/vercel';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightGiscus from 'starlight-giscus';
import starlightGitHubAlerts from 'starlight-github-alerts'
import starlightImageZoom from 'starlight-image-zoom'

import starlightSiteGraph from 'starlight-site-graph'

// https://astro.build/config
export default defineConfig({
    site: 'https://ece3849.wpiembedded.com',
    // Ensure paths match sitemap keys with trailing slashes
    trailingSlash: 'always',
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
				starlightImageZoom(),
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
					starlightSiteGraph({
						sitemapConfig: {
							contentRoot: "./src/content/docs",
						},
						graphConfig: {
							depth: 2,
							repelForce: 350,
							linkDistance: 75,
							colliderPadding: 50
						},
						backlinks: true,
						backlinksConfig: {
							visibilityRules: ["**/*"],
						}
					}),
			],
		}),
	],
	vite: {
		define: {
			'process.env': {},
		},
	},
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
