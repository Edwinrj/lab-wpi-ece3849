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
			description: 'Laboratory documentation and resources for Real-Time Embedded Systems course using TI microcontrollers.',

			social: [
				{
					icon: 'github',
					label: 'Course Repository',
					href: 'https://github.com/your-university/ece3849-labs'
				},
				{
					icon: 'email',
					label: 'Instructor Email',
					href: 'mailto:instructor@university.edu'
				}
			],

			customCss: ['./src/styles/custom.css'],

			components: {
				Head: './src/components/head.astro',
			},

			// Configuración de la página principal
			editLink: {
				baseUrl: 'https://github.com/your-university/ece3849-labs/edit/main/',
			},

			lastUpdated: true,

			// Configuración del sidebar
			sidebar: [
				// Página de inicio
				{
					label: '🏠 Inicio',
					link: '/',
				},

				// Laboratorios - sección principal
				{
					label: '🔬 Laboratorios',
					autogenerate: {
						directory: 'labs',
						collapsed: false,
					},
				},

				// Guías
				{
					label: '📚 Guías',
					autogenerate: {
						directory: 'guides',
						collapsed: false,
					},
				},

				// Referencia
				{
					label: '📖 Referencia',
					autogenerate: {
						directory: 'reference',
						collapsed: false,
					},
				},
			],

			// Configuración de tabla de contenidos
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},

			// Configuración de paginación
			pagination: true,

			// Configuración de localización (si necesitas soporte multiidioma)
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
					dir: 'ltr',
				},
			},

			// Configuración de metadatos adicionales
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'embedded systems, real-time, microcontrollers, TI, TM4C1294, RTOS, ECE3849',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'ECE3849: Real-Time Embedded Systems',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'Laboratory documentation and resources for Real-Time Embedded Systems course.',
					},
				},
			],

			// Configuración para el CMS
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
				defaultProps: {
					wrap: true,
				},
			},
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