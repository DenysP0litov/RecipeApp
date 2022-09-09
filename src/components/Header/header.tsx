import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authActions } from '../../store';

export const Header: React.FC = () => {
    const authStatus = useSelector(authSelectors.authStatus);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.setAuthStatus(false));
        localStorage.setItem(
            'authStatus',
            JSON.stringify(false),
        );
        window.location.hash = '/auth';
    }

    return (
        <header className="header">
            <h1 className="header__title">RecipeApp</h1>
            {authStatus && (
                <button className="header__button"
                onClick={logout}>
                    Logout
                </button>
            )}
        </header>
    );
};