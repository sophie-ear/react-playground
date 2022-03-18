/*
function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);



    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'))
*/

function App(props) {
    const [inputs, setInputs] = React.useState({
      text: "",
      area: "",
      test: "",
      poulpe: "",
    });
  
    const handleChange = (e) => {
      console.log(e)
      let { name, value } = e.target;
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    return (
      <div>
        <input
          type="text"
          name="text"
          value={inputs.text}
          onChange={handleChange}
        />
        <input
          type="text"
          name="test"
          value={inputs.test}
          onChange={handleChange}
        />
        <textarea
          name="area"
          value={inputs.area}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="poulpe"
          value={inputs.poulpe}
          onChange={handleChange}
        ></textarea>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.querySelector("#app"));
  
  console.log(typeof App);