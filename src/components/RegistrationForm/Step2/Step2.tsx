import { useContext } from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidTel, normalisePhoneNumber } from "../../../services/validators";
import { regContext } from "../regContext";
import classes from '../Step1/Step1.module.css'

function Step2() {

    const {tel, setTel, email, setEmail} = useContext(regContext)

    const isValidForm = (tel:string|undefined, email:string|undefined) => {
            return (isValidTel(tel) && isValidEmail(email)) 
    }
    
    return (
        <form className={classes.container}>
            <input
                type='tel'
                onChange={(e) => {
                    e.target.value = normalisePhoneNumber(e.target.value)
                    setTel(() => e.target.value)
                }}
                className={classes.input}
                placeholder='Telephone'
                value={tel} />
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
    
                {isValidForm(tel, email) && <Link to='/reg/step3'>
                <button className={classes.button}>Next</button>
            </Link>}
        </form> );
}

export default Step2;