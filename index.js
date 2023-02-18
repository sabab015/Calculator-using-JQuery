function insertNumber(number) {
    var existingNumber = $("#result").val();
    $("#result").val(existingNumber + number);
}

function clearVal() {
    $("#result").val("");
}

function calculate() {
    var result = eval($("#result").val());
    $("#result").val(result);
}

function deleteNumber() {
    var presentValue = $("#result").val();
    if (presentValue != "") {
        $("#result").val(presentValue.slice(0, -1));
    }
}