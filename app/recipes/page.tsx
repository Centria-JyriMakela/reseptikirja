import RecipeGrid from "../components/recipe-grid";
import Header from "../components/header";
import Footer from "../components/footer";
import ModifyRecipe from "../components/modify-recipe"

export default function RecipesPage(){
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <ModifyRecipe />
                <RecipeGrid />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}