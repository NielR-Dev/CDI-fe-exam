import React from 'react'
import Modal from './Modal';
import useModal from './useModal';

function ImageItem({imgURL, altText}) {
    const {toggle, visible} = useModal();
    return (
        <div>
          <img src={imgURL} alt={altText} onClick={toggle}/>
            <Modal visible={visible} toggle={toggle} imgURL={imgURL}/>
        </div>
    )
}
export default ImageItem
