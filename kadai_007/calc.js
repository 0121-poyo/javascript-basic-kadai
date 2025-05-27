// 変数の代入
let num = 30;

// 変数numの値が3と5の倍数の場合： “3と5の倍数です”
if (num % 3 == 0 && num % 5 == 0) {
    console.log("3と5の倍数です");
}
// 変数numの値が3の倍数の場合： “3の倍数です”
else if (num % 3 == 0) {
    console.log("3の倍数です");
}
// 変数numの値が5の倍数の場合： “5の倍数です”
else if (num % 5 == 0) {
    console.log("5の倍数です");
}
// それ以外のときは、"num"を出力
else {
    console.log(num);
}
