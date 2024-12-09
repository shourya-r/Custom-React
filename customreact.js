const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google.com",
};

const main = document.querySelector("#root");

customRender(reactElement, main);
