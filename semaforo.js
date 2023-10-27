const img = document.getElementById( 'img' );
/*Esse código em JavaScript busca um elemento HTML com o 
atributo "id" igual a "img" e armazena esse elemento na 
constante img. Ele utiliza o método getElementById() 
do objeto document para encontrar o elemento desejado 
na página HTML. A partir desse momento, é possível realizar 
operações e manipulações no elemento de imagem referenciado 
pela constante img. */
const buttons = document.getElementById( 'buttons' );
/* Esse código em JavaScript busca um elemento HTML com o 
atributo "id" igual a "buttons" e armazena esse elemento na 
constante buttons. Ele utiliza o método getElementById() do 
objeto document para encontrar o elemento desejado na página HTML. 
A partir desse momento, é possível realizar operações e manipulações 
no elemento (geralmente um contêiner) referenciado pela constante buttons, 
como adicionar ou remover botões, modificar seu conteúdo, entre outras ações.*/
let colorIndex =0;
/*Esse código em JavaScript declara uma variável chamada colorIndex e atribui 
a ela o valor inicial de 0. Essa variável pode ser usada para rastrear um índice 
relacionado a cores ou qualquer outro propósito no programa. O valor de colorIndex 
pode ser atualizado e manipulad */
let intervalId = null;
/* */



const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
/*Esse código em JavaScript utiliza o operador ternário para retornar um valor 
com base em uma condição. A expressão avalia se a variável colorIndex é menor que 2.
Se essa condição for verdadeira, o operador de incremento ++ é aplicado à variável 
colorIndex, ou seja, o valor de colorIndex é incrementado em 1. Esse novo valor é 
retornado como resultado da expressão.
Caso a condição seja falsa (ou seja, se colorIndex for igual ou maior que 2), 
o valor retornado é 0.
Assim, essa linha de código retorna o valor atualizado de colorIndex se ele for menor que 2, 
caso contrário, retorna 0. */

const changeColor = () => {
    const colors = ['green','yellow','red']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}/*Esse código em JavaScript define uma função chamada changeColor. 
Quando essa função é chamada, ela executa as seguintes ações:
Cria uma constante colors que é um array contendo as cores 'red', 
'yellow' e 'green'.
Acessa o elemento do array colors correspondente ao valor atual de 
colorIndex e armazena esse valor na constante color.
Chama a função turnOn[color](), onde color é a cor atual do semáforo. 
Essa função irá realizar uma ação específica associada à cor do semáforo, 
como alterar a imagem.
Chama a função nextIndex(). Essa função provavelmente faz parte de outro 
trecho de código e tem como objetivo atualizar o valor de colorIndex, 
avançando para a próxima cor.
Basicamente, essa função changeColor é responsável por trocar a cor 
do semáforo para a próxima cor da sequência (vermelho, amarelo, verde), 
chamando a função correspondente definida anteriormente no objeto turnOn, 
e depois atualizando o índice da cor para avançar para a próxima cor. */

const stopAutomatic = () => {
    clearInterval ( intervalId );
}/*Esse código em JavaScript define uma função chamada stopAutomatic. 
Quando essa função é chamada, ela utiliza a função clearInterval() 
para interromper o intervalo de tempo definido anteriormente por meio 
do identificador de intervalo armazenado na variável intervalId.
Essa função é útil quando se deseja parar a alteração automática de 
cores da imagem, que foi definida pelo setInterval(). Ao chamar a função 
stopAutomatic(), o intervalo é cancelado e a troca de cores para de ocorrer 
automaticamente. */

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1500 )
}/* Esse código em JavaScript cria um objeto chamado turnOn que contém várias 
propriedades. Cada propriedade é uma função anônima (arrow function) que 
executa uma determinada ação quando chamada.
Cada função está associada a uma cor específica ('red', 'yellow', 'green', 'automatic'). 
Quando a função correspondente é chamada, ela atualiza o atributo src da imagem 
referenciada pela variável img, alterando assim a imagem exibida na página.
A função associada à cor 'automatic' também define um intervalo de tempo usando 
a função setInterval(). Ela chama a função changeColor a cada 1000 milissegundos 
(1 segundo) e atribui o identificador do intervalo retornado a uma variável 
chamada intervalId. Isso permite que a troca de cores seja feita automaticamente 
após um intervalo de tempo definido.
Em resumo, esse código define um conjunto de funções que controlam a troca de 
cores de uma imagem, seja manualmente (com base na cor escolhida) ou 
automaticamente (através de um intervalo de tempo).*/

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}/*Esse código em JavaScript define uma função chamada trafficLight que recebe 
um parâmetro event.
A primeira linha dessa função chama a função stopAutomatic(), que foi definida 
anteriormente. Essa função é responsável por interromper a troca automática de 
cores do semáforo.
A segunda linha utiliza o parâmetro event para acessar a propriedade target.id. 
A propriedade target se refere ao elemento HTML que disparou o evento, e id se 
refere ao valor do atributo "id" desse elemento.
Em seguida, essa função chama a função correspondente à cor do semáforo que foi 
clicada pelo usuário. Isso é feito utilizando o objeto turnOn, onde cada propriedade 
é uma função associada a uma cor específica. Por exemplo, se o botão vermelho for 
clicado e tiver id="red", a função turnOn['red']() será chamada.
Basicamente, essa função trafficLight é responsável por interromper a troca 
automática de cores e ativar manualmente a função relacionada à cor do semáforo 
que foi clicada pelo usuário no evento de clique. */

buttons.addEventListener('click', trafficLight );
/*Esse código em JavaScript adiciona um ouvinte de evento ao elemento referenciado 
pela variável buttons. O evento que está sendo escutado é o evento de clique ('click'). 
Quando ocorrer um clique no elemento, a função trafficLight será chamada.
Basicamente, esse código permite executar a função trafficLight quando houver 
um clique no elemento associado aos botões. A ação específica realizada pela 
função trafficLight dependerá da implementação dessa função em outro lugar do código. */

