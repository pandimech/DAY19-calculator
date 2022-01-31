var div = create('div', "container");
var form = create1('form', "form");
var input1 = create2('input', "calc", "text", "answer");
var input2 = create3("input", "button", "1", "form.answer.value += '1'");
var input3 = create3("input", "button", "2", "form.answer.value += '2'");
var input4 = create3("input", "button", "3", "form.answer.value += '3'");
var input5 = create3("input", "button", "4", "form.answer.value += '4'");
var input6 = create3("input", "button", "5", "form.answer.value += '5'");
var input7 = create3("input", "button", "6", "form.answer.value += '6'");
var input8 = create3("input", "button", "7", "form.answer.value += '7'");
var input9 = create3("input", "button", "8", "form.answer.value += '8'");
var input10 = create3("input", "button", "9", "form.answer.value += '9'");
var input11 = create3("input", "button", "0", "form.answer.value += '0'");
var input12 = create3("input", "button", "-", "form.answer.value += '-'");
var input13 = create3("input", "button", "+", "form.answer.value += '+'");
var input14 = create3("input", "button", "/", "form.answer.value += '/'");
var input15 = create3("input", "button", "*", "form.answer.value += '*'");
var input16 = create3("input", "button", ".", "form.answer.value += '.'");
var input17 = create3("input", "button", "=", "form.answer.value = eval(form.answer.value)");
var input18 = create3("input", "button", "clear all", "form.answer.value = ''", "id");
var br1 = br("br");
var br11 = br("br")
var br2 = br("br");
var br22 = br("br");
var br3 = br("br");
var br33 = br("br");
var br4 = br("br");
var br44 = br("br");
var br5 = br("br");
var br55 = br("br");



form.append(input1, br1, br11, input2, input3, input4, input13, br2, br22, input5, input6, input7, input12, br3, br33, input8, input9, input10, input15, br4, br44, input14, input11, input16, input17, br5, br55, input18)
div.append(form);
document.body.append(div);


function br(tag) {
    var br = document.createElement(tag);
    return br;
}

function create(tag, classname) {
    var divc = document.createElement(tag);
    divc.setAttribute("class", classname)
    return divc;

}

function create1(tag, name) {
    var formc = document.createElement(tag);
    formc.setAttribute('name', name)
    return formc;
}

function create2(tag, id, type, name) {
    var inputc = document.createElement(tag);
    inputc.setAttribute("id", id);
    inputc.setAttribute("type", type);
    inputc.setAttribute("name", name);
    return inputc;

}

function create3(tag, button, value, onclick, id) {
    var inputcc = document.createElement(tag);
    inputcc.setAttribute("type", button);
    inputcc.setAttribute("value", value);
    inputcc.setAttribute("onClick", onclick);
    inputcc.setAttribute("id", id);
    return inputcc;
}
