const input = document.getElementById("text")
const button = document.getElementById("submit")
const list = document.getElementById("list")

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const li = document.createElement("li")
        li.textContent = input.value
        list.appendChild(li)
        input.value = ""
    } else {
        alert("MANA TASKNYA")
    }
})

