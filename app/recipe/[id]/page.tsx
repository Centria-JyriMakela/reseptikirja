import Recipe from "../../components/recipe";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RecipePage({params}:any){
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Recipe params={params} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}