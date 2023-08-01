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

// intersection observer

let options = {
  // root: document.querySelector("#scrollArea"),
  // rootMargin: "100% 0% 100% 0%",
  threshold: 0.9,
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      console.log("Element with ID " + entry.target.id + " is intersecting!");
    }
  });
};

let observer = new IntersectionObserver(handleIntersection, options);

let panels = document.querySelectorAll(".textPanel");

console.log(panels);

panels.forEach((p) => {
  observer.observe(p);
});
