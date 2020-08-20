import React, { useState } from 'react';
import style from './ProductCard.module.scss';
import './ProductCard.scss';

const ProductCard = (props) => {
    const [isClick, setIsClick] = useState(false);
    const [isMouseLeave, setisMouseLeave] = useState(false);
    
    const setClass = () => {
        !isClick ? setIsClick(true) : setIsClick(false);
        isMouseLeave && setisMouseLeave(false);
    }
    const setMouseLeave = () => {
        !isMouseLeave && setisMouseLeave(true);
    }
    return(
        <div className={style.wrapper}>
            <div style={{visibility: "hidden"}} className={style.additional + ' ' + style.isDisabled + ' ' + style.disabled}></div>
            <div className={`${props.count === 0 ? style.isDisabled : ''}`}></div>
            <div className={`${style.card}  ${isClick ? style.additional : ''} ${props.count === 0 ? style.disabled : ''}`} onMouseLeave={() => setMouseLeave()} onClick={() => setClass()}>
                <div className={style.header}>
                    <div className={style.corner}>
                    </div>
                    <span>
                        <p>{!isClick ? props.description : (isClick && !isMouseLeave ? props.description : ((isClick && isMouseLeave) && props.isClickDescription))}</p>
                    </span>
                </div>

                <div className={style.content}>
                    <h2>{props.name}
                        <span>{props.composition}</span>
                    </h2>
                    <div className={style.description}>
                        <span>{props.serveCount} порций</span>
                        <span>{props.bonus}</span>
                    </div>
                    <div className={style.weight}>
                        {props.weight}
                        <span className={style.measure}>
                            {props.measure}
                        </span>
                    </div>
                </div>
            </div>
            
    <span  onMouseLeave={() => setMouseLeave()} className={style.link}>
        {(!isClick && props.count > 0) ? props.linkDescription : props.isClickDecriptionLink} 
        {(!isClick && props.count > 0) && <a href='#' onClick={() => setClass()}> купи.</a>}
        {(props.count === 0) && <span>Печалька, {props.composition} закончился.</span>}
    </span>
        </div>
    )
}

export default ProductCard;