import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { e as $$Aside, c as $$CardGrid, f as $$Card, b as $$Badge, a as $$LinkButton } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lab Timeline & Summaries",
  "description": "Timeline, due dates, and summaries for all ECE3849 labs.",
  "links": ["/labs/lab0/", "/labs/lab1/"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "ece3849-lab-timeline--summaries",
    "text": "ECE3849 Lab Timeline & Summaries"
  }, {
    "depth": 2,
    "slug": "lab-schedule--summaries",
    "text": "Lab Schedule & Summaries"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h1\"><h1 id=\"ece3849-lab-timeline--summaries\">ECE3849 Lab Timeline &#x26; Summaries</h1><a class=\"sl-anchor-link\" href=\"#ece3849-lab-timeline--summaries\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ECE3849 Lab Timeline &#x26; Summaries”</span></a></div>\n"
    }), createVNode($$Aside, {
      type: "note",
      title: "Overview",
      "set:html": "<p>Each lab in <strong>ECE3849: Real-Time Embedded Systems</strong> builds upon the previous one,\r\nculminating in a complete FreeRTOS-based multitasking system that integrates sensing,\r\nsignal processing, and interactive gameplay.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"lab-schedule--summaries\">Lab Schedule &#x26; Summaries</h2><a class=\"sl-anchor-link\" href=\"#lab-schedule--summaries\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Lab Schedule &#x26; Summaries”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Lab 0 – Stopwatch & Graphical Menu",
        icon: "seti:clock",
        children: [createVNode($$Badge, {
          text: "Due Mar 26",
          variant: "success",
          size: "medium"
        }), createVNode(Fragment$1, {
          "set:html": "<p><strong>Objective:</strong> Familiarize with the TM4C1294XL LaunchPad, Code Composer Studio,\r\nand basic peripheral programming.</p><p><strong>Highlights:</strong> System clock setup, LCD initialization, timer ISR, button debouncing,\r\nand menu navigation.</p>"
        }), createVNode($$LinkButton, {
          href: "/labs/lab0/",
          target: "_blank",
          "set:html": "View Lab 0 →"
        })]
      }), createVNode($$Card, {
        title: "Lab 1 – FreeRTOS Stopwatch",
        icon: "seti:audio",
        "set:html": "<p><strong>Objective:</strong> Implement a real-time stopwatch using FreeRTOS tasks and queues.</p><p><strong>Highlights:</strong> Task creation, queue management, and timer synchronization.</p>"
      }), createVNode($$Card, {
        title: "Lab 3 – Snake Game Part 1 ",
        icon: "document",
        "set:html": "<p><strong>Objective:</strong> Implement the core architecture for the Snake game: create FreeRTOS\r\ntasks for game logic, input handling, and display updates; protect shared LCD access with a mutex;\r\nuse message queues for inter-task communication; and apply priority tuning plus runtime profiling\r\nto observe and optimize real-time behavior.</p><p><strong>Highlights:</strong> Task creation, mutexes, message queues, priority tuning,\r\nand runtime profiling.</p>"
      }), createVNode($$Card, {
        title: "Lab 4 – Snake Game Part 2",
        icon: "rocket",
        "set:html": "<small>Due to Thanksgiving break, there is no rush on Nov 25.</small><p><strong>Objective:</strong> Enhance your Snake game with advanced FreeRTOS timing, synchronization, and performance analysis: precise periodic tasks, buffered input, real-time metrics, and robustness.</p><p><strong>Highlights:</strong> Hardware timer jitter measurement; vTaskDelay vs vTaskDelayUntil comparison; counting semaphore joystick buffer; 10ms chronometer (software timer); wall collisions &#x26; game-over animation; stack usage display, optimization &#x26; overflow detection.</p>"
      }), createVNode($$Card, {
        title: "Lab 5 – Final System Integration",
        icon: "laptop",
        "set:html": "<p><strong>Objective:</strong> Integrate all previous modules into a single multitasking system.</p><p><strong>Highlights:</strong> FreeRTOS task coordination, inter-task communication, performance monitor,\r\nand adaptive Snake gameplay.</p>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "Pro Tip",
      "set:html": "<p>Each lab builds directly on the previous one — by the end of the term you’ll have a fully integrated\r\n<strong>Embedded Arcade</strong> combining stopwatch timing, sensor acquisition, spectrum analysis,\r\nand a FreeRTOS-based Snake game.</p>"
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

const url = "src/content/docs/guides/labTimeline.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/labTimeline.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/labTimeline.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
