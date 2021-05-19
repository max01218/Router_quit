import ReactDOM from "react-dom"
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}
function UserGreeting(props) {
    return <h1>Welcome back, CGUER!</h1>;
}
function GuestGreeting(props) {
    return <h1>Hi CGUer, please sign up.</h1>;
}
function handleLoginClick() {
    this.setState({isLoggedIn: true});
}
ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root'));