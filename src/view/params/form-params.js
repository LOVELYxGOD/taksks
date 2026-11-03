export const formParams = {
  tagName: "form",
  classList: [
    "absolute",
    "w-[800px]",
    "h-auto",
    "rounded-[30px]",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "bg-white",
    "p-10",
    "flex",
    "flex-col",
    "gap-6",
    "shadow-xl",
  ],
};

export const headerParams = {
  tagName: "div",
  classList: ["flex", "items-center", "justify-between", "mb-8"],
};

export const headerFormIconParams = {
  tagName: "img",
  classList: [
    "w-10",
    "h-10",
    "bg-cover",
    "bg-center",
    "bg-[url(/headerFormIconParams.svg)]",
    "border-none",
  ],
};

export const headerFormTextParams = {
  tagName: "p",
  classList: ["text-2xl", "font-semibold", "text-gray-900"],
  text: "New Note",
};

export const headerContainerParams = {
  tagName: "div",
  classList: ["flex", "items-center", "gap-4"],
};

export const headerButtonParams = {
  tagName: "button",
  classList: [
    "w-10",
    "h-10",
    "rounded-full",
    "text-gray-500",
    "text-2xl",
    "bg-[url(/formCrestick.svg)]",
    "bg-center",
    "bg-cover",
  ],
};

export const bodyParams = {
  tagName: "div",
  classList: ["flex", "flex-col", "gap-4"],
};

export const titleBodyParams = {
  tagName: "p",
  classList: ["text-sm", "font-semibold", "tracking-widest", "text-gray-600"],
};

export const inputTitleParams = {
  tagName: "input",
  classList: [
    "w-full",
    "h-20",
    "rounded-2xl",
    "border",
    "border-gray-300",
    "px-6",
    "text-xl",
    "outline-none",
    "focus:border-violet-500",
  ],
  atr: {
    name: "title",
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
    "p-6",
    "text-xl",
    "resize-none",
    "outline-none",
    "focus:border-violet-500",
  ],
  atr: {
    name: "text",
  },
};

export const NameTitleContainerParams = {
  tagName: "div",
  classList: ["flex", "flex-col", "gap-3"],
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
    "text-gray-700",
    "font-semibold",
    "hover:bg-gray-200",
  ],
};

export const createParams = {
  tagName: "button",
  classList: [
    "w-1/2",
    "h-16",
    "rounded-2xl",
    "bg-blue-600",
    "text-white",
    "font-semibold",
    "hover:bg-blue-700",
  ],
};
