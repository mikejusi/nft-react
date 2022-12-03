import Card from '../components/Card-popular';
import { Link } from 'react-router-dom';

const crd = [
    { id: '', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', pict: 'img/sneaker_1.jpg' },
    { id: '', title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', pict: 'img/sneaker_2.jpg' }
]

function Main() {
    return (
        <main>
            <div className="main__wrap">
                <div className="popular__collection">
                    <div className="title__wrap">
                        <h3 className="title">Популярные коллекции</h3>
                        <a className="title__link" href="#">Больше</a>
                    </div>
                    <div className="popular__cards">

                        {crd.map((obj) => (

                            <Card 
                                title={obj.title}
                                price={obj.price}
                                pict={obj.pict}
                            />

                        ))}

                    </div>
                </div>
            </div>
        </main>
    );
    }
    
export default Main;