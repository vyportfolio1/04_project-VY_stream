
// meniu animation 
const menuItems = document.querySelectorAll('.meniu a');
menuItems.forEach((item, index) => {
    anime({
        targets: item,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: index * 200,  
        duration: 1000,
        easing: 'easeInOutSine'
    });
});

 
const searchIcon = document.getElementById('searchIcon');
anime({
    targets: searchIcon,
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 2000,
    easing: 'easeInOutSine'
});

const logoSvg = document.getElementById('log');
anime({
    targets: logoSvg,
    opacity: [0, 1],
    duration: 2000,
    easing: 'easeInOutSine',
    translateX: [-50, 0],
});

const about = document.getElementById('about');
anime({
    targets: about,
    opacity: [0, 1],
    delay: 100,
    duration: 3000,
    easing: 'easeInOutSine'
});

   
    const bellIcon = document.querySelector('.fa-regular.fa-bell');
    anime({
        targets: bellIcon,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeInOutSine'
    });

    const search = document.getElementById('search');
    anime({
        targets: search,
        opacity: [0, 1],
        duration: 4000,
        easing: 'easeInOutSine'
    });

    const burger = document.getElementById('burg');
    anime({
        targets: burger,
        opacity: [0, 1],
        duration: 5000,
        easing: 'easeInOutSine',
        translateX: [50, 0],
    });

    const user = document.getElementById('user');
    anime({
        targets: user,
        opacity: [0, 1],
        duration: 5000,
        easing: 'easeInOutSine'
    });

    // hero section

    anime({
        targets: '.movie-title',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 3000,
        easing: 'easeInOutQuad'
      });
  
      anime({
        targets: '.genre, .about-movie, .button',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeInOutQuad',
        delay: 600
      });
  

      anime({
        targets: '.trending-movies',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1500,
        easing: 'easeInOutQuad',
        delay: 600
      });

    //   NEW RELEASES
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
 
            animateSection();
  
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
 
      const targetElement = document.querySelector('.newR');
  
 
      observer.observe(targetElement);
  
      function animateSection() {
     
        anime({
          targets: '.newR',
          opacity: [0, 1],
          translateY: [-50, 0],
          duration: 2500,
          easing: 'easeInOutQuad'
        });

        anime({
            targets: '.nRel',
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 1500,
            easing: 'easeInOutQuad'
          });

     
   
      }


    //   <!-- upcomming -->

 
        const observerMyList = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
               
                animateMyListSection();
               
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.5 });
      
         
          const targetMyListElement = document.getElementById('mylist');
      
          
          observerMyList.observe(targetMyListElement);
      
          function animateMyListSection() {
        
            anime({
              targets: '.newR1',
              opacity: [0, 1],
              translateY: [-50, 0],
              duration: 2500,
              easing: 'easeInOutQuad'
            });

            anime({
                targets: '.mylist',
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1500,
                easing: 'easeInOutQuad'
              });
    
      
       
          }

              //   <!-- my list -->

  
      const observerUpcoming = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
    
            animateUpcomingSection();
 
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
 
      const targetUpcomingElement = document.getElementById('up');
  
  
      observerUpcoming.observe(targetUpcomingElement);
  
      function animateUpcomingSection() {
   
        anime({
            targets: '.newR2',
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 2500,
            easing: 'easeInOutQuad'
          });

          anime({
              targets: '.upcomming',
              opacity: [0, 1],
              translateY: [-50, 0],
              duration: 2500,
              easing: 'easeInOutQuad'
            });
  
       
      }

    //   footer

    const observerFooter = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start Anime.js animation when the footer is in the viewport
            animateFooter();
            // Stop observing to prevent repeat
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
    
      // Target the element to observe
      const targetFooterElement = document.querySelector('.foot');
    
      // Start observing the target element
      observerFooter.observe(targetFooterElement);
    
      function animateFooter() {
        // Anime.js animation for the logo
        anime({
          targets: '.logo path',
          opacity: [0, 1],
          translateX: [-80, 0],
          duration: 2000,
          easing: 'easeInOutQuad'
        });
    
        // Anime.js animation for the "Follow us" section
        anime({
          targets: '.fall a i',
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(300),
          duration: 1000,
          easing: 'easeInOutQuad'
        });
    
        // Anime.js animation for the footer columns
        anime({
          targets: '.fot div',
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(500),
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      }