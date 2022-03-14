// A la place de {} on peut mettre null
/*
const article = React.createElement('article', {}, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus facere autem magnam quae nostrum recusandae alias culpa ex, totam, quibusdam aspernatur hic. Quos modi ipsam atque a obcaecati! Placeat, vero?");

const titre = React.createElement('h1', 
{
	className : "monSuperTitre",
	id : "maSuperID"
}, "Bonjour", " le monde");

console.log(titre);

ReactDOM.render(titre, document.querySelector('#test'));
//ReactDOM.render(titre, document.getElementById('test'));
*/

const helloWorld = React.createElement('h1', {}, "Hello World");
ReactDOM.render(helloWorld, document.querySelector('#test'));