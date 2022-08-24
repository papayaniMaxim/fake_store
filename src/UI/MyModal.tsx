
import classes from './MyModal.module.css'

export default function MyModal(props: {
    children: React.ReactNode
    setModalIsOpen: (event:any)=> void,
   
    
}) {
    return (
        <div onClick={props.setModalIsOpen} className={classes.modal}>
            <div onClick={event => event.stopPropagation()} className={classes.modal_content}>
                {props.children}
            </div>
        </div>
    )
}