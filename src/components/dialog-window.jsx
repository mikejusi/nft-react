import React from "react";

function Dialog() {

    const [Dialog, setActiveDialog] = React.useState(false);

    const handleClickDialog = () => {
        setActiveDialog(!Dialog);
    };

    return (
        <div className="dialog__wrapper">
            <div className={Dialog ? "active__support support__window" : "dessable__support support__window"}>
                <div className="support__head">
                    <div className="head__par">
                        <button className="suport__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
                        </button>
                        <div className="title__sup">
                            <div className="ico__mes">
                                <img src="img/ico__chat.png" alt="us-ico" />
                            </div>
                            <p className="tt">
                                Чат поддержки
                            </p>
                        </div>
                        <div className="suport__btns left__sup">
                            <button className="suport__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></svg>
                            </button>
                            <button className="suport__btn" onClick={handleClickDialog}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chat__list">
                    <div className="list__wrap">

                        <div className="message__sup">
                            <div className="ico__mes">
                                <img src="img/ico__chat.png" alt="us-ico" />
                            </div>
                            <div className="text__mes">
                                Добро пожаловать на наш проект!
                            </div>
                        </div>

                        <div className="us__message message__sup">
                            <div className="ico__mes">
                                <img src="img/ico__chat.png" alt="us-ico" />
                            </div>
                            <div className="text__mes">
                                Добрый день!
                            </div>
                        </div>

                    </div>
                </div>
                <div className="support__chat">
                    <div className="chat__wrap">
                        <div className="sup__input">
                            <textarea placeholder="Сообщение…" aria-label="Сообщение…" rows="1" data-testid="MessageInput" class="support__text"></textarea>
                            <button className="submit__message">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Dialog ? "dialog-window-des" : "dialog-window"} onClick={handleClickDialog}>
                <span class="fa-solid fa-headset"></span>
            </div>
        </div>
     );
}

export default Dialog;