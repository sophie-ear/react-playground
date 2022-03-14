// Correction Exercice 1

const helloWorld = React.createElement('h1', {}, 'Hello world!');


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(helloWorld, document.querySelector('#app'));



// Exercice 2

const titre = 'Hello World 2';
const element = <h1>{titre}</h1>;
ReactDOM.render(element, document.querySelector('#app'));
