import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import Nav from "./Nav";
import "../style.css";

function Header() {




    return (
        <section className="container">
            <Logo />
            <ButtonNav />
            <Nav />
        </section>
    );
}

export default Header;