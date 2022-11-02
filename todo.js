let input=document.querySelector('input');
let button=document.querySelector('.btn')
let app=document.querySelector('.app')
button.addEventListener('click',function(x){
    //button.style.display='none'
    x.preventDefault();
    let newNote=document.createElement('div');

    newNote.innerText=input.value;
    newNote.setAttribute('class','input-part')
    newNote.style.background='red'
    app.append(newNote)
    console.log(input.value)
})