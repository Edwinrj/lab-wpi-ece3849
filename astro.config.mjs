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
				Banner: './src/components/banner.astro',
				Footer: './src/components/footer.astro',
			},

			// Configuración de la página principal
			editLink: {
				baseUrl: 'https://github.com/your-university/ece3849-labs/edit/main/',
			},

			lastUpdated: true,

			// Logo del curso (opcional)
			logo: {
				src: './src/assets/logo.svg',
				alt: 'ECE3849 Logo',
			},

			// Configuración del sidebar
			sidebar: [
				// Página de inicio
				{
					label: '🏠 Inicio',
					slug: 'index',
				},

				// Información del curso
				{
					label: '📚 Información del Curso',
					items: [
						{ label: 'Cronograma', slug: 'schedule' },
						{ label: 'Objetivos de Aprendizaje', slug: 'learning-objectives' },
						{ label: 'Evaluación y Calificaciones', slug: 'evaluation' },
						{ label: 'Políticas del Curso', slug: 'policies' },
					],
				},

				// Laboratorios - sección principal
				{
					label: '🔬 Laboratorios',
					items: [
						{
							label: 'Lab 0: Tutorial',
							badge: { text: 'Tutorial', variant: 'tip' },
							items: [
								{ label: 'Stopwatch & Menu', slug: 'labs/lab-0-stopwatch-menu' },
								{ label: 'Recursos Lab 0', slug: 'labs/lab-0-resources' },
							],
						},
						{
							label: 'Lab 1: Sensor Hub',
							badge: { text: 'Sensores', variant: 'note' },
							items: [
								{ label: 'Light, Compass, Temperature', slug: 'labs/lab-1-sensor-hub' },
								{ label: 'Sound Generation', slug: 'labs/lab-1-sound' },
								{ label: 'Recursos Lab 1', slug: 'labs/lab-1-resources' },
							],
						},
						{
							label: 'Lab 2: Spectrum Analyzer',
							badge: { text: 'FFT', variant: 'caution' },
							items: [
								{ label: 'Real-time Audio Analysis', slug: 'labs/lab-2-spectrum-analyzer' },
								{ label: 'ADC & FFT Processing', slug: 'labs/lab-2-fft' },
								{ label: 'Recursos Lab 2', slug: 'labs/lab-2-resources' },
							],
						},
						{
							label: 'Lab 3: RTOS Migration',
							badge: { text: 'RTOS', variant: 'success' },
							items: [
								{ label: 'Multitasking Implementation', slug: 'labs/lab-3-rtos-migration' },
								{ label: 'Task Synchronization', slug: 'labs/lab-3-synchronization' },
								{ label: 'Recursos Lab 3', slug: 'labs/lab-3-resources' },
							],
						},
						{
							label: 'Lab 4: Logic Analyzer',
							badge: { text: 'Digital', variant: 'note' },
							items: [
								{ label: 'Two-Channel Analyzer', slug: 'labs/lab-4-logic-analyzer' },
								{ label: 'Signal Visualization', slug: 'labs/lab-4-visualization' },
								{ label: 'Recursos Lab 4', slug: 'labs/lab-4-resources' },
							],
						},
						{
							label: 'Lab 5: System Integration',
							badge: { text: 'Final', variant: 'danger' },
							items: [
								{ label: 'Complete System', slug: 'labs/lab-5-integration' },
								{ label: 'Advanced Diagnostics', slug: 'labs/lab-5-diagnostics' },
								{ label: 'Custom Module', slug: 'labs/lab-5-custom' },
								{ label: 'Recursos Lab 5', slug: 'labs/lab-5-resources' },
							],
						},
					],
				},

				// Hardware y herramientas
				{
					label: '🔧 Hardware & Herramientas',
					items: [
						{
							label: 'Kit de Laboratorio',
							items: [
								{ label: 'TI EK-TM4C1294XL', slug: 'hardware/tm4c1294xl' },
								{ label: 'BOOSTXL-EDUMKII', slug: 'hardware/boostxl-edumkii' },
								{ label: 'Pinout y Conexiones', slug: 'hardware/pinout' },
							],
						},
						{
							label: 'Software',
							items: [
								{ label: 'Code Composer Studio', slug: 'software/ccs' },
								{ label: 'TI-RTOS Setup', slug: 'software/ti-rtos' },
								{ label: 'TivaWare Libraries', slug: 'software/tivaware' },
								{ label: 'Debugging Tools', slug: 'software/debugging' },
							],
						},
					],
				},

				// Recursos y documentación
				{
					label: '📖 Recursos',
					autogenerate: {
						directory: 'resources',
						collapsed: false,
					},
				},

				// FAQ
				{
					label: '❓ FAQ',
					items: [
						{
							label: 'Preguntas Frecuentes',
							autogenerate: {
								directory: 'faq',
								collapsed: true,
							},
						},
					],
				},

				// Ejemplos y tutoriales adicionales
				{
					label: '💡 Ejemplos y Tutoriales',
					items: [
						{ label: 'Código de Ejemplo', slug: 'examples/code-samples' },
						{ label: 'Video Tutoriales', slug: 'examples/video-tutorials' },
						{ label: 'Troubleshooting', slug: 'examples/troubleshooting' },
						{ label: 'Best Practices', slug: 'examples/best-practices' },
					],
				},

				// Enlaces externos útiles
				{
					label: '🔗 Enlaces Útiles',
					items: [
						{
							label: 'TI Resource Explorer',
							link: 'https://www.ti.com/tool/TIREX',
							attrs: { target: '_blank', rel: 'noopener' }
						},
						{
							label: 'TM4C1294 Datasheet',
							link: 'https://www.ti.com/lit/ds/symlink/tm4c1294ncpdt.pdf',
							attrs: { target: '_blank', rel: 'noopener' }
						},
						{
							label: 'TivaWare Documentation',
							link: 'https://www.ti.com/tool/SW-TM4C',
							attrs: { target: '_blank', rel: 'noopener' }
						},
						{
							label: 'Course Canvas Page',
							link: 'https://canvas.university.edu/courses/ece3849',
							attrs: { target: '_blank', rel: 'noopener' }
						},
					],
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