function personScroll() {
    const personsBox = document.querySelector(".persons_box");
    const scrollLeftBtn = document.getElementById("scroll_left");
    const scrollRightBtn = document.getElementById("scroll_right");
    let scrollPosition = 0;

    return (
        scrollLeftBtn.addEventListener("click", function () {
            scrollPosition -= 450;
            if (scrollPosition <= 0) {
                scrollPosition = 0;
            }
            personsBox.style = `transform: translateX(-${scrollPosition}px);`;
        }),
        scrollRightBtn.addEventListener("click", function () {
            scrollPosition += 450;
            if (scrollPosition > 830) {
                scrollPosition = 830;
            }
            personsBox.style = `transform: translateX(-${scrollPosition}px);`;
        })
    );
}

export default personScroll;
