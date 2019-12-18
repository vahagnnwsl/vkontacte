import React, {useState, useEffect} from 'react';
import {Group} from '@vkontakte/vkui';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';

class Help extends React.Component {
  accordionContent = React.createRef();

  componentDidMount = () => {
    const accordion_btns = this.accordionContent.current.querySelectorAll('.accordion_btn');
    accordion_btns.forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('open');
        el.nextElementSibling.classList.toggle('content-active');
      })
    })
  };

  render() {
    return (
      <Group
        id={'help'}
        className={'content'}
        title={'Страница помощи'}
      >
        <div className="accordions_wrapper" ref={this.accordionContent}>
          <div className="accordion">
            <div className="accordion_btn">Как включить виджет? {<Icon16Chevron className={'icon'}/>}</div>
            <div className="accordion_content">
              Перейдите на страницу «Мои виджеты» и нажмите на кнопку «Создать виджет». Вы попадете в «Каталог
              виджетов».
              Выберите подходящий виджет из каталога, заполните поля в визуальном редакторе, настройте аудиторию и
              нажмите «Сохранить».
              Далее включите виджет со страницы «Мои виджеты». Публикация виджета может занять до 1 минуты
            </div>
          </div>
          <div className="accordion">
            <div className="accordion_btn">Как включить виджет? {<Icon16Chevron className={'icon'}/>}</div>
            <div className="accordion_content">
              Перейдите на страницу «Мои виджеты» и нажмите на кнопку «Создать виджет». Вы попадете в «Каталог
              виджетов».
              Выберите подходящий виджет из каталога, заполните поля в визуальном редакторе, настройте аудиторию и
              нажмите «Сохранить».
              Далее включите виджет со страницы «Мои виджеты». Публикация виджета может занять до 1 минуты
            </div>
          </div>
          <div className="accordion">
            <div className="accordion_btn">Как включить виджет? {<Icon16Chevron className={'icon'}/>}</div>
            <div className="accordion_content">
              Перейдите на страницу «Мои виджеты» и нажмите на кнопку «Создать виджет». Вы попадете в «Каталог
              виджетов».
              Выберите подходящий виджет из каталога, заполните поля в визуальном редакторе, настройте аудиторию и
              нажмите «Сохранить».
              Далее включите виджет со страницы «Мои виджеты». Публикация виджета может занять до 1 минуты
            </div>
          </div>
        </div>
      </Group>
    )
  }

}

export default Help;