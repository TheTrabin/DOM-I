const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Images have been applied. Easy enough. Links, not so much.
//What I know I need to do is to select each link on it's own, specifically in the 
//Nav section. So I need to isolate the Nav and then the anchor tags.

document.getElementsByTagName("a")[0].innerHTML = siteContent.nav["nav-item-1"]
document.getElementsByTagName("a")[1].innerHTML = siteContent.nav["nav-item-2"]
document.getElementsByTagName("a")[2].innerHTML = siteContent.nav["nav-item-3"]
document.getElementsByTagName("a")[3].innerHTML = siteContent.nav["nav-item-4"]
document.getElementsByTagName("a")[4].innerHTML = siteContent.nav["nav-item-5"]
document.getElementsByTagName("a")[5].innerHTML = siteContent.nav["nav-item-6"]

//Chintzi, but it works. Next step is to do the same with the 'p' tags for each section.
//I know there's probably a cleaner method, probably using a forLoop method.
//But at this point, I just want to get it done.

document.getElementsByTagName("h1")[0].innerText = siteContent["cta"]["h1"];
document.getElementsByTagName("button")[0].innerText = siteContent["cta"]["button"];

//Middle Section is done, but this looks aweful. I'm going to experiment later with forloops.

document.getElementsByTagName("p")[0].innerText = siteContent["main-content"]["features-content"]
document.getElementsByTagName("p")[1].innerText = siteContent["main-content"]["about-content"]
document.getElementsByTagName("p")[2].innerText = siteContent["main-content"]["services-content"]
document.getElementsByTagName("p")[3].innerText = siteContent["main-content"]["product-content"]
document.getElementsByTagName("p")[4].innerText = siteContent["main-content"]["vision-content"]

//Managed to get to that to make it work, however I might find a better solution
document.getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["features-h4"]
document.getElementsByTagName("h4")[1].innerText = siteContent["main-content"]["about-h4"]
document.getElementsByTagName("h4")[2].innerText = siteContent["main-content"]["services-h4"]
document.getElementsByTagName("h4")[3].innerText = siteContent["main-content"]["product-h4"]
document.getElementsByTagName("h4")[4].innerText = siteContent["main-content"]["vision-h4"]

//It's not Broken, but probably not Clean.

// let contactHead = document.getElementsByTagName("contact.h4");
// contactHead.textContent = siteContent["contact"]["contact-h4"];
// contact.h4.innerText = siteContent["contact"]["contact-h4"];
// contact.querySelector("h4").innerText = siteContent["contact"]["contact-h4"];
document.getElementsByTagName("h4")[5].innerText = siteContent["contact"]["contact-h4"];
document.getElementsByTagName("p")[5].innerText = siteContent["contact"]["address"];
document.getElementsByTagName("p")[6].innerText = siteContent["contact"]["phone"];
document.getElementsByTagName("p")[7].innerText = siteContent["contact"]["email"];

//This is feeling dirty, but it's functional.

document.getElementsByTagName("p")[8].innerText = siteContent["footer"]["copyright"];