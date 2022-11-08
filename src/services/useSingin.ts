import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default async function singin(
  email: string | undefined,
  password: string | undefined
) {
  if (!email) return false;
  if (!password) return false;

  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
      // ...
    })
    .catch((error) => {
      return error.message;
    });
}
