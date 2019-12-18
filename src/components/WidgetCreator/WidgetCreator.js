import React, {Component} from 'react';
import {Group, Panel, PanelHeader, HeaderButton, Cell} from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import connect from "@vkontakte/vk-connect";
import GroupInfo from '../Header/GroupInfo';
import TargetingFrom from '../TargetingForm/TargetingForm';
import Header from '../WidgetForms/Header';
import WidgetTitle from '../WidgetForms/WidgetTitle';
import WidgetFooter from '../WidgetForms/WidgetFooter';
import Footer from '../WidgetForms/Footer';
import DiscountWidget from '../WidgetForms/DiscountWidget/DiscountWidget'
import ModalEdit from '../WidgetForms/ModalEdit'
import TitleEditForm from '../WidgetForms/DiscountWidget/Forms/TitleEditForm';
import TileTitleForm from '../WidgetForms/DiscountWidget/Forms/TilesTitleForm';
import TileDescFrom from '../WidgetForms/DiscountWidget/Forms/TilesDescForm';
import TilesLinkForm from '../WidgetForms/DiscountWidget/Forms/TilesLinkForm';
import FooterEditForm from '../WidgetForms/DiscountWidget/Forms/FooterEditForm'
import ImageUploadModal from '../WidgetForms/ImageUploadModal';
import axios from 'axios';

class WidgetCreator extends Component {
  state = {
    widgetType: 'tiles',
    widgetName: 'Акции и Скидки',
    widgetData: {
      title: 'Poxosik, успей на распродажу',
      title_url: '',
      tiles: [
        {
          "title": "Доктор Стрэндж",
          "url": 'https://vk.com/app34545#link1',
          "descr": "Фэнтези",
          "link": "Купить билеты",
          "link_url": "https://vk.com/app34545#link1",
          "icon_id": "346543_34654",
          "img_url": null,
        },
        {
          "title": "Фантастические твари",
          "url": "https://vk.com/app34545#link4",
          "descr": "Фэнтези",
          "link": "Купить билеты",
          "link_url": "https://vk.com/app34545#link3",
          "icon_id": "346543_23434",
          "img_url": null,
        },
        {
          "title": "Прибытие",
          "url": "https://vk.com/app34545#link4",
          "descr": "Триллер",
          "link": "Купить билеты",
          "link_url": "https://vk.com/app34545#link5",
          "icon_id": "346543_23421",
          "img_url": null,
        },
      ],
      more: '',
      more_url: ''
    },
    showModal: false,
    showImgUploadModal: false,
    showTileAdder: true,
    showRemoveIcon: false,
    modalData: {},
    tilesAmount: 3,
    imgLoaded: false,
    tile_index: null,
    appUrlParams: new URLSearchParams(window.location.search),
  };

  setItemsOrder = (data) => {
    const obj = {...this.state.widgetData};
    obj.tiles = data;
    this.setState({
      widgetData: obj
    })
  };

  setModalData = (e) => {
    const newObj = {...this.state.modalData},
      elem = e.target;
    let tile_index;
    let parent = elem.closest('.widget_form_card');
    console.log(parent)
    if (parent !== null) {
      tile_index = elem.closest('.widget_form_card').dataset.index;
      newObj.tile_index = tile_index;
    }
    switch (elem.dataset.name) {
      case 'widget_title':
        newObj.form_type = 'widget_title';
        newObj.title = this.state.widgetData.title;
        newObj.title_url = this.state.widgetData.title_url;
        break;
      case 'tile_title':
        newObj.form_type = 'tile_title';
        newObj.title = this.state.widgetData.tiles[tile_index].title;
        newObj.url = this.state.widgetData.tiles[tile_index].url;
        break;
      case 'tile_descr':
        newObj.form_type = 'tile_descr';
        newObj.descr = this.state.widgetData.tiles[tile_index].descr;
        break;
      case 'tile_link':
        newObj.form_type = 'tile_link';
        newObj.link = this.state.widgetData.tiles[tile_index].link;
        newObj.link_url = this.state.widgetData.tiles[tile_index].link_url;
        break;
      case 'widget_footer':
        newObj.form_type = 'widget_footer';
        newObj.more = this.state.widgetData.more;
        newObj.more_url = this.state.widgetData.more_url;
    }
    this.setState({
      modalData: newObj,
    });
    this.toggleModal();
  };

  removeTile = (i) => {
    const obj = {...this.state.widgetData};
    obj.tiles = [...obj.tiles.slice(0, i), ...obj.tiles.slice(i + 1)]

    this.setState({
      widgetData: obj,
      tilesAmount: --this.state.tilesAmount
    });
    this.toggleTileAdder();
  };

  addTile = () => {
    const obj = {...this.state.widgetData};

    const newTile = {
      "id": Math.random(),
      "title": "",
      "url": "",
      "descr": "",
      "link": "",
      "link_url": "",
      "icon_id": "346543_23421",
    };
    obj.tiles.push(newTile);
    this.setState({
      widgetData: obj,
      tilesAmount: ++this.state.tilesAmount
    });

    this.toggleTileAdder();
    this.toggleRemoveIcon();
  };

  toggleModal = () => this.setState({showModal: !this.state.showModal});
  toggleImgUploadModal = () => this.setState({showImgUploadModal: !this.state.showImgUploadModal});

  toggleTileAdder = () => {
    if (this.state.tilesAmount >= 10) {
      this.setState({showTileAdder: false})
    } else {
      this.setState({showTileAdder: true})
    }
    this.toggleRemoveIcon()
  };

  toggleRemoveIcon = () => {
    this.state.tilesAmount <= 3 ? this.setState({showRemoveIcon: false}) : this.setState({showRemoveIcon: true});
  };

  handleModalInputChange = (e) => {
    const obj = {...this.state.modalData};
    obj[e.target.name] = e.target.value;
    this.setState({
      modalData: obj
    });
    console.log(this.state.modalData);
  };

  getModalData = () => this.state.modalData;

  editWidgetData = () => {
    const data = this.getModalData(),
      tile_index = data.tile_index;

    console.log(this.state.modalData);
    const newObj = {...this.state.widgetData};
    for (let key in data) {
      if (tile_index) {
        for (let item in newObj.tiles[tile_index]) {
          if (item === key) {
            newObj.tiles[tile_index][item] = data[key];
          }
        }
      } else {
        for (let item in newObj) {
          if (item === key) {
            newObj[item] = data[key]
          }
        }
      }
    }

    this.setState({
      widgetData: newObj
    });
    this.setState({modalData: {}});
    this.toggleModal();
  };

  getTileIndex = (e) => {
    this.setState({tile_index: e.target.closest('.widget_form_card').dataset.index});
  };

  addTileImg = (tile_index, url, img_id) => {
    const obj = {...this.state.widgetData};
    obj.tiles[tile_index].img_url = url;
    obj.tiles[tile_index].icon_id = img_id;
    this.setState({widgetData: obj});
    this.toggleImgUploadModal()
  };

  publishWidget = () => {
    const obj = {...this.state.widgetData};
    obj.tiles.forEach(el => {
      delete el.img_url
    });
    const json = JSON.stringify(obj);
    const group_id = parseInt(this.state.appUrlParams.get('vk_group_id'));

    connect.send("VKWebAppShowCommunityWidgetPreviewBox", {"group_id": group_id, "type": this.state.widgetType, code: `return ${json};`});
  };

  saveWidget = () => {
    const widget_data = {...this.state.widgetData};

      widget_data.tiles.forEach(el => {
      delete el.img_url
    });

    const data = {
      type: this.state.widgetType,
      title: this.state.widgetName,
      type_id: 1,
      tiles: widget_data.tiles
    };

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.post('/widgets', data);
  };

  render() {
    let form = null;
    switch (this.state.modalData.form_type) {
      case 'widget_title':
        form = <TitleEditForm handleInputChange={(e) => this.handleModalInputChange(e)} data={this.state.modalData}/>;
        break;
      case 'tile_title':
        form = <TileTitleForm handleInputChange={(e) => this.handleModalInputChange(e)} data={this.state.modalData}/>;
        break;
      case 'tile_descr':
        form = <TileDescFrom handleInputChange={(e) => this.handleModalInputChange(e)} data={this.state.modalData}/>;
        break;
      case 'tile_link':
        form = <TilesLinkForm handleInputChange={(e) => this.handleModalInputChange(e)} data={this.state.modalData}/>;
        break;
      case 'widget_footer':
        form = <FooterEditForm handleInputChange={(e) => this.handleModalInputChange(e)} data={this.state.modalData}/>;
    }
    return (
      <Panel className='clearfix' id={this.props.id}>
        <Group id='widgetForm'>
          <PanelHeader
            left={<HeaderButton onClick={this.props.handlePanelSwitch} data-panel={'home'}>{
              <Icon24BrowserBack/>}Назад</HeaderButton>}
            right={<GroupInfo/>}/>
          <div id='discount_widget'>
            <Header title={this.state.widgetName}/>
            <div className="widget_form">
              <WidgetTitle setModalData={(e) => this.setModalData(e)} title={this.state.widgetData.title}/>
              <DiscountWidget
                setModalData={(e) => this.setModalData(e)}
                toggleModal={this.toggleImgUploadModal}
                removeTile={this.removeTile}
                setItemsOrder={this.setItemsOrder}
                addTile={this.addTile}
                data={this.state.widgetData.tiles}
                showTileAdder={this.state.showTileAdder}
                showRemoveIcon={this.state.showRemoveIcon}
                getTileIndex={this.getTileIndex}
              />
              <WidgetFooter setModalData={(e) => this.setModalData(e)} more={this.state.widgetData.more}/>
            </div>
          </div>
          <div className={'clearfix'}>
            <button onClick={this.saveWidget} className='btn-pink save_btn'>Сохранить</button>
          </div>
          <Footer/>
        </Group>
        <TargetingFrom/>
        {
          this.state.showModal &&
          <ModalEdit
            data={this.state.modalData}
            toggleModal={this.toggleModal}
            editWidget={this.editWidgetData}
            handleInputChange={(e) => this.handleModalInputChange(e)}>
            {form}
          </ModalEdit>
        }
        {
          this.state.showImgUploadModal &&
          <ImageUploadModal
            tile_index={this.state.tile_index}
            toggleModal={this.toggleImgUploadModal}
            addTileImg={this.addTileImg}/>
        }
      </Panel>
    )
  }
}

export default WidgetCreator;