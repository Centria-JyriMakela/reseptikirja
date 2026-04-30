import Login from '../components/login';
import Header from '../components/header';
import Footer from '../components/footer';

export default function LoginPage(){
    return(
        <div>
        <header>
            <Header />
        </header>
        <main>
            <Login />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}