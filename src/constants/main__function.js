import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { GetAllProjects, UploadProject } from "../rtk/action/action";
import { db, storage } from "./firebase";
 

// implement post Project function
export const postProject = (payload) => {
  return (dispatch) => {
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
        },
        (error) => {
          alert(error + " this an error on uploading");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const collectionRef = collection(db, "projects");
            addDoc(collectionRef, {
              actor: {
                Category: payload.Category,
                Description: payload.Description,
                GithubLink: payload.Github,
                ViewLink: payload.Link,
                ProjectName: payload.Name,
              },
              shareImg: downloadURL,
            })
              .then((docRef) => {
                dispatch(
                  UploadProject({
                    ...payload,
                    id: docRef.id,
                    shareImg: downloadURL,
                  })
                );
                // console.log(collectionRef);
              })

              .catch((error) => {
                alert("Error adding document: " + error.message);
              });
            console.log(collectionRef);
          });
        }
      );
    }
  };
};

// function load all projects

export function ShowAllProjects() {
  return (dispatch) => {
    let payload;
    const collectionRef = collection(db, "projects");
    const orderRef = query(collectionRef);
    onSnapshot(orderRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(GetAllProjects(payload));
 
    });
  };
}
