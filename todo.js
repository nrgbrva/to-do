let input = document.querySelector('input');
let button = document.querySelector('.btn')
let notes = document.querySelector('.notes')
let order = document.querySelector('img')

button.addEventListener('click', function (x) {
    x.preventDefault();
    if (input.value) {
        notes.style.display = 'block'
        let newNote = document.createElement('div');
        newNote.innerText = input.value;
        newNote.setAttribute('class', 'input-part')
        newNote.classList.add('active')
        newNote.innerHTML += `<i class="fa fa-trash" aria-hidden="true"></i>`
        notes.append(newNote)
        removeEl();
    }
    else {
        alert('bos qeyd')
    }

})
function removeEl() {
    let del = document.querySelectorAll('i');
    del.forEach((element, index) => {
        if (index != 0) {
            element.addEventListener('click', function (x) {
                x.preventDefault();
                element.parentElement.remove();
                notes=document.querySelector('.notes');
                    if(notes.children.length==0){
                        notes.style.display='none'
                    }
            })
        }
    });
}
let flag = false;
order.addEventListener('click', function (event) {

    event.preventDefault();
    let emp = [];
    let box = document.querySelectorAll('.notes .input-part')
    for (let index = 0; index < box.length; index++) {
        emp.push(box[index].innerText)
    }
    emp.sort();
    if (flag == false) {
        order.classList.add('transformed')
        flag = true
    }
    else if (flag == true) {
        order.classList.remove('transformed')
        emp.reverse();
        flag = false;
    }
    for (let index = 0; index < emp.length; index++) {
        box[index].innerHTML = emp[index] + '<i class="fa fa-trash" aria-hidden="true"></i>'
    }
    removeEl();

})

