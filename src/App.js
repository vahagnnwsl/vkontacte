import React, {Component} from 'react';
import axios from 'axios';
import {
  View,
  Panel,
  ConfigProvider,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import connect from '@vkontakte/vk-connect';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import WidgetCatalog from './components/WidgetCatalog/WidgetCatalog';
import Subscription from './components/Subscription/Subscription';
import GroupWidgets from "./components/GroupWidgets/GroupWidgets";
import Help from './components/Help/Help';
import WidgetCreator from './components/WidgetCreator/WidgetCreator';
import salesImg from './images/Акции и скидки.png';
import coverImg from './images/Акции в обложках.png';
import importantMessageImg from './images/Важное сообщение.png';
import personalOfferImg from './images/Персональное предложение.png';
import saleItemsImg from './images/Акционные товары.png';
import recommendedItemsImg from './images/Рекомендованные товары.png';
import reviewsImg from './images/Отзывы.png';
import clientsImg from './images/Отзывы_1.png';


export default class App extends Component {
  state = {
    headerTitle: 'Мои Виджеты',
    activePanel: 'subscription',
    activeContentPanel: 'groupWidgets',
    isOpen: false,
    catalog: null,
    appUrlParams: new URLSearchParams(window.location.search),
    serviceKey: '6a4f99a86a4f99a86a4f99a81b6a213f6666a4f6a4f99a837b6433614720aaafc47c5f0',
    imgUploadUrl: null,
    imgUrl: null,
  };

  getCatalog = (type) => {
    if (type === 'sale') {
      this.setState({
        catalog: [
          {
            id: 0,
            title: 'Акции и Продажи',
            description: 'Добавьте в сообщество от 3 до 10 баннеров, чтобы привлечь внимание к акциям и получить больше продаж',
            img: salesImg
          },
          {
            id: 1,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: coverImg
          },
          {
            id: 2,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: importantMessageImg
          },
          {
            id: 3,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: personalOfferImg
          },
          {
            id: 4,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: saleItemsImg
          },
          {
            id: 5,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: recommendedItemsImg
          },
          {
            id: 6,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: reviewsImg
          },
          {
            id: 7,
            title: 'Акции в обложках',
            description: 'Привлекайте внимание к акциям при помощи 3 больших баннеров с кнопками',
            img: clientsImg
          }
        ]
      })
    } else {
      this.setState({
        catalog: [
          {
            id: 0,
            title: 'Точки продаж',
            description: 'Сообщите посетителям сообщества о местоположении и времени работы ваших магазинов',
            img: 'https://prod.spycatdigital.ru/static/media/pointsSale.c5c157a4.png'
          },
          {
            id: 1,
            title: 'Мероприятия',
            description: 'Расскажите аудитории про ваши мероприятия, времени начала и месте проведения',
            img: 'https://prod.spycatdigital.ru/static/media/events.cf300d1f.png'
          }
        ]
      })
    }
  };

  toggleContext = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  switchPanel = (e) => {
    this.setState({
      activePanel: e.currentTarget.dataset.panel
    })
  };

  switchContentPanel = (e) => {
    this.setState({
      activeContentPanel: e.currentTarget.dataset.panel
    });
  };

  openCatalogList() {
    this.state.isOpen = true
  }

  componentDidMount = () => {
    const local_url = 'http://vkappback.loc/api',
      main_url = 'https://мазманян.рф/api';
    axios.defaults.baseURL = main_url;
    axios.post('/users', {
      name: 'gven',
      vk_id: 1234,
      vk_user_id: 5678,
    })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      })
      .catch(err => {
        console.log(err)
      });
    console.log(console.log([...this.state.appUrlParams.entries()]));
    // if(this.state.appUrlParams.has('vk_group_id')) {
    //   const group_id = parseInt(this.state.appUrlParams.get('vk_group_id')),
    //     app_id = parseInt(this.state.appUrlParams.get('vk_app_id'));
    //
    //   connect.sendPromise("VKWebAppGetCommunityAuthToken", {"app_id": app_id, "group_id": group_id, "scope": "app_widget"})
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  };




  render() {
    let activeContentPanel = null;
    switch (this.state.activeContentPanel) {
      case 'groupWidgets':
        activeContentPanel = <GroupWidgets
          handleContentPanelSwitch={(e) => {
            this.switchContentPanel(e);
            this.openCatalogList()
          }}
          getCatalog={this.getCatalog}
        />;
        break;
      case 'widgetCatalog':
        activeContentPanel = <WidgetCatalog
          catalog={this.state.catalog}
          handlePanelSwitch={(e) => {
            this.switchPanel(e)
          }}
        />;
        break;
      case 'help':
        activeContentPanel = <Help/>;
        break;
      default:
        activeContentPanel = <GroupWidgets/>;
    }
    return (
      <ConfigProvider>
        <View activePanel={this.state.activePanel}>
          <Panel id={'home'}>
            <Header title={this.state.headerTitle} handlePanelSwitch={(e) => this.switchPanel(e)}/>
            <Menu
              ref={this.myRef}
              isOpen={this.state.isOpen}
              handleContextToggle={() => this.toggleContext()}
              handlePanelSwitch={(e) => this.switchPanel(e)}
              handleContentPanelSwitch={this.switchContentPanel}
              getCatalog={this.getCatalog}
            />
            {activeContentPanel}
          </Panel>
          <Subscription
            id={'subscription'}
            handlePanelSwitch={(e) => this.switchPanel(e)}
          />
          <WidgetCreator
            id={'widgetCreator'}
            handlePanelSwitch={(e) => this.switchPanel(e)}
          />
        </View>
      </ConfigProvider>
    );
  }
}


