import { motion } from 'framer-motion';
import { MouseEvent, useState } from 'react';
import MyModal from '../../../UI/MyModal';
import CallMeForm from '../../CallMeForm/CallMeForm';
import classes from './CallMeButton.module.css'
function CallMeButton() {
    const [openModal, setOpenModal] = useState(false)
    const handler = (e:MouseEvent) => {}
    return (
        <>
            {openModal
                ? <MyModal setModalIsOpen={() => setOpenModal(false)}><CallMeForm /></MyModal>
                :  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{stiffness:300, duration:0.05, type: 'spring'}}
                    className={classes.button}
                    onClick={(e) => setOpenModal(true)}   
            >Напиши мне</motion.button>}
        </>);
}

export default CallMeButton;