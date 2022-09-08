import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import classes from './Greeting.module.css'

function Greeting(props:{closePortal():void}) {
    const [timer, setTimer] = useState(10)
    const closePortal = props.closePortal

    useEffect(() => {
        let interval = setInterval(() => setTimer(prev => prev - 1), 1000)
        setTimeout(() => {
            closePortal()
            clearInterval(interval)
        }, 10000)
    }, [])

    const variants = {
        hiden: { scale: 0.9, opacity: 0.9 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0, delayChildren: 0.6, staggerChildren: 0.2 } }
    }

    const button = {
        hiden: { opacity: 0,  y: -30  },
        visible: { opacity: 1, y: 0 }
    }

    const timerAnim = {
        hiden: { opacity: 0, x: 30, },
        visible: { opacity: 1, x: 0,}
    }
    return (
        <motion.div variants={variants} initial='hiden' animate='visible' className={classes.container}>
            <motion.div variants={timerAnim} className={classes.timer}>{timer}</motion.div>
            <motion.img variants={timerAnim}
                    initial={{  scale: 0 }}
                    animate={{ scale: 1.3 }}
                    transition={{
                        repeat: 4,
                        type: "spring",
                        stiffness: 500,
                        damping: 70,
                        repeatType: 'reverse',
                        delay:1,
                    
                    }}
                    className={classes.image} src="https://www.pngall.com/wp-content/uploads/5/Hello-Word-PNG.png" />
            <motion.div variants={variants} className={classes.message}>
                <motion.p className={classes.p} variants={timerAnim}>Привет! Меня зовут Максим! Данная страница была создана в демонстрационных целях.</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>Использованы следующие языки и технологии:</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>- HTML, CSS, Java Script, Type Script</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>библиотеки: </motion.p>
                <motion.p className={classes.p} variants={timerAnim}>- React.js</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>- Redux</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>- Framer Motion</motion.p>
                <motion.p className={classes.p} variants={timerAnim}>Данные с сервиса fakestoreapi.com</motion.p>
            </motion.div>
            <motion.button
                onClick={()=>closePortal()}
                variants={button} className={classes.button}>Ok</motion.button>
        </motion.div>
    );
}

export default Greeting;