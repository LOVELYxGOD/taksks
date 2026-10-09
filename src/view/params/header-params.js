export const headerParams = {
  tagName: "header",
  classList: [
    // "w-full",
    // "h-[80px]",
    "bg-gray-100",
    "dark:bg-[#171923]",
    "flex",
    "items-center",
    "justify-between",
    "px-6",
    "py-3",
    "border-b",
    "border-gray-200",
    "duration-300",
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
    "overflow-hidden",
    // "transition-transform",
    "duration-300",
    "hover:rotate-12",
    "bg-violet-400",
  ],
};

export const lightParams = {
  tagName: "img",
  atr: {
    src: "/sun-svgrepo-com.svg",
  },
  classList: [
    "w-6",
    "h-6",
    "absolute",
    "left-1/2",
    "-translate-1/2",
    "top-1/2",
    "dark:opacity-100",
    "opacity-0",
    "duration-300",
  ],
};

export const darkParams = {
  tagName: "img",
  atr: {
    src: "/moon-svgrepo-com.svg",
  },
  classList: [
    "w-6",
    "h-6",
    "absolute",
    "left-1/2",
    "-translate-1/2",
    "top-1/2",
    "opacity-100",
    "dark:opacity-0",
    "duration-300",
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
    "duration-300",
  ],
  text: "",
};

export const wrapperLogoParams = {
  tagName: "div",
  classList: ["flex", "items-center", "gap-3"],
};

export const logoTitleParams = {
  tagName: "h1",
  classList: [
    "text-3xl",
    "font-bold",
    "text-gray-800",
    "dark:text-white",
    "duration-300",
  ],
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
    "bg-white",
    "border",
    "bg-gray-100",
    "dark:bg-[#343747]",
    "text-gray-800",
    "dark:text-white",
    "border",
    "border-gray-200",
    "dark:border-gray-600",
    "rounded-xl",
    "outline-none",
    "placeholder-gray-400",
    "dark:text-white",
    "duration-300",
  ],
};

// export const nightButtonContainerParams = {
//   tagName: "div",
//   classList: [
//     "flex",
//     "items-center",
//     "justify-center",
//     "absolute",
//     "inset-y-0",
//     "left-[-27px]",
//     "gap-2",
//     "z-10"
//   ],
// };
