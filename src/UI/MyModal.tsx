
import { useEffect } from 'react'
import classes from './MyModal.module.css'

export default function MyModal(props: {
    children: React.ReactNode
    setModalIsOpen: (event:any)=> void,   
}) {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])
    
    return (
        <div
            onClick={props.setModalIsOpen}
            className={classes.modal}>
            <div onClick={event => event.stopPropagation()} className={classes.modal_content}>
                {props.children}
            </div>
        </div>
    )
}