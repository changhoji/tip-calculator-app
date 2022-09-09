var tip_text = document.querySelector("#tip-result>.result-price");
var total_text = document.querySelector("#total-result>.result-price");

var tip_radio = document.querySelectorAll("input[name='tip']");
var tip_input = document.querySelector("#custom-tip-rate");

var bill = 0;
var tip = 0;
var people = 0;



function bill_changed(self) {
    var input_value = self.value;
    var error_text = document.querySelector("#bill-error");

    if (input_value.length == 0) {
        self.className = "empty";
        bill = 0;
    }
    else {
        if (isNaN(input_value)) {
            self.className = "error";
            error_text.innerHTML = "Should be a Number";
        }
        else if (Number(input_value) < 0) {
            self.className = "error";
            error_text.innerHTML = "Can't be minus"
        }
        else if (Number(input_value) == 0) {
            self.className = "error";
            error_text.innerHTML = "Can't be zero"
        }
        else {
            self.className = "valid";
            bill = Number(input_value);
        }
    }

    input_changed();
}

function tip_radio_clicked(self) {
    tip_input.value = "";
    tip = self.value;

    input_changed();
}

function custom_tip_focused() {
    for (var i = 0; i < tip_radio.length; i++) {
        tip_radio[i].checked = false;
    }
    tip_input.value="";
    tip = 0;
}

function custom_tip_changed(self) {
    var input_value = self.value;
    if (input_value[input_value.length-1] == '%')
        input_value = input_value.slice(0, -1);

    if (input_value.length == 0) {
        self.className = "empty";
        tip = 0;
    }
    else {
        if (isNaN(input_value)) {
            self.className = "error";
        }
        else if (Number(input_value) < 0) {
            self.className = "error";
        }
        else if (Number(input_value) == 0) {
            self.className = "error";
        }
        else {
            self.className = "valid";
            tip = Number(input_value);
        }
    }

    input_changed();
}

function people_changed(self) {
    var input_value = self.value;
    var error_text = document.querySelector("#people-error");

    if (input_value.length == 0) {
        self.className = "empty";
        people = 0;
    }
    else {
        if (isNaN(input_value)) {
            self.className = "error";
            error_text.innerHTML = "Should be a Number";
        }
        else if (!Number.isInteger(Number(input_value))) {
            self.className = "error";
            error_text.innerHTML = "Shoud be Integer";
        }
        else if (Number(input_value) < 0) {
            self.className = "error";
            error_text.innerHTML = "Can't be minus"
        }
        else if (Number(input_value) == 0) {
            self.className = "error";
            error_text.innerHTML = "Can't be zero"
        }
        else {
            self.className = "valid";
            people = Number(input_value);
        }
    }

    input_changed();
}

function input_changed() {
    if (bill && tip && people) {
        var tip_cost = bill*tip/100/people;
        tip_text.innerHTML = "$"+tip_cost.toFixed(2);
        var total_cost = bill/people+tip_cost;
        total_text.innerHTML = "$"+total_cost.toFixed(2);
    }
    else {
        tip_text.innerHTML = "$0.00";
        total_text.innerHTML = "$0.00";
    }
}

function reset_clicked() {
    document.querySelector("#bill-input").value = "";
    bill = 0;

    document.querySelector("#people-num-input").value = "";
    people = 0;

    document.querySelector("#custom-tip-rate").value = "";
    custom_tip_focused();

    input_changed();
}

// js 실행시점과 관련된 내용: https://velog.io/@ssket/Script%EC%9D%98-%EC%8B%A4%ED%96%89-%EC%8B%9C%EC%A0%90-%EC%A1%B0%EC%A0%88%ED%95%98%EA%B8%B0