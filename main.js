const firstName = 'sophie';
const lastName = 'ear';

function FirstName(props) {

    /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */

    // Solution sans bonus
    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}

function LastName(props) {

	// test vaut "rien"
	const [test, setTest] = React.useState('rien');
	// après 2sec test vaut "quelque chose"
	setTimeout( () => {
		setTest('quelque chose')
	}, 2000);

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{props.text.toUpperCase()} {props.year}</span>

}

const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName2 text={lastName} year="2022" /></h1>;


function LastName2({text, year}) {

	// test vaut "rien"
	const [test, setTest] = React.useState('rien');
	// après 2sec test vaut "quelque chose"
	setTimeout( () => {
		setTest('quelque chose')
	}, 2000);

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{text.toUpperCase()} {year}</span>

}

const helloWorld2 = <h1>Hello <FirstName text={firstName}/> <LastName2 text={lastName} year="2022" /></h1>;

//ReactDOM.render(helloWorld, document.querySelector('#app'));
ReactDOM.render(helloWorld2, document.querySelector('#app'));


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
  
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
  
	componentWillUnmount() {
	  	clearInterval(this.timerID);
	}
  
	tick() {
		this.setState({
			date: new Date()
		});
	}
  
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

function Clock(props) {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	
}

ReactDOM.render(
	<Clock />,
	document.getElementById('app')
);

