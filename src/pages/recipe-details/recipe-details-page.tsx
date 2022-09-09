import { Header } from "../../components/header";
import { RecipeInfo } from "./recipe-info";

export const RecipeDetailsPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <RecipeInfo />
            </div>
        </>
    );
}