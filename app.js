let body = document.getElementsByTagName(`body`)[0];
let header = document.createElement(`header`);
let headerList = document.createElement(`ul`);
let cardsList = document.createElement(`ul`);
let bntLoadMore = document.createElement(`button`);

header.appendChild(headerList);

document.body.appendChild(header);

body.style.display = `flex`;
body.style.flexDirection = `column`;
body.style.justifyContent = `center`;

header.style.display = `flex`;
header.style.justifyContent = `center`;
header.style.height = `100px`;

headerList.style.listStyleType = `none`;
headerList.style.gap = `20px`;
headerList.style.display = `flex`;
headerList.style.justifyContent = `space-around`;
headerList.style.width = `600px`;

bntLoadMore.textContent = `Load more`;
bntLoadMore.style.width = `165px`;
bntLoadMore.style.height = `60px`;
bntLoadMore.style.backgroundColor = `white`;
bntLoadMore.style.border = `1px solid black`;
bntLoadMore.style.margin = `0 auto`;

let headerLiContent = [`LIFESTYLE`, `PHOTODIARY`, `MUSIC`, `TRAVEL`];

for (let i = 0; i < headerLiContent.length; i++) {
    let headerListItem = document.createElement(`li`);
    let headerA = document.createElement(`a`);
    headerList.appendChild(headerListItem);
    headerListItem.appendChild(headerA);
    headerA.textContent = headerLiContent[i];
    headerA.href = `https://www.rickroll.it/`;
    headerA.style.textDecoration = `none`;
    headerA.style.color = `black`;
}

let cardTitles = [ 
    `More than just a music festival`,
    `Life tastes better with coffee`,
    `American dream`, 
    `A dayexploring the alps`, 
    `Top 10 song for running`, 
    `Cold winter days`
];

for (let i = 0; i < 6; i++) {
    let card = document.createElement(`li`);
    let cardImg = document.createElement(`img`);
    let cardSubtitle = document.createElement(`h3`);
    let cardTitle = document.createElement(`h2`);
    let cardText = document.createElement(`p`);

    cardsList.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardSubtitle);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    card.style.width = `420px`;
    cardImg.style.width = `420px`;
    cardImg.style.height = `280px`;
    cardImg.src = `./img.jpg`;
    cardSubtitle.textContent = `LIFESTYLE`;
    cardTitle.textContent = cardTitles[i];
    cardText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.`;
}

document.body.appendChild(cardsList);

cardsList.style.listStyleType = `none`;
cardsList.style.display = `flex`;
cardsList.style.flexWrap = `wrap`;
cardsList.style.justifyContent = `space-around`;
cardsList.style.gap = `20px`;
cardsList.style.padding = `20px`;
cardsList.style.width = `1000px`;
cardsList.style.margin = `0 auto`;
document.body.appendChild(bntLoadMore);
