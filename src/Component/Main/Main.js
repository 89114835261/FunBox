import React from 'react';
import style from './Main.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const Main = (props) => {
    return(
        <div className={style.app}>
            <div className={style.shadow}></div>
            <div className={style.content}>
                <h2 className={style.pageTitle}>{props.title}</h2>
                {props.cards}
            </div>
      </div>
    )
}

export default Main;