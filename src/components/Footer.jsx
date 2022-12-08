import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer>
            <div className="content__footer">
                <Link className="logo__footer" to="/home">
                    <img src='img/logo__big.png' alt='logo' />
                </Link>
                <div className="col__footer">
                    <h5 className="footer__title">
                        О нас
                    </h5>
                    <div className="link__wrap__footer">
                        <Link className="link__footer" to="/reference">
                            Справка
                        </Link>
                    </div>
                </div>
                <div className="col__footer">
                    <h5 className="footer__title">
                        Поддержка
                    </h5>
                    <div className="link__wrap__footer">
                        <Link className="link__footer" to="/support">
                            Служба поддержки
                        </Link>
                    </div>
                    <div className="link__wrap__footer">
                        <Link className="link__footer" to="/faq">
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="col__footer">
                    <h5 className="footer__title">
                        Подписывайтесь
                    </h5>
                    <div className="socail__media">
                        <div className="link__wrap tw__wrap">
                            <a className='link__social tw' href=''><span className='fa-brands fa-twitter' /></a>
                        </div>
                        <div className="link__wrap tg__wrap">
                            <a className='link__social tg' href=''><span className='fa-brands fa-telegram' /></a>
                        </div>
                        <div className="link__wrap ds__wrap">
                            <a className='link__social ds' href=''><span className='fa-brands fa-discord' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                © 2018-2022 <Link className="link__copyright" to="/home">jusi.com</Link> All rights reserved. 
            </div>
        </footer>
     );
}

export default Footer;