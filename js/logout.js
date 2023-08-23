import { auth,db } from "./firebase.js";
import { collection,onSnapshot,query,where} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

function show(){

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const q = query(collection(db, "users"),where("uid","==",uid));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
              let div=document.getElementById("greet1");
            div=div?div.innerHTML="Dashboard":"";
            document.getElementById("uname").style.display="flex";
            document.getElementById("uname").innerHTML=change.doc.data().name;
            document.getElementById("login").style.display="none";
            document.getElementById("logout").style.display="block"
            localStorage.setItem("userId",uid)
            console.log(uid);
                });
            });
            
        } else {
            var d = new Date();
            var time = d.getHours();
            var greeting = "";
            
            if (time >= 4 && time < 12) {
                greeting = "Good morning!";
            } else if (time >= 12 && time < 17) {
                greeting = "Good afternoon!";
            } else if (time >= 17 && time < 20) {
                greeting = "Good evening!";
            } else {
                greeting = "Good night!";
            }
            
            document.getElementById("adddata").style.display = "none";
            document.getElementById("greet1").innerHTML = `<b>${greeting}</b>`;
        }
    });
}
show()    

document.getElementById("logout").addEventListener("click",()=>{
    signOut(auth).then(() => {
        document.getElementById("uname").style.display="none";
        document.getElementById("login").style.display="show";
        document.getElementById("logout").style.display="none"
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'success',
    title: "User Successfully LogOut"
})
      }).catch((error) => {
console.log(error);
    });
      

})