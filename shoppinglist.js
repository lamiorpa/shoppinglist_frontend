// Render existing items in shopping list
var listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    let span = document.createElement("span");
    let icon = document.createTextNode("x")
    span.className = "close";
    span.appendChild(icon);
    listItems[i].appendChild(span);
}

// Add item removal to "x" span
let closeSpans = document.getElementsByClassName("close");
for (let span of closeSpans) {
    span.onclick = () => {
        span.parentElement.parentElement.removeChild(span.parentElement);
    }
    console.log(span);
}

function createNewElement() {
    let inputValue = document.getElementById("listInput").value;
    if (inputValue === "") {
        return;
    }
    let li = document.createElement("li");
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    document.getElementById("listInput").value = "";

    // Create button for removal
    let span = document.createElement("span");
    let icon = document.createTextNode("x")
    span.className = "close";


    span.onclick = () => {
        span.parentElement.parentElement.removeChild(span.parentElement);
        console.log(span)
    }

    span.appendChild(icon);
    li.appendChild(span);

    document.getElementById("list").appendChild(li);
}

