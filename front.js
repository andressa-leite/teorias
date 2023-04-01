/*
https://www.youtube.com/watch?v=HlLsWeyn0wE

https://www.youtube.com/watch?v=g8qbBlAFU4Y

rodar Javascript online
https://playcode.io/

O que são Closure Functions?
	Funções que se apropriam do contexto de outras funções. 
	São funções definidas dentro do escopo de outras funções e por isso tem acesso ao 
	contexto das variáveis da função pai.
	Exemplo:
		1- ANTES DE USAR CLOSURE
		const nomeCompleto = 'Gabriel Henrique Rocco Froes'
		const formataNome = nome => {
			const nomes = nome.split(" ")
			return nomes[0] + ' ' + nomes[nomes.length-1]
		}
		console.log(formataNome(nomeCompleto)) // Gabriel Froes
		2 - USANDO CLOSURE
		const nomeCompleto = () => {
			const nome = 'Gabriel Henrique Rocco Froes'
			const formataNome = () => {
			const nomes = nome.split(" ")
			return nomes[0] + ' ' + nomes[nomes.length-1]
			}
			return formataNome
		}
		const minhaClosure = nomeCompleto()
		//nomeCompleto()()
		console.log(minhaClosure()) // Gabriel Froes //PQ TEM OS PARENTESES??????????????????

== x ===
2 iguais comparam valores. 3 iguais comparam valores e tipos.

CALLBACK
É uma função passada como parâmetro de outra função.
chamando-a novamente em seguida, logo depois que algo aconteça ou que alguma tarefa seja concluída. 
	Exemplo: (Asfunção abaixo será executada depois de 3 segundos) 
	setTimeout(() => { 
   		 console.log("Essa mensagem é exibida após 3 segundos");
	}, 3000);

	Nós também usamos funções de callback para declarações de eventos. 
	document.queryselector("#callback-btn")
    		.addEventListener("click", function() {    
      		console.log("O usuário clicou no botão!");
	});
	//Ele recebe dois parâmetros. O primeiro é o seu tipo, "click", e o segundo parâmetro é uma função de callback. 
	

Promise
	Uma promise em JavaScript é semelhante a uma "promessa" na vida real. 
	Quando fazemos uma promessa na vida real, ela é uma garantia de que faremos algo no futuro. 
	É utilizado quando precisamos lidar com implementações assíncronas.Possui o resolve e o reject. Ou seja, sucesso ou erro.
	o método then( ) serve apenas para as promises resolvidas. E se a promise não for resolvida precisaremos usar o método catch( ) .
	https://www.freecodecamp.org/portuguese/news/tutorial-de-promises-do-javascript-resolve-reject-e-encadeamento-em-js-e-na-es6/


let, const, var
	O const deve ser usado em casos onde a variável não precise ser reatribuída, sobrescrita. Esta é a maioria dos casos. 
	O let é a nova maneira de declarar variáveis que precisam ser sobrescritas. O caso mais comum é uma iteração de um loop, onde a variável a iterar é sobrescrita N vezes durante o loop.
	O var permite que uma variável seja re-declarada.

reduce
	const arr =[3,5,7,9,2,1]
	arr.reduce((a,b)=>{return a*b},1)

O que são métodos

map x filter
	   O método map() é usado para criar um novo array a partir de um array existente, 
	aplicando uma mesma função a cada um dos elementos do array inicial.
	   O método filter() recebe cada elemento do array e aplica uma instrução condicional a ele. 
	Se essa condição for verdadeira, o elemento é colocado no array de resultado. 
	Se for falsa, o elemento não é colocado lá.


map x forEach

	   Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de 
	transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.
	EXEMPLO FOREACH
	const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

	const retornoForEach = nomes.forEach((nomeAtual) => {
    		console.log(nomeAtual);

   	 return nomeAtual.toUpperCase();
	})
		console.log(retornoForEach) // undefined
	
	EXEMPLO MAP
	const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

	const retornoMap = nomes.map((nomeAtual) => {
    		console.log(nomeAtual);

    	return nomeAtual.toUpperCase();
	})
		console.log(retornoMap) // ['WHINDS', 'FREEWAY', 'TESTE', 'MARIA']

Spread Operator / rest parameters
É utilizado para fazer uma cópia e extrair os ítens de um array, criar um objeto novo a partir de um objeto existente.

		O Spread Operator é usado com bastante frequência principalmente quando queremos utilizar a imutabilidade.
	
	A sintaxe de rest parameter (parâmetros rest) nos permite representar um número indefinido de argumentos(numa função = function(...params){}) como um array.


High Order Functions
	Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.


O que é currying
	Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried.
	Exemplo
	function calc(a) {
  		console.log(a);
  		return function calc2(b){
   	console.log(a + b)
  		}
	}
	// console.log(a) = 2 
	// console.log(a + b) = 3

calc(2)(1) //currying

async AWAIT
	torna possível escrever código assíncrono como se estivéssemos escrevendo código síncrono.
	O async/await é uma nova forma de tratar Promises dentro do nosso código, evitando a criação de cascatas de .then 
	Utilizamos o prefixo async antes de definir uma função para indicar que estamos tratando de um código assíncrono, e com o prefixo adicionado, 
	podemos utilizar o await antes das Promises indicando um ponto a ser aguardado pelo código. 


Qual a diferença entre Promise e async await?
A promise terá um then ou uma cascata de then, na qual cada then será executado após a resposta da promise. Ou seja, a promise é assíncrona e 
o async await é síncrono.



arrow function => 
		Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) 
	e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor 
	aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors)
	//não consegue usar o this no escopo interno. vai pegar referencia do escopo pai

MIDDLEWARE

função reutilizável que pode rodar antes e depois de requisições http

https://www.freecodecamp.org/portuguese/news/como-manipular-arrays-em-javascript/

https://www.freecodecamp.org/portuguese/news/tag/javascript/



EVENT LOOP

https://miro.medium.com/max/1400/1*XVqPA2z1dTHJWm2TwIAsBw.gif

https://www.youtube.com/watch?v=6WYEmUVhiwQ


PERGUNTAS REACT

Por que classname é usado no lugar de class?
	Porque class é uma palavra chave reservada do Javascript.Então o Javascript pensa que vc está tentando criar uma classe Javascript e não estilizar um elemento.
	Por essa razão a class é className em JSX.

Descreva Fluxo de dados em React:
	o Fluxo de dados é unidirecional, ou seja, todos os componentes em React 
	tem um relacionamento pai-filho e normalmente o que acontece é que passamos
	os dados de cima para baixo como no caso das props.
	E para compartilhar dados em profundidade de várias camadas utilizamos 
	conceitos como o context, global state e redux.

Como você atrasaria uma chamada de API até que um componente fosse "montado"(mounted)?
	Agora que temos componentes funcionais e hooks, não precisamos mais escrever classes,
	não precisamos mais do component DidMount... Então... 
	usamos o UseEffect Hook e passamos um array vazio como segundo argumento 
	e dentro do UseEffect vc pode escrever o sua chamada de API 
	e isso funcionará como um component DidMount.



*/