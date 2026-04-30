import Profile from "../components/profile";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ProfilePage(){
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Profile />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}