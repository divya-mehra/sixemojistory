let options = {
    // root: document.querySelector("#scrollArea"),
    // rootMargin: "100% 0% 100% 0%",
    threshold: 0.9,
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id)
        console.log("Element with ID " + entry.target.id + " is intersecting!");
      }
    });
  };
  
let observer = new IntersectionObserver(handleIntersection, options);

let panels = document.querySelectorAll(".textPanel");

console.log(panels)

panels.forEach((p) => {
    observer.observe(p);
    
})


