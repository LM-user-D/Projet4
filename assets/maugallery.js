const itemAll=document.querySelector('[data-images="all"]')
const itemConcert=document.querySelector('[data-images-toggle="Concert"]')
const itemEntrepriser=document.querySelector('[data-images-toggle="Entreprises"]')
const itemMariage=document.querySelector('[data-images-toggle="Mariages"]')
const itemPortrait=document.querySelector('[data-images-toggle="Portrait"]')
const navItems=document.querySelectorAll('.nav-link')
const contentItems=document.querySelectorAll('.content-img')
const contentConcert=document.querySelectorAll('[data-gallery-tag="Concert"]')
const contentEntreprises=document.querySelectorAll('[data-gallery-tag="Entreprises"]')
const contentMariages=document.querySelectorAll('[data-gallery-tag="Mariages"]')
const contentProtraits=document.querySelectorAll('[data-gallery-tag="Portrait"]')
const galleryItems=document.querySelectorAll('.gallery-item')
console.log(contentEntreprises);const containerSlider=document.querySelector('.modale')
const boiteSlider=document.querySelector('.container-slider')
let imgSlider=document.querySelector('.container-slider img')
function gestionClicModale(){containerSlider.addEventListener('click',()=>{boiteSlider.classList.add('mouve')
containerSlider.classList.add('dsp')
contentItems.forEach(el=>{el.addEventListener('click',()=>{boiteSlider.classList.remove('mouve')
containerSlider.classList.remove('dsp')})})})
boiteSlider.addEventListener('click',(e)=>{e.stopPropagation()})}
gestionClicModale()
let index=0
let tabImg=[]
function removeActive(){navItems.forEach(items=>{items.classList.remove('active')})}
function mouve(){contentItems.forEach(els=>{els.classList.add('acter')})}
function secondAnimation(){contentItems.forEach(els=>{els.classList.add('acte')})}
itemAll.addEventListener('click',()=>{removeActive()
mouve()
secondAnimation()
itemAll.classList.add('active')
tabImg=[]
contentItems.forEach(els=>{els.style.display='block'})
for(let i=0;i<contentItems.length;i++){contentItems.forEach(els=>{let A=els.children
A.src=els.children[i].src
A.alt=els.children[i].src
tabImg.push(A)})}})
itemConcert.addEventListener('click',()=>{removeActive()
mouve()
itemConcert.classList.add('active')
contentItems.forEach(el=>{el.style.display='none'})
tabImg=[]
contentConcert.forEach(els=>{els.style.display='block'})
contentConcert.forEach(els=>{els.style.display='block';for(let i=0;i<contentConcert.length;i++){contentConcert.forEach(els=>{let A=els.children
A.src=els.childNodes[i].src
A.alt=els.childNodes[i].alt
tabImg.push(A)})}})})
itemEntrepriser.addEventListener('click',()=>{removeActive()
mouve()
itemEntrepriser.classList.add('active')
contentItems.forEach(el=>{el.style.display='none'})
tabImg=[]
contentEntreprises.forEach(els=>{els.style.display='block'})
for(let i=0;i<contentEntreprises.length;i++){contentEntreprises.forEach(els=>{let A=els.children
A.src=els.children[i].src
tabImg.push(A)})}})
itemMariage.addEventListener('click',()=>{removeActive()
mouve()
itemMariage.classList.add('active')
contentItems.forEach(el=>{el.style.display='none'})
tabImg=[]
contentMariages.forEach(els=>{els.style.display='block'})
for(let i=0;i<contentMariages.length;i++){contentMariages.forEach(els=>{let A=els.children
A.src=els.childNodes[i].src
A.alt=els.childNodes[i].alt
tabImg.push(A)})}})
itemPortrait.addEventListener('click',()=>{removeActive()
mouve()
itemPortrait.classList.add('active')
contentItems.forEach(el=>{el.style.display='none'})
tabImg=[]
contentProtraits.forEach(els=>{els.style.display='block'})
for(let i=0;i<contentProtraits.length;i++){contentProtraits.forEach(els=>{let A=els.children
A.src=els.childNodes[i].src
A.alt=els.childNodes[i].alt
tabImg.push(A)})}})
function imageTableau(){for(let i=0;i<galleryItems.length;i++){let A=document.createElement("img")
A.src=galleryItems[i].src
A.alt=galleryItems[i].alt
tabImg.push(A)}}
imageTableau()
galleryItems.forEach((element,id)=>{element.addEventListener('click',()=>{containerSlider.style.display="block"
imgSlider.src=element.src
imgSlider.alt=element.alt
index=id
imgSlider.classList.add('see')})})
const btnRight=document.querySelector('.btn-right')
const btnLeft=document.querySelector('.btn-left')
btnRight.addEventListener('click',()=>{index=(index<tabImg.length-1)?index+1:0;imgSlider.src=tabImg[index].src})
btnLeft.addEventListener('click',()=>{index=(index>0)?index-1:tabImg.length-1;imgSlider.src=tabImg[index].src})
