import React from 'react'
import style from './stepline.module.css'
export default function Stepline() {
  return (
    <div className={style.box}>
      <div className={style.line}></div>
      <div className={style.circles}>
        <div className={style.circle}>
          <span className={style.numbers}>1</span>
        </div>
        <div className={style.circle}>
          <span className={style.numbers}>2</span>
        </div>
        <div className={style.circle}>
          <span className={style.numbers}>3</span>
        </div>
        <div className={style.circle}>
          <span className={style.numbers}>4</span>
        </div>
        <div className={style.circle}>
          <span className={style.numbers}>5</span>
        </div>
      </div>
    </div>
  )
}
