// Correction exercice 2

//const helloWorld = React.createElement('h1', {}, 'Hello world!');

/*
const helloWorld = <h1>Hello world!</h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
*/



// Exercice 3

// Version 1
const lastName = React.createElement('span', {className : "red"}, "EAR");
console.log(lastName);

const firstName = React.createElement('span', {className : "upper"}, 'Sophie');
console.log(firstName);

const element = (
	<div>
		{lastName} {firstName}
	</div>
);


// Version 2
/*const firstName = "sophie";
const lastName = "ear";

const element = (
	<div>
		<span class="red">{lastName} </span>
		<span class="upper">{firstName}</span>
	</div>
);*/


ReactDOM.render(element, document.querySelector('#app'));