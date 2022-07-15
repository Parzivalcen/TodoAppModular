
import { Task, taskDone } from "./UI/addTask";

import './styles/styles.css'
import { LSchangeDoneState, LSremoveTask, store } from "./StoreTask/store";
import { home } from "./UI/home";
import sideBar from "./UI/sideBar";

const body = document.body;
const main = document.createElement('main');
// Append header and side panel 
body.appendChild(home.header());
// Add new Project/Category
body.appendChild(sideBar.CategoryPopUpPanel());
// Toggle to show side panel 
sideBar.toggle();

body.appendChild(main);

main.appendChild(home.hero());

// const hero = document.createElement('div');
// hero.classList.add('container', 'container-hero');
// // Display task panel
// container.appendChild(todoPanel('Daily tasks'))

document.addEventListener('DOMContentLoaded', Task.displayTasks());

/*Take the input user input 
  from the text box, this file is located on ./UI/addTask.js*/  
Task.takeInput('daily');
// delete
document.addEventListener('click', (e) => {
  Task.deleteTask(e);
  Task.taskDone(e);
  store.LSremoveTask(e);
  store.changeDoneState(e);
  sideBar.categoryPressed(e);
  sideBar.showAddCategoryPanel(e);
  sideBar.addNewCategoryBtn(e);
  sideBar.deleteCategory(e);
})
// task done
