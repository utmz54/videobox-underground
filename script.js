import karuta from "./karuta.js"

const root = document.querySelector("#root")

for (const item of karuta) {
    console.info(item.head);
    const container = document.createElement("div");
    container.classList.add("karuta-container")
    const elem = document.createElement("div");
    elem.classList.add("karuta-root");

    const initial = document.createElement("div");
    initial.classList.add("karuta-head");
    initial.textContent = item.head;

    elem.appendChild(initial)

    const body = document.createElement("div");
    const text = document.createElement("div");
    text.classList.add("karuta-text")
    body.classList.add("karuta-body");
    for (const split_item of item.text.split("　")) {
        const line = document.createElement("p");
        line.classList.add("karuta-line")
        line.textContent = split_item;
        text.appendChild(line)
    }
    const a = document.createElement("a")
    a.href=item.href;

    const img = document.createElement("img");
    let src = "../miso-basic.png";
    if (item.src)
        src = item.src;
    img.classList.add("karuta-img")

    img.src = src;
    a.appendChild(img)
    a.target="_blank"
    body.appendChild(text);
    elem.appendChild(body);

    container.appendChild(elem);
    container.appendChild(a);
    root.appendChild(container);

}
