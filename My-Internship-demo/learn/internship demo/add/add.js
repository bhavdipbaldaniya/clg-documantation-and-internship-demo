function Calc() {
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var data = document.getElementById("data").value;

    var ans = eval(val1 + data + val2);
    document.getElementById("ans").value = ans;
}