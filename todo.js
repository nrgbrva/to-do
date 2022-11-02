let input=document.querySelector('input');
input.style.paddingLeft='12px'
let button=document.querySelector('.btn')
let notes=document.querySelector('.notes')
let app=document.querySelector('.app')
let del=document.getElementsByTagName('i');
button.addEventListener('click',function(x){
    //button.style.display='none'
    x.preventDefault();
    notes.style.display='block'
    let newNote=document.createElement('div');
    newNote.innerText=input.value;
    newNote.setAttribute('class','input-part')
    newNote.style.border='none'
    newNote.style.marginBottom='10px'
    newNote.style.display='flex'
    newNote.style.alignItems='center'
    newNote.style.padding='0 20px'
    newNote.innerHTML+=`<i class="fa fa-trash" aria-hidden="true"></i>`
    newNote.style.justifyContent='space-between'
    notes.append(newNote)
    console.log(input.value)
})

