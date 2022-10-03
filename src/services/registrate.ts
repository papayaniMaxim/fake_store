import { getAuth, createUserWithEmailAndPassword, updateProfile, browserLocalPersistence } from "firebase/auth";

export default async function registrateFirebase(firstName: string | undefined, lastName: string | undefined, email: string | undefined, phoneNumber: string | undefined, password: string | undefined) {
    if (!email) return console.log('Empty email')
    if (!password) return console.log('Empty password')
    if (!firstName) return console.log('Empty firstName')
    if (!lastName) return console.log('Empty lastName')
    if (!phoneNumber) return console.log('Empty phoneNumber')

    const auth = getAuth();

    getAuth().setPersistence(browserLocalPersistence)

    return createUserWithEmailAndPassword(auth, email, password)
        .then(res => res, e => console.log(e))
        .then(() => {

            const auth = getAuth();

            if (auth.currentUser) {
                return updateProfile(auth.currentUser, {
                    displayName: firstName + ' ' + lastName + ' ' + phoneNumber,
                })
                    .catch(error => {
                        console.log(" Profile not updated!", error)
                    })

                    .then(() => {
                        const auth = getAuth();
                        const user = auth.currentUser
                        if (!user || !user.displayName || !user.email) return
                        const displayNameArr = user.displayName.split('+')
                        const tel = '+' + displayNameArr[1]
                        const firstName = displayNameArr.join('').split(' ')[0]
                        const lastName = displayNameArr.join('').split(' ')[1]
                        const email = user.email
                        const uid = user.uid
                        const login = true
                        return { tel, email, uid, firstName, lastName, login }
                    });
            }
        })
}
