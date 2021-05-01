const LogIn = (props) => {

    return <form className="Main-LogIn">
        <input className="LogIn-Text" type="text" placeholder="Username" autoComplete="username" autoFocus={true}/>
        <input className="LogIn-Text" type="password" placeholder="Password" autoComplete="current-password"/>
        <button className="LogIn-Btn" onClick={() => { if (props.UserLogIn()) props.setAppState('loggedIn', true) }}>Log-In</button>
    </form>
}

export default LogIn