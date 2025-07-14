function addTask() {
    //Ul tag
    const taskList = document.getElementById("list")
    //Input tag
    const task = document.getElementsByName("Task")[0].value;
    //create a <li>
    const list = document.createElement("li");
    list.innerHTML=`
    <span>${task}</span>
    <button id="deleteTask">Delete</button>
    `;
    //delete task event listner
    const deleteBtn = list.querySelector(".delete-btn");
    //add in task list
    taskList.appendChild(list);
    //Erase input Text
    document.getElementsByName("Task")[0].value = "";
}
