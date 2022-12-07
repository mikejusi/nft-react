import React, { useState } from "react";

const Reference = () => {
        const [activeIndex, setActiveIndex] = useState(1);
        const handleClick = (index) => setActiveIndex(index);
        const checkActive = (index, className) => activeIndex === index ? className : "";

    return ( 
        <main>
            <div className="about__page__wrap">
                <div className="about__page__title">
                    <h3>
                        О нас
                    </h3>
                </div>
                <div className="tab__panel__about">
                    <div className="tabs__about">
                        <button className={`tab ${checkActive(1, "active")}`} onClick={() => handleClick(1)} >
                            О Reverso
                        </button>

                        <button className={`tab ${checkActive(2, "active")}`} onClick={() => handleClick(2)} >
                            Условия обслуживания
                        </button>
                    </div>      

                    <div className="panels">
                        <div className={`panel ${checkActive(1, "active")}`}>
                            <h3 className="title__ref">
                                О Reverso NFT
                            </h3>
                            <p>NFT маркетплейс Reverso — это универсальная платформа для размещения, покупки и продажи NFT. NFT используются для предметов цифрового искусства и коллекционирования, GameFi-проектов, метавселенных и многого другого.</p>
                        </div>
                        <div className={`panel ${checkActive(2, "active")}`}>
                            <h3 className="title__ref">
                                Условия обслуживания
                            </h3>
                            <p>
                                Настоящие Дополнительные условия (далее «Дополнительные условия») дополняют Условия обслуживания (далее «Условия») Платформы, предоставляемой компанией Reverso Fintech Limited (далее «мы», «нас» и «наш»). Настоящие Дополнительные условия вместе с Условиями регулируют транзакции NFT, осуществляемые на Платформе. В случае противоречий между настоящими Дополнительными условиями и Условиями, Условия имеют преимущественную силу. В случае возникновения любых противоречий, приоритетной считается версия Дополнительных условий на английском языке.
                                <br/><br/>
                                Размещая, продавая, покупая или обменивая NFT через Платформу, вы принимаете настоящие Дополнительные условия и Условия Платформы и берете на себя соответствующие обязательства. Если вы не принимаете Дополнительные условия и Условия Платформы, вы не можете размещать, продавать, покупать и обменивать NFT через Платформу.
                                <br/><br/>
                                1. Определения. Ниже приведены значения терминов, использующихся в Дополнительных условиях. Другие термины, написанные с заглавной буквы, имеют значения, закрепленные в Условиях.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Reference;