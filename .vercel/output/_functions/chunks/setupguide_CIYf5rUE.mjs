import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { e as $$Aside, c as $$CardGrid, d as $$LinkCard, b as $$Badge, i as $$Steps, a as $$LinkButton, j as $$FileTree } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lab Setup Quick Start Guide",
  "description": "Start here! Links to all setup steps and guides for your lab environment.",
  "links": ["/guides/ccs/installccs/", "/guides/ccs/enviromentsetup/", "/guides/ccs/openworkspace/", "/guides/labkit/", "/guides/ccs/external_libraries/", "/guides/programmingstyle/"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "setup-steps-overview",
    "text": "Setup Steps Overview"
  }, {
    "depth": 2,
    "slug": "-example-workspace-structure",
    "text": "📁 Example Workspace Structure"
  }];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "note",
      title: "Start Here!",
      "set:html": "<p>This guide provides direct links to all the essential setup steps for your lab environment.<br>\nFollow each link in order to ensure your development environment is ready.</p>"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        href: "/guides/ccs/installccs/",
        title: "Install CCS & TivaWare",
        icon: "download",
        children: [createVNode(_components.p, {
          children: "Step-by-step instructions for installing Code Composer Studio and TivaWare on Windows, macOS, and Linux."
        }), createVNode($$Badge, {
          text: "Required",
          variant: "success"
        })]
      }), createVNode($$LinkCard, {
        href: "/guides/ccs/enviromentsetup/",
        title: "Configure CCS Environment",
        icon: "settings",
        children: [createVNode(_components.p, {
          children: "How to set up compiler paths and environment variables in CCS."
        }), createVNode($$Badge, {
          text: "Lab Computers",
          variant: "tip"
        })]
      }), createVNode($$LinkCard, {
        href: "/guides/ccs/openworkspace/",
        title: "Workspace Setup",
        icon: "folder",
        children: [createVNode(_components.p, {
          children: "How to download, extract, and open your lab workspace in CCS."
        }), createVNode($$Badge, {
          text: "First Use",
          variant: "note"
        })]
      }), createVNode($$LinkCard, {
        href: "/guides/labkit/",
        title: "Lab Kit Overview",
        icon: "laptop",
        children: [createVNode(_components.p, {
          children: "Details about the TI EK-TM4C1294XL LaunchPad and BOOSTXL-EDUMKII BoosterPack."
        }), createVNode($$Badge, {
          text: "Hardware",
          variant: "default"
        })]
      }), createVNode($$LinkCard, {
        href: "/guides/ccs/external_libraries/",
        title: "External Libraries",
        icon: "library",
        children: [createVNode(_components.p, {
          children: "How to use and organize the provided libraries for peripherals and timing."
        }), createVNode($$Badge, {
          text: "Recommended",
          variant: "caution"
        })]
      }), createVNode($$LinkCard, {
        href: "/guides/programmingstyle/",
        title: "Programming Style",
        icon: "code",
        children: [createVNode(_components.p, {
          children: "Guidelines for mixing C and C++ in your lab projects."
        }), createVNode($$Badge, {
          text: "Best Practices",
          variant: "success"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"setup-steps-overview\">Setup Steps Overview</h2><a class=\"sl-anchor-link\" href=\"#setup-steps-overview\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Setup Steps Overview”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: [createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/ccs/installccs/",
            target: "_blank",
            "set:html": "Install CCS &#x26; TivaWare"
          })
        }), createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/ccs/enviromentsetup/",
            target: "_blank",
            "set:html": "Configure CCS Environment"
          })
        }), createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/ccs/openworkspace/",
            target: "_blank",
            "set:html": "Workspace Setup"
          })
        }), createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/labkit/",
            target: "_blank",
            "set:html": "Lab Kit Overview"
          })
        }), createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/ccs/external_libraries/",
            target: "_blank",
            "set:html": "External Libraries"
          })
        }), createVNode(_components.li, {
          children: createVNode($$LinkButton, {
            href: "/guides/programmingstyle/",
            target: "_blank",
            "set:html": "Programming Style"
          })
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"-example-workspace-structure\">📁 Example Workspace Structure</h2><a class=\"sl-anchor-link\" href=\"#-example-workspace-structure\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “📁 Example Workspace Structure”</span></a></div>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>Lab_x\n<ul>\n<li>Lab_x_workspace\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>libraries\n<ul>\n<li>…</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "Need Help?",
      "set:html": "<p>If you get stuck, check each guide above for troubleshooting tips and screenshots.</p>"
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

const url = "src/content/docs/guides/ccs/setupguide.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/setupguide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/setupguide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
