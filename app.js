let click=false;
const pages = ["home","quotation","blog","faqs","contacts","login"];
let defaultPage = "home";
const pagesZote = document.querySelectorAll(".page");
const menuButtons = document.querySelectorAll(".buttonTopmenu");
checkpageUrl(true);
console.log(currentUrl)
function checkpageUrl(popstate) {
    currentPage= (currentUrl.split("/")[3]).split("?")[0];
    if(pages.indexOf(currentPage)>-1) {
        loadPage((currentUrl.split("/")[3]), popstate);
    } else {
        loadPage(defaultPage, popstate);
    }
}
// loadPage(defaultPage, true)
// check page chagense
window.onpopstate = function (event) {
    checkpageUrl(false);
}

pwejarloader();
function loadPage(page,popstate) {
    pwejarloader("Loading Page<br> Please wait...");
    const pagesZote = document.querySelectorAll(".page");
    pagesZote.forEach(element => {
    element.style.display = "none";
    });

    menuButtons.forEach(element => {
        element.classList.remove("active");
        element.classList.add("notActive");
    });
    
    const current = document.getElementById(page+"Button");
    current.classList.remove("notActive");
    current.classList.add("active");
    pwejarSmoothScroll("body",300);
    document.getElementById(page + "Page").style.display = "block";
    if(popstate) {
        window.history.pushState({urlPath:'/index.html'},"",'/'+page);
        document.querySelector("title").innerHTML = "Tonigems | "+ page;
    }
    pwejarLoaderDismiss();
}


// ________________________________________________________________________________________ _________________________________services
//________________________________________________________onscroll
const myMenu = document.querySelector("body");
const logoss = document.querySelector(".logo23");
const searchss = document.querySelector(".serch23");

let appear = document.querySelectorAll(".appearh");
const holder3  = document.querySelector(".whatWeoffer");


window.addEventListener("scroll", scrollAppear);
function scrollAppear() {
    // const menuDist = myMenu.getBoundingClientRect().top;
    // if(menuDist<16) {
    //     logoss.style.width = "6vw";
    //     searchss.style.transform = "rotateX(0deg)";
    // } else {
    //     logoss.style.width = "0";
    //     searchss.style.transform = "rotateX(90deg)";
    // }
    let count = 0;
    appear.forEach(element => {
        
        let dist = element.getBoundingClientRect().top;
        let screenHight = window.innerHeight;
        element.style.transition = "all ease-out 0.3s "+(count*0.05)+"s"
        if(dist<screenHight*0.9) {
            element.classList.remove("hide");
            element.classList.add("show");
        } else{
            element.classList.add("hide");
            element.classList.remove("show");
        }
        count++;
        
    });
} 
//____________________________________________________________________________________DOTS
function checked() {
    var line1 = document.getElementById('lineOne');
    var line2 = document.getElementById('lineTwo')
    var line3 = document.getElementById('lineThree');
    var stick = document.querySelector('.meSlide');
    const maembe = document.querySelectorAll(".maembe")
    if (line1 && line2 && line3 ) {
      if (!click) {
        line1.style.transform = 'rotate(45deg) translateY(25%)';
        line3.style.transform = 'rotate(-45deg) translateY(-25%)';
        line2.style.transform = 'translate(100%)';
        line1.style.fill = 'red';
        line3.style.fill = 'red';
        line2.style.fill = 'red';
        line2.style.opacity = '0';
        click= true;
    
        stick.style.display = "block";
        let theX=0
        window.setTimeout(function (){
          maembe.forEach(element => {
            element.style.transition = "0.3s all "+theX*0.07+"s ease-in-out";
            element.style.transform = "translateY(0)"
            element.style.opacity = "1";
            theX++
          });
        },1)
      } else {
        line1.style.transform = 'rotate(0)';
        line3.style.transform = 'rotate(0)';
        line2.style.transform = 'rotate(0)';
        line2.style.opacity = '1';
        line1.style.fill = '#3E4095';
        line3.style.fill = '#3E4095';
        line2.style.fill = '#3E4095';
        click= false;
    
        
        let theX=0;
        maembe.forEach(element => {
          element.style.transition = "0.1s all "+theX*0.005+"s ease-in-out";
          element.style.transform = "translateY(100%)";
          element.style.opacity = "0";
          theX++
        });
        window.setTimeout(function(){
          stick.style.display = "none"
        },300)
      }
    }
    
  
  }
//_____________________________________________________________________________________map
function initMap() {
    // The location of Uluru -3.621654, 39.857423
    const uluru = { lat: -3.621654, lng: 39.857423 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7.5,
      center: uluru,

    });
    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    
  }
//______________________________________________________________________________________firebase
// firebase config
var firebaseConfig = {
    apiKey: "AIzaSyCIdgMe87ed_CYEPkyh5w8faehYi1TAXQs",
    authDomain: "pwejar.firebaseapp.com",
    databaseURL: "https://pwejar.firebaseio.com",
    projectId: "pwejar",
    storageBucket: "pwejar.appspot.com",
    messagingSenderId: "56404761535",
    appId: "1:56404761535:web:914593b91bc8cffe3e9f0a",
    measurementId: "G-Q1X3THTDHD"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let thisUser=null;
// __________________________________________________ toogle log out
function isItLoggedIn() {
    if(click) {
        checked()
      }
    if(thisUser===null) {
        let defaultObject = {
            buttons: [
                {
                    name: "No",
                    function: ""
                },
                {
                    name: "Yes",
                    function: "signOut()"
                },
            ],
            title: "You are about to Logout",
            Message: "Kindly confirm!"
    
        }
        pwejarAlertControler(defaultObject);
       
    } else {
        loadPage('login',true);
    }
    
}
// _____________________________________________________ logout
function signOut() {
    firebase.auth().signOut().then(function() {
        toogleAdmin();
        thisUser = null;
        return false;
      }, function(error) {
        console.error('Sign Out Error', error);
        toogleAdmin();
        thisUser = null;
        return false;
      });
}
 
//_______________________________________________photoViwer;
// pwejarPhotoViewer()

let pwejarPhotolistMainV001=[],
pwejarPhotoStartingV001=0;

function pwejarPhotoViewer(photoList,starting) {
    pwejarPhotolistMainV001 = photoList;
    
    var iDiv1 = document.createElement('div');
    var stylo1 = document.createElement('style');
    iDiv1.id = 'pwejarPhotoViewerV0001Container';
    stylo1.id = 'pwejarPhotoViewerV0001Style';
    let jaza='';
    photoList.forEach(element => {
        jaza=jaza +
         `<div class="pwejarPhotoCardV0001">
            <img class="pwejarImageV0001" src="${element}">
        </div>`
    });

    let meHtml = `
    <div id="pwejarPhotoViewerV0001Card">
        <div id="HolderpwejarPhotoViewerV0001">
            ${jaza}
        </div>
        <div class="CloserPhotoViewerV0001" onclick="pwejarPhotoViewerDismiss()">&#10006;</div>
        <div onclick="pwejarPhotoScroll(1)" class="nextPhotoViewerV0001">></div>
        <div onclick="pwejarPhotoScroll(-1)" class="prevPhotoViewerV0001"><</div>
    </div> 
    `
   let inerStyle = `
    #pwejarPhotoViewerV0001Container{
        position: relative;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #ffffffc7;
        z-index: 1000000;
        top: 0;
        left: 0;
        text-align: center;
        //overflow: scroll;
    }
    #HolderpwejarPhotoViewerV0001{
        height: 100%;
        display: flex;
        flex-shrink: 0;
        // transform: translateX(-${starting}00vw)
    }
    .pwejarPhotoCardV0001{
        height: 100vh;
        width: 100vw;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .CloserPhotoViewerV0001{
        position: absolute;
        top: 3vh;
        right: 5vw;
        cursor: pointer;
        text-shadow: 0px 0px 2px #fff;
    }
    .nextPhotoViewerV0001{
        position: absolute;
        top: 50%;
        right: 5vw;
        font-weight: bolder;
        cursor: pointer;
        text-shadow: 0px 0px 2px #fff;
    }
    .prevPhotoViewerV0001{
        position: absolute;
        top: 50%;
        left: 5vw;
        cursor: pointer;
        text-shadow: 0px 0px 2px #fff;
    }
    .pwejarImageV0001{
        max-width: 100vw;
        max-height: 100vh;
        margin: auto;
    }
    
    `
    iDiv1.innerHTML = meHtml;
    stylo1.innerHTML = inerStyle;
    const body98787 = document.querySelector("body");
    body98787.appendChild(stylo1)
    body98787.appendChild(iDiv1)
    pwejarPhotoScroll(starting);
}

function pwejarPhotoScroll(value) {
    var element = document.getElementById('HolderpwejarPhotoViewerV0001');
    element.style.transform = `translateX(-${pwejarPhotoStartingV001 + value}00vw)`;
    pwejarPhotoStartingV001 = pwejarPhotoStartingV001 + value;

    let nexBtt9080980df = document.querySelector(".nextPhotoViewerV0001");
    let prvBtt9080980df = document.querySelector(".prevPhotoViewerV0001");
    nexBtt9080980df.style.display = "block";
    prvBtt9080980df.style.display = "block";

    if(pwejarPhotoStartingV001 === 0) {
       prvBtt9080980df.style.display = "none"; 
    }
    if(pwejarPhotoStartingV001 === pwejarPhotolistMainV001.length-1) {
        nexBtt9080980df.style.display = "none"; 
    }
    

}
function pwejarPhotoViewerDismiss(){
    document.getElementById("pwejarPhotoViewerV0001Container").remove();
    document.getElementById("pwejarPhotoViewerV0001Style").remove();
    pwejarPhotolistMainV001=[];
    pwejarPhotoStartingV001=0;
}
// _____________________________________________ alertControler();
function pwejarAlertControler(defaultObject){
    // let defaultObject = {
    //     buttons: [
    //         {
    //             name: "yes",
    //             function: ""
    //         },
    //         {
    //             name: "no",
    //             function: ""
    //         },
    //     ],
    //     title: "Alert Controler",
    //     Message: "Confirm!"

    // }
    var iDiv = document.createElement('div');
    var stylo = document.createElement('style');
    iDiv.id = 'pwejarAlertV0001Container';
    stylo.id = 'pwejarAlertV0001Style';
    
    let buttonss= '';
    defaultObject.buttons.forEach(element => {
        buttonss = buttonss + `<div class="pwejarAlertV0001Buttons" onclick="`+element.function+`;document.getElementById('pwejarAlertV0001Style').remove();document.getElementById('pwejarAlertV0001Container').remove();">`+element.name+`</div>`        
    });
    let meHtml = `
    <div id="pwejarAlertV0001Card">
        <h3>`+defaultObject.title+`</h3>
        <p>`+defaultObject.Message+`</p>
        <div style=" display:flex; justify-content: space-around">`+buttonss+`</div>
    </div> 
    `
    let inerStyle = `
    #pwejarAlertV0001Container{
        display: grid;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #00000084;
        z-index: 1000000;
        top: 0;
        left: 0;
        text-align: center;
    }
    #pwejarAlertV0001Card{
        background-color:white; 
        max-width: 300px; 
        margin: 0 auto; 
        padding: 10px; 
        border-radius: 5px;
    }
    .pwejarAlertV0001Buttons{
        cursor: pointer;
        padding: 7px; 
        border-radius: 7px;
        margin: 5px; 
        border: 2px solid black;
    }
    .pwejarAlertV0001Buttons:hover{
        background-color: black;
        color: white; 
        border: 2px solid black;
    }
    `
    iDiv.innerHTML = meHtml;
    stylo.innerHTML = inerStyle;
    const body98787 = document.querySelector("body");
    body98787.appendChild(stylo)
    body98787.appendChild(iDiv)

}
//__________________________________________________ smooth scroll
function pwejarSmoothScroll(target, duration) {
    if(click) {
        checked()
      }
    var theTarget = document.querySelector(target);
    var targetPosition = theTarget.offsetTop - 40;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t/=d/2;
        if (t < 1) return c/2*t*t+b;
        t--;
        return -c/2 * (t * (t-2)-1)+b;
    }
    requestAnimationFrame(animation);
}
// ____________________________________________________________________________validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//-----------------------------------tooogle
function toogleAdmin() {
    var admins = document.querySelectorAll(".admin");
    firebase.auth().onAuthStateChanged(function(user) {
        var bacccs = document.querySelector(".fillOne");
        var faccc1 = document.querySelectorAll(".fillTwo")[0];
        var faccc2 = document.querySelectorAll(".fillTwo")[1];
        
        if (user) {
            // User is signed in.
            isAnonymous = user.isAnonymous;
            uid = user.uid;
            thisUser = user;
           if(uid && !isAnonymous) {
                bacccs.style.fill = "orange";
                faccc1.style.fill = "black";
                faccc2.style.fill = "black";
                isAdmin=true;
                adminEmail=user.email;
                
                admins.forEach(element => {
                    element.style.display = "block"
                });
                
               
            } else {
                bacccs.style.fill = "#BDBFC1";
                faccc1.style.fill = "#6B809B";
                faccc2.style.fill = "#6B809B";
                admins.forEach(element => {
                    element.style.display = "none"
                });
            }
        } else {
            // User is signed out.
            // ...
            thisUser = null;
            bacccs.style.fill = "#BDBFC1";
            faccc1.style.fill = "#6B809B";
            faccc2.style.fill = "#6B809B";
            admins.forEach(element => {
                element.style.display = "none"
            });
            firebase.auth().signInAnonymously().catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
            });
            
            // admin(false);
        }
    // ...
    });
    
}
// __________________________________________________________________________________________________________________________blog page
let selectedImages=[];
let blogPage = 1;
let blogsPerPage = 20;
let unfilteredNews = [];
let htmlSmall = '';
let htmlSmaller='';
let editData;

function showPrev(event,id) {
    let imgSrc="";
    if(editData) {
        q=0;
        if(editData.pictures) {
            editData.pictures.forEach(element => {
                imgSrc = imgSrc +
                        `<div class="imageCont">
                            <img src="${element}"/>
                            <div class="delPic" onclick="deleteFire(${q})">&#10006;</div>
                        </div>`;
                q++;
            });
        }
    }
    if(event) {
        if (event.target.files && event.target.files[0]) {

            selectedImages = Array.from(selectedImages).concat(Array.from(event.target.files));
                 
            
            for(let q = 0; q<selectedImages.length; q++) {
    
                const reader = new FileReader();
                reader.readAsDataURL(selectedImages[q]);
    
                reader.onload = readerEvent => {
                    var content = readerEvent.target.result; // this is the content!
                    imgSrc = imgSrc +
                    `<div class="imageCont">
                        <img src="${content}"/>
                        <div class="delPic" onclick="deleteSelctedPhoto(${q})">&#10006;</div>
                    </div>`
    
                    document.getElementById(id).innerHTML = imgSrc;
                }
                
            }
            document.getElementById(id).innerHTML = imgSrc;
        }
        else {
            // selectedImages = null;
        }
    }
    document.getElementById(id).innerHTML = imgSrc;
}
function deleteSelctedPhoto(indexaa){
    let newIndexx =0;
    let newARR=[]

    selectedImages.forEach(element => {
        
        if(indexaa!=newIndexx) {
            newARR.push(element)
        } 

        newIndexx++
    });

    selectedImages = newARR;
    
    
    let imgSrc=""
    if(editData) {
        q=0
        editData.pictures.forEach(element => {
            imgSrc = imgSrc +
                    `<div class="imageCont">
                        <img src="${element}"/>
                        <div class="delPic" onclick="deleteFire(${q})">&#10006;</div>
                    </div>`;
            q++;
        });
        
    }
    document.getElementById("photoViewer").innerHTML = imgSrc;
    for(let q = 0; q<selectedImages.length; q++) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImages[q]);
        
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!
            imgSrc = imgSrc +
            `<div class="imageCont">
                <img src="${content}"/>
                <div class="delPic" onclick="deleteSelctedPhoto(${q})">&#10006;</div>
            </div>`
            
            document.getElementById("photoViewer").innerHTML = imgSrc;
        }
        
    }
    

}

function updateBlog(indeSHa) {
    const titleBlog = document.getElementById("blogTitle");
    const detailsBlog = document.getElementById("blogDetails");
    
    if(indeSHa != undefined) {
        editData = unfilteredNews[indeSHa];
        if(editData.title) {
            titleBlog.value = editData.title;
        }
        if(editData.description) {
            let reppp = editData.description.replace(/<br\s*\/?>/mg,"\n");
            detailsBlog.value = reppp;
        }
        showPrev(undefined,'photoViewer');
        document.getElementById('photoViewer').scrollIntoView()
        return;
    }
    if(!titleBlog.value) {
        return alert("Blog needs a Title")
    }
    if(!detailsBlog.value) {
        return alert("Blog needs Details")
    }
    pwejarloader("Uploading<br>Please wait...");
    
    if (selectedImages.length>0) {
    
        const uploadPromises = [];
        const storage = firebase.storage()
        for (let i = 0; i < selectedImages.length; i++) {
        uploadPromises.push(
            storage.ref(`toniGemsBlog/${selectedImages[i].name}`+ Math.random()).put(selectedImages[i])
        );
        }
        Promise.all(uploadPromises)
        .then((uploadTaskSnapshots) => {
            const urlPromises = [];
    
            uploadTaskSnapshots.forEach((uploadTaskSnapshot) => {
            urlPromises.push(uploadTaskSnapshot.ref.getDownloadURL());
            });
    
            return Promise.all(urlPromises);
        })
        .then((urls) => {
            let newArrrrr = [];
            if(editData) {
                if(editData.pictures){
                    editData.pictures.forEach(element => {
                        newArrrrr.push(element);
                    });
                }
                urls.forEach(element => {
                    newArrrrr.push(element);
                });

                var dzzedata = {
                    title: titleBlog.value,
                    description: detailsBlog.value,
                    pictures: newArrrrr,
                    type: 'blog',
                    edited: new Date()   
                }
                if(detailsBlog.value) { dzzedata.description = detailsBlog.value.replace(/\r?\n/g, '<br/>');}
            
                firebase.firestore().collection("tony_blogs").doc(editData.id).update(dzzedata).then(()=>{
                        
                    clearBlogForm();
                    pwejarLoaderDismiss();
                    runMeBlog();
                    return false;
                });
            } else {
                var dzzedata = {
                    title: titleBlog.value,
                    description: detailsBlog.value,
                    pictures: urls,
                    type: 'blog',
                    created: new Date()   
                }
                if(detailsBlog.value) { dzzedata.description = detailsBlog.value.replace(/\r?\n/g, '<br/>');}
                
                firebase.firestore().collection("tony_blogs").add(dzzedata).then(()=>{
                        
                    clearBlogForm();
                    pwejarLoaderDismiss();
                    runMeBlog();
                    return false;
                });
            }
            
        }).catch((errorrr) =>{
            pwejarLoaderDismiss();
            return alert(errorrr.message)
        });
    } else {
        var dzzedata = {
            title: titleBlog.value,
            description: detailsBlog.value,
            type: 'blog',
            created: new Date()   
        }
        if(detailsBlog.value) { dzzedata.description = detailsBlog.value.replace(/\r?\n/g, '<br/>');}
        
        if(editData) {
            if(editData.pictures) {
                dzzedata.pictures = editData.pictures;
            }
            firebase.firestore().collection("tony_blogs").doc(editData.id).update(dzzedata).then(()=>{
                
                clearBlogForm();
                pwejarLoaderDismiss();
                runMeBlog();
                return false;
            }).catch((errorrr) =>{
                pwejarLoaderDismiss();
                return alert(errorrr.message)
            });
        } else {
            firebase.firestore().collection("tony_blogs").add(dzzedata).then(()=>{
                
                clearBlogForm();
                pwejarLoaderDismiss();
                runMeBlog();
                return false;
            }).catch((errorrr) =>{
                pwejarLoaderDismiss();
                return alert(errorrr.message)
            });
        }
    }
}

function clearBlogForm(){
    document.getElementById("blogTitle").value ="";
    document.getElementById("blogDetails").value="";
    document.getElementById("inputPhotos").value="";
    selectedImages=[];
    editData = null;
    document.getElementById("photoViewer").innerHTML = "no photos selected!"
    runMeBlog();
}

runMeBlog();
function runMeBlog(){
    db.collection("tony_blogs")
    .get()
    .then(function (querySnapshot) {
    user = firebase.auth().currentUser;
        unfilteredNews = [];
    querySnapshot.forEach(function (doc) {
        // book_info = {id: doc.id, ...doc.data()}
        unfilteredNews.push({id: doc.id, ...doc.data() });
    });
    reloadNews();
    }).catch(function (error) {
    console.log("Error meee***", error);

    });
}
  
function reloadNews() {
    unfilteredNews.sort(function(a,b){
        return b.created.seconds - a.created.seconds;
      });
    {// created: Fi {seconds: 1620806288, nanoseconds: 284000000}
    // description: "its not a cliché for a fact, this matter needs to be addressed if not now, then yesterday. the mother universe is coming at us, attacking us left right and center. we have disappointed he, she trusted us with her own and we got selfish, destroyed and never repair. war is coming and mother nature is furious."
    // id: "elS98D5G05ijagRyfjZp"
    // title: "environment, cliche or not!"
    // type: "blog"
    // __proto__: Object
    // 2:
    // created: Fi {seconds: 1620799497, nanoseconds: 122000000}
    // description: "detailsBlog.value<br/><br/>Florence<br/>2 months ago<br/>If you are reading this, I wish with all my heart that all the goals for which you are fighting day by day are fulfilled,<br/>Have faith that they will come true!<br/>Thank you for taking the time to read it, we are waiting for you on our channel ❤"
    // id: "nsE6tJK4RwhUWdCxZr7Y"
    // pictures: Array(5)}
    }
    {/* <div class="cardree">
            <div class="imgTop">
                <div class="imageCont"  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pwejar.appspot.com/o/toniGemsBlog%2F5f4ea23f-b1c4-4385-b379-83c2ce737bf8.jpg0.8616342127534389?alt=media&token=dedfc063-3967-485f-85a5-a3a0a5e9d52d">
                </div>
                <div class="imageCont"  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pwejar.appspot.com/o/toniGemsBlog%2F5f4ea23f-b1c4-4385-b379-83c2ce737bf8.jpg0.8616342127534389?alt=media&token=dedfc063-3967-485f-85a5-a3a0a5e9d52d">
                </div>
                <div class="imageCont"  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pwejar.appspot.com/o/toniGemsBlog%2F5f4ea23f-b1c4-4385-b379-83c2ce737bf8.jpg0.8616342127534389?alt=media&token=dedfc063-3967-485f-85a5-a3a0a5e9d52d">
                </div>
                <div class="imageCont"  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pwejar.appspot.com/o/toniGemsBlog%2F5f4ea23f-b1c4-4385-b379-83c2ce737bf8.jpg0.8616342127534389?alt=media&token=dedfc063-3967-485f-85a5-a3a0a5e9d52d">
                </div>
            </div>
            <div class="textArrr">
                <h3>Todays news nto oojls </h3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit assumenda, sapiente deleniti exercitationem soluta sed consequatur ex unde nemo libero aspernatur ipsam animi iste magni officiis. Quos quas vero aspernatur minus, atque corporis, inventore eveniet tenetur numquam dolorum fugit doloremque, sequi ea cumque illo reiciendis quo magnam voluptate. Exercitationem natus, ex necessitatibus nulla adipisci magnam labore explicabo eligendi iste, fugiat dolorum tenetur modi autem nobis quia, impedit eveniet velit totam mollitia minima nisi. Beatae at quibusdam officiis, odio quae sunt consequatur deleniti ullam, modi iusto doloribus. Nihil ad illum, doloremque maxime enim animi explicabo adipisci in, beatae itaque aliquid optio amet iure ducimus veritatis accusamus esse praesentium. Minima aspernatur odit deleniti nisi deserunt, iste minus magnam impedit sunt itaque, sit voluptas quod repellendus eos quibusdam temporibus, qui velit molestias repellat. Perspiciatis ratione laborum blanditiis laudantium atque veniam molestias minus, sunt soluta saepe voluptas fugit officiis eveniet, doloribus repellendus. Deleniti, eaque. Adipisci expedita soluta modi perspiciatis voluptatibus, quia labore a voluptates perferendis ipsam maxime id laudantium, nesciunt molestiae magnam! Nostrum fugit, architecto vero perspiciatis, ipsa cum laborum tempore qui ipsam asperiores molestias modi assumenda, provident culpa ex impedit! Possimus aspernatur soluta est eos quae omnis cupiditate at laborum dignissimos rerum id minima, sint ad exercitationem alias maxime! Ipsam minima qui excepturi magnam, explicabo ratione in esse veniam eum minus suscipit tempore fugiat hic amet eaque nisi asperiores quam tenetur illum velit! Rem ex impedit facere dicta necessitatibus asperiores laborum ut distinctio unde similique placeat corrupti illo enim ducimus pariatur a dolore, eaque odit delectus iusto. Debitis distinctio nam fugit, iusto praesentium excepturi, nisi quasi veniam consequuntur impedit ipsam consectetur autem laudantium quis voluptatem? Dolore provident omnis quo officia vero impedit repudiandae ut asperiores obcaecati molestias praesentium reiciendis, recusandae expedita suscipit architecto sint accusamus rerum similique numquam, fugit unde cumque quibusdam. Doloribus quo cum optio fugit id soluta, minima dicta nemo porro quam voluptatibus excepturi deleniti ipsa totam consequuntur non, natus et. Quae totam adipisci delectus explicabo itaque! Blanditiis aliquam nihil maxime voluptatibus nesciunt voluptas culpa suscipit eius a assumenda. Enim facilis laudantium assumenda error ea.</P>
            </div>
            <div class="admin">
            <div class="adminHolder7">
                <div class="button">Edit</div>
                <div class="button">Delete</div>
            </d
        </div> */
    }
    htmlSmall = '';
    htmlSmaller= `<div class="newTitle">
                    Recent News & Blogs
                </div>`;
    
    for(let ghk = 0; ghk < unfilteredNews.length; ghk++) {
        // first home page 
        if(ghk<2) {
            let resultss = unfilteredNews[ghk].description;
            let resultss2 = unfilteredNews[ghk].description;
            if(unfilteredNews[ghk].description.length > 15) {
                resultss = resultss.substring(0,45)+"...<b>Read More</b>";
            }
            if(unfilteredNews[ghk].description.length > 305) {
                resultss2 = resultss2.substring(0,305)+"...<b>Read More</b>";
            }
            if(unfilteredNews[ghk].pictures) {
                htmlSmaller = htmlSmaller + 
                `<div class="card">
                    <div class="meimg" onclick="pwejarPhotoViewer(unfilteredNews[${ghk}].pictures,0)" style="background-image: url('${unfilteredNews[ghk].pictures[0]}');"></div>
                    <h4>${unfilteredNews[ghk].title}</h4>
                    <p>${resultss}</p>
                </div>`;
            } else {
                htmlSmaller = htmlSmaller + 
                `<div class="card">
                    <h4>${unfilteredNews[ghk].title}</h4>
                    <p>${resultss2}</p>
                </div>`;
            }
            
        }
        // check if items are of current page
        if(ghk>= (blogPage-1)*blogsPerPage && ghk <(blogPage-1)*blogsPerPage+blogsPerPage){
            htmlSmall = htmlSmall + `<div class="cardree">`

            if(unfilteredNews[ghk].pictures) {
                htmlSmall = htmlSmall + `<div class="imgTop">`
                let startPict = 0;
                unfilteredNews[ghk].pictures.forEach(element => {
                    htmlSmall = htmlSmall + `<div class="imageCont" onclick="pwejarPhotoViewer(unfilteredNews[${ghk}].pictures,${startPict})" >
                                                <img src="${element}">
                                            </div>`;
                                            startPict++;
                });
                htmlSmall = htmlSmall + `</div>`
            }
            htmlSmall = htmlSmall + `<div class="textArrr">
                                            <h3>${unfilteredNews[ghk].title}</h3>
                                            <P>${unfilteredNews[ghk].description}</P>
                                        </div>
                                        <div class="admin">
                                            <div class="adminHolder7">
                                                <div class="button" onclick="updateBlog(${ghk})">Edit</div>
                                                <div class="button" onclick="deleteBlog('${unfilteredNews[ghk].id}')">Delete</div>
                                            </div>
                                        </div>
                                    </div>`
        }
    }
    document.getElementById('feeed').innerHTML = htmlSmall;
    document.querySelector('.newsMaker').innerHTML = htmlSmaller;
    toogleAdmin();

}
function deleteBlog( idD) {
    let newID = idD
    let defaultObject = {
        buttons: [
            {
                name: "No",
                function: ""
            },
            {
                name: "Yes",
                function: `confirmDelete('${newID}')`
            },
        ],
        title: "Confirm Delete",
        Message: "Kindly confirm delete!"

    }
    pwejarAlertControler(defaultObject);
}
function confirmDelete(id) {
    pwejarloader();
    firebase.firestore().collection('tony_blogs').doc(id).delete().then(function() {
        alert("Document successfully deleted!");
        runMeBlog();
        pwejarLoaderDismiss();
        return false;
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        pwejarLoaderDismiss();
    });
    
}
function deleteFire (nuMB) {
    let newARRT = [];
    let countRT = 0;
    editData.pictures.forEach(element => {
        if(countRT!=nuMB) {
            newARRT.push(element)
        }
        countRT++;
    });
    
    editData.pictures = newARRT;
    showPrev(undefined,'photoViewer');
}
//____________________________________________________________________________________________________________q&A
let qNAs = [
    {
        quetion: `What is Environmental Complience?`,
        answer: `Environmental Compliance means conforming to environmental laws, regulations, standards and other requirements such as site permits to operate. In recent years, environmental concerns have led to a significant increase in the number and scope of compliance imperatives across all global regulatory environments`
    },
    {
        quetion: `Why conduct and EIA, EIA, ASIA?`,
        answer: `Because any type of development has to undergo policies around its ulitimate goals on thr needs to conserve natural resources and improve environmental quality through sessional paper NO. 10 of 1965, establishment of the Natural Environmental Secretariat (NES) in 1974 following Stockholm conference.
        <br>The Kenyan Govt, imposed the above under (EMCA) Environmental management and coordination act  no. 8 of 1999 in oder to adress the challenges brought by env management in Kenya`
    }
]

genQns();

function genQns() {
    let meHtmela = '';
    qNAs.forEach(element => {
        meHtmela = meHtmela + 
        `<div class="card">
            <div class="chart question">
                ${element.quetion}
            </div>
            <div class="answer">
                <div class="miniQuestion">
                    <p>${element.quetion}</p>
                </div>
                <div class="textAns">
                ${element.answer}
                </div>
            </div>
        </div>`
    });

    document.getElementById('chartCont').innerHTML = meHtmela;
}
// _________________________________________________________________________________________________________________________ login page
function loging() {
    pwejarloader();
    const email = document.getElementById("emailID").value;
    const password = document.getElementById("passwordID").value;
    if (!validateEmail(email)) {
        pwejarLoaderDismiss();
        return alert("Kindly input email correctly")
    }
    if (!password) {
        pwejarLoaderDismiss();
        return alert("kindly input the password")
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    loadPage(defaultPage);
    thisUser = user;
    pwejarLoaderDismiss();
    return false;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    thisUser = null;
    pwejarLoaderDismiss();
    alert(errorMessage);
  });
}



// ______________________________

console.log("start");
