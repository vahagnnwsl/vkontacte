import React, {useState} from 'react';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Copy from '@vkontakte/icons/dist/24/copy';
import Icon24Delete from '@vkontakte/icons/dist/24/delete';
import axios from 'axios';
import connect from "@vkontakte/vk-connect";
import user_icon from "../../images/user_icon.svg";
import edit_icon from "../../images/edit_icon.png";
import copy_icon from "../../images/copy_icon.png";
import delete_icon from '../../images/delete_icon.png';

const Widget = (props) => {

  const [appUrlParams] = useState(new URLSearchParams(window.location.search));

  const getWidgetById = (id) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.get(`widgets/${id}`)
      .then(res => {
        console.log(res.data)
        publishWidget(res.data.resp)
      })
      .catch(res => {
        console.log(res)
      })
  };

  const publishWidget = (data) => {

    const json = JSON.stringify(data.widgetData);
    const group_id = parseInt(appUrlParams.get('vk_group_id'));

    const code = `
      var a = API.users.get({"user_ids": Args.uid, "fields": "sex"});
        if (a[0].city.id == 762) { 
          return  ${json};
        }`;

    connect.send("VKWebAppShowCommunityWidgetPreviewBox", {"group_id": group_id, "type": data.widgetType, code: code});
  };

  console.log(props);
  return (
    <div id={props.id} className="clearfix">
      <p className='name'>{props.widgetData.title}</p>
      <p className='type'>qo inch gorc</p>
      <div className='icons_wrapper'>
        <label className={props.widgetData.isActive ? 'switch switch_active' : 'switch'}>
          <input onChange={() => {getWidgetById(props.widgetData.id)}} className='switch_checkbox' type='checkbox'/>
          <span className="switch_trigger"></span>
        </label>
        <img src={user_icon}/>
        <img src={edit_icon}/>
        <img src={copy_icon}/>
        <img src={delete_icon}/>
      </div>
    </div>
  )
};

export default Widget