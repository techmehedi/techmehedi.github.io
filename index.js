let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

// Initialize GSAP ScrollTrigger with performance optimizations
gsap.registerPlugin(ScrollTrigger);

// Optimize ScrollTrigger for better performance
ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true,
});

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (window.innerWidth <= 760);
}

// 3D Canvas Animation
function init3DCanvas() {
    const canvas = document.getElementById('canvas3d');
    if (!canvas) return;

    const isMobile = isMobileDevice();
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: !isMobile // Disable antialiasing on mobile for performance
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
    
    // Create particles - reduce count on mobile
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMobile ? 300 : 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x667eea,
        transparent: true,
        opacity: isMobile ? 0.3 : 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Animation loop - slower on mobile
    let lastTime = 0;
    function animate(currentTime) {
        requestAnimationFrame(animate);
        
        const deltaTime = isMobile ? (currentTime - lastTime) * 0.5 : (currentTime - lastTime);
        lastTime = currentTime;
        
        particlesMesh.rotation.x += 0.0005 * (isMobile ? 0.5 : 1);
        particlesMesh.rotation.y += 0.001 * (isMobile ? 0.5 : 1);
        
        renderer.render(scene, camera);
    }

    animate(0);

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(isMobileDevice() ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
        }, 100);
    });
}

// Initialize 3D canvas when page loads
if (typeof THREE !== 'undefined') {
    window.addEventListener('load', init3DCanvas);
}

// Enhanced background movement - optimized with requestAnimationFrame
let rafId = null;
let lastMouseX = 0;
let lastMouseY = 0;

function moveBackground(event) {
    // Don't run on mobile devices for performance
    if (isMobileDevice()) return;
    
    // Handle both mouse and touch events
    const clientX = event.clientX || (event.touches && event.touches[0]?.clientX) || 0;
    const clientY = event.clientY || (event.touches && event.touches[0]?.clientY) || 0;
    
    lastMouseX = clientX;
    lastMouseY = clientY;
    
    // Throttle with requestAnimationFrame
    if (rafId === null) {
        rafId = requestAnimationFrame(() => {
            const shapes = document.querySelectorAll(".shape");
            const orbs = document.querySelectorAll(".gradient-orb");
            
            const x = lastMouseX * scaleFactor;
            const y = lastMouseY * scaleFactor;

            // Batch DOM updates
            for (let i = 0; i < shapes.length; ++i) {
                const isOdd = i % 2 !== 0;
                const boolInt = isOdd ? -1 : 1;
                shapes[i].style.transform = `translate3d(${x * boolInt}px, ${y * boolInt}px, 0) rotate(${x * boolInt * 0.1}deg)`;
            }

            // Move orbs with parallax effect
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                const xOffset = (lastMouseX - window.innerWidth / 2) * speed * 0.0001;
                const yOffset = (lastMouseY - window.innerHeight / 2) * speed * 0.0001;
                orb.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            });
            
            rafId = null;
        });
    }
}

// Smooth scroll animations
function initScrollAnimations() {
    // Animate project cards - ensure they're visible by default
    gsap.utils.toArray('.project').forEach((project, index) => {
        // Make sure projects are visible immediately - set inline styles to override any GSAP
        project.style.setProperty('opacity', '1', 'important');
        project.style.setProperty('visibility', 'visible', 'important');
        project.style.setProperty('transform', 'translateY(0)', 'important');
        
        // Check if project is already in viewport
        const rect = project.getBoundingClientRect();
        const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isAlreadyVisible) {
            // Only set up scroll animation for projects not in view
            gsap.fromTo(project,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        once: true,
                        markers: false,
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: 'power2.out',
                    force3D: true,
                }
            );
        }
    });

    // Animate section titles
    gsap.utils.toArray('.section__title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                markers: false,
            },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power2.out',
            force3D: true,
        });
    });

    // Animate resume cards
    gsap.utils.toArray('.resume__card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                markers: false,
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            force3D: true,
        });
    });

    // Animate skills categories
    gsap.utils.toArray('.skills__category').forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                markers: false,
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            force3D: true,
        });
    });

    // Animate activity cards
    gsap.utils.toArray('.activity__card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                markers: false,
            },
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            force3D: true,
        });
    });

    // Parallax effect for header - removed to prevent content from disappearing
    // Header content should remain visible
}

// Enhanced title animations
function initTitleAnimations() {
    // Reduce animation intensity on mobile
    const isMobile = isMobileDevice();
    const titles = document.querySelectorAll('.title, .title__second');
    
    titles.forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out',
            force3D: true,
        });

        // 3D tilt effect on mouse move - skip on mobile
        if (!isMobile) {
            let tiltRaf = null;
            title.addEventListener('mousemove', (e) => {
                if (tiltRaf) return;
                
                tiltRaf = requestAnimationFrame(() => {
                    const rect = title.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    gsap.to(title, {
                        duration: 0.2,
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                        ease: 'power1.out',
                        force3D: true,
                    });
                    
                    tiltRaf = null;
                });
            });

            title.addEventListener('mouseleave', () => {
                gsap.to(title, {
                    duration: 0.4,
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                    ease: 'power2.out',
                    force3D: true,
                });
            });
        }
    });
}

// 3D hover effects for project cards
function initProject3DEffects() {
    // Skip on mobile devices
    if (isMobileDevice()) return;
    
    const projectWrappers = document.querySelectorAll('.project__wrapper--3d');
    
    projectWrappers.forEach(wrapper => {
        let projectRaf = null;
        wrapper.addEventListener('mousemove', (e) => {
            if (projectRaf) return;
            
            projectRaf = requestAnimationFrame(() => {
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                gsap.to(wrapper, {
                    duration: 0.2,
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    ease: 'power1.out',
                    force3D: true,
                });
                
                projectRaf = null;
            });
        });

        wrapper.addEventListener('mouseleave', () => {
            gsap.to(wrapper, {
                duration: 0.4,
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                ease: 'power2.out',
                force3D: true,
            });
        });
    });
}

// 3D hover effects for social links
function initSocial3DEffects() {
    // Skip on mobile devices
    if (isMobileDevice()) return;
    
    const socialLinks = document.querySelectorAll('.social__link--3d');
    
    socialLinks.forEach(link => {
        let socialRaf = null;
        link.addEventListener('mousemove', (e) => {
            if (socialRaf) return;
            
            socialRaf = requestAnimationFrame(() => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 5;
                const rotateY = (centerX - x) / 5;
                
                gsap.to(link, {
                    duration: 0.15,
                    transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    ease: 'power1.out',
                    force3D: true,
                });
                
                socialRaf = null;
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.25,
                transform: 'perspective(500px) rotateX(0deg) rotateY(0deg)',
                ease: 'power2.out',
                force3D: true,
            });
        });
    });
}

// Enhanced modal animation - optimized for smoothness
function toggleModal() {
    const isMobile = isMobileDevice();
    
    if (isModalOpen) {
        isModalOpen = false;
        
        if (!isMobile) {
            // Animate modal halves out (desktop only)
            gsap.to('.modal__about', {
                duration: 0.3,
                x: '-110%',
                ease: 'power2.in',
                force3D: true,
            });
            gsap.to('.modal__contact', {
                duration: 0.3,
                x: '110%',
                ease: 'power2.in',
                force3D: true,
            });
        }
        
        // Hide backdrop and modal
        gsap.to('.modal__backdrop', {
            duration: 0.25,
            opacity: 0,
            ease: 'power2.in',
        });
        
        gsap.to('.modal', {
            duration: 0.3,
            scale: isMobile ? 1 : 0.95,
            opacity: 0,
            ease: 'power2.in',
            force3D: true,
            onComplete: () => {
                document.body.classList.remove("modal--open");
                const backdrop = document.querySelector('.modal__backdrop');
                if (backdrop) {
                    backdrop.style.visibility = 'hidden';
                }
                // Reset transforms and body scroll on mobile
                if (isMobile) {
                    gsap.set('.modal__about', { x: 0, clearProps: 'transform' });
                    gsap.set('.modal__contact', { x: 0, clearProps: 'transform' });
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                }
            }
        });
        return;
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
    
    // Ensure modal is visible immediately
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.modal__backdrop');
    if (modal) {
        modal.style.visibility = 'visible';
        modal.style.zIndex = '60';
    }
    if (backdrop) {
        backdrop.style.visibility = 'visible';
    }
    
    if (isMobile) {
        // Prevent body scroll on mobile when modal is open
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // On mobile, just fade in without sliding
        gsap.set('.modal__about', { 
            x: 0,
            opacity: 1,
            clearProps: 'transform'
        });
        gsap.set('.modal__contact', { 
            x: 0,
            opacity: 1,
            clearProps: 'transform'
        });
        
        // Animate backdrop
        gsap.fromTo('.modal__backdrop',
            { opacity: 0 },
            {
                duration: 0.25,
                opacity: 1,
                ease: 'power2.out',
            }
        );
        
        // Simple fade in for modal on mobile
        gsap.fromTo('.modal', 
            {
                opacity: 0,
            },
            {
                duration: 0.3,
                opacity: 1,
                ease: 'power2.out',
            }
        );
    } else {
        // Desktop animations
        // Reset modal halves to starting positions
        gsap.set('.modal__about', { 
            x: '-110%', 
            opacity: 1,
            force3D: true
        });
        gsap.set('.modal__contact', { 
            x: '110%', 
            opacity: 1,
            force3D: true
        });
        
        // Animate backdrop
        gsap.fromTo('.modal__backdrop',
            { opacity: 0 },
            {
                duration: 0.25,
                opacity: 1,
                ease: 'power2.out',
            }
        );
        
        // Animate modal entrance - smoother
        gsap.fromTo('.modal', 
            {
                scale: 0.95,
                opacity: 0,
            },
            {
                duration: 0.35,
                scale: 1,
                opacity: 1,
                ease: 'back.out(1.4)',
                force3D: true,
            }
        );

        // Animate modal halves sliding in - faster and smoother
        gsap.to('.modal__about', {
            duration: 0.4,
            x: '0%',
            ease: 'power2.out',
            delay: 0.1,
            force3D: true,
        });

        gsap.to('.modal__contact', {
            duration: 0.4,
            x: '0%',
            ease: 'power2.out',
            delay: 0.1,
            force3D: true,
        });
    }
}

// Enhanced theme toggle - Complete UI/UX transformation
function toggleContrast() {
    contrastToggle = !contrastToggle;
    const body = document.body;
    
    if (contrastToggle) {
        // Activate dark theme
        body.classList.add("dark-theme");
        
        // Animate background change
        gsap.to('body', {
            duration: 0.8,
            backgroundColor: '#0a0a0f',
            ease: 'power2.inOut',
        });
        
        // Animate canvas opacity
        const canvas = document.getElementById('canvas3d');
        if (canvas) {
            gsap.to(canvas, {
                duration: 0.8,
                opacity: 0.1,
                ease: 'power2.inOut',
            });
        }
        
        // Animate gradient orbs
        gsap.to('.gradient-orb', {
            duration: 0.8,
            opacity: 0.15,
            filter: 'blur(60px)',
            ease: 'power2.inOut',
        });
        
        // Animate shapes
        gsap.to('.shape', {
            duration: 0.8,
            opacity: 0.05,
            ease: 'power2.inOut',
        });
        
        // Animate nav bar
        gsap.to('nav', {
            duration: 0.6,
            background: 'rgba(10, 10, 15, 0.95)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            ease: 'power2.inOut',
        });
        
        // Animate project cards
        gsap.to('.project__wrapper', {
            duration: 0.6,
            background: 'rgba(20, 20, 30, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            ease: 'power2.inOut',
            stagger: 0.1,
        });
        
        // Animate resume cards
        gsap.to('.resume__card', {
            duration: 0.6,
            background: 'rgba(20, 20, 30, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            ease: 'power2.inOut',
            stagger: 0.05,
        });
        
        // Animate skills categories
        gsap.to('.skills__category', {
            duration: 0.6,
            background: 'rgba(20, 20, 30, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            ease: 'power2.inOut',
            stagger: 0.1,
        });
        
        // Animate activity cards
        gsap.to('.activity__card', {
            duration: 0.6,
            background: 'rgba(20, 20, 30, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            ease: 'power2.inOut',
            stagger: 0.05,
        });
        
        // Animate footer
        gsap.to('footer', {
            duration: 0.6,
            background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)',
            ease: 'power2.inOut',
        });
        
    } else {
        // Revert to light theme
        body.classList.remove("dark-theme");
        
        // Animate background change back
        gsap.to('body', {
            duration: 0.8,
            backgroundColor: 'transparent',
            ease: 'power2.inOut',
        });
        
        // Animate canvas opacity back
        const canvas = document.getElementById('canvas3d');
        if (canvas) {
            gsap.to(canvas, {
                duration: 0.8,
                opacity: isMobileDevice() ? 0.2 : 1,
                ease: 'power2.inOut',
            });
        }
        
        // Animate gradient orbs back
        gsap.to('.gradient-orb', {
            duration: 0.8,
            opacity: isMobileDevice() ? 0.3 : 1,
            filter: isMobileDevice() ? 'blur(40px)' : 'blur(30px)',
            ease: 'power2.inOut',
        });
        
        // Animate shapes back
        gsap.to('.shape', {
            duration: 0.8,
            opacity: 0.15,
            ease: 'power2.inOut',
        });
        
        // Animate nav bar back
        gsap.to('nav', {
            duration: 0.6,
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            ease: 'power2.inOut',
        });
        
        // Animate project cards back
        gsap.to('.project__wrapper', {
            duration: 0.6,
            background: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            ease: 'power2.inOut',
            stagger: 0.1,
        });
        
        // Animate resume cards back
        gsap.to('.resume__card', {
            duration: 0.6,
            background: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            ease: 'power2.inOut',
            stagger: 0.05,
        });
        
        // Animate skills categories back
        gsap.to('.skills__category', {
            duration: 0.6,
            background: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            ease: 'power2.inOut',
            stagger: 0.1,
        });
        
        // Animate activity cards back
        gsap.to('.activity__card', {
            duration: 0.6,
            background: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            ease: 'power2.inOut',
            stagger: 0.05,
        });
        
        // Animate footer back
        gsap.to('footer', {
            duration: 0.6,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.2) 25%, rgba(240, 147, 251, 0.15) 50%, rgba(102, 126, 234, 0.2) 75%, rgba(79, 172, 254, 0.15) 100%)',
            ease: 'power2.inOut',
        });
    }
}

// Contact form handler
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    
    gsap.to(loading, {
        duration: 0.3,
        opacity: 1,
        display: 'flex',
    });
    
    loading.classList += " modal__overlay--visible";
    
    emailjs
        .sendForm(
            'service_hpnpksh',
            'template_gtvkzof',
            event.target,
            '5ekaAbLWzrsqCUBdg'
        )
        .then(() => {
            gsap.to(loading, {
                duration: 0.3,
                opacity: 0,
                onComplete: () => {
                    loading.classList.remove("modal__overlay--visible");
                }
            });
            
            gsap.fromTo(success,
                {
                    scale: 0.8,
                    opacity: 0,
                },
                {
                    duration: 0.5,
                    scale: 1,
                    opacity: 1,
                    display: 'flex',
                    ease: 'back.out(1.7)',
                }
            );
            
            success.classList += " modal__overlay--visible";
            
            setTimeout(() => {
                gsap.to(success, {
                    duration: 0.3,
                    opacity: 0,
                    onComplete: () => {
                        success.classList.remove("modal__overlay--visible");
                    }
                });
            }, 3000);
        })
        .catch(() => {
            gsap.to(loading, {
                duration: 0.3,
                opacity: 0,
                onComplete: () => {
                    loading.classList.remove("modal__overlay--visible");
                }
            });
            alert(
                "The email service is temporarily unavailable. Please contact me directly on mehedihasan.ccny@gmail.com"
            );
        });
}

// Navigation is now absolute, no sticky behavior needed
function initStickyNav() {
    // Nav bar is absolute, doesn't scroll with page
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initStickyNav();
    // Set initial states - header should be visible
    gsap.set('.header__content', { opacity: 1, visibility: 'visible' });
    gsap.set('nav', { opacity: 0, y: -20 });
    
    // Animate page load
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
    });
    
    initScrollAnimations();
    initTitleAnimations();
    initProject3DEffects();
    initSocial3DEffects();
    
    // Ensure header content stays visible
    gsap.set('.header__content', { 
        opacity: 1, 
        visibility: 'visible',
        y: 0
    });
    
    gsap.from('.header__para', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
    });

    gsap.from('.social__list', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
    });

    // Smooth entrance for nav
    gsap.to('nav', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });
    
    // Animate gradient orbs
    gsap.from('.gradient-orb', {
        scale: 0,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: 'power2.out',
        stagger: 0.3,
    });
});

// Mobile Navigation Menu Toggle
let isNavMenuOpen = false;

function toggleNavMenu() {
    isNavMenuOpen = !isNavMenuOpen;
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.querySelector('.nav__toggle');
    
    if (navMenu && navToggle) {
        if (isNavMenuOpen) {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

function closeNavMenu() {
    if (isNavMenuOpen) {
        isNavMenuOpen = false;
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.querySelector('.nav__toggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.querySelector('.nav__toggle');
    
    if (isNavMenuOpen && nav && navMenu && navToggle) {
        if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
            closeNavMenu();
        }
    }
});

// Close menu on window resize if it becomes desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && isNavMenuOpen) {
        closeNavMenu();
    }
});

// Expose functions to global scope for HTML onclick handlers
window.toggleModal = toggleModal;
window.toggleNavMenu = toggleNavMenu;
window.closeNavMenu = closeNavMenu;
window.toggleContrast = toggleContrast;
window.contact = contact;
window.moveBackground = moveBackground;
