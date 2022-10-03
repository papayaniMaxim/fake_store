import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../interface/interfaces';
import { singOutAction } from '../../redux/actions';
import classes from './SingOut.module.css'

function SingOut(props: {
    setModalIsOpen:()=>void
}) {
    
    const dispatch = useDispatch()
    const userInfo = useSelector((state: State) => state.userInfo) 
    const navigate = useNavigate()
    
    return (<div className={classes.container}>
        <div className={classes.infoTable}>
            <h1 className={classes.tableTitle}>User info</h1>
            <div className={classes.tableRow}>
                <h2 className={classes.rowTitle}>First name</h2>
                <h2 className={classes.rowValue}>{userInfo?.firstName}</h2>
            </div>
            <div className={classes.tableRow}>
                <h2 className={classes.rowTitle}>Last name</h2>
                <h2 className={classes.rowValue}>{userInfo?.lastName}</h2>
            </div>
            <div className={classes.tableRow}>
                <h2 className={classes.rowTitle}>Telephone</h2>
                <h2 className={classes.rowValue}>{userInfo?.tel}</h2>
            </div>
            <div className={classes.tableRow}>
                <h2 className={classes.rowTitle}>E-mail</h2>
                <h2 className={classes.rowValue}>{userInfo?.email}</h2>
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <button
            onClick={() => {
                const auth = getAuth()
                signOut(auth).then(() => {
                    dispatch(singOutAction)
                    navigate('/')
                    props.setModalIsOpen()
                }, e => console.log(e))
            }}
            className={classes.button}>Sing out</button>
        <button
            onClick={() => props.setModalIsOpen()}
            className={classes.button}>Cancel</button></div>
    </div>);
}

export default SingOut;