import React from 'react';
import {Button} from '@vkontakte/vkui'
const Item = (props) => {
  return(
    <div className="subscription">
      <div className="subscription_icon">
      </div>
      <div className="subscription_description">
        <h5>{props.data.title}</h5>
        <p>
          {props.data.description}
        </p>
      </div>
      <div className="subscription_details">
        <ul className="list">
          <li className='active'>12 шаблонов виджетов</li>
          <li className='active'>Визуальный редактор</li>
          <li>7 дизайн-макетов</li>
          <li>Таргетинг в виджетах</li>
        </ul>
        <ul className="list">
          <li>Поддержка статистики vk.cc</li>
          <li>Переменные</li>
          <li>Клиентская поддержка</li>
          <li>Мультивиджеты</li>
        </ul>
      </div>
      <div className="subscription_price">
        <span className={props.data.type === 'yearly' ? "subscription_price_secondary" : 'subscription_price_secondary hidden'}>{props.data.price}</span>
        <p className="subscription_price_primary">{props.data.type === 'yearly' ? props.data.discountPrice : props.data.price}</p>
        <p className="subscription_price_description">в год за 1 сообщество</p>
        <button data-id={props.data.id} onClick={(e) => props.makePayment(e)} className="btn-pink">Оплатить</button>
      </div>
    </div>
  );
};

export default Item;