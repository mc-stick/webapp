import {
  deleteped,
  paraRecibirPedidosanteriores,
  saveTask,
} from "./firebase.js";



const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });
  
  paraRecibirPedidosanteriores((querySnapshot) => {
    tasksContainer.innerHTML = "";
    
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      console.log(task)

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h4>CLIENTE:   ${task.id_cli}</h4>
    <p><b>PEDIDO: </b> ${task.detalle}</p>
    <p><b>FECHA: </b> ${task.fecha}</p>
    <p><b>DIRECCION:</b><a class="nav-link" href="${task.direccion}" target="_blank"><B>TOCA AQUI PARA VER LA UBICACION</B></a></p>
    <p><b>COSTO TOTAL:</b> RD$ ${task.total}</p>
    <div>
     
    </div>
    </div>`;
    });


  });
});


