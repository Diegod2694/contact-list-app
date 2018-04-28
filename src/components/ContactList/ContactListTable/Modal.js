import React, { Component } from 'react'
import { css } from 'emotion'
import axios from 'axios'
import styled from 'react-emotion'
import './ContactListTable.scss'
import iconCamera from './../../../assets/add-contacts.svg'

/*CSS*/
  const UploadBtn = styled('button') `
    width: 139px;
    height: 139px;
    color: #242656;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none !important;
    cursor: pointer;
    background-color: #95fad8;
    border: none;
    border-radius: 72px;
    box-shadow: 0 13px 26px 0 rgba(0, 0, 0, 0.25);
    position: relative;
    @media(max-width: 630px) {
      width: 72px;
      height: 72px;
    }
  `
  const iconCameraClass = css`
    width: 53px;
    height: 47px;
    object-fit: contain;
    @media(max-width: 630px) {
      width: 35px;
      height: 32px;
    }
  `
  const inputFileHidden = css`
    /* position: absolute; */
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  `
  const imagePreview = css`
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    border-radius: 72px;
    object-fit: cover;
    border: 2px solid white;
  `

export default class Modal extends Component {
  state=({
    image: ''
  })

  encodeImageFileAsURL = (element) => {
    const file = element.target.files[0];
    if (file) {
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            image: reader.result,
          })
        }
        reader.readAsDataURL(file);
      } else {
        console.log('====================================')
        console.log('formato de imagen no válido')
        console.log('====================================')
      }
    }
  }
  render(){
    return(
      <div className='Modal'>
        <button className='close-button'>
          X
        </button>
        <div className='modal-container'>
          <form>
            <div className=''>
              <UploadBtn>
                <img src={this.state.image === '' ? iconCamera : this.state.image} className={this.state.image === '' ? iconCameraClass : imagePreview} alt="uploadPicture" />
                <input className={inputFileHidden} id='profileImgURI' name='profileImgURI' type='file' onChange={this.encodeImageFileAsURL} required />
              </UploadBtn>
            </div>
            <table>
              <tr>
                <td>Nombre</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Apellido</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Número</td>
                <td><input type="text" /></td>
              </tr>
            </table>
            <div className="button-container">
              <button>Guardar</button>
            </div>
            <div className="button-container">
              <button>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}