import { motion } from 'framer-motion';
import { MouseEvent, useEffect, useState } from 'react';
import MyModal from '../../../UI/MyModal';
import CallMeForm from '../../CallMeForm/CallMeForm';
import classes from './CallMeButton.module.css'

interface Rect {
    x: number
    y: number
}

function CallMeButton() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            {openModal
                ? <MyModal setModalIsOpen={() => setOpenModal(false)}><CallMeForm setOpenModal={()=>setOpenModal(()=> false)} /></MyModal>
                : <motion.button
                    draggable
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{stiffness:300, duration:0.05, type: 'spring'}}
                    className={classes.button}
                    onClick={(e) => setOpenModal(true)}>
                    
                    <div className={classes.content}>
                        <div className={classes.contentItem}>Напиши мне</div>
                        <div className={classes.contentItem}>Call me</div>
                    </div>
                
                </motion.button>}
        </>);
}

export default CallMeButton;