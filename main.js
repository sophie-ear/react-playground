// Correction Exercice 1

const helloWorld = React.createElement('h1', {}, 'Hello world!');


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(helloWorld, document.querySelector('#app'));



// Exercice 2

const titre = 'Hello World 2';
const element = <h1>{titre}</h1>;
const element2 = <h1>Hello World 3</h1>;
ReactDOM.render(element2, document.querySelector('#app'));
