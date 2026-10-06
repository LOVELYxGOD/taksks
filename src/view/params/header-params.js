export const headerParams = {
  tagName: "header",
  classList: [
    // "w-full",
    // "h-[80px]",
    "bg-white",
    "dark:bg-blue-700",
    "flex",
    "items-center",
    "justify-between",
    "px-6",
    "py-3",
    "border-b",
    "border-gray-200",
  ],
};

export const nightButtonParams = {
  tagName: "button",
  text: "",
  classList: [
    "w-8",
    "h-8",
    "rounded-xl",
    "relative",
    "bg-white",
    "overflow-hidden",
  ],
};

export const logoParams = {
  tagName: "div",
  classList: [
    "w-[50px]",
    "h-[50px]",
    "bg-violet-500",
    "bg-[url(/burger.svg)]",
    "bg-cover",
    "rounded-2xl",
  ],
  text: "",
};

export const wrapperLogoParams = {
  tagName: "div",
  classList: ["flex", "items-center", "gap-3"],
};

export const logoTitleParams = {
  tagName: "h1",
  classList: ["text-3xl", "font-bold", "text-gray-800"],
  text: "Noted",
};

export const searchInputParams = {
  tagName: "input",
  atr: {
    type: "search",
    placeholder: "search...",
  },
  classList: [
    "w-80",
    "h-11",
    "px-4",
    "bg-gray-100",
    "rounded-xl",
    "outline-none",
    "placeholder-gray-400",
  ],
};

export const nightButtonContainerParams = {
  tagName: "div",
  classList: [
    "flex",
    "items-center",
    "justify-center",
    "absolute",
    "inset-y-0",
    "left-[-27px]",
    "gap-2",
  ],
};

export const lightParams = {
  tagName: "img",
  atr: {
    src: "/sun-svgrepo-com.svg",
  },
  classList: ["w-6", "h-6"],
};

export const darkParams = {
  tagName: "img",
  atr: {
    src: "/moon-svgrepo-com.svg",
  },
  classList: ["w-6", "h-6"],
};
