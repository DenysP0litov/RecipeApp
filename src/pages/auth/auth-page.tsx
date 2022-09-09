import { Header } from "../../components/header";
import { AuthForm } from "./auth-form";

export const AuthPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <AuthForm />
            </div>
        </>
    );
}