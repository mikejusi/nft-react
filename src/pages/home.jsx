import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card-popular';

const crd = [
    { id: '', title: 'Dirty Rabbit Sons', desc: 'Created NFT art based on a video that has been played 13 million times worldwide', pic: 'img/nft/1.jpeg' },
    { id: '', title: 'MillionWinner Genesis NFT whit', desc: 'The  MillionWinner Genesis NFT whitelist utility will be sold in Grabpic on Nov 29,2022,9AM UTC', pic: 'img/nft/2.png' },
    { id: '', title: 'Cacnimal Party', desc: 'Theyre cactus-related animals with enjoyable life on Cacni Land.', pic: 'img/nft/3.png' }
]

function Main() {
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
            </div>
        </main>
    );
    }
    
export default Main;