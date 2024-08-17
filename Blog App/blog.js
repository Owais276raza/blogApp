         import { 
            getDatabase,
            set,
            ref,
            get
          } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
          
         const firebaseConfig = {
            apiKey: "AIzaSyCFqqi7CQ3pzS4Ds7uuaR77vW8hl2KOb08",
            authDomain: "owais-61cfd.firebaseapp.com",
            projectId: "owais-61cfd",
            storageBucket: "owais-61cfd.appspot.com",
            messagingSenderId: "475562412487",
            appId: "1:475562412487:web:612059b82f4669d434b1e2"
          };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function GetPostData(){
    const user_ref = ref(db,'post/')
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
      let html = "";
        const table = document.querySelector('.main')
    
        for (const key in data) {
            if (data.hasOwnProperty(key)) { // Optional: Ensure `key` is a direct property of `data`
                const {title, post_content} = data[key] 
                
            //    console.log(title);
                html+=
                 ` 
                <div class="post">
                    <h2>${title}</h2>
                    <p>${post_content}</p>
                </div>    
                `
            }
        }
        table.innerHTML = html;

GetPostData();

    })
}

GetPostData();