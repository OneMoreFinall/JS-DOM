const input = document.getElementById("text");
const button = document.getElementById("submit");
const list = document.getElementById("list");
let itemEdit = null;

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


    //variabel untuk nyimpan input value
    const teksv = input.value.trim();
    //validasi input
    if (teksv !== "") {
         if (itemEdit) {
                const span = itemEdit.querySelector("span");
                span.textContent = teksv;
                itemEdit = null
                button.classList.remove("update-button");
                button.value = "Add To Do List";
         } else {
                //membuat elemen li 
                const li = document.createElement("li")
                //text item
                const span = document.createElement("span")
                span.textContent = teksv
                li.appendChild(span)


                //bikin tombol edit 
                const editBtn = document.createElement("button")
                editBtn.textContent = "Edit"
                editBtn.className = "edit"
                editBtn.addEventListener("click", function(){
                    input.value = span.textContent
                    button.value = "Update List"
                    button.classList.add("update-button");
                    itemEdit = li
        })
        li.appendChild(editBtn)

                //bikin tombol delete
                const deleteBtn = document.createElement("button")
                deleteBtn.textContent = "Delete"
                deleteBtn.className = "delete"
                deleteBtn.addEventListener("click", function(){
                    li.remove()
        })
        li.appendChild(deleteBtn)
            list.appendChild(li);
    }
            input.value = ""
    }

    //peringatan kalau input kosong
    else{
        alert("MANA TASKNYA")
    }