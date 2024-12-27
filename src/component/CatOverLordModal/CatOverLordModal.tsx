import React from 'react';
import { Modal } from '@mui/material';

interface PropsT {
    isOpen: boolean
    onClose: ()=>void
}

function CatOverLordModal({isOpen, onClose}:PropsT) {
    return (
        <Modal
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}
            open={isOpen}
            onClose={onClose}
            >
            <img src="/image/cat_overlord.jpg" alt="" />
        </Modal>
    );
  }

  export default CatOverLordModal