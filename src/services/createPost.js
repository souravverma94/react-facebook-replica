import { postRef } from "../firebase";

export default (uid, data) => {
  postRef.push({
    createdBy: uid,
    content: data,
  });
};
