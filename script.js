// emoji data

const heart = [
  "28",
  "29",
  "33",
  "34",
  "39",
  "40",
  "41",
  "42",
  "44",
  "45",
  "46",
  "47",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "101",
  "102",
  "103",
  "104",
  "105",
  "114",
  "115",
  "116",
  "127",
];
// const poop = ['28', '29', '33', '34', '39', '40', '41', '42', '44', '45', '46', '47', '51', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '69', '70', '71', '76', '77', '78', '79', '80', '81', '82', '88', '89', '90', '91', '92', '93', '94', '101', '102', '103', '104', '105', '114', '115', '116', '127'];
const hand = [
  "6",
  "7",
  "8",
  "16",
  "17",
  "18",
  "20",
  "21",
  "22",
  "28",
  "30",
  "32",
  "34",
  "35",
  "36",
  "40",
  "42",
  "44",
  "46",
  "48",
  "52",
  "54",
  "56",
  "58",
  "60",
  "64",
  "66",
  "68",
  "70",
  "72",
  "76",
  "82",
  "84",
  "88",
  "96",
  "97",
  "98",
  "99",
  "100",
  "101",
  "108",
  "109",
  "120",
  "121",
  "131",
  "134",
  "135",
  "136",
  "137",
  "138",
  "139",
  "140",
  "141",
  "142",
];
// const bomb = ['28', '29', '33', '34', '39', '40', '41', '42', '44', '45', '46', '47', '51', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '69', '70', '71', '76', '77', '78', '79', '80', '81', '82', '88', '89', '90', '91', '92', '93', '94', '101', '102', '103', '104', '105', '114', '115', '116', '127'];
const bee = [
  "1",
  "2",
  "5",
  "6",
  "9",
  "10",
  "14",
  "17",
  "20",
  "23",
  "26",
  "27",
  "28",
  "29",
  "31",
  "34",
  "35",
  "36",
  "38",
  "42",
  "43",
  "45",
  "49",
  "51",
  "53",
  "55",
  "57",
  "61",
  "63",
  "65",
  "67",
  "69",
  "70",
  "74",
  "78",
  "81",
  "83",
  "84",
  "87",
  "88",
  "89",
  "92",
  "95",
  "99",
  "101",
  "103",
  "106",
  "108",
  "110",
  "113",
  "114",
  "117",
  "120",
  "121",
  "124",
  "127",
  "128",
  "132",
  "135",
  "141",
  "142",
  "143",
];
// const thumb = ['28', '29', '33', '34', '39', '40', '41', '42', '44', '45', '46', '47', '51', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '69', '70', '71', '76', '77', '78', '79', '80', '81', '82', '88', '89', '90', '91', '92', '93', '94', '101', '102', '103', '104', '105', '114', '115', '116', '127'];

let current_emoji;
let panels = document.querySelectorAll(".textPanel");

// make grid

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 144; i++) {
  let rect = document.createElement("div");
  let divId = "rect-" + i;
  rect.classList.add("rect");
  rect.setAttribute("id", divId);
  fragment.append(rect);
}

const gridPanels = document.querySelector(".gridPanel");

gridPanels.append(fragment);

// scroll behavior

const scrollToDiv = (number) => {
  let targetPanel;
  console.log(number);
  Array.from(panels).forEach((p) => {
    if (p.id === number) targetPanel = p;
  });
  targetPanel.scrollIntoView({ behavior: "smooth" });
};

let chapters = document.querySelectorAll(".chapter");
chapters.forEach((chapter) => {
  let number = chapter.firstElementChild.innerHTML.slice(-1);
  chapter.addEventListener("click", () => {
    scrollToDiv(number);
  });
});

// intersection observer

let options = {
  // root: document.querySelector("#scrollArea"),
  // rootMargin: "100% 0% 100% 0%",
  threshold: 0.9,
};

const clearGrid = () => {
  let allRects = document.querySelectorAll(".rect");
  allRects.forEach((e) => {
    if (e.classList.contains("filled")) {
      e.classList.remove("filled");
    }
  });
};

const changeGrid = (emoji) => {
  clearGrid();
  emoji.forEach((e) => {
    let id = `rect-${e}`;

    document.getElementById(id).classList.add("filled");
  });
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id = entry.target.id;
      console.log("Element with ID " + entry.target.id + " is intersecting!");

      if (id === "1") {
        current_emoji = heart;
      } else if (id === "2") {
        current_emoji = hand;
      } else if (id === "3") {
        current_emoji = bee;
      } else {
        current_emoji = heart;
      }

      changeGrid(current_emoji);
    }
  });
};

let observer = new IntersectionObserver(handleIntersection, options);

console.log(panels);

panels.forEach((p) => {
  observer.observe(p);
});
