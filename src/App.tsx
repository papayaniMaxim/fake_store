import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import HomePage from "./pages/HomePage";
import Navigations from "./components/Navigations/Navigations";
import { useEffect } from "react";
import getVisitorInfo from "./services/getVisitorInfo";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import useFetchProducts from "./hooks/useFetchProducts";
import LogIn from "./components/SingIn/SingIn";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUserInfo } from "./redux/actions";

function App() {

   const dispatch = useDispatch()
    useEffect(() => {
        getVisitorInfo()
        
        getAuth().onAuthStateChanged((user) => {
            if (!user || !user.displayName || !user.email) return
            const displayNameArr = user.displayName.split('+')
            const phoneNumber = '+' + displayNameArr[1]
            const firstName = displayNameArr.join('').split(' ')[0]
            const lastName = displayNameArr.join('').split(' ')[1]
            const email = user.email
            const uid = user.uid
            const login = true
            dispatch(addUserInfo({tel:phoneNumber, firstName, lastName, email, uid, login}))
        }, e => console.log( e.message))
    }, [])
    
    useFetchProducts()

    return (
        <>
            <Navigations />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/reg/*" element={<RegistrationForm />} />
                <Route path="/card" element={<Card />} />
            </Routes>
        </>
    );
}

export default App;
