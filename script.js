document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Data from the original React component
    const products = {
        "Car Genuine Fitting Latex Mats": [
            { name: "HR-V Genuine Fitting Floor Mats", img: "https://images.unsplash.com/photo-1603575206233-3642c4b2defc?q=80&w=400&auto=format&fit=crop" },
            { name: "Sorento Genuine Fitting Floor Mats", img: "https://images.unsplash.com/photo-1580570592936-a324d26204c8?q=80&w=400&auto=format&fit=crop" },
            { name: "Swift Genuine Fitting Floor Mats", img: "https://images.unsplash.com/photo-1619641760198-a1a687f898a4?q=80&w=400&auto=format&fit=crop" },
            { name: "Haval H6 Genuine Fitting Floor Mats", img: "https://images.unsplash.com/photo-1551522439-074256950b86?q=80&w=400&auto=format&fit=crop" },
        ],
        "LED Lights": [
            { name: "CAPRA LED Lights", img: "https://images.unsplash.com/photo-1544413669-1e2d45331f8b?q=80&w=400&auto=format&fit=crop" },
            { name: "AUTO LED", img: "https://images.unsplash.com/photo-1628198039862-a3a891f7d3d1?q=80&w=400&auto=format&fit=crop" },
            { name: "AAA LED", img: "https://images.unsplash.com/photo-1578330092955-e6c11a51a1e0?q=80&w=400&auto=format&fit=crop" },
            { name: "BUGGATI B65 Pro LED", img: "https://images.unsplash.com/photo-1594054545582-1a30aa4966e3?q=80&w=400&auto=format&fit=crop" },
        ],
        "Carfumes": [
            { name: "Areon Gel Carfumes", img: "https://images.unsplash.com/photo-1600171542914-e597c11f7863?q=80&w=400&auto=format&fit=crop" },
        ],
        "Car Polish": [
            { name: "Meguiar's Hybrid Ceramic Trim Restorer", img: "https://images.unsplash.com/photo-1595609440333-04e4e3776b1f?q=80&w=400&auto=format&fit=crop" },
        ],
    };

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1588695950838-eac3354371a5?q=80&w=600&auto=format&fit=crop', alt: 'Honey Autos store interior', caption: 'Our clean and well-organized store interior.' },
        { src: 'https://images.unsplash.com/photo-1628863353691-00626b34164b?q=80&w=600&auto=format&fit=crop', alt: 'Product display shelves', caption: 'A wide selection of premium car accessories on display.' },
        { src: 'https://images.unsplash.com/photo-1578330092955-e6c11a51a1e0?q=80&w=600&auto=format&fit=crop', alt: 'LED lights section', caption: 'Explore our range of high-performance LED lights.' },
        { src: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=600&auto=format&fit=crop', alt: 'Honey Autos friendly staff member', caption: 'Our knowledgeable staff is always ready to assist you.' },
        { src: 'https://images.unsplash.com/photo-1599256872239-e376f01d853c?q=80&w=600&auto=format&fit=crop', alt: 'Customer service area', caption: 'A comfortable waiting area for our valued customers.' },
        { src: 'https://images.unsplash.com/photo-1603575206233-3642c4b2defc?q=80&w=600&auto=format&fit=crop', alt: 'Collection of car floor mats', caption: 'Premium, genuine fitting floor mats for various models.' },
    ];

    const businessInfo = `
        - Business Name: Honey Autos
        - Category: Car Accessories Store
        - Rating: 5.0 (174 reviews)
        - Location: Shop No. 7-A, Street 1A, F-10 Markaz, F-10/4, Islamabad (Located in Shell)
        - Phone: 0300-5125386
        - Business Hours: Open daily, closes at 11:00 PM
        - Products: Car Genuine Fitting Latex Mats (for HR-V, Sorento, Swift, Haval H6), LED Lights (CAPRA, AUTO, AAA, BUGGATI B65 Pro), Carfumes (Areon Gel), Car Polish (Meguiar's Hybrid Ceramic Trim Restorer).
    `;

    // Render products
    function renderProducts() {
        const productsContainer = document.getElementById('products-container');

        for (const [category, items] of Object.entries(products)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'product-category';

            const title = document.createElement('h3');
            title.className = 'category-title';
            title.textContent = category;

            const grid = document.createElement('div');
            grid.className = 'product-grid';

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card';

                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.name;

                const name = document.createElement('h4');
                name.textContent = item.name;

                card.appendChild(img);
                card.appendChild(name);
                grid.appendChild(card);
            });

            categoryDiv.appendChild(title);
            categoryDiv.appendChild(grid);
            productsContainer.appendChild(categoryDiv);
        }
    }

    // Render gallery
    function renderGallery() {
        const galleryGrid = document.getElementById('gallery-grid');

        galleryImages.forEach((img, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.index = index;

            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.alt;

            const captionOverlay = document.createElement('div');
            captionOverlay.className = 'gallery-caption-overlay';

            const caption = document.createElement('p');
            caption.textContent = img.caption;

            captionOverlay.appendChild(caption);
            galleryItem.appendChild(imgElement);
            galleryItem.appendChild(captionOverlay);
            galleryGrid.appendChild(galleryItem);

            // Add click event for modal
            galleryItem.addEventListener('click', () => openModal(img));
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // Modal functionality
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    function openModal(image) {
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.textContent = image.caption;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Chatbot functionality
    const fabChat = document.querySelector('.fab-chat');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatClose = document.querySelector('.chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');

    fabChat.addEventListener('click', () => {
        chatbotContainer.classList.add('open');
    });

    chatClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('open');
    });

    // Chatbot message handling with Google GenAI API structure
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userInput = chatInput.value.trim();
        if (!userInput) return;

        // Add user message
        addMessage(userInput, 'user');
        chatInput.value = '';

        // Show loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatBody.appendChild(loadingIndicator);

        // Scroll to bottom
        scrollChatToBottom();

        // Simulate API call structure (user will add actual API integration)
        try {
            // This is where the Google GenAI API would be called
            // For now, we'll simulate a response with static data
            const simulatedResponse = await simulateGeminiAPICall(userInput);
            addMessage(simulatedResponse, 'bot');
        } catch (error) {
            console.error("Error in chatbot:", error);
            addMessage("Sorry, I'm having trouble connecting. Please try again later.", 'bot');
        } finally {
            // Remove loading indicator
            loadingIndicator.remove();
            scrollChatToBottom();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'bubble';
        bubbleDiv.textContent = text;

        messageDiv.appendChild(bubbleDiv);
        chatBody.appendChild(messageDiv);
        scrollChatToBottom();
    }

    function scrollChatToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Simulate Gemini API call (user will replace with actual API)
    async function simulateGeminiAPICall(userInput) {
        // This simulates the API call structure without making actual API calls
        // User can replace this with actual Google GenAI API integration

        // Simple response logic based on user input
        const lowerInput = userInput.toLowerCase();

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! How can I assist you with Honey Autos products or services today?";
        } else if (lowerInput.includes('products') || lowerInput.includes('what do you sell')) {
            return "We offer Car Genuine Fitting Latex Mats, LED Lights, Carfumes, and Car Polish. All our products are high-quality and genuine fitting.";
        } else if (lowerInput.includes('location') || lowerInput.includes('where are you')) {
            return "We're located at Shop No. 7-A, Street 1A, F-10 Markaz, F-10/4, Islamabad (Located in Shell). You can find us on Google Maps!";
        } else if (lowerInput.includes('hours') || lowerInput.includes('when are you open')) {
            return "We're open daily and close at 11:00 PM. Feel free to visit us anytime during business hours!";
        } else if (lowerInput.includes('contact') || lowerInput.includes('phone')) {
            return "You can reach us at 0300-5125386. Our friendly staff is ready to assist you!";
        } else {
            return "Thank you for your question! " + businessInfo + " How else can I assist you?";
        }
    }

    // Initialize the page
    renderProducts();
    renderGallery();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
