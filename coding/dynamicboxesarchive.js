
const items = [
    {
        title: "kiki pijl en boog appel schieter",
        image: "/img/unknown.png",
        url: "/archive/kikipijlenboogappelschieter.html",
        size: "square"
    },
    {
        title: "Elemental Infinity Tree",
        image: "/img/unknown.png",
        url: "/elementalinf.html",
        size: "square"
    }
];

const container = document.getElementById("dynamicBoxes");

items.forEach(item => {
    const box = document.createElement("a");

    box.href = item.url;
    box.className = `game-box ${item.size}`;

    box.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="game-title">${item.title}</div>
    `;

    container.appendChild(box);
});
