import React, { useEffect, useState } from 'react';

import Market from '../components/Market';
import datemarket from '../Data/card-data';

function Marketplace(props) {
    return ( 
        <main className='pt-46'>
            <div className="cat-bg">
                <div className="categories__wrap">
                    <div className="title__section__wrap">
                        <h3 className="title__section">
                            NFTs
                        </h3>
                    </div>
                    <div className="categories__section">
                        32
                    </div>
                </div>
            </div>

            <div className="main__wrap">
                <div className="market__wrap">
                    {datemarket.map((obj) => (

                        <Market 
                            title={obj.title}
                            desc={obj.desc}
                            pic={obj.pic}
                            us={obj.us}
                            price={obj.price}
                        />

                    ))}
                </div>
            </div>
        </main>
     );
}

export default Marketplace;