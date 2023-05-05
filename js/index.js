const repositorio_thead = document.querySelector(".repositorio-thead");
const repositorio_tbody = document.querySelector(".repositorio-tbody");

function aplicarFiltro() {
    console.log(document.getElementById("filtro").value)

    let filtro = document.getElementById("filtro").value;

    fetch("js/datos.json")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(datos) {
        let out_thead = "";
        let out_tbody = "";
        let cont = 1;
        
        if (filtro == "todo") {
            out_thead += `
                <tr>
                    <th>ID</th>
                    <th>Fecha y hora</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Centro</th>
                    <th>Edad</th>
                    <th>Red social preferida</th>
                    <th>Uso principal</th>
                    <th>Uso diario?</th>
                    <th>Tiempo de uso</th>
                    <th>Alternativa a las redes</th>
                    <th>Abstenerse 1 semana de las redes</th>
                </tr>                
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.id}</td>
                        <td>${dato.fecha}</td>
                        <td>${dato.nombre}</td>
                        <td>${dato.apellidos}</td>
                        <td>${dato.centro}</td>
                        <td>${dato.edad}</td>
                        <td>${dato.preferencias}</td>
                        <td>${dato.uso_principal}</td>
                        <td>${dato.diario}</td>
                        <td>${dato.uso}</td>
                        <td>${dato.alternativas}</td>
                        <td>${dato.abstiencia}</td>
                    </tr>
                `;
            cont++;
            }
        } else if (filtro == "personal") {
            out_thead += `
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Centro</th>
                    <th>Edad</th>
                </tr>                
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.id}</td>
                        <td>${dato.nombre}</td>
                        <td>${dato.apellidos}</td>
                        <td>${dato.centro}</td>
                        <td>${dato.edad}</td>
                    </tr>
                `;
            cont++;
            }            
        } else {
            out_thead += `
                <tr>
                    <th>ID</th>
                    <th>Fecha y hora</th>
                    <th>Nombre</th>
                    <th>Red social preferida</th>
                    <th>Uso principal</th>
                    <th>Uso diario?</th>
                    <th>Tiempo de uso</th>
                    <th>Alternativa a las redes</th>
                    <th>Abstenerse 1 semana de las redes</th>
                </tr>                
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.id}</td>
                        <td>${dato.fecha}</td>
                        <td>${dato.nombre}</td>
                        <td>${dato.preferencias}</td>
                        <td>${dato.uso_principal}</td>
                        <td>${dato.diario}</td>
                        <td>${dato.uso}</td>
                        <td>${dato.alternativas}</td>
                        <td>${dato.abstiencia}</td>
                    </tr>
                `;
            cont++;
            }
        }
        repositorio_thead.innerHTML = out_thead;
        repositorio_tbody.innerHTML = out_tbody;
    })
}

aplicarFiltro()