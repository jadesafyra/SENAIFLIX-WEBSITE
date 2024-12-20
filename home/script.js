function fecharCabecalhoMobile() {

    // Pega a referencia do elemento através do ID.
    let cabecalhoMobile = document.querySelector("#cabecalho-mobile");

    cabecalhoMobile.style.display = "none";

}

function abrirCabecalhoMobile() {

    let cabecalho = document.querySelector("#cabecalho-mobile");
    cabecalho.style.display = "block";

}

let midia = [
    {
        nome: "É Assim Que Acaba",
        classificacao: "16",
        genero: ["Drama", "Romance"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 2, 10),
        sinopse: "Lily Bloom, uma mulher que supera uma infância traumática para começar uma nova vida em Boston e perseguir o sonho de sua vida de abrir seu próprio negócio. Um encontro casual com o charmoso neurocirurgião Ryle Kincaid desencadeia uma conexão intensa, mas à medida que os dois se apaixonam profundamente, Lily começa a ver lados de Ryle que a lembram do relacionamento de seus pais. Quando o primeiro amor de Lily, Atlas Corrigan, reaparece repentinamente em sua vida, seu relacionamento com Ryle é abalado, e Lily percebe que deve aprender a confiar em sua própria força para fazer uma escolha impossível para o seu futuro.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "assimqueacaba.mp4",
        poster: "eassimqueacaba.webp",
        elenco: [
            "Blake Lively",
            "Justin Baldoni",
            "Jenny Slate",
            "Brandon Sklenar",
            "Hasan Minhaj",
            "Kevin McKidd"
        ],
        tipo: "filme"
    },
    {
        nome: "Um Lugar Silencioso: Dia Um",
        classificacao: "16",
        genero: ["Terror", "Ficção científica", "Thriller"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 1, 40),
        sinopse: "Quando Samira retorna para Nova York, sua viagem se transforma em um pesadelo angustiante quando as misteriosas criaturas que caçam pelo som atacam. Acompanhada de seu gato Frodo e de um aliado inesperado, Samira deve embarcar em uma perigosa jornada pela cidade que de repente ficou silenciosa, na qual a única regra é permanecer quieta para continuar viva.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "umlugarsilencioso.mp4",
        poster: "umlugarsilencioso.webp",
        elenco: [
            "Lupita Nyong'o",
            "Joseph Quinn",
            "Alex Wolff",
            "Djimon Hounsou",
            "Eliane Umuhire",
            "Takunda Khumalo"
        ],
        tipo: "filme"
    },
    {
        nome: "Bad Boys: Até o Fim",
        classificacao: "16",
        genero: ["Ação", "Comédia"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 1, 50),
        sinopse: "Depois que seu falecido ex-capitão é incriminado, Lowrey e Burnett tentam limpar seu nome, apenas para acabarem se tornando os mais procurados de Miami.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "badboys.mp4",
        poster: "badboys.webp",
        elenco: [
            "Will Smith",
            "Martin Lawrence",
            "Vanessa Hudgens",
            "Alexander Ludwig",
            "Paola Nuñez",
            "Eric Dane"
        ],
        tipo: "filme"
    },
    {
        nome: "Venom: A Última Rodada",
        classificacao: "16",
        genero: ["Ação", "Ficção científica", "Aventura"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 1, 50),
        sinopse: "Eddie e Venom estão fugindo. Perseguidos pelos dois mundos, a dupla é forçada a tomar uma decisão devastadora que vai fechar as cortinas da última rodada de Venom e Eddie.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "venom.mp4",
        poster: "venom.webp",
        elenco: [
            "Tom Hardy",
            "Chiwetel Ejiofor",
            "Juno Temple",
            "Peggy Lu",
            "Stephen Graham",
            "Alanna Ubach"
        ],
        tipo: "filme"
    },
    {
        nome: "Deadpool & Wolverine",
        classificacao: "18",
        genero: ["Ação", "Ficção científica", "Comedia"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 2, 8),
        sinopse: "Deadpool & Wolverine reúne o icônico mercenário tagarela Wade Wilson (Ryan Reynolds) e o poderoso mutante Wolverine (Hugh Jackman) em uma aventura explosiva, escrita e produzida pelos mesmos talentos por trás de Deadpool (2016) e Deadpool 2 (2018). Wade Wilson desfruta de um momento de aparente calma ao lado de Vanessa (Morena Baccarin) e seus amigos e, em contra partida, Wolverine se recupera de seus ferimentos. Um têm os seus caminhos cruzados com o outro, dando início a uma improvável aliança. Juntos, eles enfrentam um inimigo formidável em comum, desencadeando uma jornada repleta de ação, humor e reviravoltas surpreendentes. Deadpool & Wolverine promete ser uma aventura épica, cheia de referências aos quadrinhos e momentos de pura adrenalina, proporcionando aos fãs uma experiência única e inesquecível no universo dos super-heróis.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "deadpoolewolverine.mp4",
        poster: "deadpoolewolverine.webp",
        elenco: [
            "Ryan Reynolds",
            "Hugh Jackman",
            "Emma Corrin",
            "Matthew Macfadyen",
            "Dafne Keen",
            "Jon Favreau"
        ],
        tipo: "filme"
    },
    {
        nome: "Divertida Mente 2",
        classificacao: "18",
        genero: ["Animação", "Aventura", "Comedia"],
        ano: new Date(2024, 0, 0),
        duracao: new Date(0, 0, 0, 1, 4),
        sinopse: "Divertida Mente 2, da Disney e da Pixar, retorna à mente da adolescente Riley, e o faz no momento em que a sala de comando está passando por uma demolição repentina para dar lugar a algo totalmente inesperado: novas emoções! Alegria, Tristeza, Raiva, Medo e Nojinho não sabem bem como reagir quando Ansiedade aparece, e tudo indica que ela não está sozinha.",
        percentualGostei: "60",
        percentualNaoGostei: "40",
        trailer: "divertidamente.mp4",
        poster: "divertidamente.webp",
        elenco: [
            "Amy Poehler",
            "Maya Hawke",
            "Kensington Tallman",
            "Liza Lapira",
            "Tony Hale",
            "Phyllis Smith"
        ],
        tipo: "filme"
    },
    {
        nome: "Prison Break: Em Busca da Verdade",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Ação e aventura", "Crime", "Drama"],
        ano: new Date(2005, 0, 0),
        duracao: "5 temporadas",
        sinopse: "Lincoln Burrows é condenado injustamente à pena de morte. Só lhe resta confiar no irmão Michael Scofield, que executa um plano de fuga e se vê no meio de uma perigosa conspiração.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "prisonbreak.mp4",
        poster: "prisonbreak.webp",
        elenco: [
            "Wentworth Moleiro",
            "Dominic Purcell",
            "Roberto Knepper",
            "Amaury Nolasco",
            "Wade Williams",
            "Sarah Wayne Callies"
        ],
        tipo: "serie"
    },
    {
        nome: "O Senhor dos Anéis: Os Anéis de Poder",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Ação e aventura", "Ficção científica", "Fantasia", "Drama"],
        ano: new Date(2022, 0, 0),
        duracao: "2 temporadas",
        sinopse: "Tendo início em uma época de relativa paz, a série acompanha um grupo de personagens que enfrenta o ressurgimento do mal na Terra-média. Das profundezas escuras das Montanhas de Névoa, das majestosas florestas de Lindon, do belíssimo reino da ilha de Númenor, até os confins do mapa, esses reinos e personagens criarão legados que permanecerão vivos muito além de suas partidas.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "osenhordosaneis.mp4",
        poster: "osenhordosaneis.webp",
        elenco: [
            "Benjamin Walker",
            "Morfydd Clark",
            "Galadriel",
            "Charlie Vickers",
            "Roberto Aramaio",
            "Carlos Edwards",
            "Owain Arthur"
        ],
        tipo: "serie"
    },
    {
        nome: "Grey's Anatomy",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Drama"],
        ano: new Date(2005, 0, 0),
        duracao: "21 temporadas",
        sinopse: "Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "greysanatomy.mp4",
        poster: "greysanatomy.webp",
        elenco: [
            "Ellen Pompeo",
            "Chandra Wilson",
            "James Pickens Jr.",
            "Justin Chambers",
            "Kevin McKidd",
            "Jesse Williams"
        ],
        tipo: "serie"
    },
    {
        nome: "A Guerra dos Tronos",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Ficção científica e fantasia", "Drama", "Ação e aventura"],
        ano: new Date(2011, 0, 0),
        duracao: "8 temporadas",
        sinopse: "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "aguardostronos.mp4",
        poster: "gameofthrones.webp",
        elenco: [
            "Kit Harington",
            "Isaac Hempstead Wright",
            "Iain Glen",
            "Emília Clarke",
            "Nikolaj Coster-Waldau",
            "Pedro Dinklage"
        ],
        tipo: "serie"
    },
    {
        nome: "Sobrenatural",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Drama", "Mistério", "Sci-Fi & Fantasy"],
        ano: new Date(2005, 0, 0),
        duracao: "15 temporadas",
        sinopse: "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "sobrenatural.mp4",
        poster: "sobrenatural.webp",
        elenco: [
            "Ruth Connell",
            "Jim Beaver",
            "Mark Sheppard",
            "Misha Collins",
            "Jensen Ackles",
            "Jared Padalecki"
        ],
        tipo: "serie"
    },
    {
        nome: "O Segredo do Rio",
        classificacao: "16", // mantendo conforme orientação
        genero: ["Drama"],
        ano: new Date(2024, 0, 0),
        duracao: "1 temporada",
        sinopse: "Ao chegar a um vilarejo mexicano, um menino faz uma amizade improvável com um garoto local, e um segredo sombrio sela esse laço para sempre.",
        percentualGostei: "60", // mantendo conforme orientação
        percentualNaoGostei: "40", // mantendo conforme orientação
        trailer: "osegredodorio.mp4",
        poster: "osegredodorio.webp",
        elenco: [
            "Iazua Larios",
            "Mercedes Hernández",
            "Yoshira Escárrega",
            "Jero Medina",
            "Trinidad González",
            "Diego Calva"
        ],
        tipo: "serie"
    }
];

function carregarFilmes() {

    let filmeContainer = document.querySelector("#filmes-card-container");

    filmeContainer.innerHTML = ""; // Remove os cards existentes.

    let filmes = midia.filter(midia_ => midia_.tipo == "filme");

    for (const filme of filmes) {

        let novoCard = document.createElement("a");

        novoCard.classList.add("card");

        novoCard.href = "../detalhes-do-filme/";

        let novaURL = `url('../assets/imgs/${filme.poster}')`;

        novoCard.style.backgroundImage = novaURL;

        filmeContainer.appendChild(novoCard);

    }

}

function carregarSeries() {

    let filmeContainer = document.querySelector("#series-card-container");

    filmeContainer.innerHTML = ""; // Remove os cards existentes.

    let filmes = midia.filter(midia_ => midia_.tipo == "serie");

    for (const filme of filmes) {

        let novoCard = document.createElement("a");

        novoCard.classList.add("card");

        novoCard.href = "../detalhes-do-filme/";

        let novaURL = `url('../assets/imgs/${filme.poster}')`;

        novoCard.style.backgroundImage = novaURL;

        filmeContainer.appendChild(novoCard);

    }

}

function aoPesquisarPorTitulo(titulo) {

    //#region Filmes
    let resultadosFilmes = midia.filter(m => m.tipo == "filme" && m.nome.toLowerCase().includes(titulo.toLowerCase()));

    let filmeContainer = document.querySelector("#filmes-card-container");
    console.log(resultadosFilmes);

    filmeContainer.innerHTML = "";

    for (const filme of resultadosFilmes) {
        let novoCard = document.createElement("a")
        novoCard.classList.add("card")
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme"
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${filme.poster}')`

        filmeContainer.appendChild(novoCard)
    }

    if (resultadosFilmes.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        filmeContainer.appendChild(mensagem)
    }
    //#endregion

    //#region Series
    debugger;
    let resultadosSeries = midia.filter(m => m.tipo == "serie" && m.nome.toLowerCase().includes(titulo.toLowerCase()));

    let serieContainer = document.querySelector("#series-card-container");
    console.log(resultadosSeries);

    serieContainer.innerHTML = "";

    for (const serie of resultadosSeries) {
        let novoCard = document.createElement("a")
        novoCard.classList.add("card")
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme"
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${serie.poster}')`

        serieContainer.appendChild(novoCard)
    }

    if (resultadosSeries.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        serieContainer.appendChild(mensagem)
    }
    //#endregion

}

function aoFiltrarPorGenero(genero) {

    console.log("Gênero: ", genero);

    //#region filmes
    let filmesFiltrados = midia.filter(m => {
        if (m.tipo != "filme") {
            return false;
        }
        let encontrouOGenero = false;
        for (const genero_ of m.genero) {
            if (genero == genero_) {
                encontrouOGenero = true;
            }
        }
        if (encontrouOGenero == true) {
            return true;
        } else {
            return false;

        }

    });

    let filmeContainer = document.querySelector("#filmes-card-container");
    console.log(filmesFiltrados);

    filmeContainer.innerHTML = "";

    for (const filme of filmesFiltrados) {
        let novoCard = document.createElement("a")
        novoCard.classList.add("card")
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme"
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${filme.poster}')`

        filmeContainer.appendChild(novoCard)
    }

    if (filmesFiltrados.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        filmeContainer.appendChild(mensagem)
    }
    //#endregion 

    //#region series
    let seriesfiltrados = midia.filter(m => {
        if (m.tipo != "serie") {
            return false;
        }
        let encontrouOGenero = false;
        for (const genero_ of m.genero) {
            if (genero == genero_) {
                encontrouOGenero = true;
            }
        }
        if (encontrouOGenero == true) {
            return true;
        } else {
            return false;

        }

    });

    let seriescontainer = document.querySelector("#series-card-container");
    console.log(seriesfiltrados);

    seriescontainer.innerHTML = "";

    for (const filme of seriesfiltrados) {
        let novoCard = document.createElement("a")
        novoCard.classList.add("card")
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme"
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${filme.poster}')`

        seriescontainer.appendChild(novoCard)
    }

    if (seriesfiltrados.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        seriescontainer.appendChild(mensagem)
    }
    //#endregion 

}
console.log("filmes filtrados: ", seriesfiltrados)



function limparfiltros() {
    //#region Filmes
    let resultadosFilmes = midia.filter(m => m.tipo == "filme");

    let filmeContainer = document.querySelector("#filmes-card-container");
    console.log(resultadosFilmes);

    filmeContainer.innerHTML = "";

    for (const filme of resultadosFilmes) {
        let novoCard = document.createElement("a");
        novoCard.classList.add("card");
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme";
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${filme.poster}')`

        filmeContainer.appendChild(novoCard)
    }

    if (resultadosFilmes.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        filmeContainer.appendChild(mensagem)
    }
    //#endregion

    //#region Filmes
    
    let resultadosSeries = midia.filter(m => m.tipo == "serie");

    let SeriesContainer = document.querySelector("#series-card-container");
    console.log(resultadosFilmes);

    SeriesContainer.innerHTML = "";

    for (const Serie  of resultadosSeries) {
        let novoCard = document.createElement("a");
        novoCard.classList.add("card");
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme";
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${Serie.poster}')`

        SeriesContainer.appendChild(novoCard)
    }

    if (resultadosSeries.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        SeriesContainer.appendChild(mensagem)
    }

    //#endregion
}

//#region Filmes
function resultadosSeries() {
    let resultadosSeries = midia.filter(m => m.tipo == "serie");

    let serieContainer = document.querySelector("#series-card-container");
    console.log(resultadosSeries);

    serieContainer.innerHTML = "";

    for (const Series of resultadosSeries) {
        let novoCard = document.createElement("a");
        novoCard.classList.add("card");
        // <a class="card"> </a>

        novoCard.href = "../detalhes-do-filme";
        // <a class="card" href="../detalhes-do-filme"> </a> 

        novoCard.style.backgroundImage = `url('../assets/imgs/${filme.poster}')`

        serieContainer.appendChild(novoCard)
    }

    if (resultadosSeries.length == 0) {
        let mensagem = document.createElement("p")

        mensagem.textContent = "Nenhum resultado encontrado."

        mensagem.style.textAlign = "center"

        mensagem.style.color = "#555"

        serieContainer.appendChild(mensagem)
    }
    //#endregion

}









// Juntar texto com um variável
// Concatenação
// console.log("Filme: " + nomeDoFilme + "Assista!" + atores)

// Interpolação
// console.log(`Filme: ${nomeDoFilme} Assista! ${atores}`)





