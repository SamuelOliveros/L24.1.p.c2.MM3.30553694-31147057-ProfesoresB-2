import profesores from "./profesores.js";
import contratado from "./contratado.js";
import fijo from "./fijo.js";

let profesores = new profesores();
let contratado1 = new contratado("Rafael", 30, 15);
let contratado2 = new contratado("Felicia", 30, 20);

let salida = document.getElementById("salida");
let mostrarprof = (prof) => {
  return `
      <tr>
          <td>${prof.nombre}</td>
          <td>${prof.bono}</td>
  
          <td>${prof.sueldo}</td>
          <td>$${prof.pago()}</td>
      </tr>
      `;
};

salida.innerHTML = `
  <table>
      <tr>
          <th>Nombre del Profesor Contratado</th>
          <th>Monto del Bono</th>
          <th>Monto del Sueldo</th>
          <th>Ingreso total del Profesor</th>
          
      </tr>
      ${mostrarprof(contratado1)}
      ${mostrarprof(contratado2)}
      
      
  </table>
  
  `;
