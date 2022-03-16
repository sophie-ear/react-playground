/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {

	const [date, setDate] = React.useState(new Date());
  	const [color, setColor] = React.useState('teal');
  	const intervalRef = React.useRef();

    React.useEffect(() => {
        tick(); 
		console.log(intervalRef);       
    }, []);


    
    const tick = () => {
        intervalRef.current = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    
    const changeColor = (event) => {
		console.log(event);
		// si on envoie l'argument event, alors on change la couleur et on sort de la fonction
		if(event) {
			setColor("black");
			return;
		}

      setColor(`#${(Math.floor(Math.random() * 16777215)).toString(16)}`);
    }

	const resetColor = () => {
		setColor("black");
	}

	const stopClock = () => {
		clearInterval(intervalRef.current);
	}


	// On peut rappeler directement tick l.137
	/*
	const startClock = () => {
		tick();
	}
	*/

	// A partir du moment où on appelle une fonction dans un gestionnaire d'évènement il faut l'appeler avec une fonction anonyme (avec "() =>" )
    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{ color }}>Il est {date.toLocaleTimeString()}.</h2>
			<div>
				<button onClick={ () => changeColor() }>Change color</button>
				<button onClick={ () => changeColor(true) }>Reset color</button>
			</div>

			<div>
				<button onClick={ stopClock }>Stop clock</button>
				<button onClick={ tick }>Start clock</button>
			</div>
            
        </div>
    );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));
