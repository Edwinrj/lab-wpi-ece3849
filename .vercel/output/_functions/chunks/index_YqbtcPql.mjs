import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { c as $$CardGrid, d as $$LinkCard, e as $$Aside, f as $$Card, b as $$Badge } from './Code_C63UbqyS.mjs';
import { a as $$Picture } from './_astro_assets_C1eeMM60.mjs';
import 'clsx';

const tiBoard = new Proxy({"src":"/_astro/tiBoard.DQ3SJz33.jpg","width":1080,"height":507,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/assets/tiBoard.jpg";
							}
							
							return target[name];
						}
					});

const boosterPack = new Proxy({"src":"/_astro/booster.BLoo7vP-.jpg","width":337,"height":149,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/assets/booster.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/ccs.6bAXLh2g.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/assets/ccs.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/tiva.DodqMRdN.jpg","width":373,"height":384,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/assets/tiva.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/freertos.CifGgB3j.png","width":413,"height":157,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/assets/freertos.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "ECE 3849 Real-Time Embedded Systems",
  "description": "Laboratory Guide for Real-Time Embedded Systems using TI EK-TM4C1294XL and BoosterXL-EDUMKII",
  "template": "splash",
  "hero": {
    "tagline": "Learn real-time programming, FreeRTOS concepts, and embedded system design through hands-on labs using the TI EK-TM4C1294XL and BOOSTXL-EDUMKII",
    "actions": [{
      "text": "Lab Summary",
      "link": "/guides/labtimeline/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "Setup Guide",
      "link": "/guides/ccs/setupguide/",
      "icon": "setting",
      "variant": "secondary"
    }]
  },
  "giscus": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-access-labs",
    "text": "Quick Access Labs"
  }, {
    "depth": 2,
    "slug": "course-overview",
    "text": "Course Overview"
  }, {
    "depth": 2,
    "slug": "hardware--software-platform",
    "text": "Hardware & Software Platform"
  }, {
    "depth": 3,
    "slug": "development-hardware",
    "text": "Development Hardware"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"quick-access-labs\">Quick Access Labs</h2><a class=\"sl-anchor-link\" href=\"#quick-access-labs\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Quick Access Labs”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$LinkCard, {
        title: "Lab 0 – Tutorial & Setup",
        description: "Get started with Code Composer Studio, TivaWare, and your first embedded application.",
        href: "/labs/lab0/"
      }), createVNode($$LinkCard, {
        title: "Lab 1 – FreeRTOS Stopwatch",
        description: "Implement a real-time stopwatch using FreeRTOS tasks and queues.",
        href: "/labs/lab1/"
      })]
    }), "\n", createVNode($$Aside, {
      type: "tip",
      title: "What is an RTOS?",
      "set:html": "<p>Real-time operating systems let embedded programs run multiple tasks with predictable timing and low latency. In these labs you’ll use FreeRTOS on the TI EK-TM4C1294XL to manage tasks, timers, and inter-task communication while building real hardware projects with sensors, ADC, and PWM.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"course-overview\">Course Overview</h2><a class=\"sl-anchor-link\" href=\"#course-overview\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Course Overview”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Real-Time Systems",
        icon: "rocket",
        "set:html": "<p>Learn the basics of designing systems that respond to events within specific timing requirements using the ARM Cortex-M4F microcontroller. Understand how timing and reliability affect embedded applications.</p>"
      }), createVNode($$Card, {
        title: "FreeRTOS",
        icon: "settings",
        "set:html": "<p>Use FreeRTOS to create simple multitasking programs. Learn how tasks, timing, and synchronization work together in a real-time environment.</p>"
      }), createVNode($$Card, {
        title: "Hands-On Labs",
        icon: "puzzle",
        "set:html": "<p>Complete six labs that gradually introduce new concepts. Each lab builds on the previous one, giving you practical experience with real hardware and code.</p>"
      }), createVNode($$Card, {
        title: "C/C++ Programming",
        icon: "laptop",
        "set:html": "<p>Write and test embedded programs in C and C++. Practice using these languages to control hardware and implement real-time features.</p>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"hardware--software-platform\">Hardware &#x26; Software Platform</h2><a class=\"sl-anchor-link\" href=\"#hardware--software-platform\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Hardware &#x26; Software Platform”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"development-hardware\">Development Hardware</h3><a class=\"sl-anchor-link\" href=\"#development-hardware\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Development Hardware”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "TI EK-TM4C1294XL LaunchPad",
        icon: "laptop",
        children: [createVNode($$Picture, {
          src: tiBoard,
          alt: "TI EK-TM4C1294XL",
          width: 300,
          "data-zoom-off": true
        }), createVNode(Fragment$1, {
          "set:html": "<p><strong>ARM Cortex-M4F Microcontroller</strong></p><ul>\n<li>120MHz with hardware floating-point unit</li>\n<li>1MB Flash memory, 256KB RAM</li>\n<li>Integrated Ethernet, USB, CAN interfaces</li>\n<li>Professional debugging capabilities</li>\n</ul>"
        }), createVNode($$Badge, {
          text: "ARM Cortex-M4F",
          variant: "success"
        })]
      }), createVNode($$Card, {
        title: "BOOSTXL-EDUMKII BoosterPack",
        icon: "puzzle",
        children: [createVNode($$Picture, {
          src: boosterPack,
          alt: "Educational BoosterPack",
          width: 300,
          "data-zoom-off": true
        }), createVNode(Fragment$1, {
          "set:html": "<p><strong>Complete I/O Interface Module</strong></p><ul>\n<li>128×128 color LCD display</li>\n<li>Multiple sensors: light, temperature, accelerometer</li>\n<li>Audio input/output with microphone and speaker</li>\n<li>Joystick and button interfaces</li>\n</ul>"
        }), createVNode($$Badge, {
          text: "Educational Platform",
          variant: "note"
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/index.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
