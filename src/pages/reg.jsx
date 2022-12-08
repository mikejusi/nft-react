import { Link } from 'react-router-dom';

function Register() {
    return ( 
        <main className="main__wrap">
            <div className="reg__window">
                <div className="auth__window">
                    <div className="title__window__wrap">
                        <h3 className="title__window">
                            Регистрация Reverso
                        </h3>
                    </div>
                    <form action="">
                        <div className="form__inputs">
                            <input placeholder="Email" />
                            <input placeholder="Пароль" />
                            <input placeholder="Повторите пароль" />
                        </div>
                        <div className="form__btn">
                            <button className='btn__cab' type="submit">Создать</button>
                            <p className='how-auth'>
                                Уже есть аккаунт?
                                <Link className="link__cab" to="/auth">Войти </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
     );
}

export default Register;