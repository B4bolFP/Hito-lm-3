fetch("js/datos.json")
.then(function(response) {
    return response.json();
})

.then(function(datos) {
    let repositorio = document.querySelector(".repositorio")

    let out = "";
    let cont = 1;
    for (let dato of datos) {
        out += `
            <tr>
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

    repositorio.innerHTML = out;
})