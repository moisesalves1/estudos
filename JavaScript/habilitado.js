let funcionarios = [
    { id: 1, nome: "C�sar", habilitado: false },
    { id: 2, nome: "J�ssica", habilitado: false },
    { id: 3, nome: "Renan", habilitado: true },
    { id: 4, nome: "Marlon", habilitado: false },
    { id: 5, nome: "Ana", habilitado: false }
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {

    let funcionario = funcionarios[contador];

    if (funcionario.habilitado == true) {
        console.log("Funcion�rio habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcion�rio habilitado encontrado");
}