import { useDispatch, useSelector } from "react-redux";
import { selectors, actions} from '../../store';
import './Header.css';

export const Header = () => {
    const authStatus = useSelector(selectors.authStatus);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(actions.setAuthStatus(false));
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