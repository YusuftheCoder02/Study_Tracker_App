// Study Tracker App without using Document Object Model (DOM) manipulation
// This app allows users to track their study sessions and view their progress over time.

// Responsive navbar: toggle the mobile menu
const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
})

/* Task input for non-mobile view */
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener ('click', () => { 
    const task = taskInput.value.trim(); /* trim() removes whitespace from both ends of a string */
    if (task) { /* Check if the task is not empty */
        addTask(task);
        taskInput.value = ''; // Clear the input field after adding the task
    }
});

/* Adding tasks to tasklist */
function addTask(task) {
    const listItem = document.createElement('li'); 
    listItem.textContent = task;
    taskList.appendChild(listItem);
}


