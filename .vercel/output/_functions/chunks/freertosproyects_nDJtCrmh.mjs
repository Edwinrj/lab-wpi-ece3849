import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import './_astro_assets_C1eeMM60.mjs';
import { c as $$CardGrid, d as $$LinkCard, j as $$FileTree, i as $$Steps, e as $$Aside } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "FreeRTOS Project Setup",
  "description": "Step-by-step checklist to prepare a CCS project to use FreeRTOS on the EK-TM4C1294XL.",
  "tags": ["freertos"],
  "links": ["/guides/freertos/", "/guides/labtimeline/"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "library-structure",
    "text": "Library Structure"
  }, {
    "depth": 2,
    "slug": "create-a-ccs-project-for-ek-tm4c1294xl",
    "text": "Create a CCS Project for EK-TM4C1294XL"
  }, {
    "depth": 2,
    "slug": "add-freertos-source-files",
    "text": "Add FreeRTOS Source Files"
  }, {
    "depth": 2,
    "slug": "first-test-project",
    "text": "First Test Project"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    button: "button",
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    "starlight-image-zoom-zoomable": "starlight-image-zoom-zoomable",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["starlight-image-zoom-zoomable"], {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"prerequisites\">Prerequisites</h2><a class=\"sl-anchor-link\" href=\"#prerequisites\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prerequisites”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Download FreeRTOS",
        description: "Download the FreeRTOS kernel source code.",
        href: "/assets/libraries/FreeRTOS.zip",
        icon: "right-arrow"
      }), createVNode($$LinkCard, {
        title: "FreeRTOS Guide",
        description: "Learn the basics of FreeRTOS in our guide.",
        href: "/guides/freertos/",
        icon: "cpu"
      }), createVNode($$LinkCard, {
        title: "Back to Lab Summary",
        description: "Return to the list of all labs.",
        href: "/guides/labtimeline/",
        icon: "right-arrow"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"overview\">Overview</h2><a class=\"sl-anchor-link\" href=\"#overview\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Overview”</span></a></div>\n<p>This guide provides a step-by-step checklist to set up a Code Composer Studio (CCS) project to use the FreeRTOS real-time operating system on the TI EK-TM4C1294XL LaunchPad. You will create a minimal CCS project, add the FreeRTOS kernel source files, configure the project settings, and verify that FreeRTOS is running correctly with a simple multitasking example.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"library-structure\">Library Structure</h2><a class=\"sl-anchor-link\" href=\"#library-structure\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Library Structure”</span></a></div>\n<p>The folder structure of the FreeRTOS kernel source (after unzipping):</p>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>FreeRTOS.h        # FreeRTOS kernel header</li>\n<li>FreeRTOSConfig.h  # User configuration for your project</li>\n<li>startup_ccs.c     # TivaWare startup file (vector table)</li>\n<li>FreeRTOS          # Kernel source\n<ul>\n<li>include\n<ul>\n<li>FreeRTOS.h</li>\n<li>task.h</li>\n<li>queue.h</li>\n<li>semphr.h</li>\n<li>… (other headers)</li>\n</ul>\n</li>\n<li>portable\n<ul>\n<li>CCS\n<ul>\n<li>ARM_CM4F\n<ul>\n<li>port.c</li>\n<li>portasm.asm</li>\n</ul>\n</li>\n<li>MemMang\n<ul>\n<li>heap_4.c</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>tasks.c</li>\n<li>queue.c</li>\n<li>list.c</li>\n<li>… (other source files)</li>\n</ul>\n</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"create-a-ccs-project-for-ek-tm4c1294xl\">Create a CCS Project for EK-TM4C1294XL</h2><a class=\"sl-anchor-link\" href=\"#create-a-ccs-project-for-ek-tm4c1294xl\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Create a CCS Project for EK-TM4C1294XL”</span></a></div>\n<p>Follow these steps to set up a minimal project in Code Composer Studio (CCS):</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: [createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: "Open CCS and select a folder for a new workspace (we recommend a dedicated workspace)."
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/new_workspace.png",
              alt: "CCS workspace selection",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: CCS workspace selection",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(Fragment$1, {
          "set:html": "<li><p>Create a new CCS project via <code>File > New > CCS Project</code>.</p></li><li><p>Configure project settings:</p><ul>\n<li>Target: <code>Tiva C Series</code> <code>TM4C1294NCPDT</code></li>\n<li>Connection: <code>Stellaris In-Circuit Debug Interface</code></li>\n<li>Project name: e.g., <code>Lab2_FreeRTOS</code></li>\n<li>Compiler version: <code>TI v20.2.7.LTS</code> or later</li>\n<li>Project templates and examples: select <code>Empty Project</code></li>\n</ul></li>"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"add-freertos-source-files\">Add FreeRTOS Source Files</h2><a class=\"sl-anchor-link\" href=\"#add-freertos-source-files\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Add FreeRTOS Source Files”</span></a></div>\n<p>To add FreeRTOS to your project, follow these steps:</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: [createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Extract the ZIP and place the FreeRTOS kernel folder inside your workspace (e.g., ", createVNode(_components.code, {
              children: "workspace/FreeRTOS-Kernel"
            }), ")."]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/workspace_structure.png",
              alt: "CCS project folder structure",
              width: 200
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: CCS project folder structure",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Copy the following files into your project folder (e.g., into ", createVNode(_components.code, {
              children: "Lab2_FreeRTOS"
            }), "):"]
          }), createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["\n", createVNode(_components.code, {
                children: "FreeRTOS.h"
              }), "\n"]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                children: "FreeRTOSConfig.h"
              }), " (your project-specific configuration)"]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                children: "startup_ccs.c"
              }), " (startup file with vector table for FreeRTOS)"]
            }), "\n"]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/freertos_structure.png",
              alt: "CCS project files",
              width: 150
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: CCS project files",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          "set:html": "<p>Remove the file <code>tm4c1294ncpdt_startup_ccs.c</code> that CCS created by default. Use the provided <code>startup_ccs.c</code> instead.</p>"
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: "Link the FreeRTOS kernel sources into your project (do not copy): drag-and-drop the FreeRTOS folder from your file explorer into CCS Project Explorer. In the popup:"
          }), createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["Choose ", createVNode(_components.strong, {
                children: "Link to files"
              }), "."]
            }), "\n", createVNode(_components.li, {
              children: ["Recreate folder structure with ", createVNode(_components.strong, {
                children: "virtual folders"
              }), " relative to ", createVNode(_components.code, {
                children: "PROJECT_LOC"
              }), "."]
            }), "\n"]
          }), createVNode(_components.br, {}), createVNode(_components.strong, {
            children: "Do not copy these files into the project."
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/link_freertos.png",
              alt: "Adding FreeRTOS files to CCS project",
              width: 300
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Adding FreeRTOS files to CCS project",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: "When prompted, allow CCS to adjust include paths automatically. Check the option “Do this for all header files…”."
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/compiler_path.png",
              alt: "Adjusting include paths in CCS",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Adjusting include paths in CCS",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Open ", createVNode(_components.code, {
              children: "Project > Properties > ARM Linker > Basic Options"
            }), " and set ", createVNode(_components.em, {
              children: "C system stack size"
            }), " to ", createVNode(_components.code, {
              children: "2048"
            }), "."]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/stack.png",
              alt: "Setting stack size in CCS",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Setting stack size in CCS",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Verify include paths under ", createVNode(_components.code, {
              children: "Project > Properties > Build > Compiler > Include Options"
            }), " to confirm the FreeRTOS include paths were added correctly."]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/freertos_includes.png",
              alt: "Include paths in CCS",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Include paths in CCS",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Include TivaWare driverlib and utils in ", createVNode(_components.code, {
              children: "Project > Properties > Build > Compiler > Include Options"
            }), "."]
          }), createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: "C:\\ti\\TivaWare_C_Series-2.2.0.295\\utils"
            }), "\n", createVNode(_components.li, {
              children: "C:\\ti\\TivaWare_C_Series-2.2.0.295\\driverlib"
            }), "\n", createVNode(_components.li, {
              children: "C:\\ti\\TivaWare_C_Series-2.2.0.295"
            }), "\n"]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/tivaware.png",
              alt: "Include paths in CCS",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Include paths in CCS",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        }), createVNode(_components.li, {
          children: [createVNode(_components.p, {
            children: ["Add the pre-compiled tivaware library to ", createVNode(_components.code, {
              children: "Project > Properties > Build > Linker > File Search Path"
            }), ":"]
          }), createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: "C:\\ti\\TivaWare_C_Series-2.2.0.295\\grlib\\ccs\\Debug\\grlib.lib"
            }), "\n", createVNode(_components.li, {
              children: "C:\\ti\\TivaWare_C_Series-2.2.0.295\\driverlib\\ccs\\Debug\\driverlib.lib"
            }), "\n"]
          }), createVNode(_component0, {
            children: [createVNode("img", {
              src: "/assets/images/tivaware_libs.png",
              alt: "Linker file search path in CCS",
              width: 400
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Linker file search path in CCS",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          })]
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"first-test-project\">First Test Project</h2><a class=\"sl-anchor-link\" href=\"#first-test-project\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “First Test Project”</span></a></div>\n<p>Create a simple <code>main.cpp</code> (Right-click the project > New > Source File) and add the following code:</p>\n"
    }), createVNode($$Aside, {
      type: "note",
      "set:html": "<p>FreeRTOS is a C library, so we need to wrap the includes in <code>extern “C”</code> when using C++.</p>"
    }), "\n", createVNode($$LinkCard, {
      title: "C++ Name Mangling",
      description: "Learn about extern C and name mangling when mixing C and C++.",
      href: "/guides/programmingstyle/",
      icon: "code"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"cpp\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">&#x3C;</span><span style=\"--0:#ECC48D;--1:#984E4D\">stdint.h</span><span style=\"--0:#D9F5DD;--1:#111111\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">&#x3C;</span><span style=\"--0:#ECC48D;--1:#984E4D\">stdbool.h</span><span style=\"--0:#D9F5DD;--1:#111111\">></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">extern</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">C</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">driverlib/fpu.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">driverlib/interrupt.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">driverlib/sysctl.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">driverlib/gpio.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">driverlib/pin_map.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inc/hw_memmap.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">FreeRTOS.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">task.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// LED1: PN0 (D1 Green) - LED2: PN1 (D2 Blue)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#define</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">LED1_PORT</span><span style=\"--0:#D6DEEB;--1:#403F53\"> GPIO_PORTN_BASE</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#define</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">LED1_PIN</span><span style=\"--0:#D6DEEB;--1:#403F53\">  GPIO_PIN_0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#define</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">LED2_PORT</span><span style=\"--0:#D6DEEB;--1:#403F53\"> GPIO_PORTN_BASE</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#define</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">LED2_PIN</span><span style=\"--0:#D6DEEB;--1:#403F53\">  GPIO_PIN_1</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">LED1_Task</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">*</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">pvParameters</span><span style=\"--0:#D6DEEB\">) {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GPIOPinWrite</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED1_PORT, LED1_PIN, LED1_PIN);</span><span style=\"--0:#919F9F;--1:#5D6376\">  // On</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">vTaskDelay</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">pdMS_TO_TICKS</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2000</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GPIOPinWrite</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED1_PORT, LED1_PIN, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#919F9F;--1:#5D6376\">         // Off</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">vTaskDelay</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">pdMS_TO_TICKS</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2000</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">LED2_Task</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">*</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">pvParameters</span><span style=\"--0:#D6DEEB\">) {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GPIOPinWrite</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED2_PORT, LED2_PIN, LED2_PIN);</span><span style=\"--0:#919F9F;--1:#5D6376\">  // On</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">vTaskDelay</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">pdMS_TO_TICKS</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">200</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GPIOPinWrite</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED2_PORT, LED2_PIN, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#919F9F;--1:#5D6376\">         // Off</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3B61B0\">vTaskDelay</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">pdMS_TO_TICKS</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">200</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">main</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5F636F\">    </span></span><span style=\"--0:#919F9F;--1:#5F636F\">/* Disable interrupts during low-level setup */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">IntMasterDisable</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">FPUEnable</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">FPULazyStackingEnable</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Configure system clock to 120 MHz</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">uint32_t</span><span style=\"--0:#D6DEEB;--1:#403F53\"> sysClock </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">SysCtlClockFreqSet</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">SYSCTL_XTAL_25MHZ </span><span style=\"--0:#C792EA;--1:#8844AE\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> SYSCTL_OSC_MAIN </span><span style=\"--0:#C792EA;--1:#8844AE\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> SYSCTL_USE_PLL </span><span style=\"--0:#C792EA;--1:#8844AE\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> SYSCTL_CFG_VCO_480,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#F78C6C;--1:#AA0982\">120000000</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Enable GPIO peripherals</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">SysCtlPeripheralEnable</span><span style=\"--0:#D6DEEB;--1:#403F53\">(SYSCTL_PERIPH_GPION);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#C792EA;--1:#8844AE\">!</span><span style=\"--0:#82AAFF;--1:#3B61B0\">SysCtlPeripheralReady</span><span style=\"--0:#D6DEEB;--1:#403F53\">(SYSCTL_PERIPH_GPION));</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Configure pins as outputs</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GPIOPinTypeGPIOOutput</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED1_PORT, LED1_PIN </span><span style=\"--0:#C792EA;--1:#8844AE\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> LED2_PIN);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5F636F\">    </span></span><span style=\"--0:#919F9F;--1:#5F636F\">/* Now enable interrupts globally (FreeRTOS will manage nesting later) */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">IntMasterEnable</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Create tasks</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">xTaskCreate</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED1_Task, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">LED1</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">128</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">NULL</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">NULL</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">xTaskCreate</span><span style=\"--0:#D6DEEB;--1:#403F53\">(LED2_Task, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">LED2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">128</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">NULL</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">NULL</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Start scheduler</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">vTaskStartScheduler</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5D6376\">    </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// Should never reach here</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"#include <stdint.h>#include <stdbool.h>extern &#x22;C&#x22; {#include &#x22;driverlib/fpu.h&#x22;#include &#x22;driverlib/interrupt.h&#x22;#include &#x22;driverlib/sysctl.h&#x22;#include &#x22;driverlib/gpio.h&#x22;#include &#x22;driverlib/pin_map.h&#x22;#include &#x22;inc/hw_memmap.h&#x22;#include &#x22;FreeRTOS.h&#x22;#include &#x22;task.h&#x22;}// LED1: PN0 (D1 Green) - LED2: PN1 (D2 Blue)#define LED1_PORT GPIO_PORTN_BASE#define LED1_PIN  GPIO_PIN_0#define LED2_PORT GPIO_PORTN_BASE#define LED2_PIN  GPIO_PIN_1void LED1_Task(void *pvParameters) {    while (1) {        GPIOPinWrite(LED1_PORT, LED1_PIN, LED1_PIN);  // On        vTaskDelay(pdMS_TO_TICKS(2000));        GPIOPinWrite(LED1_PORT, LED1_PIN, 0);         // Off        vTaskDelay(pdMS_TO_TICKS(2000));    }}void LED2_Task(void *pvParameters) {    while (1) {        GPIOPinWrite(LED2_PORT, LED2_PIN, LED2_PIN);  // On        vTaskDelay(pdMS_TO_TICKS(200));        GPIOPinWrite(LED2_PORT, LED2_PIN, 0);         // Off        vTaskDelay(pdMS_TO_TICKS(200));    }}int main(void) {    /* Disable interrupts during low-level setup */    IntMasterDisable();    FPUEnable();    FPULazyStackingEnable();    // Configure system clock to 120 MHz    uint32_t sysClock = SysCtlClockFreqSet(        SYSCTL_XTAL_25MHZ | SYSCTL_OSC_MAIN | SYSCTL_USE_PLL | SYSCTL_CFG_VCO_480,        120000000    );    // Enable GPIO peripherals    SysCtlPeripheralEnable(SYSCTL_PERIPH_GPION);    while (!SysCtlPeripheralReady(SYSCTL_PERIPH_GPION));    // Configure pins as outputs    GPIOPinTypeGPIOOutput(LED1_PORT, LED1_PIN | LED2_PIN);    /* Now enable interrupts globally (FreeRTOS will manage nesting later) */    IntMasterEnable();    // Create tasks    xTaskCreate(LED1_Task, &#x22;LED1&#x22;, 128, NULL, 1, NULL);    xTaskCreate(LED2_Task, &#x22;LED2&#x22;, 128, NULL, 1, NULL);    // Start scheduler    vTaskStartScheduler();    // Should never reach here    while (1);}\"><div></div></button></div></figure></div>\n<p>Compile and flash the project to your EK-TM4C1294XL board. You should see the green LED (D1) blinking every 2 seconds and the blue LED (D2) blinking every 200 ms, demonstrating that FreeRTOS is running multiple tasks concurrently.</p>\n"
    }), createVNode($$Aside, {
      type: "note",
      "set:html": "<p>If you see unresolved symbols (e.g., <code>vPortSVCHandler</code>), verify you are using the provided <code>startup_ccs.c</code> and that the ARM_CM4F port sources are linked into the project.</p>"
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

const url = "src/content/docs/guides/FreeRTOS/freertosproyects.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/FreeRTOS/freertosproyects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/FreeRTOS/freertosproyects.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
