let input=document.querySelector('input');
let button=document.querySelector('.btn')
let notes=document.querySelector('.notes')
let app=document.querySelector('.app')
button.addEventListener('click',function(x){
    //button.style.display='none'
    x.preventDefault();
    let newNote=document.createElement('div');

    newNote.innerText=input.value;
    newNote.setAttribute('class','input-part')
    
    notes.append(newNote)
    console.log(input.value)
})
let del=document.querySelector('.input-part img')
del.addEventListener('click',function(x){
    x.preventDefault();
    
})
