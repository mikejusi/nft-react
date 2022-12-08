import { Link } from 'react-router-dom';

function Auth() {
    return ( 
        <main className="main__wrap">
            <div className="auth__window">
                <div className="title__window__wrap">
                    <h3 className="title__window">
                        Вход Reverso
                    </h3>
                </div>
                <form action="">
                    <div className="form__inputs">
                        <input placeholder="Email" />
                        <input placeholder="Пароль" />
                    </div>
                    <div className="form__btn">
                        <button className='btn__cab' type="submit">Войти</button>
                        <p className='how-auth'>
                            Нету аккаунта?
                            <Link className="link__cab" to="/register">Зарегистрироваться </Link>
                        </p>
                    </div>
                </form>
            </div>
        </main>
     );
}

export default Auth;