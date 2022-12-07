import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card-popular';
import Market from '../components/Market';

const crd = [
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/1.jpeg' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/2.png' },
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/3.png' }
]

const market = [
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/mr1.png', price: '267', us: 'jameskole' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/mr2.jpg', price: '365', us: 'brollin' },
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/mr3.jpg', price: '423', us: 'jameskole'},
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/mr1.png', price: '267', us: 'jameskole' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/mr2.jpg', price: '365', us: 'brollin' },
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/mr3.jpg', price: '423', us: 'jameskole'},
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/mr1.png', price: '267', us: 'jameskole' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/mr2.jpg', price: '365', us: 'brollin' },
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/mr3.jpg', price: '423', us: 'jameskole'},
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/mr3.jpg', price: '423', us: 'jameskole'},
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/mr1.png', price: '267', us: 'jameskole' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/mr2.jpg', price: '365', us: 'brollin' }
]

const markethome = market.slice(0,8);

function Main() {
    const [Slide, setSlide] = React.useState(false);

    const handleClickSlideS = () => {
      setSlide(true);
    };

    const handleClickSlideF = () => {
        setSlide(false);
    };

    return (
        <main>
            <div className="home__banner">
                <div className="banner__wrap">
                    <h1 className='title'>Авторские NFT со всего мира</h1>
                    <h3 className="title__desc">Получите ранний доступ к Метавселенной!</h3>
                    <div className="banner__btns">
                        <Link className="banner__btn" to="/home">
                            Подробнее
                        </Link>
                        <a className="banner__btn" href="https://t.me/Jusii">
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="main__wrap">
                <div className="popular__collection">
                    <div className="title__wrap">
                        <h3 className="title">Популярные коллекции</h3>
                        <Link className="title__link" to="/home">Больше <span class="fa-solid fa-angle-right"></span></Link>
                    </div>
                    <div className="popular__cards">
                        {crd.map((obj) => (

                            <Card 
                                title={obj.title}
                                desc={obj.desc}
                                pic={obj.pic}
                            />

                        ))}

                    </div>
                </div>


                <div className="popular__collection">
                    <div className="title__wrap">
                        <h3 className="title">Маркетплейс</h3>
                        <Link className="title__link" to="/market">Больше <span class="fa-solid fa-angle-right"></span></Link>
                    </div>
                    <ul className="market__wrap">
                        {markethome.map((obj) => (

                            <Market 
                                title={obj.title}
                                desc={obj.desc}
                                pic={obj.pic}
                                us={obj.us}
                                price={obj.price}
                            />

                            ))}
                    </ul>
                </div>

                <div className="popular__collection">
                    <div className="title__wrap">
                        <h3 className="title">О нас</h3>
                    </div>
                    <ul className="about__wrap">
                        <li className="about__item">
                            <img src="./img/about/1.png" alt="not found" width="320px" height="220px" />
                            <h3 className='about__title'>Ранний доступ</h3>
                            <p className='about__desc'>Коллекционируйте новейшие авторские NFT со всего мира</p>
                        </li>
                        <li className="about__item">
                            <img src="./img/about/2.png" alt="not found" width="320px" height="220px" />
                            <h3 className='about__title'>Нулевая комиссия за транзакцию</h3>
                            <p className='about__desc'>Покупайте любимые NFT без дополнительных расходов</p>
                        </li>
                        <li className="about__item">
                            <img src="./img/about/3.png" alt="not found" width="320px" height="220px" />
                            <h3 className='about__title'>Авторы из разных стран мира</h3>
                            <p className='about__desc'>Получите доступ к авторским NFT со всего мира.</p>
                        </li>
                    </ul>
                </div>

                <div className="popular__collection">
                    <div className="title__wrap">
                        <h3 className="title">Q&A</h3>
                        <Link className="title__link" to="/home">Поддержка <span class="fa-solid fa-angle-right"></span></Link>
                    </div>
                    <div className="qa__slider">
                        <div className="qa__container">
                            <div className={Slide ? "qa__items qa__item__active2" : "qa__items qa__item__active"} >
                                <div className="qa__item">
                                    <h3 className='qa__title'>Что такое невзаимозаменяемый токен (NFT)?</h3>
                                    <p className="qa__desc">Невзаимозаменяемый токен (NFT) — это токен на базе блокчейна, который предоставляет право собственности на конкретный актив, например, изображение или видео, и содержит информацию о его происхождении.</p>
                                </div>
                                <div className="qa__item">
                                    <h3 className='qa__title'>Что такое NFT маркетплейс?</h3>
                                    <p className="qa__desc">NFT маркетплейс — это универсальная платформа для размещения, покупки и продажи NFT. NFT используются для предметов цифрового искусства и коллекционирования, GameFi-проектов, метавселенных и многого другого.</p>
                                </div>
                            </div>
                            <div className={Slide ? "qa__items qa__item__active" : "qa__items qa__item__dissable"} >
                                <div className="qa__item">
                                    <h3 className='qa__title'>Как купить NFT? (NFT)?</h3>
                                    <p className="qa__desc">Для доступа к NFT маркетплейсу вы можете использовать ваш существующий спотовый аккаунт Reverso и криптовалюты ETH, BIT, XTZ или USDT. Если вы ещё не зарегистрированы на Reverso, то вам понадобится создать аккаунт. Обращаем внимание, что для покупки или продажи отдельного NFT на Reverso может использоваться только один токен. Например, если цена какого-либо NFT указана в BIT (BitDAO), то такой NFT нельзя купить или продать за USD или ETH.</p>
                                </div>
                                <div className="qa__item">
                                    <h3 className='qa__title'>Как продать NFT?</h3>
                                    <p className="qa__desc">Как продать NFT? Перейдите в свой профиль, выберите NFT, который хотите продать, и нажмите «Разместить». Откроется страница размещения NFT на бирже. Для размещения своего NFT выполните следующие шаги: 1. Выберите монету, за которую вы хотите продать ваш NFT (USDT, BIT, XTZ или ETH). 2. Укажите количество (цену). 3. Выберите время снятия с продажи. 4. Нажмите «Подтвердить». Обращаем внимание, что в настоящее время допускается размещать только NFT-токены, приобретаемые на NFT-маркетплейсе Reverso. Если вы хотите разместить собственные NFT, напишите нам на Reverso@gmail.com.</p>
                                </div>
                            </div>
                        </div>
                        <div className={Slide ? "qa__controller cnt__up qa__item__active" : "qa__controller cnt__up controller__disable"} onClick={handleClickSlideF}>
                            <i class="fa-solid fa-angle-up"></i>
                        </div>
                        <div className={Slide ? "qa__controller cnt__down controller__disable" : "qa__controller cnt__down qa__item__active"} onClick={handleClickSlideS}>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
    }
    
export default Main;