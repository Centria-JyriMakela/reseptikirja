import Register from "../components/register";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RegisterPage(){
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Register />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}