import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { c as $$CardGrid, f as $$Card, e as $$Aside } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lab Kit Overview",
  "description": "Introduction to the TI EK-TM4C1294XL LaunchPad and BOOSTXL-EDUMKII BoosterPack used in the labs"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "lab-kit",
    "text": "Lab Kit"
  }, {
    "depth": 3,
    "slug": "connecting-the-launchpad-via-usb",
    "text": "Connecting the LaunchPad via USB"
  }, {
    "depth": 3,
    "slug": "usb-connection-setup",
    "text": "USB Connection Setup"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    button: "button",
    "starlight-image-zoom-zoomable": "starlight-image-zoom-zoomable",
    sub: "sub",
    ...props.components
  }, _component0 = _components["starlight-image-zoom-zoomable"], {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"lab-kit\">Lab Kit</h2><a class=\"sl-anchor-link\" href=\"#lab-kit\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Lab Kit”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "TI EK-TM4C1294XL LaunchPad",
        icon: "laptop",
        children: [createVNode(_component0, {
          children: [createVNode("img", {
            src: "https://hackmd.io/_uploads/H1DF3MNClg.jpg",
            alt: "TI EK-TM4C1294XL LaunchPad",
            width: "300"
          }), createVNode(_components.button, {
            "aria-label": "Zoom image: TI EK-TM4C1294XL LaunchPad",
            class: "starlight-image-zoom-control",
            "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
          })]
        }), createVNode(Fragment$1, {
          "set:html": "<p><strong>ARM Cortex-M4F Microcontroller</strong></p><ul>\n<li>120MHz with hardware floating-point unit</li>\n<li>1MB Flash memory, 256KB RAM</li>\n<li>Integrated Ethernet, USB, CAN interfaces</li>\n<li>Professional debugging capabilities</li>\n</ul>"
        })]
      }), createVNode($$Card, {
        title: "BOOSTXL-EDUMKII BoosterPack",
        icon: "puzzle",
        children: [createVNode(_component0, {
          children: [createVNode("img", {
            src: "https://hackmd.io/_uploads/H1SmaGECgx.jpg",
            alt: "BOOSTXL-EDUMKII BoosterPack",
            width: "300"
          }), createVNode(_components.button, {
            "aria-label": "Zoom image: BOOSTXL-EDUMKII BoosterPack",
            class: "starlight-image-zoom-control",
            "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
          })]
        }), createVNode(Fragment$1, {
          "set:html": "<p><strong>Complete I/O Interface Module</strong></p><ul>\n<li>128×128 color LCD display</li>\n<li>Multiple sensors: light, temperature, accelerometer</li>\n<li>Audio input/output with microphone and speaker</li>\n<li>Joystick and button interfaces</li>\n</ul>"
        })]
      })]
    }), "\n", createVNode($$Aside, {
      type: "tip",
      title: "Connection Note",
      "set:html": "<p>In this lab, we will use the <strong>BoosterPack 1</strong> position on the EK‑TM4C1294XL LaunchPad.\r\nThis corresponds to the <strong>outer header connectors (J1, J2, J3, and J4)</strong>. Make sure the pins are aligned correctly as shown below.</p>"
    }), "\n", createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/B1eaRzNRee.png",
          alt: "BoosterPack 1 Connection",
          width: "360"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: BoosterPack 1 Connection",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(Fragment$1, {
        "set:html": "<br><sub>BoosterPack MKII installed in BoosterPack 1 position on the EK-TM4C1294XL LaunchPad</sub>"
      })]
    }), "\n", createVNode($$Aside, {
      type: "danger",
      "set:html": "Always verify pin orientation and alignment before powering the board to avoid hardware damage."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"connecting-the-launchpad-via-usb\">Connecting the LaunchPad via USB</h3><a class=\"sl-anchor-link\" href=\"#connecting-the-launchpad-via-usb\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Connecting the LaunchPad via USB”</span></a></div>\n<aside aria-label=\"Caution\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Caution</p><div class=\"starlight-aside__content\"><p>Ensure proper power and communication between your computer and the <strong>TM4C1294XL LaunchPad</strong>.</p></div></aside>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"usb-connection-setup\">USB Connection Setup</h3><a class=\"sl-anchor-link\" href=\"#usb-connection-setup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “USB Connection Setup”</span></a></div>\n<p>The <strong>TM4C1294XL LaunchPad</strong> includes two micro-USB connectors:</p>\n<ol>\n<li><strong>DEBUG</strong> — used for programming, debugging, and powering the board.</li>\n<li><strong>DEVICE</strong> — used only for USB peripheral experiments (not used in this lab).</li>\n</ol>\n<p>For all labs in this course, including this one, you must connect your micro-USB cable to the <strong>DEBUG</strong> port — it is the connector <strong>farther away from the Ethernet port</strong>, located on the <strong>left side</strong> of the LaunchPad.</p>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/rk4ByhEAeg.png",
          alt: "LaunchPad USB Debug Port",
          width: "480",
          style: "border-radius:10px; box-shadow:0 0 10px #00ffff66;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: LaunchPad USB Debug Port",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#4ec9b0; font-weight:bold;",
          "set:html": "Connect the USB cable to the DEBUG port (the port farthest from the Ethernet jack)"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p><strong>Do not</strong> connect to the DEVICE port for this lab. The <strong>DEBUG</strong> port provides both power and the debugging interface used by Code Composer Studio.</p></div></aside>\n<hr>\n<p>Once connected, verify that:</p>\n<ul>\n<li>The <strong>Power LED</strong> on the LaunchPad turns <strong>ON</strong>.</li>\n<li>The device appears in your system’s <strong>Device Manager</strong> or <strong>CCS target configuration</strong> as <code dir=\"auto\">Stellaris In-Circuit Debug Interface</code>.</li>\n</ul>\n<p>You are now ready to flash and debug your program directly from Code Composer Studio.</p>\n<hr>"
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

const url = "src/content/docs/guides/labKit.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/labKit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/labKit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
