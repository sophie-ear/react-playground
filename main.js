/*
function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }
  function Greeting(props) {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);

      const handleLogIn = (e) => {
          e.preventDefault();
          setIsLoggedIn(true);
      }

      const handleLogOut = (e) => {
          e.preventDefault();
          setIsLoggedIn(false);
      }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
  );
  */


/*const list = ['a', 'b', 'c', 'd'];

const App = (props) => {
	  
	return (
		<section>
			{
				list.map((letter, index) => <p key={index}>{letter}</p>)
			}
		</section>
	)
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
*/


const App = (props) => {
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState({
        name: '',
        company: '',
        website: '',
        phone: '',
        email: ''
    });

    const [selectedUserID, setSelectedUserID] = React.useState(1);

    React.useEffect(() => {
        /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))*/
    }, [])

    React.useEffect( () => {
        console.log(users);
    }, [users]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserID}`).then(r => r.json()).then(data => setUser(data))
    
    }, [selectedUserID]);

    const handleChange = (e) => {
        setSelectedUserID(e.target.value)
    }

    return(
        <React.Fragment>
            <select value={selectedUserID} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        {
            /*users.map((user) =>(
                <UserCard key={user.id} user={user}/>
            ))*/
        }
        </React.Fragment>
    )
}

const UserCard = ({user}) => {

    return (
        <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

const UserCard2 = ({user}) => {

    let {name, email, company, phone, website} = user;

    React.useEffect( () => {console.log(company)}, [company]);

    return (
        <ul className="user-card">
            <li>{name}</li>
            <li>{email}</li>
            <li>{company.name}</li>
            <li>{phone}</li>
            <li>{website}</li>
        </ul>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'))