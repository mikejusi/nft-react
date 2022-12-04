import React from "react";

function Card(props) {

  
      return (
        <div className="popular__card">
            <div className="img__wrapper">
                <div className="img__wrap">
                  <div className="image_FCS">
                    <img className='card__pic' width={133} height={112} src={props.pic} alt='not found' />
                  </div>
                </div>
                <div className="avatar__wrap">
                  <div className="avatar__FCS">
                    <div className="card__avatar">
                      <img className='avatar' width={133} height={112} src={props.pic} alt='not found' />
                    </div>
                  </div>
                </div>
            </div>
            <div className="popular__card__footer">
              <h3 className="popular__footer__title">{props.title}</h3>
              <p className="popular__footer__desc">{props.desc}</p>
            </div>
        </div>
      );
      }
      
  export default Card;