import { Link } from 'react-router-dom';

function Header() {
    return (
            <header className="header">
                <div className="nav__wrapper">
                    <Link to="/home" className="logo">
                        <img src="img/logo__small.png" alt="logo" />
                    </Link>

                    <div className="nav__links">
                        <Link className="link" to="/home">
                            Главная
                        </Link>
                        <Link className="link" to="/community">
                            Маркетплейс
                        </Link>
                        <Link className="link" to="/community">
                            Сообщество
                        </Link>
                    </div>
                    <div className="auth__links">
                        <Link className="link" to="/community">
                            Вход
                        </Link>
                        <Link className="link reg__link" to="/community">
                            Регистрация
                        </Link>
                        <Link className="link" to="/community">
                            RU
                        </Link>
                    </div>
                </div>
            </header>
    );
    }
    
export default Header;