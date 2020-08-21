import React from 'react';
import style from './Main.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Helmet } from 'react-helmet';

const Main = (props) => {
    return(
        <div className={style.app}>
            <Helmet>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Helmet>
            <div className={style.shadow}></div>
            <div className={style.content}>
                <h2 className={style.pageTitle}>{props.title}</h2>
                {props.cards}
            </div>
      </div>
    )
}

export default Main;