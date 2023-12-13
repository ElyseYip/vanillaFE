
  // const menuItems = document.querySelectorAll(".navbar-menu");
  // const menuContentItems = document.querySelectorAll(".menu-content")
  // console.log({menuItems})
  // console.log({menuContentItems})

  // menuItems.forEach((item)=>{
  //   item.addEventListener("mouseenter",()=>{
  //     const value = item.getAttribute("data-value")
  //     console.log(value)
      
  //     menuContentItems.forEach((content)=>{
  //       if(content.id === value){
  //         content.classList.add("visible")
  //       }else{
  //         content.classList.remove("visible")
  //       }

  //     })

  //   })})

  let value;
  window.addEventListener("scroll", () =>{
    const mainNav = document.querySelector(".main-nav")
    const menuContainer = document.querySelector(".menu-container")
    const menuContentItems = document.querySelectorAll('.menu-content');

    if (window.scrollY > 100) {
      handleMouseLeave()
      menuContainer.classList.add("show","sticky");
      menuContentItems.forEach((contentItem) => {
        if (contentItem.id === value) {
          contentItem.classList.add('visible');
        } else {
          contentItem.classList.remove('visible');
        }
      });
    } else {
      menuContainer.classList.remove("show","sticky");
    }
  })

  // top header js
  let isHovered = false;

  function handleHover(event) {
    isHovered= true;
    value = event.target.getAttribute('data-value');
    const menuContentItems = document.querySelectorAll('.menu-content');
    const container = document.querySelector('.menu-container')
  
    if(value){
      container.classList.add("visible");
    }
    
    menuContentItems.forEach((contentItem) => {
      if (contentItem.id === value) {
        contentItem.classList.add('visible');
      } else {
        contentItem.classList.remove('visible');
      }
    });
  }
  
    
  function handleMouseLeave() {
    const menuContentItems = document.querySelectorAll('.menu-content');
    const container = document.querySelector('.menu-container')
    isHovered = false;

    if (!isHovered) {
      container.classList.remove("visible")
      menuContentItems.forEach((contentItem) => {
        contentItem.classList.remove('visible');
      });
    }
  }
