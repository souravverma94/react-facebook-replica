import { firebaseApp, userRef } from "../firebase";

export const SignInUsers = ({ email, password }) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      userRef.child(data.user.uid).once("value", (snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      return err;
    });
};

export default SignInUsers;
