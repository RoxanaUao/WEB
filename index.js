import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
    onGetAlumnos,
    saveAlumno,
  } from "./firebase.js";

window.addEventListener('DOMContentLoaded',()=>{
    
})

const taskForm = document.getElementById('task-form')
const alumnoForm = document.getElementById('alumno-form')

const tasksContainer = document.getElementById("tasks-container");
const alumnosContainer = document.getElementById("alumnos-container");
const alumnos1Container = document.getElementById("alumnos1-container");
const alumnos2Container = document.getElementById("alumnos2-container");
const alumnos3Container = document.getElementById("alumnos3-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetAlumnos((querySnapshot) => {

        //----------GUIA DE CADA COLUMNA GENERAL---------
        alumnosContainer.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const alumno = doc.data();
    
          alumnosContainer.innerHTML += `
          <div class="card card-body mt-2 border-primary">
        <h3 class="h5">${alumno.nombre}</h3>
        <p>${alumno.carril}</p>
        <p>${alumno.grado}</p>
        <p>${alumno.padre}</p>
      </div>`;
        });
        //aqui termina el snapsphot


        //---------COLUMNA 1--------------------------

        alumnos1Container.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const alumno = doc.data();
          const color = "";
    
          if (alumno.carril == 1){
            if(alumno.grado == "primaria"){
                alumnos1Container.innerHTML += `
                <div class="card text-center text-white bg-info mb-3" style="max-width: 40rem;">
                    <h3 class="h5">${alumno.nombre}</h3>
                </div>`;
            }
            if(alumno.grado == "bachillerato"){
                alumnos1Container.innerHTML += `
                <div class="card text-center text-white bg-primary mb-3" style="max-width: 40rem;">
                    <h3 class="h5">${alumno.nombre}</h3>
                </div>`;
            }
            if(alumno.grado == "pre-escolar"){
                alumnos1Container.innerHTML += `
                <div class="card text-center text-white bg-success mb-3" style="max-width: 40rem;">
                    <h3 class="h5">${alumno.nombre}</h3>
                </div>`;
            }
            
          }
          
        });
        //aqui termina el snapsphot

        //---------COLUMNA 2
        alumnos2Container.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const alumno = doc.data();
    
          alumnos2Container.innerHTML += `
          <div class="card card-body mt-2 border-primary">
        <h3 class="h5">${alumno.nombre}</h3>
        <p>${alumno.carril}</p>
        <p>${alumno.grado}</p>
        <p>${alumno.padre}</p>
      </div>`;
        });
        //aqui termina el snapsphot
        alumnos3Container.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const alumno = doc.data();
    
          alumnos3Container.innerHTML += `
          <div class="card card-body mt-2 border-primary">
        <h3 class="h5">${alumno.nombre}</h3>
        <p>${alumno.carril}</p>
        <p>${alumno.grado}</p>
        <p>${alumno.padre}</p>
      </div>`;
        });
        //aqui termina el snapsphot
      });
      
      
  });
  

  alumnoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const nombre = alumnoForm["alumno-nombre"];
    const grado = alumnoForm["alumno-grado"];
    const padre = alumnoForm["alumno-padre"];
    const carril = alumnoForm["alumno-carril"];
  
    try {
      if (!editStatus) {
        await saveAlumno(nombre.value, grado.value, padre.value, carril.value);
      } else {
        await updateTask(id, {
          title: title.value,
          description: description.value,
        });
  
        editStatus = false;
        id = "";
        alumnoForm["btn-alumno-form"].innerText = "Save";
      }
  
      alumnoForm.reset();
      nombre.focus();
    } catch (error) {
      console.log(error);
    }
  });