import { app, auth, db, storage } from './firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { setDoc, doc, query, where, onSnapshot, collection, addDoc, updateDoc,orderBy } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

let userId=localStorage.getItem("userId");
const show_user = () => {
    var userProfile=JSON.parse(localStorage.getItem("userProfile"))

      onSnapshot(collection(db, "users"), (data) => {
        data.docChanges().forEach((change) => {
          if (change.doc.data().uid==userProfile.id) {
         document.getElementById("email").innerHTML=change.doc.data().email;
         document.getElementById("user_name").innerHTML=change.doc.data().name;
         document.getElementById("user_pic").src=userProfile.pic;
        
          }
        })
      });
}
show_user()


function mytest(uid) {
    var users=JSON.parse(localStorage.getItem("userProfile"));
  var mytestpost = document.getElementById("show");
  console.log(users.id);
  const q = query(collection(db, "blogs"), where("user", "==", users.id));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const { title,text,time, user } = change.doc.data()
      console.log(change.doc.data());
      mytestpost.innerHTML += `
      <div id="blog-${change.doc.id}" class='border border-1 bg-body rounded p-3'>
      <div class="profile d-flex">
      <div  class="imgbox">
          <img  height='80%'  src="${users.pic? users.pic : "../img/default.png"}"  class="rounded" height="110px" width="110px" alt="">
      </div>
      <div class="userbox ms-4">
          <h3 id="blog-title-${change.doc.id}">${title}</h3>
          <p class="fw-bold text-muted">${users.name} - ${time ? moment(time.toDate()).fromNow():moment().fromNow()}</p>
      </div>
  </div>
  <br>
  <div class="description">
      <p class="text-muted des"  id='des-${change.doc.id}'>${text}</p>
  </div>
  </div>
  <br>

`
    });
  
  });

}

mytest();
