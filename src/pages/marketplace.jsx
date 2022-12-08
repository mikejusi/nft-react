import React, { useEffect, useState } from 'react';

import Market from '../components/Market';
import datemarket from '../Data/card-data';

function Marketplace(props) {
    return ( 
        <main>
            {datemarket.map((obj) => (

                <Market 
                    title={obj.title}
                    desc={obj.desc}
                    pic={obj.pic}
                    us={obj.us}
                    price={obj.price}
                />

            ))}
        </main>
     );
}

export default Marketplace;