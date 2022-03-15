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

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{props.text.toUpperCase()}</span>

}

const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;


//ReactDOM.render(helloWorld, document.querySelector('#app'));


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

ReactDOM.render(
	<Clock />,
	document.getElementById('app')
);

