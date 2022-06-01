// JavaScript source code
var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
    { titulo: "F�rmula para maratonar s�ries", conteudo: "Chuck Norris pode assistir um epis�dio de 60 minutos em 22 segundos." },
    { titulo: "Suicida que n�o morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris j� viu o homem invis�vel." },
    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris n�o usa rel�gio. Ele decide que horas s�o." },
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
    { titulo: "N�o vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa p�lvora como tempero." },
    { titulo: "Extin��o dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou at� o infinito. Duas vezes." }
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("T�tulo: " + titulo_curiosidade);
console.log("Conte�do: " + conteudo_curiosidade);