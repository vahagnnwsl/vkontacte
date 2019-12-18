import React from 'react'
import {Div, FormLayout} from '@vkontakte/vkui'


const ModalEdit = (props) => {
  return (
    <div className="modal">
      <Div className="modal_content">
        <div>
          {props.children}
          <div className="modal_buttons">
            <button onClick={props.toggleModal} className="btn cancel">Отменить</button>
            <button onClick={props.editWidget} className="btn accept">Принять</button>
          </div>
          <p className="hint">
            Введите знак  в поле &#123;, чтобы выбрать переменную
          </p>
        </div>
      </Div>
    </div>
  )
};

export default ModalEdit;