const chuvas_meteoros = [
    { nome: "Alfa Centaur�deos", pico: "Fev 8", velocidade: "56 km/s" },
    { nome: "Gama Norm�deos", pico: "Mar 14", velocidade: "56 km/s" },
    { nome: "Pi Pup�deos", pico: "Abr 23", velocidade: "18 km/s" },
    { nome: "Eta Aqu�ridas", pico: "Mai 5", velocidade: "66 km/s" },
    { nome: "Alfa Capricorn�deos", pico: "Jul 30", velocidade: "23 km/s" },
    { nome: "Delta Aqu�ridas do Sul", pico: "Jul 28", velocidade: "41 km/s" },
    { nome: "Piscis Austrin�deos", pico: "Jul 28", velocidade: "35 km/s" },
    { nome: "Fen�cidas", pico: "Dez 6", velocidade: "18 km/s" },
    { nome: "Pupidas-Velidas", pico: "Dez 12", velocidade: "40 km/s" }
];

let titulo = "=== chuvas de meteoros - hemisf�rio sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for (const chuva of chuvas_meteoros) {

    let nome_chuva = chuva.nome;
    let velocidade_chuva = chuva.velocidade;

    let pico_chuva = chuva.pico.split(" ");

    let pico_dia = pico_chuva[1];
    let pico_mes = pico_chuva[0];

    let pico_mes_nome = "";

    switch (pico_mes) {
        case "Jan":
            pico_mes_nome = "Janeiro";
            break;
        case "Fev":
            pico_mes_nome = "Fevereiro";
            break;
        case "Mar":
            pico_mes_nome = "Mar�o";
            break;
        case "Abr":
            pico_mes_nome = "Abril";
            break;
        case "Mai":
            pico_mes_nome = "Maio";
            break;
        case "Jun":
            pico_mes_nome = "Junho";
            break;
        case "Jul":
            pico_mes_nome = "Julho";
            break;
        case "Ago":
            pico_mes_nome = "Agosto";
            break;
        case "Set":
            pico_mes_nome = "Setembro";
            break;
        case "Out":
            pico_mes_nome = "Outubro";
            break;
        case "Nov":
            pico_mes_nome = "Novembro";
            break;
        case "Dez":
            pico_mes_nome = "Dezembro";
            break;

        default: pico_mes_nome = "M�s inv�lido";
            break;


    }


    let pico_data_chuva_formata = `${pico_dia} de ${pico_mes_nome}`;

    let velocidade_formata = velocidade_chuva.replace("km/s", "quil�metros por segundo");

    console.log("Nome:".padEnd(50, ".") + nome_chuva);
    console.log("Pico:".padEnd(50, ".") + pico_data_chuva_formata);
    console.log("Velocidade:".padEnd(50, ".") + velocidade_formata);
    console.log("\n");
 

}

