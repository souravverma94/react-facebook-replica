import { firebaseApp, userRef } from "../firebase";

const CreateUser = ({ email, password, firstname, lastname }) => {
  if (!firstname || !lastname) return false;
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      userRef.child(data.user.uid).set({
        firstname: firstname,
        lastname: lastname,
        email: email,
      });
      console.log("user: ", data);
    })
    .catch((err) => {
      console.log("error: ", err);
      return err;
    });
};

export default CreateUser;
