let right = document.getElementsByClassName("right")[0];
let left = document.getElementsByClassName("left")[0];
let content = document.getElementsByClassName("content")[0];

width = -1 * (content.offsetWidth - 640);

let leftspace = 0;
right.addEventListener("click", (e) => {
    if (leftspace >= width) {
        leftspace -= 320;
        console.log(leftspace);
        let variable = `${leftspace}px`;
        content.style.left = variable;
    }
});

left.addEventListener("click", (e) => {
    if (leftspace !== 0) {
        leftspace += 320;
        console.log(leftspace);
        let variable = `${leftspace}px`;
        content.style.left = variable;
    }
});
