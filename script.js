var input = document.getElementById("container");

function send(){
    var txt = document.getElementById("msg")
    var msg1 = document.createElement("div")
    msg1.setAttribute('class', 'message1')
    var node = document.createTextNode(txt.value)
    msg1.appendChild(node)
    input.appendChild(msg1)
}

function send2(){
    var txt = document.getElementById("msg")
    var msg2 = document.createElement("div")
    msg2.setAttribute('class', 'message2')
    var node = document.createTextNode(txt.value)
    msg2.appendChild(node)
    input.appendChild(msg2)
}