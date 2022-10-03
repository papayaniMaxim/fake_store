import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import classes from './RegistrationForm.module.css'
import RegHeader from "./RegHeader/RegHeader";
import { regContext } from "./regContext";

function RegistrationForm() {
    const [firstName, setFirstName] = useState<string|undefined>('')
    const [lastName, setLastName] = useState<string | undefined>('')
    const [tel, setTel] = useState<string|undefined>('')
    const [email, setEmail] = useState<string | undefined>('')
    const [password, setPassword] = useState<string>('')
    const [checkPassword, setCheckPassword] = useState<string>('')

    const states = {
        firstName, setFirstName,
        lastName, setLastName,
        tel, setTel,
        email, setEmail,
        password, setPassword,
        checkPassword, setCheckPassword
    }

    return (
        <regContext.Provider value={states}>
            <div className={classes.container}>
                <RegHeader />
                <Routes>
                    <Route path="/" element={<Step1 />}></Route>
                    <Route path="/step2" element={<Step2 />}></Route>
                    <Route path="/step3" element={<Step3 />}></Route>
                    <Route path="/step4" element={<Step4 />}></Route>
                </Routes>
            </div>
        </regContext.Provider>
    );
}

export default RegistrationForm;

