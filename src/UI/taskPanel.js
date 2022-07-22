import { store } from "../StoreTask/store";
import { home } from "./home";
// date-fns
import { format } from "date-fns";
import addDays from "date-fns/addDays";

export default class taskDescPanel {
  static panel (task) {
    const panel = document.createElement('div');
    panel.classList.add('taskDescPanel')
    // get date for date input value
    panel.innerHTML = `
    <div class="title title--task">
      <h1>${task.title}</h1>
    </div>
    <div>
      <input type="date" id="due-Date" name="due-Date">
      <button class="due-Date-btn">Set</button>
    </div>
    <div>
      <p contenteditable="true">Add notes here</p>
      <button class="add-task-note">Add</button>
      <p class="deadline">Deadline: ${task.dueDate}</span></p>
    </div>
    <div>
      <p>Date Created: ${task.dateCreated}</p>
    </div>
    `
    const hero = document.querySelector('.container-hero')
    // The e.target gets the title
    hero.appendChild(panel)
    home.clearDescPanel();

    return panel
  }
  static showPanel(e){
    if(e.target.parentElement.classList.contains('task-content')){
      const hero = document.querySelector('.container-hero')
      const taskTitle =  e.target.parentElement.firstElementChild.textContent;
      console.log(taskTitle);
      const task = store.getSingleTask(taskTitle);
      // The e.target gets the title
      hero.appendChild(this.panel(task))
      
    }
  }
  
    // Date
    static getDate (e){
      if (e.target.classList.contains('due-Date-btn')){
        let date = document.querySelector('#due-Date').value;
        date = format(new Date(date.replace(/-/g, '/')), 'MM/dd/yyyy')
        const title = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
        store.addDate(title, date);
        this.updateDate(title);
        return date;
      }
    }
    static updateDate(title){
      // Show date
      const deadline = document.querySelector('.deadline');
      const task = store.getSingleTask(title)
      deadline.innerHTML = `Deadline: ${task.dueDate}`;
    }
  
}