import React, {useState} from 'react';
import {Div} from '@vkontakte/vkui';
import UploadIcon from '../../images/icon.svg';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import connect from "@vkontakte/vk-connect";
import axios from "axios/index";

class ImageUploadModal extends React.Component {
  state = {
    serviceKey: '9c9de6d49c9de6d49c9de6d4219cf0df8a99c9d9c9de6d4c10b1b028c826bdf7763ae5e',
    imgUploadUrl: null,
    imgLink: null,
    imgId: null
  };

  componentDidMount = () => {
    connect.sendPromise("VKWebAppCallAPIMethod", {
      "method": "appWidgets.getAppImageUploadServer",
      "params": {"image_type": "160x160", "v": "5.103", "access_token": this.state.serviceKey}
    })
      .then(res => {
        this.setState({imgUploadUrl: res});
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
  };

  dataURItoBlob = (dataURI) => {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };

  setImgLink = (e) => {
    const link = URL.createObjectURL(e.target.files[0]);

    this.uploadImg(e.target.files[0])
      .then(res => {
        const new_img = new FormData();
        const data = `data:image/png;base64,${res.data}`;
        const result = this.dataURItoBlob(data);
        new_img.append('image', result);
        this.prepareImgForVk(new_img)
          .then(res => {
            console.log(res)
            this.addImgToVk(res)
              .then(res => {
                console.log(res)
                this.setState({imgLink: link});
                this.setState({imgId: res.response.id})
              })
              .catch(err => {
                console.log(err)
              });
          })
          .catch(err => {
            console.log(err)
          });
      })
      .catch(err => {
        console.log(err)
      })
  };

   uploadImg(file) {
    const file_upload_data = new FormData();
    file_upload_data.append('image', file);
     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return  axios.post('/widgets/resize-img', file_upload_data, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
  }

 async prepareImgForVk(img) {
    return await axios.post(this.state.imgUploadUrl.response.upload_url, img, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
  }

  async addImgToVk(res) {
   return await connect.sendPromise("VKWebAppCallAPIMethod", {
      "method": "appWidgets.saveAppImage",
      "params": {
        "hash": res.data.hash,
        'image': res.data.image,
        "v": "5.103",
        "access_token": this.state.serviceKey
      }
    })
  }

  render() {
    return (
      <div id='image_upload_modal' className="modal">
        <Div className="modal_content">
          <Icon16Cancel onClick={this.props.toggleModal}/>
          <h2 className='header'>Загрузка изображения</h2>
          <label className="label">
            <input type="file" hidden onChange={(e) => this.setImgLink(e)}/>
            <div className={this.state.imgLink ? 'hidden' : 'align_center'}>
              <img src={UploadIcon} className="upload_icon"/>
              <div className="text">
                Рекомендуемое разрешение 480х720px.
                Изображение выровнено по центру. Формат .png или .jpg
              </div>
              <div className='upload_btn'>Загрузить</div>
            </div>
            <img src={this.state.imgLink} className={!this.state.imgLink ? 'hidden' : 'img'}/>
          </label>
          <div className={!this.state.imgLink ? 'hidden' : 'align_center'}>
            <div onClick={() => this.props.addTileImg(this.props.tile_index, this.state.imgLink, this.state.imgId)}
                 className="confirm_btn">Принять
            </div>
          </div>
        </Div>
      </div>
    )
  }
}

export default ImageUploadModal;