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
  attr: {
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
  attr: {
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

export const topContainerParams = {
  tagName: "div",
  classList: ["flex", "gap-8"],
};
export const lableParams = {
  tagname: "label",
  Classlist: [],
};

export const fakeCheckBoxParams = {
  tagname: "div",
  Classlist: ["fake-checkbox"],
};
