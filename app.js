/**
 * Portfolio Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DARK MODE TOGGLE ---
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const themeBtnMobile = document.getElementById('themeToggleMobile');

    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlEl.classList.add('dark');
    } else {
        htmlEl.classList.remove('dark');
    }

    const toggleTheme = () => {
        htmlEl.classList.toggle('dark');
        if (htmlEl.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    themeBtn.addEventListener('click', toggleTheme);
    themeBtnMobile.addEventListener('click', toggleTheme);

    // --- 2. MOBILE MENU ---
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });

    // --- 3. I18N (INTERNATIONALIZATION) ---
    const translations = {
        es: {
            nav_services: "Servicios",
            nav_portfolio: "Portfolio",
            nav_about: "Sobre Mí",
            nav_contact: "Cotizar Ahora",
            hero_badge: "Disponible para nuevos proyectos",
            hero_title_1: "Transformo tus ideas en",
            hero_title_2: "Experiencias Digitales Rentables",
            hero_subtitle: "Soy Jeremy García, un desarrollador web Full Stack especializado en WordPress, React y automatizaciones. Diseño webs rápidas y optimizadas para SEO que convierten visitantes en clientes.",
            hero_cta_1: "Solicitar Presupuesto",
            hero_cta_2: "Ver Servicios",
            tech_title: "Tecnologías y herramientas que domino",
            services_title: "Servicios de Desarrollo Web",
            services_desc: "Soluciones a medida diseñadas para hacer crecer tu negocio en internet.",
            srv_1_title: "Landing Pages",
            srv_1_desc: "Páginas de aterrizaje altamente optimizadas diseñadas con un solo objetivo: captar leads y generar ventas rápidas.",
            srv_2_title: "Tiendas Online (E-commerce)",
            srv_2_desc: "Plataformas de venta completas (WooCommerce) automatizadas, pasarelas de pago y gestión de inventario.",
            srv_3_title: "Aplicaciones Web",
            srv_3_desc: "Sistemas a medida construidos con React y PHP que resuelven problemas específicos de tu negocio.",
            srv_4_title: "Sitios Corporativos",
            srv_4_desc: "Presencia digital profesional para empresas e instituciones. Muestra la identidad de tu marca.",
            srv_5_title: "Mantenimiento y Optimización Web",
            srv_5_desc: "¿Ya tienes web pero es lenta o no vende? Me encargo de optimizar la velocidad (WPO), mejorar el SEO técnico y dar mantenimiento.",
            comp_title: "¿Qué tipo de web necesitas?",
            comp_desc: "Una guía rápida para ayudarte a tomar la mejor decisión.",
            comp_1_desc: "Una <strong>Landing Page</strong> es de una sola página, ideal para campañas (Ads). Un <strong>Sitio Web Corporativo</strong> tiene múltiples páginas e indexa estructuradamente para SEO a largo plazo.",
            comp_2_desc: "<strong>WordPress</strong> es perfecto y económico para el 90% de los negocios. El <strong>Desarrollo a Medida</strong> (React) es necesario si buscas funcionalidades únicas como un SaaS.",
            port_title: "Proyectos Destacados",
            port_desc: "Una selección de trabajos recientes diseñados para generar impacto.",
            test_title: "Lo que dicen mis clientes",
            test_desc: "Más de 6 proyectos exitosos avalan mi trabajo y compromiso.",
            test_3_name: "Cliente E-commerce",
            test_3_desc: '"Desarrollo de Plataforma E-commerce para Venta Online de Ropa Deportiva con Shopify. Excelente trabajo, la tienda quedó rapidísima y fue muy fácil de gestionar."',
            faq_title: "Preguntas Frecuentes",
            faq_desc: "Todo lo que necesitas saber antes de empezar a trabajar juntos.",
            faq_1_q: "¿El servicio incluye dominio y hosting?",
            faq_1_a: "Sí, ofrezco la opción de gestionar tu dominio y hosting profesional. Ten en cuenta que incluir este servicio <strong>aumenta el presupuesto final</strong> del proyecto.",
            faq_2_q: "¿Cuáles son los tiempos de entrega?",
            faq_2_a: `<ul class="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Landing Pages:</strong> 3 días (dependiendo de las animaciones).</li>
                            <li><strong>Páginas Corporativas:</strong> 1 semana.</li>
                            <li><strong>Tiendas E-commerce:</strong> 8 a 10 días, dependiendo de la cantidad de productos a cargar.</li>
                        </ul>`,
            faq_3_q: "¿Cuáles son los métodos de pago?",
            faq_3_a: "Acepto pagos mediante <strong>Transferencia Bancaria</strong> y <strong>Efectivo</strong>.",
            faq_4_q: "¿Ofreces soporte post entrega?",
            faq_4_a: "Sí, brindo soporte post entrega <strong>sin costo</strong>. Además, te entrego <strong>videos tutoriales</strong> sobre cómo manejar la web para que seas independiente y no dependas siempre de un desarrollador.",
            game_title: 'Atrapa mis "Bugs"',
            game_desc: "Como desarrollador, mi trabajo es eliminar problemas. ¡Atrapa todos los bugs del código para ganar!",
            game_start: "¡Atrapa 5 bugs!",
            game_win: "¡Código Limpio! Listo para producción 🚀",
            about_title: "Sobre Mí",
            about_p1: "Hola, soy Jeremy. Más que un programador, me considero un solucionador de problemas. Entiendo que tú no quieres solo una web; quieres más clientes.",
            about_p2: "Mi enfoque radica en la calidad técnica (sitios rápidos, seguros) y el diseño estratégico (UX, SEO). No uso plantillas mediocres.",
            skills_title: "Mi Stack Técnico",
            process_title: "¿Cómo trabajaremos juntos?",
            proc_1_title: "Descubrimiento",
            proc_1_desc: "Analizamos tu negocio y definimos objetivos.",
            proc_2_title: "Propuesta",
            proc_2_desc: "Estructura, bocetos y presupuesto cerrado sin sorpresas.",
            proc_3_title: "Desarrollo",
            proc_3_desc: "Escribo código limpio con acceso a entorno de pruebas.",
            proc_4_title: "Lanzamiento",
            proc_4_desc: "Migración, WPO, SEO y ¡al aire!",
            contact_title: "Hablemos de tu proyecto",
            contact_desc: "Cuéntame qué necesitas. Te responderé rápido con opciones claras.",
            form_name: "Tu Nombre",
            form_type: "¿Qué necesitas?",
            form_opt_1: "Landing Page",
            form_opt_2: "Tienda Online (WooCommerce)",
            form_opt_3: "Sitio Corporativo o Medida",
            form_opt_4: "Mantenimiento / Optimización",
            form_opt_5: "Duda / Otro proyecto",
            form_msg: "Cuéntame los detalles",
            form_submit: "Enviar Solicitud",
            form_privacy: "Sin compromisos. Tus datos están seguros.",
            footer_text: "Todos los derechos reservados. Construido con código propio."
        },
        en: {
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_about: "About Me",
            nav_contact: "Get a Quote",
            hero_badge: "Available for new projects",
            hero_title_1: "I transforming your ideas into",
            hero_title_2: "Profitable Digital Experiences",
            hero_subtitle: "I'm Jeremy Garcia, a Full Stack Web Developer specializing in WordPress, React, and automations. I craft fast, SEO-optimized websites that turn visitors into clients.",
            hero_cta_1: "Request a Quote",
            hero_cta_2: "View Services",
            tech_title: "Technologies & Tools I Master",
            services_title: "Web Development Services",
            services_desc: "Custom solutions designed to grow your business online.",
            srv_1_title: "Landing Pages",
            srv_1_desc: "Highly optimized single pages designed with one goal: capture leads and generate fast sales.",
            srv_2_title: "Online Stores (E-commerce)",
            srv_2_desc: "Complete automated sales platforms (WooCommerce), payment gateways, and inventory management.",
            srv_3_title: "Web Applications",
            srv_3_desc: "Custom systems built with React & PHP that solve specific business problems.",
            srv_4_title: "Corporate Websites",
            srv_4_desc: "Professional digital presence for businesses and institutions. Showcase your brand.",
            srv_5_title: "Web Maintenance & Optimization",
            srv_5_desc: "Already have a site but it's slow or not selling? I handle speed optimization (WPO), Technical SEO, and maintenance.",
            comp_title: "What type of website do you need?",
            comp_desc: "A quick guide to help you make the right choice.",
            comp_1_desc: "A <strong>Landing Page</strong> is ideal for Ad campaigns focused on converting. A <strong>Corporate Website</strong> has multiple pages for long-term SEO.",
            comp_2_desc: "<strong>WordPress</strong> is cost-effective and perfect for 90% of businesses. <strong>Custom Development</strong> (React) is for complex logic like SaaS apps.",
            port_title: "Featured Projects",
            port_desc: "A selection of recent works designed to make an impact.",
            test_title: "What my clients say",
            test_desc: "Over 6 successful projects back up my work and commitment.",
            test_3_name: "E-commerce Client",
            test_3_desc: '"Development of an E-commerce Platform for Sportswear with Shopify. Excellent work, the store is super fast and very easy to manage."',
            faq_title: "Frequently Asked Questions",
            faq_desc: "Everything you need to know before we start working together.",
            faq_1_q: "Does the service include domain and hosting?",
            faq_1_a: "Yes, I offer the option to manage your domain and professional hosting. Keep in mind that including this service <strong>adds to the final budget</strong> of the project.",
            faq_2_q: "What are the delivery times?",
            faq_2_a: `<ul class="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Landing Pages:</strong> 3 days (depending on animations).</li>
                            <li><strong>Corporate Sites:</strong> 1 week.</li>
                            <li><strong>E-commerce Stores:</strong> 8 to 10 days, depending on the products.</li>
                        </ul>`,
            faq_3_q: "What are the payment methods?",
            faq_3_a: "I accept payments via <strong>Bank Transfer</strong> and <strong>Cash</strong>.",
            faq_4_q: "Do you offer post-delivery support?",
            faq_4_a: "Yes, I provide post-delivery support <strong>at no cost</strong>. I also give you <strong>video tutorials</strong> on how to manage the site so you can be independent.",
            game_title: 'Catch my "Bugs"',
            game_desc: "As a developer, my job is to squash bugs. Catch them all to win!",
            game_start: "Catch 5 bugs!",
            game_win: "Clean Code! Ready for production 🚀",
            about_title: "About Me",
            about_p1: "Hi, I'm Jeremy. More than just a coder, I'm a problem solver. I know you don't just want a website; you want more clients.",
            about_p2: "My focus is technical quality (fast, secure) and strategic design (UX, SEO). I don't use cheap templates.",
            skills_title: "My Tech Stack",
            process_title: "How we will work together?",
            proc_1_title: "Discovery",
            proc_1_desc: "We analyze your business and define goals.",
            proc_2_title: "Proposal",
            proc_2_desc: "Structure, wireframes, and a fixed budget.",
            proc_3_title: "Development",
            proc_3_desc: "I write clean code. You get access to a staging site.",
            proc_4_title: "Launch",
            proc_4_desc: "Server migration, speed optimization, and live!",
            contact_title: "Let's talk about your project",
            contact_desc: "Tell me what you need. I'll reply fast with clear options.",
            form_name: "Your Name",
            form_type: "What do you need?",
            form_opt_1: "Landing Page",
            form_opt_2: "Online Store (WooCommerce)",
            form_opt_3: "Corporate or Custom Site",
            form_opt_4: "Maintenance / Optimization",
            form_opt_5: "Question / Other",
            form_msg: "Tell me the details",
            form_submit: "Send Request",
            form_privacy: "No commitments. Your data is safe.",
            footer_text: "All rights reserved. Built from scratch."
        }
    };

    let currentLang = 'es';
    const langBtn = document.getElementById('langToggle');
    const langBtnMobile = document.getElementById('langToggleMobile');

    const updateDOMText = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // innerHTML allow strong tags
            }
        });

        // Update document lang
        document.documentElement.lang = lang;

        // Update Button text to indicate next language
        const nextLangText = lang === 'es' ? 'EN' : 'ES';
        langBtn.innerText = nextLangText;
        langBtnMobile.innerText = nextLangText;
    };

    const toggleLang = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateDOMText(currentLang);
    };

    langBtn.addEventListener('click', toggleLang);
    langBtnMobile.addEventListener('click', toggleLang);

    // Initial translation load
    updateDOMText(currentLang);


    // --- 4. INTERACTIVE GAME: BUG CATCHER ---
    const gameArea = document.getElementById('gameArea');
    const scoreSpan = document.getElementById('gameScore');
    const winMsg = document.getElementById('gameWinMsg');
    const startText = document.getElementById('gameStartText');
    const bugIcons = ['🐛', '🐞', '🦗', '🕷️'];
    let score = 0;
    const maxScore = 5;

    // Create a bug element
    const createBug = () => {
        if (score >= maxScore) return;

        const bug = document.createElement('div');
        bug.classList.add('bug');
        bug.innerText = bugIcons[Math.floor(Math.random() * bugIcons.length)];

        // Random position
        const maxX = gameArea.clientWidth - 40;
        const maxY = gameArea.clientHeight - 40;
        bug.style.left = Math.floor(Math.random() * maxX) + 'px';
        bug.style.top = Math.floor(Math.random() * maxY) + 'px';

        // Bug movement setup
        let directionX = Math.random() > 0.5 ? 1 : -1;
        let directionY = Math.random() > 0.5 ? 1 : -1;

        const moveBug = () => {
            if (!bug.parentNode) return; // If clicked and removed

            let currentX = parseFloat(bug.style.left);
            let currentY = parseFloat(bug.style.top);

            // Bounce off walls
            if (currentX >= maxX || currentX <= 0) directionX *= -1;
            if (currentY >= maxY || currentY <= 0) directionY *= -1;

            bug.style.left = currentX + (directionX * 2) + 'px';
            bug.style.top = currentY + (directionY * 2) + 'px';

            requestAnimationFrame(moveBug);
        };

        // Click event to catch
        bug.addEventListener('click', () => {
            bug.remove();
            score++;
            scoreSpan.innerText = score;
            startText.style.display = 'none';

            if (score >= maxScore) {
                winMsg.classList.remove('hidden');
                // clear remaining bugs
                gameArea.querySelectorAll('.bug').forEach(b => b.remove());
            } else {
                // Spawn a new one slightly faster
                setTimeout(createBug, 200);
            }
        });

        gameArea.appendChild(bug);
        requestAnimationFrame(moveBug);

        // Remove bug if not clicked within 3 seconds, and spawn a new one (makes it dynamic)
        setTimeout(() => {
            if (bug.parentNode) {
                bug.remove();
                if (score < maxScore) createBug();
            }
        }, 3000);
    };

    // Initialize game on scroll interaction (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && score === 0) {
                // Spawn first 2 bugs
                createBug();
                setTimeout(createBug, 500);
                observer.disconnect(); // Only trigger once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(gameArea);

    // --- 5. FAQ TOGGLE ---
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');

            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = "rotate(180deg)";
            } else {
                content.classList.add('hidden');
                icon.style.transform = "rotate(0deg)";
            }
        });
    });
    // --- 6. CONTACT FORM TO WHATSAPP ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const tipo = document.getElementById('tipo');
            const tipoText = tipo.options[tipo.selectedIndex].text;
            const message = document.getElementById('message').value;

            // Construct WhatsApp Message
            let waMessage = `Hola Jeremy, soy *${name}*.\n`;
            waMessage += `Mi email de contacto es: ${email}\n\n`;
            waMessage += `Estoy interesado/a en: *${tipoText}*\n`;

            if (message.trim() !== '') {
                waMessage += `\nDetalles del proyecto:\n${message}`;
            }

            // Encode for URL
            const encodedMessage = encodeURIComponent(waMessage);
            const phoneNumber = '541123872553';

            // Redirect to WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

            // Optional: reset form after submission
            contactForm.reset();
        });
    }
});
