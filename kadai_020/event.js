//HTML要素を定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

//ボタンをクリックしたときに文字を変更する処理
buttonElement.addEventListener("click", () => {
    //テキストを変更
    textElement.textContent = "ボタンをクリックしました";
});
