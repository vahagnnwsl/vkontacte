import React, {Fragment} from 'react';
import {Input, FormLayout} from '@vkontakte/vkui'

const TitleEditForm = (props) => {
  return (
    <FormLayout>
      <Input top='Загoловок' name='title' onChange={props.handleInputChange} defaultValue={props.data.title}/>
      <Input top='Ссылка' name='title_url' onChange={props.handleInputChange} defaultValue={props.data.title_link}/>
    </FormLayout>
  )
};

export default TitleEditForm;