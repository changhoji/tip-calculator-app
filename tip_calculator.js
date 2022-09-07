var tip_text = document.querySelector("#tip-result>.result-price");
var total_text = document.querySelector("#total-result>.reuslt-price");

var bill = 0;
var tip = 0;
var people = 0;


function bill_changed(self) {
    var input_value = self.value;
    var error_text = document.querySelector("#bill-error");

    if (input_value.length == 0) {
        self.className = "empty";
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

        }
    }
}

function people_changed(self) {
    var input_value = self.value;
    var error_text = document.querySelector("#people-error");

    if (input_value.length == 0) {
        self.className = "empty";
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
            
        }
    }
}


// js 실행시점과 관련된 내용: https://velog.io/@ssket/Script%EC%9D%98-%EC%8B%A4%ED%96%89-%EC%8B%9C%EC%A0%90-%EC%A1%B0%EC%A0%88%ED%95%98%EA%B8%B0