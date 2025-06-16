import logo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo-zaprecall" />
            <h1>ZapRecall</h1>
        </header>
    );
}

export default Header;