const images = [
    '../assets/img/01.webp',
    '../assets/img/02.webp',
    '../assets/img/03.webp',
    '../assets/img/04.webp'
  ]
  
  // select the active image
  let activeImage = 0
  
  // select the images dom element where place all images
  const imagesElement = document.querySelector('.images')
  console.log(imagesElement);
  // loop over the images and add a new img dom element
  for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);
    // InsertAjacentHTML
    imagesElement.insertAdjacentHTML('beforeend', imgElement)
  
  }
  
  
  // select all slides
  const slideImagesElements = document.querySelectorAll('img')  
  // listen for clicks on next button
  const nextEl = document.querySelector('.next')
  nextEl.addEventListener('click', function () {
    console.log('cliccato next');
  
  
    console.log(slideImagesElements);
    
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);
    
    currentSlide.classList.remove('active')
    
    activeImage++
    
    console.log(activeImage);
    const nextImage = slideImagesElements[activeImage]
    
    console.log(nextImage);
    nextImage.classList.add('active')
  
  
  })
  
  // listen for clicks on prev button
  const prevEl = document.querySelector('.prev')
  prevEl.addEventListener('click', function () {
    console.log('cliccato prev');
  
    console.log(slideImagesElements); //array[index]
    
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);
    
    currentSlide.classList.remove('active')
    
    activeImage--
    
    console.log(activeImage);
    const nextImage = slideImagesElements[activeImage]
    
    console.log(nextImage);
    nextImage.classList.add('active')
  
  })