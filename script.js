const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se deparou com a seguinte pergunta, qual o melhor meme da internet? o que voce responderia?",
        alternativas: [
            {
                texto: "Bora bill!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Receba!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Depois de responder a pergunta, uma professora da escola decidiu fazer uma sequência de aulas sobre estes memes. No fim de uma aula ela pede que você escreva um trabalho sobre como foram criados os memes. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet e pesquisa a fundo sobre a criaçao dos memes.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: qual é melhor, bora bill ou receba. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que o Bora bill é o maior meme da internet e que geraçoes futuras saberam dele.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Defende a ideia de que o receba é mais influente para as proximas geraçoes por ter o luva de pedreiro ainda gravando videos.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar um meme que represente o que pensa sobre tudo isso. E agora?",
        alternativas: [
            {
                texto: "Cria um meme chamado recebill, assim juntando as pessoas que amam os dois memes .",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Esquece de fazer por ficar jogando clash royale.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem que escolher entre ficar com os direitos autorais  do meme recebill ou vende-lo para uma empresa de marketing para que possam usa-lo. o que voce faz? ",
        alternativas: [
            {
                texto: "Fica com os direitos autorais.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Vende para a empresa.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "s";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
   //historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final nao importa qual foi a sua escolha, porque independente dela, voce deixou milhoes de pessoas felizes com o meme, recebil!";
    //textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
