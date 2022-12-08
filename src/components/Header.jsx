import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [Burger, setActiveBurger] = React.useState(false);

    const handleClickBurger = () => {
        setActiveBurger(!Burger);
    };

    return (
            <header className="header">
                <div className="nav__wrapper">
                    <Link to="/home" className="logo">
                        <img src="img/logo__small.png" alt="logo" />
                    </Link>

                    <div onClick={handleClickBurger} class={Burger ? "burger active__burger" : "burger"}>
                        <span></span>
                    </div>
                    <div className={Burger ? "Links__active Links" : "Links Links__dissable"}>
                        <div className="nav__links">
                            <Link className="link" to="/home">
                                Главная
                            </Link>
                            <Link className="link" to="/market">
                                Маркетплейс
                            </Link>
                            <Link className="link" to="/community">
                                Сообщество
                            </Link>
                        </div>
                        <div className="auth__links">
                            <Link className="link" to="/auth">
                                Вход
                            </Link>
                            <Link className="link reg__link" to="/register">
                                Регистрация
                            </Link>
                            <Link className="link" to="/lang">
                                RU
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
    );
    }
    
export default Header;