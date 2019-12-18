import React, {useState, useEffect} from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from "@vkontakte/vkui/dist/es6/components/Group/Group";
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Test from './components/Test';
import useVKConnect from './custom_states/useVKConnect';
import Panel from "@vkontakte/vkui/dist/es6/components/Panel/Panel";


const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [user, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
  const [vk_user, isError] = useVKConnect('VKWebAppGetUserInfo');
  const [groupToken, setGroupToken] = useState('gven');
  const [group_id, setGroupId] = useState(null);
  const appUrlParams = new URLSearchParams(window.location.search);

  function getVkCommunities() {
    connect.send('VKWebAppAddToCommunity');
  }

  useEffect(() => {
    connect.subscribe(({detail: {type, data}}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    if (!isError) {
      setUser(vk_user);
      setPopout(null)
    }
  },);

  useEffect(() => {
    async function fetchData() {
      console.log([...appUrlParams.entries()]);
      try {
        if (appUrlParams.has('vk_group_id')) {
          console.log(vk_user)
          const json = `{title: "vle", title_url: "https://vk.com" , text: "this is a widget text content"};`;
          const group_id = parseInt(appUrlParams.get('vk_group_id')),
            app_id = parseInt(appUrlParams.get('vk_app_id'));
          // const data = await connect.sendPromise("VKWebAppGetCommunityAuthToken", {'app_id': app_id, 'group_id': group_id, 'scope': 'app_widget'});
          // setGroupToken(data.access_token);
          //const data =  await connect.sendPromise("VKWebAppShowCommunityWidgetPreviewBox", {group_id: group_id, type: 'text', code: `return ${json}`});
          setGroupId(group_id);
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, []);

  const getVKCommunities = getVkCommunities;

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id='home'
            fetchedUser={user}
            token={groupToken}
            go={go}
            onGetCommunityClick={getVKCommunities}
            group_id={group_id}/>
      <Persik id='persik' go={go}/>
    </View>
  );
};

export default App;

