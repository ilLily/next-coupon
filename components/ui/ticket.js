import React from 'react'
import style from './ticket.module.css'
export default function Ticket() {
  return (
    <div className={style.ticket}>
      <div className={style.left}>
        <p className={style.left_word}>coupon</p>
      </div>
      <div className={style.right}>
        <div className={style.right_main}>
          <span className={style.moneysign}>$</span>
          <span className={style.amount}>20</span>
          <span className={style.off}>OFF</span>
        </div>
        <div>
          <p className={style.detail}>All Products</p>
        </div>
        <div>
          <span className={style.detail}>Exp:</span>
          <span className={style.detail}>23 OCT 2023</span>
        </div>
      </div>
    </div>
  )
}
