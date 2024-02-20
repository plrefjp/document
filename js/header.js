const menuItems = [
  {
    text: "ホーム",
    href: "index.html",
  },
  {
    text: "字句構造",
    href: "lexical_structure.html",
  },
  {
    text: "メニューリンク3",
    htef: "#",
  },
];

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/hamburger-menu.css";
document.head.appendChild(link);

const header = document.createElement("header");
const menu = document.createElement("div");
menu.className = "hamburger-menu";
const check = document.createElement("input");
check.type = "checkbox";
check.id = "menu-btn-check";
const label = document.createElement("label");
label.htmlFor = "menu-btn-check";
label.className = "menu-btn";
const bar = document.createElement("span");
bar.id = "bar";
label.appendChild(bar);
const content = document.createElement("div");
content.className = "menu-content";
const ul = document.createElement("ul");
for (item of menuItems) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.text = item.text;
  anchor.href = item.href;
  li.appendChild(anchor);
  ul.appendChild(li);
}
content.appendChild(ul);
menu.append(check, label, content);
header.appendChild(menu);

document.querySelector("body").prepend(header);