import React from "react";
import { Link } from 'react-router-dom';

function Market(props) {

  
      return (
            <li className="card__item__wrap">
                <Link className="market__item__link" to="/home">
                    <div className="card__wrapper">
                        <div className="card__box">
                            <div className="market__img">
                                <img src={props.pic} alt="not found" />
                            </div>
                            <div className="card__detail">
                                <h3 className="title__market">{props.title}</h3>
                                <div className="author__nft">@{props.us}</div>
                                <div className="price__nft">
                                    <div className="price__left">
                                        <span>Цена</span>
                                    </div>
                                    <div className="price__right">
                                        <div className="price__ico">
                                            <i class="fa-brands fa-ethereum"></i>
                                            {props.price} ETH
                                        </div>
                                    </div>
                                </div>
                                <div class="buy__btn">Купить</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
      );
      }
      
  export default Market;