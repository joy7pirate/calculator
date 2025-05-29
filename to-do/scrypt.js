const input= document.getElementById('taskInput');
const listContainer= document.getElementById('list-container');

function addTask() {
    if(input.value === ""){
        alert("Please enter a task.");
        return;
    }else{
        let li= document.createElement('li');
        li.textContent= input.value;
        listContainer.appendChild(li);
        let span= document.createElement('span');
        span.textContent = "❌"; // Add a delete icon
        li.appendChild(span);
    }
    input.value = ""; // Clear the input field after adding the task
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the task when the delete icon is clicked
        saveData();
    } else if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Toggle the completed class when the task is clicked
        saveData();
    }
}
);  
function saveData() {
   localStorage.setItem('data', listContainer.innerHTML);

}
function showData () {
    listContainer.innerHTML = localStorage.getItem('data');
}showData ();
