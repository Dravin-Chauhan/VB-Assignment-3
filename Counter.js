let count = 0;
document.getElementById("counter").textContent = count;
let reset = document.getElementById("reset");
function increase() {
    count++;
    document.getElementById("counter").textContent = count;
}
function decrease() {
    if(count > 0)
    {
        count--;
        document.getElementById("counter").textContent = count;
    }
}
reset.addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").textContent = count;
})
