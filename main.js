const inputBox = document.getElementById('input-box')
const listContainer = document.querySelector('.list-container')

function addTask(){

    if(inputBox.value === ""){
        alert ("you have to add your task !");
    } else {
        let li = document.createElement('li');        
        li.innerText = inputBox.value;
        // li.innerHTML += '<span><i>\u00d7</i></span>'
        // li.children.id = 'close-btn'
        let span = document.createElement('span')
        span.innerText = '\u00d7'
        span.id = 'close-btn'
        li.append(span);
        listContainer.append(li);

    }
    inputBox.value = '';

}


document.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    if(e.target.id === 'close-btn'){
        // alert('yeb')
        e.target.parentElement.remove();
    }
})


// console.log(listContainer.tagName);






