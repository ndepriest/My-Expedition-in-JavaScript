function add_number() {

    var x = parseInt(document.getElementById("txt1").value);
    var y = parseInt(document.getElementById("txt2").value);
    var z = x + y;

    document.getElementById("txtsum").value = z;
}
