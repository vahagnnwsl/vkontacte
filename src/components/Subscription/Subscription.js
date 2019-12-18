import React, {useState, useEffect} from 'react';
import {Panel, Button, PanelHeader, HeaderButton, Checkbox} from '@vkontakte/vkui';
import GroupInfo from '../Header/GroupInfo';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Item from './Item';
import axios from 'axios';

const Subscription = (props) => {
  const [rates, setRates] = useState(null);
  const [subscriptions, changeSubscription] = useState([
    {
      type: 'standard',
      name: 'Просто Виджет',
      description: `Настройте стандартный виджет, чтобы просто приветствовать пользователей`,
      price: 490,
    },
    {
      type: 'premium',
      name: 'Для бизнеса',
      description: `Экономьте на рекламе,повышайте эффективность SMM и конверсию сообщества`,
      price: 990,
    }
  ]);
  const [subscriptionType, switchType] = useState('year');

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.get('/rates')
      .then(res => {
        console.log(res.data.data);
        setRates(res.data.data);
        changeSubscription(res.data.data.yearly)
      })
      .catch(err => {
        console.log(err)
      });
    setYearlyPrice(subscriptions, subscriptionType)
  }, []);

  const switchSubscriptionType = (e) => {
    if(e.currentTarget.classList.contains('month') && !e.currentTarget.classList.contains('selected')){
      switchType('month');
      setMonthlyPrice(subscriptions)
    } else if(e.currentTarget.classList.contains('year') && !e.currentTarget.classList.contains('selected')) {
      switchType('year');
      setYearlyPrice(subscriptions)
    }
  };

  const makeDiscount = (price) => {
    return price * 25 / 100;
  };

  const setYearlyPrice = (subscriptions) => {
    console.log(rates)
    const subscriptionsClone = [...subscriptions];
    subscriptionsClone.map(item => {
      item.price *= 12;
      return item.discountedPrice = item.price - makeDiscount(item.price);
    });
    changeSubscription(subscriptionsClone);
  };

  const setMonthlyPrice = (subscriptions) => {
    const subscriptionsClone = [...subscriptions];
    subscriptionsClone.map(item => {
      return item.price /= 12;
    });
    changeSubscription(subscriptionsClone);
  };

  const makePayment = (e) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    console.log(e.target.dataset.id);
    axios.post(`/orders`, {
      rate_id: e.target.dataset.id
    })
      .then(res => {
        console.log(res)
        const link = res.data.link;
        window.location.href = link;
      })
      .catch(err => {

      })
  };


  return (
    <Panel id={props.id}>
      <PanelHeader
        left={<HeaderButton onClick={props.handlePanelSwitch} data-panel={'home'}>{
          <Icon24BrowserBack/>}Назад</HeaderButton>}
        right={<GroupInfo/>}/>
      <div className="content">
        <div className="heading_content clearfix">
          <p className='heading_content_title'>
            Выберите подходящий тариф для сообщества
          </p>
          <div className="date_switch_wrapper clearfix">
            <div
              className={subscriptionType === 'month' ? 'month selected' : 'month'}
              onClick={(e) => switchSubscriptionType(e)}
            >Месяц
            </div>
            <div
              className={subscriptionType === 'year' ? 'year selected' : 'year'}
              onClick={(e) => switchSubscriptionType(e)}
            >Год
            </div>
          </div>
        </div>
        {subscriptions.map((item, i) => <Item  key={item.type} data={item} subscriptionPeriod={subscriptionType} makePayment={makePayment}/>)}
        <div className="footer clearfix">
          <p className="footer_txt">
            Чтобы получить счет для юридического лица,
            напишите нам в сообщения сообщества: vk.me/spycat
          </p>
          <div className="checkboxes_wrapper">
            <Checkbox className='checkbox'>Автоматический платеж</Checkbox>
            <Checkbox className='checkbox'>Я принимаю условия <a href="#" className='link'>договора</a></Checkbox>
          </div>
        </div>
      </div>
    </Panel>
  )
};

export default Subscription;