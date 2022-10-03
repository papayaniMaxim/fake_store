import { useState } from "react";
import { Link } from "react-router-dom";
import singin from "../../services/useSingin";
import classes from '../RegistrationForm/Step1/Step1.module.css'
import styles from './SingIn.module.css'

function LogIn(props: {
    setModalIsOpen?: () => void
}) {
    const [email, setEmail] = useState<string | undefined>('')
    const [password, setPassword] = useState<string | undefined>('')
    const [invalidEmailOrPass, setInvalidEmailOrPass] = useState(false)

    const [singIn, setSingIn] = useState(false)

    return (
        <div className={styles.container} >
            <div className={classes.container} >
                {singIn
                    ? <> {!invalidEmailOrPass
                        ? <>
                            <h2 className={styles.title}>Sing in</h2>
                            <input
                                type='email'
                                onChange={(e) => {
                                    setEmail(() => {
                                        return e.target.value
                                    })
                                }}
                                className={classes.input}
                                placeholder='Email'
                                value={email} />
                            <input
                                onChange={(e) => setPassword(() => e.target.value)}
                                value={password}
                                className={classes.input}
                                placeholder="Password"
                                type='password' />
                            <button
                                onClick={() => {
                                    singin(email, password).then(res => {
                                        if (!res) {
                                            setInvalidEmailOrPass(() => true)
                                            setTimeout(()=>setInvalidEmailOrPass(() => false), 2000)
                                        }
                                        if (props.setModalIsOpen && res) props.setModalIsOpen()
                                    })
                                }}
                                className={classes.button}>Sing in</button></>
                        : <> <p className={styles.title}>Invalid email or password</p>
                        <img alt='inv userInfo img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_error-destructive.svg/240px-OOjs_UI_icon_error-destructive.svg.png' /></>
                }</>
                    : <>
                        <button
                            onClick={() => setSingIn(() => true)}
                            className={classes.button}>Sing In</button>

                        <p className={styles.p}>or</p>

                        <Link to='/reg'><button
                            onClick={props.setModalIsOpen}
                            className={classes.button}>Registration</button></Link></>}
            </div>
        </div>
    );
}

export default LogIn;