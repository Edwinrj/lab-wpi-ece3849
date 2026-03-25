import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { e as $$Aside, g as $$Tabs, h as $$TabItem, j as $$FileTree } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Install Code Composer Studio (CCS) and TivaWare",
  "description": "Step-by-step installation tutorial for CCS and TivaWare on Windows, macOS, and Linux",
  "sitemap": {
    "include": true
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "-development-tools",
    "text": "🧰 Development Tools"
  }, {
    "depth": 2,
    "slug": "-installation-instructions",
    "text": "💻 Installation Instructions"
  }, {
    "depth": 3,
    "slug": "-install-code-composer-studio-ccs-1281",
    "text": "🧰 Install Code Composer Studio (CCS 12.8.1)"
  }, {
    "depth": 3,
    "slug": "-install-tivaware-drivers-sw-tm4c-220295",
    "text": "🧩 Install TivaWare Drivers (SW-TM4C-2.2.0.295)"
  }, {
    "depth": 3,
    "slug": "-install-code-composer-studio-ccs-1281-1",
    "text": "🧰 Install Code Composer Studio (CCS 12.8.1)"
  }, {
    "depth": 3,
    "slug": "-install-tivaware-drivers",
    "text": "🧩 Install TivaWare Drivers"
  }, {
    "depth": 3,
    "slug": "-install-code-composer-studio-ccs-1281-2",
    "text": "🧰 Install Code Composer Studio (CCS 12.8.1)"
  }, {
    "depth": 3,
    "slug": "-install-tivaware-drivers-1",
    "text": "🧩 Install TivaWare Drivers"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    div: "div",
    h3: "h3",
    hr: "hr",
    ol: "ol",
    p: "p",
    path: "path",
    span: "span",
    "starlight-image-zoom-zoomable": "starlight-image-zoom-zoomable",
    svg: "svg",
    ...props.components
  }, _component0 = _components["starlight-image-zoom-zoomable"], {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"-development-tools\">🧰 Development Tools</h2><a class=\"sl-anchor-link\" href=\"#-development-tools\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧰 Development Tools”</span></a></div>\n"
    }), createVNode($$Aside, {
      type: "note",
      title: "Download Required Files",
      children: [createVNode(_components.p, {
        children: "Before starting, download the setup folder corresponding to your operating system:"
      }), createVNode($$Tabs, {
        syncKey: "os",
        children: [createVNode($$TabItem, {
          label: "Windows",
          children: [createVNode($$FileTree, {
            "set:html": "<ul>\n<li>software\n<ul>\n<li>CCS12.8.1.00005_win64\n<ul>\n<li>ccs_setup_12.8.1.00005.exe</li>\n</ul>\n</li>\n<li>SW-TM4C-2.2.0.295.exe</li>\n</ul>\n</li>\n</ul>"
          }), createVNode("div", {
            style: {
              marginTop: '1rem'
            },
            children: createVNode("a", {
              href: "https://drive.google.com/file/d/1wISLk77SQzrNhrdEbzeM0hn7uikrPIhz",
              target: "_blank",
              rel: "noopener noreferrer",
              "set:html": "<p>🔗 Download Windows Setup Folder</p>"
            })
          })]
        }), createVNode($$TabItem, {
          label: "macOS",
          children: [createVNode($$FileTree, {
            "set:html": "<ul>\n<li>ccs_setup_12.8.1.00005.dmg</li>\n</ul>"
          }), createVNode("div", {
            style: {
              marginTop: '1rem'
            },
            children: createVNode("a", {
              href: "https://www.ti.com/tool/CCSTUDIO",
              target: "_blank",
              rel: "noopener noreferrer",
              "set:html": "<p>🔗 Download CCS for macOS from TI</p>"
            })
          })]
        }), createVNode($$TabItem, {
          label: "Linux",
          children: [createVNode($$FileTree, {
            "set:html": "<ul>\n<li>ccs_setup_12.8.1.00005.bin</li>\n</ul>"
          }), createVNode("div", {
            style: {
              marginTop: '1rem'
            },
            children: createVNode("a", {
              href: "https://www.ti.com/tool/CCSTUDIO",
              target: "_blank",
              rel: "noopener noreferrer",
              "set:html": "<p>🔗 Download CCS for Linux from TI</p>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"-installation-instructions\">💻 Installation Instructions</h2><a class=\"sl-anchor-link\" href=\"#-installation-instructions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “💻 Installation Instructions”</span></a></div>\n"
    }), createVNode($$Tabs, {
      syncKey: "os",
      children: [createVNode($$TabItem, {
        label: "Windows",
        children: [createVNode(_components.div, {
          class: "sl-heading-wrapper level-h3",
          children: [createVNode(_components.h3, {
            id: "-install-code-composer-studio-ccs-1281",
            children: "🧰 Install Code Composer Studio (CCS 12.8.1)"
          }), createVNode(_components.a, {
            class: "sl-anchor-link",
            href: "#-install-code-composer-studio-ccs-1281",
            children: [createVNode(_components.span, {
              "aria-hidden": "true",
              class: "sl-anchor-icon",
              children: createVNode(_components.svg, {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                children: createVNode(_components.path, {
                  fill: "currentcolor",
                  d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
                })
              })
            }), createVNode(_components.span, {
              class: "sr-only",
              children: "Section titled “🧰 Install Code Composer Studio (CCS 12.8.1)”"
            })]
          })]
        }), createVNode($$Aside, {
          type: "tip",
          title: "Why CCS 12.8.1?",
          "set:html": "<div><p><strong>CCS 12.8.1</strong> is recommended for its stability and compatibility with the TM4C1294XL LaunchPad.</p><ul><li>Based on Eclipse with advanced debugging features</li><li>Newer <strong>CCS 20</strong> uses Theia (VS Code-like), which may affect legacy SDKs</li></ul></div>"
        }), createVNode(_components.ol, {
          "set:html": "\n<li>Navigate to the downloaded folder and run:\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">ccs_setup_12.8.1.00005.exe</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"ccs_setup_12.8.1.00005.exe\"><div></div></button></div></figure></div>\n</li>\n<li>When prompted for an installation directory, set the path to:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">C:\\ti\\ccs1281</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"C:\\ti\\ccs1281\"><div></div></button></div></figure></div>\n</li>\n<li>Choose <strong>Custom Installation</strong> when asked for setup type.</li>\n"
        }), createVNode("p", {
          align: "center",
          children: [createVNode(_component0, {
            children: [createVNode("img", {
              src: "https://hackmd.io/_uploads/rkP_X74Axx.png",
              alt: "CCS Custom Installation",
              width: "450"
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: CCS Custom Installation",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          }), createVNode(Fragment$1, {
            "set:html": "<br><sub>Select Custom Installation during setup</sub>"
          })]
        }), createVNode(_components.ol, {
          start: "4",
          "set:html": "\n<li>In the list of supported processors, check:\n<blockquote>\n<p><strong>TM4C12X ARM Cortex M4F core-based MCUs</strong></p>\n</blockquote>\n</li>\n<li>Continue with the default options for the rest of the installation.</li>\n"
        }), createVNode("p", {
          align: "center",
          children: [createVNode(_component0, {
            children: [createVNode("img", {
              src: "https://hackmd.io/_uploads/Hksj77N0le.png",
              alt: "Select TM4C12X ARM Cortex M4F core-based MCUs",
              width: "450"
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: Select TM4C12X ARM Cortex M4F core-based MCUs",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          }), createVNode(Fragment$1, {
            "set:html": "<br><sub>Select TM4C12X ARM Cortex M4F core-based MCUs</sub>"
          })]
        }), createVNode($$Aside, {
          type: "tip",
          title: "Tip",
          "set:html": "<p>💡 After installation, verify that CCS created the folder <code dir=\"auto\">C:\\ti\\ccs1281</code>.</p>"
        }), createVNode(Fragment$1, {
          "set:html": "<hr><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"-install-tivaware-drivers-sw-tm4c-220295\">🧩 Install TivaWare Drivers (SW-TM4C-2.2.0.295)</h3><a class=\"sl-anchor-link\" href=\"#-install-tivaware-drivers-sw-tm4c-220295\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧩 Install TivaWare Drivers (SW-TM4C-2.2.0.295)”</span></a></div><ol>\n<li>After installing CCS, run the following installer from the same folder:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">SW-TM4C-2.2.0.295.exe</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"SW-TM4C-2.2.0.295.exe\"><div></div></button></div></figure></div>\n</li>\n<li>When prompted for the installation directory, choose:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">C:\\ti\\TivaWare_C_Series-2.2.0.295</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"C:\\ti\\TivaWare_C_Series-2.2.0.295\"><div></div></button></div></figure></div>\n</li>\n</ol>"
        }), createVNode("p", {
          align: "center",
          children: [createVNode(_component0, {
            children: [createVNode("img", {
              src: "https://hackmd.io/_uploads/HJlIrmE0el.png",
              alt: "TivaWare Installation Path",
              width: "460"
            }), createVNode(_components.button, {
              "aria-label": "Zoom image: TivaWare Installation Path",
              class: "starlight-image-zoom-control",
              "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
            })]
          }), createVNode(Fragment$1, {
            "set:html": "<br><sub>Install TivaWare drivers in C:\\ti\\TivaWare_C_Series-2.2.0.295</sub>"
          })]
        }), createVNode(_components.ol, {
          start: "3",
          "set:html": "\n<li>Proceed with the default installation options.</li>\n"
        }), createVNode($$Aside, {
          type: "note",
          title: "Driver Note",
          "set:html": "<p>These drivers are essential for the <strong>TM4C1294XL LaunchPad</strong> to communicate properly with CCS and enable flashing and debugging.</p>"
        }), createVNode(_components.hr, {})]
      }), createVNode($$TabItem, {
        label: "macOS",
        children: [createVNode($$Aside, {
          type: "tip",
          title: "Why CCS 12.8.1?",
          "set:html": " - CCS 12.8.1 is the recommended version for this course as it provides the necessary features and stability for working with the TM4C1294XL LaunchPad. - Newer versions may introduce compatibility issues with the provided libraries and examples. "
        }), createVNode($$Aside, {
          type: "danger",
          title: "macOS Installation",
          "set:html": "<p>The installation of <strong>CCS 12.8.1</strong> has not been fully tested on <strong>macOS</strong>.<br>\nIf you successfully install and run it, please inform the course staff so we can update the documentation. Proceed with caution.</p>"
        }), createVNode(Fragment$1, {
          "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"-install-code-composer-studio-ccs-1281-1\">🧰 Install Code Composer Studio (CCS 12.8.1)</h3><a class=\"sl-anchor-link\" href=\"#-install-code-composer-studio-ccs-1281-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧰 Install Code Composer Studio (CCS 12.8.1)”</span></a></div><ol>\n<li>Download CCS for macOS from:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">https://www.ti.com/tool/CCSTUDIO</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"https://www.ti.com/tool/CCSTUDIO\"><div></div></button></div></figure></div>\n</li>\n<li>Open the <code dir=\"auto\">.dmg</code> file and drag <strong>Code Composer Studio</strong> into Applications.</li>\n<li>Allow system extensions for TI debuggers:\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">System Settings → Privacy &#x26; Security</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"System Settings → Privacy &#x26; Security\"><div></div></button></div></figure></div>\n</li>\n<li>Verify device support includes TM4C12X MCUs.</li>\n</ol><hr><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"-install-tivaware-drivers\">🧩 Install TivaWare Drivers</h3><a class=\"sl-anchor-link\" href=\"#-install-tivaware-drivers\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧩 Install TivaWare Drivers”</span></a></div><ol>\n<li>Extract the package:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">tar</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-xvzf</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">SW-TM4C-2.2.0.295.tar.gz</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-C</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">~/ti/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"tar -xvzf SW-TM4C-2.2.0.295.tar.gz -C ~/ti/\"><div></div></button></div></figure></div>\n</li>\n<li>Verify installation path:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">~</span><span style=\"--0:#D6DEEB;--1:#403F53\">/ti/TivaWare_C_Series-2.2.0.295/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"~/ti/TivaWare_C_Series-2.2.0.295/\"><div></div></button></div></figure></div>\n</li>\n<li>Optionally build libraries (requires <code dir=\"auto\">make</code>):\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">~/ti/TivaWare_C_Series-2.2.0.295</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">make</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"cd ~/ti/TivaWare_C_Series-2.2.0.295make\"><div></div></button></div></figure></div>\n</li>\n</ol>"
        })]
      }), createVNode($$TabItem, {
        label: "Linux",
        children: [createVNode($$Aside, {
          type: "tip",
          title: "Why CCS 12.8.1?",
          "set:html": " - CCS 12.8.1 is the recommended version for this course as it provides the necessary features and stability for working with the TM4C1294XL LaunchPad. - Newer versions may introduce compatibility issues with the provided libraries and examples. "
        }), createVNode(Fragment$1, {
          "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"-install-code-composer-studio-ccs-1281-2\">🧰 Install Code Composer Studio (CCS 12.8.1)</h3><a class=\"sl-anchor-link\" href=\"#-install-code-composer-studio-ccs-1281-2\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧰 Install Code Composer Studio (CCS 12.8.1)”</span></a></div><ol>\n<li>Make installer executable and run:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">chmod</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">+x</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">ccs_setup_12.8.1.00005.bin</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">sudo</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">./ccs_setup_12.8.1.00005.bin</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"chmod +x ccs_setup_12.8.1.00005.binsudo ./ccs_setup_12.8.1.00005.bin\"><div></div></button></div></figure></div>\n</li>\n<li>Set installation directory:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">/opt/ti/ccs1281</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/opt/ti/ccs1281\"><div></div></button></div></figure></div>\n</li>\n<li>Select:\n<blockquote>\n<p>TM4C12X ARM Cortex M4F core-based MCUs</p>\n</blockquote>\n</li>\n<li>Add user to <code dir=\"auto\">dialout</code> for USB debugging:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">sudo</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">usermod</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-a</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-G</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">dialout</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">$USER</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"sudo usermod -a -G dialout $USER\"><div></div></button></div></figure></div>\n</li>\n<li>Launch CCS:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">/opt/ti/ccs1281/ccstudio</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/opt/ti/ccs1281/ccstudio\"><div></div></button></div></figure></div>\n</li>\n</ol><hr><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"-install-tivaware-drivers-1\">🧩 Install TivaWare Drivers</h3><a class=\"sl-anchor-link\" href=\"#-install-tivaware-drivers-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “🧩 Install TivaWare Drivers”</span></a></div><ol>\n<li>Extract:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">tar</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-xvzf</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">SW-TM4C-2.2.0.295.tar.gz</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">-C</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">~/ti/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"tar -xvzf SW-TM4C-2.2.0.295.tar.gz -C ~/ti/\"><div></div></button></div></figure></div>\n</li>\n<li>Verify installation:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">~</span><span style=\"--0:#D6DEEB;--1:#403F53\">/ti/TivaWare_C_Series-2.2.0.295/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"~/ti/TivaWare_C_Series-2.2.0.295/\"><div></div></button></div></figure></div>\n</li>\n<li>(Optional) Build with:\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">~/ti/TivaWare_C_Series-2.2.0.295</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">make</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"cd ~/ti/TivaWare_C_Series-2.2.0.295make\"><div></div></button></div></figure></div>\n</li>\n</ol>"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "Final Verification",
      "set:html": "<p>Both <strong>CCS</strong> and <strong>TivaWare</strong> should now be installed under <code dir=\"auto\">/ti/</code> (or <code dir=\"auto\">C:\\ti\\</code> on Windows).<br>\nYou are ready to start your first lab with the <strong>TM4C1294XL LaunchPad</strong> 🚀</p>"
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

const url = "src/content/docs/guides/ccs/installccs.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/installccs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/installccs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
