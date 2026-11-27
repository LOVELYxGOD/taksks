export const formParams = {
  tagName: "form",
  classList: [
    "absolute",
    "w-[800px]",
    "max-w-full",
    "h-auto",
    "rounded-3xl",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "bg-white",
    "dark:bg-[#171923]",
    "p-10",
    "flex",
    "flex-col",
    "gap-6",
    "shadow-xl",
  ],
};

export const headerParams = {
  tagName: "div",
  classList: ["flex", "items-center", "justify-between", "mb-4"],
};

export const headerFormIconParams = {
  tagName: "img",
  classList: [
    "bg-[url(/headerFormIconParams.svg)]",
    "w-10",
    "h-10",
    "bg-cover",
    "bg-center",
    "outline-none",
    "border-none",
  ],
};

export const headerFormTextParams = {
  tagName: "p",
  classList: ["text-2xl", "font-semibold", "text-gray-900", "dark:text-white"],
  text: "New note",
};

export const headerContainerParams = {
  tagName: "div",
  classList: ["flex", "items-center", "gap-4", "bg-transparent"],
};

export const headerButtonParams = {
  tagName: "button",
  classList: [
    "w-10",
    "h-10",
    "rounded-full",
    "bg-gray-100",
    "dark:bg-gray-700",
    "text-gray-700",
    "dark:text-white",
    "text-2xl",
  ],
  text: "×",
};

export const bodyParams = {
  tagName: "div",
  classList: ["flex", "flex-col", "gap-4"],
};

export const titleBodyParams = {
  tagName: "p",
  classList: [
    "text-sm",
    "font-bold",
    "tracking-widest",
    "text-gray-600",
    "dark:text-gray-300",
  ],
  text: "TITLE",
};

export const contentBodyParams = {
  tagName: "p",
  classList: [
    "text-sm",
    "font-bold",
    "tracking-widest",
    "text-gray-600",
    "dark:text-gray-300",
  ],
  text: "CONTENT",
};

export const inputTitleParams = {
  tagName: "input",
  classList: [
    "w-full",
    "h-20",
    "rounded-2xl",
    "border",
    "border-gray-300",
    "dark:border-gray-600",
    "bg-white",
    "dark:bg-[#252936]",
    "px-6",
    "text-xl",
    "text-gray-900",
    "dark:text-white",
    "outline-none",
    "focus:border-violet-500",
  ],
  atr: {
    name: "title",
    placeholder: "Give it a name...",
  },
};

export const textAreaParams = {
  tagName: "textarea",
  classList: [
    "w-full",
    "h-48",
    "rounded-2xl",
    "border",
    "border-gray-300",
    "dark:border-gray-600",
    "bg-white",
    "dark:bg-[#252936]",
    "p-6",
    "text-xl",
    "text-gray-900",
    "dark:text-white",
    "resize-none",
    "outline-none",
    "focus:border-violet-500",
  ],
  atr: {
    name: "text",
    placeholder: "Write anything...",
  },
};

export const NameTitleContainerParams = {
  tagName: "div",
  classList: ["flex", "flex-col", "gap-3", "w-full"],
};

export const contentTitleContainerParams = {
  tagName: "div",
  classList: ["flex", "flex-col", "gap-3"],
};

export const footerParams = {
  tagName: "div",
  classList: ["flex", "gap-4", "mt-4"],
};

export const cancelParams = {
  tagName: "button",
  classList: [
    "w-1/2",
    "h-16",
    "rounded-2xl",
    "bg-gray-100",
    "dark:bg-gray-700",
    "text-gray-700",
    "dark:text-white",
    "font-semibold",
    "hover:bg-gray-200",
  ],
  text: "Cancel",
};

export const createParams = {
  tagName: "button",
  classList: [
    "w-1/2",
    "h-16",
    "rounded-2xl",
    "bg-violet-600",
    "text-white",
    "font-semibold",
    "hover:bg-violet-700",
  ],
  text: "Create note",
};

export const formCheckBoxParams = {
  tagName: "input",
  atr: {
    type: "checkbox",
    name: "checkBox",
  },
  classList: ["real-checkbox"],
};

export const labelParams = {
  tagName: "label",
  classList: ["wrapper-checkbox"],
};

export const fakeCheckBoxParams = {
  tagName: "div",
  classList: ["fake-checkbox"],
};

export const topContainerParams = {
  tagName: "div",
  classList: ["flex", "gap-8"],
};

export const markerParams = {
  tagName: "span",
  layout:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  classList: [],
};
