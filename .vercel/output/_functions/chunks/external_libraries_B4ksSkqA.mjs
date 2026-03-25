import { p as createVNode, F as Fragment, aB as __astro_tag_component__ } from './astro/server_I-R8HWCB.mjs';
import { j as $$FileTree } from './Code_C63UbqyS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Importing External Libraries",
  "description": "Instructionss to configure Code Composer Studio for lab development"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "importing-external-libraries",
    "text": "Importing External Libraries"
  }, {
    "depth": 3,
    "slug": "available-libraries",
    "text": "Available Libraries"
  }, {
    "depth": 3,
    "slug": "folder-organization",
    "text": "Folder Organization"
  }, {
    "depth": 3,
    "slug": "importing-the-libraries-into-code-composer-studio",
    "text": "Importing the Libraries into Code Composer Studio"
  }, {
    "depth": 3,
    "slug": "verify-project-structure",
    "text": "Verify Project Structure"
  }, {
    "depth": 3,
    "slug": "verify-include-paths",
    "text": "Verify Include Paths"
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
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"importing-external-libraries\">Importing External Libraries</h2><a class=\"sl-anchor-link\" href=\"#importing-external-libraries\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Importing External Libraries”</span></a></div>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>Integrate pre-built libraries that simplify working with peripherals and timing on the TM4C1294XL LaunchPad.</p></div></aside>\n<p>We have prepared several libraries to help you use the board peripherals more easily and modularly. These libraries allow you to write cleaner code without having to configure all registers manually.</p>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"available-libraries\">Available Libraries</h3><a class=\"sl-anchor-link\" href=\"#available-libraries\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Available Libraries”</span></a></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Library</th><th>Description</th></tr></thead><tbody><tr><td><strong>buttonsDriver</strong></td><td>Manages hardware buttons with <strong>debouncing</strong>, and supports <strong>click</strong>, <strong>double click</strong>, and <strong>long press</strong> callbacks.</td></tr><tr><td><strong>display</strong></td><td>Includes Texas Instruments drivers for the <strong>Crystalfontz 128×128 ST7735 LCD</strong> display.</td></tr><tr><td><strong>timerLib</strong></td><td>Initializes a <strong>hardware timer</strong> to control time-based events without using SysTick. Ideal for periodic tasks.</td></tr><tr><td><strong>elapsedTime</strong></td><td>Works with <code dir=\"auto\">timerLib</code> to measure elapsed time between events easily using one timer source.</td></tr><tr><td><strong>HAL_TM4C1294XL</strong></td><td>Defines pin names and mappings for the TM4C1294XL to make code clearer and portable.</td></tr><tr><td><strong>joystickDriver</strong></td><td>Simplifies joystick input: provides <strong>Cartesian</strong> and <strong>polar coordinates</strong>, plus callbacks for directional events (N, S, E, W).</td></tr><tr><td><strong>PLL</strong></td><td>Calculates the <strong>actual MCU frequency</strong> after PLL configuration so timing values stay accurate.</td></tr></tbody></table>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"folder-organization\">Folder Organization</h3><a class=\"sl-anchor-link\" href=\"#folder-organization\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Folder Organization”</span></a></div>\n<p>When you open your workspace, you will find two main folders:</p>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>Lab_x\n<ul>\n<li>Lab_x_workspace\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>libraries\n<ul>\n<li>buttonsDriver\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>display\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>timerLib\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>elapsedTime\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>HAL_TM4C1294XL\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>joystickDriver\n<ul>\n<li>…</li>\n</ul>\n</li>\n<li>PLL\n<ul>\n<li>…</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>The <strong>libraries</strong> folder should always remain <strong>outside</strong> your project workspace folder. Keep all library files together in this single location.</p></div></aside>\n<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"importing-the-libraries-into-code-composer-studio\">Importing the Libraries into Code Composer Studio</h3><a class=\"sl-anchor-link\" href=\"#importing-the-libraries-into-code-composer-studio\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Importing the Libraries into Code Composer Studio”</span></a></div>\n<ol>\n<li>Open your CCS workspace.</li>\n<li><strong>Drag the entire <code dir=\"auto\">libraries</code> folder</strong> into the CCS Project Explorer panel.</li>\n</ol>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/Bkd879NAxg.png",
          alt: "Drag libraries folder into CCS",
          width: "500",
          style: "border-radius:10px; box-shadow:0 0 10px #00ffff66;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: Drag libraries folder into CCS",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#4ec9b0; font-weight:bold;",
          "set:html": "Drag the <code>libraries</code> folder into Code Composer Studio"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<ol start=\"3\">\n<li>When the import dialog appears, choose:\n<ul>\n<li>✅ <strong>Link to files and recreate folder structure with virtual folders</strong></li>\n<li>✅ <strong>Create link location relative to PROJECT_LOC</strong></li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/HJA97qNRgg.png",
          alt: "CCS link to files options",
          width: "480",
          style: "border-radius:10px; box-shadow:0 0 10px #66ccff99;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: CCS link to files options",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#3399ff; font-weight:bold;",
          "set:html": "Always link files relative to PROJECT_LOC"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Caution\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Caution</p><div class=\"starlight-aside__content\"><p>⚠️ This step is <strong>crucial</strong>. Always link libraries this way when adding them to any project. Do <strong>not</strong> copy them into the project directly.</p></div></aside>\n<ol start=\"4\">\n<li>CCS will then ask if you want to <strong>add include paths automatically</strong>. Select:\n<ul>\n<li>✅ <strong>Do this for all header files currently being added</strong></li>\n<li>✅ <strong>Yes</strong></li>\n</ul>\n</li>\n</ol>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/Hy0aQ9NClx.png",
          alt: "Include path confirmation",
          width: "480",
          style: "border-radius:10px; box-shadow:0 0 10px #00ffff66;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: Include path confirmation",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#4ec9b0; font-weight:bold;",
          "set:html": "Confirm include path for all header files"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"verify-project-structure\">Verify Project Structure</h3><a class=\"sl-anchor-link\" href=\"#verify-project-structure\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Verify Project Structure”</span></a></div>\n<p>After importing, your project should look like this:</p>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/rk-lE9EAge.png",
          alt: "Project structure after importing libraries",
          width: "200",
          style: "border-radius:10px; box-shadow:0 0 10px #00ffff66;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: Project structure after importing libraries",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#4ec9b0; font-weight:bold;",
          "set:html": "Project structure with linked <code>libraries</code> folder"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"verify-include-paths\">Verify Include Paths</h3><a class=\"sl-anchor-link\" href=\"#verify-include-paths\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Verify Include Paths”</span></a></div>\n<p>To confirm everything is correctly linked:</p>\n<ol>\n<li>Right-click your project → <strong>Properties</strong></li>\n<li>Navigate to:\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">Build → ARM Compiler → Include Options</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Build → ARM Compiler → Include Options\"><div></div></button></div></figure></div>\n</li>\n<li>You should see entries similar to:\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/buttonsDriver</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/display</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/timerLib</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/elapsedTime</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/HAL_TM4C1294XL</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/joystickDriver</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">${PROJECT_LOC}/libraries/PLL</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"${PROJECT_LOC}/libraries/buttonsDriver${PROJECT_LOC}/libraries/display${PROJECT_LOC}/libraries/timerLib${PROJECT_LOC}/libraries/elapsedTime${PROJECT_LOC}/libraries/HAL_TM4C1294XL${PROJECT_LOC}/libraries/joystickDriver${PROJECT_LOC}/libraries/PLL\"><div></div></button></div></figure></div>\n</li>\n</ol>\n"
    }), createVNode("p", {
      align: "center",
      children: [createVNode(_component0, {
        children: [createVNode("img", {
          src: "https://hackmd.io/_uploads/HJp7E5VRex.png",
          alt: "Verify include paths in CCS",
          width: "600",
          style: "border-radius:10px; box-shadow:0 0 10px #00ffff66;"
        }), createVNode(_components.button, {
          "aria-label": "Zoom image: Verify include paths in CCS",
          class: "starlight-image-zoom-control",
          "set:html": "<svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><use href=\"#starlight-image-zoom-icon-zoom\"></use></svg>"
        })]
      }), createVNode(_components.br, {}), createVNode(_components.sub, {
        children: createVNode("span", {
          style: "color:#4ec9b0; font-weight:bold;",
          "set:html": "Include paths confirmation in CCS project properties"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>💡 If any path is missing, click <strong>Add…</strong>, navigate to your <code dir=\"auto\">libraries</code> folder, and ensure the path is relative to <code dir=\"auto\">${PROJECT_LOC}</code>.</p></div></aside>\n<hr>\n<p>✅ Once all libraries are linked and visible in Project Explorer, you can include them in your code normally:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">buttonDriver.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">timerLib.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">elapsedTime.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">#include</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">HAL_TM4C1294XL.h</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"#include &#x22;buttonDriver.h&#x22;#include &#x22;timerLib.h&#x22;#include &#x22;elapsedTime.h&#x22;#include &#x22;HAL_TM4C1294XL.h&#x22;\"><div></div></button></div></figure></div>\n<p>You are now ready to use modular drivers and utilities for your Lab development!</p>\n<hr>"
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

const url = "src/content/docs/guides/ccs/external_libraries.mdx/";
const file = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/external_libraries.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/content/docs/guides/ccs/external_libraries.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
