
const items = [
    {
        title: "Moechat",
        image: "/img/moechat.png",
        url: "https://moechat.pages.dev/",
        size: "wide"
    },
    {
        title: "Find the Breadsellers",
        image: "/img/breadseller.png",
        url: "/ftbs",
        size: "square"
    },
    {
        title: "Vote for Everything",
        image: "/img/vote.png",
        url: "/voteforeverything/",
        size: "square"
    },
    {
        title: "Zoek de Bo's",
        image: "/img/zoekdebos.png",
        url: "https://turbowarp.org/886364357",
        size: "square"
    },
    {
        title: "Illegal Minecraft World",
        image: "/img/netherportalblock.png",
        url: "/minecraft/illegalworld.html",
        size: "square"
    },
    {
        title: "File Tools",
        image: "/img/unknown.png",
        url: "/filetools/",
        size: "square"
    },
    {
        title: "Elemental Quadrillion",
        image: "/img/elementalquadrillion.png",
        url: "/elementalquadrillion/",
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
