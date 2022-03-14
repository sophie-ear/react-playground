// Correction exercice 3 (par le prof)
//const helloWorld = React.createElement('h1', {}, 'Hello world!');

/*
const firstName = 'r0ulito';
const lastName = 'formateur';


// Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;
*/


/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

// Exercice 3 (par moi)

// Version 1
/*
const lastName = React.createElement('span', {className : "red"}, "EAR");
console.log(lastName);

const firstName = React.createElement('span', {className : "upper"}, 'Sophie');
console.log(firstName);

const element = (
	<div>
		{lastName} {firstName}
	</div>
);
*/


// Version 2
/*const firstName = "sophie";
const lastName = "ear";

const element = (
	<div>
		<span className="red">{lastName} </span>
		<span className="upper">{firstName}</span>
	</div>
);*/



function FirstName(props) {
	return <span>{props.name[0].toUpperCase() + props.name.slice(1)} </span>;
}

/*function LastName(props) {
	return <span className="red-text">{props.name.toUpperCase()} </span>;
}*/

class LastName extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <span className="red-text">{this.props.name.toUpperCase()} </span>;
	}
}

const firstName = <FirstName name="sophie" />;
const lastName = <LastName name="ear" />;

const element = (
	<p>
		{firstName} {lastName}
	</p>
);

ReactDOM.render(element, document.querySelector('#app'));


