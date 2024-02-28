blank = document.querySelectorAll(".blank");
for (let i=0; i<blank.length; i++){
    blank[i].addEventListener("click", () => {
        blank[i].classList.toggle("true");
    })
}

// ↓配列のコード↓

number = [1, 2, 3, 5, 8, 13, 21];//左のような数字の列を「配列」という。

for (let i=0; i<number.length; i++){
    console.log(number[i]);
}