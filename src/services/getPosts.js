import { postRef } from "../firebase";

export default (uid) => {
  postRef.once("value", (snapshot) => {
    return snapshot.val();
  });
};
