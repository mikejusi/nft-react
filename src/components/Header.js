function Header() {
    return (
        <header className="header">
            <div className="nav__wrapper">
                <div className="logo">

                </div>
                <div className="nav__links">
                    <a className="link" href="#">
                        Главная
                    </a>
                    <a className="link" href="#">
                        Маркетплейс
                    </a>
                    <a className="link" href="#">
                        Сообщество
                    </a>
                </div>
                <div className="auth__link">
                    <a className="link" href="#">
                        Вход
                    </a>
                    <a className="link" href="#">
                        Регистрация
                    </a>
                    <a className="link" href="#">
                        RU
                    </a>
                </div>
            </div>
        </header>
    );
    }
    
export default Header;