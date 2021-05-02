const Account = (props) => {
    const user = props.Patient.entry[0];

    return <div className="App-Account">
        <h1>You are Logged in as{user.resource.name[0].text}.</h1>
    </div>
}

export default Account