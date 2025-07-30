var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(clickedElement, tabname) {
    for (let tablink of tablinks) { 
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) { 
        tabcontent.classList.remove("active-tab");
    }
    clickedElement.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzRapDLvI3NvrhU6OK_6nY1c66xcdXE74-u0vCS1jwK2JQx2R4ZAMsDWFNXP3sMOe4J/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Message sent successfully!"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
    .catch(error => console.error('Error!', error.message))
})

const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});