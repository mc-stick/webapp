import { deleteuser, usuarios} from "./firebase.js";

const tasksContainer = document.getElementById("clientes-list");

window.addEventListener("DOMContentLoaded", async (e) => {
  usuarios((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.nombre} ${task.apellido}</td>
        <td>${task.email}</td>
        <td>
          <button class="editar-btn" data-id="${doc.id}">Editar</button>
          <button class="delete-btn" data-id="${doc.id}">Borrar</button>
          
        </td>`;

      tasksContainer.appendChild(row);

      const deleteBtn = row.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => confirmarEliminarUsuario(doc.id));
    });
  });
});

function confirmarEliminarUsuario(id) {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
     deleteuser(id);
  }
}

