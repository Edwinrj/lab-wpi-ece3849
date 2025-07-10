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
	  customCss: ['./src/styles/custom.css'],
	  components: {
		Head: './src/components/head.astro',
	  },
	  sidebar: [
		{
		  label: 'Guides',
		  items: [
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