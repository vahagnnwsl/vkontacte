import React from 'react';
import {Input, FormLayout} from '@vkontakte/vkui'

const FooterEditForm = (props) => {
  return (
    <FormLayout>
      <Input top='Текст' name='more' onChange={props.handleInputChange} defaultValue={props.data.more}/>
      <Input top='Ссылка' name='more_url' onChange={props.handleInputChange} defaultValue={props.data.more_url}/>
    </FormLayout>
  )
};

export default FooterEditForm;