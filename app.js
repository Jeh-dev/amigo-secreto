let amigos = []

function adicionarAmigo() {
    let campoAdicionar = document.querySelector ('input').value;
    if (campoAdicionar && !amigos.includes (amigos)){
    amigos.push (campoAdicionar);
    console.log (amigos)
    }  else {
       if (campoAdicionar == '') {
        alert ('Erro!! por favor adicione um nome para continuar');
       }
       atualizarLista ();
    }
    limparCampo();
}
function limparCampo () {
    campoAdicionar = document.querySelector ('input');
    campoAdicionar.value = '';
}

function atualizarLista (){
    let lista = document.querySelector ('lista');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    console.log("Participantes:", amigos);

    if (amigos.length < 2) {
        alert('Por favor, adicione mais um nome para continuar!');
        return;
    }

    let sorteados = [];
    let resultado = [];

    for (let participante of amigos) {
        let amigoSecreto;
        
        do {
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            amigoSecreto = amigos[indiceAleatorio];
        } while (amigoSecreto === participante || sorteados.includes(amigoSecreto));

        sorteados.push(amigoSecreto);
        resultado.push(`${participante} vc tirou ${amigoSecreto}`);
    }

    alert(resultado.join("\n"));
}
//parabens vc conseguio fera

