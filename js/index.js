const call = document.querySelector("#call");
call.style = "color: rgb(113, 113, 113)";
document.querySelector("span").style = "color: rgb(113, 113, 113) ";
const items = document.querySelectorAll(".container_site_item");
items.forEach((el) => {
  el.style = "font-size: 25px";
});
const color = () => {
  if (call.style.color === "rgb(113, 113, 113)") {
    call.style = "color: rgb(236, 156, 61)";
  } else {
    call.style = "color: rgb(113, 113, 113)";
  }
};
const colorReact = () => {
  if (document.querySelector("span").style.color === "rgb(113, 113, 113)") {
    document.querySelector("span").style = "color: rgb(2,208,245) ";
  } else {
    document.querySelector("span").style = "color: rgb(113, 113, 113) ";
  }
};
const animationContainerSiteItem = (items) => {
  if (
    document.querySelector(".container_site_item").style.fontSize === "25px"
  ) {
    items.forEach((el) => {
      el.style = "font-size: 20px";
      el.style = "color:rgb(192, 192, 192)";
    });
  } else {
    items.forEach((el) => {
      el.style = "font-size: 25px";
    });
  }
};

setInterval(() => {
  color();
  colorReact();
  animationContainerSiteItem(items);
}, 3000);
