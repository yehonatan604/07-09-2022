const input = document.querySelector(".theInput");
const btn = document.querySelector("#btn");
const rdb = document.querySelector(".radioB1");
const output = document.querySelector(".theOutput");

rdb.checked=true;

btn.addEventListener("click", _ => {
    output.value = rdb.checked ? input.value.Hex2Bin() : input.value.Bin2Hex();
})

String.prototype.Hex2Bin = function () {
    return parseInt(this, 16).toString();
}

String.prototype.Bin2Hex = function () {
    return parseInt(this, 2).toString(16);
}