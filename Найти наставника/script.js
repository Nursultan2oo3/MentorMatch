document.addEventListener('DOMContentLoaded', function() {
    // Mock data for mentors
const mentors = [
    {
        id: 1,
        name: "Алексей Петров",
        specialty: "Frontend разработка",
        experience: "5+ лет",
        rating: "4.9",
        category: "programming",
        image: "https://plus.unsplash.com/premium_photo-1661374927471-24a90ebd5737?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Опытный фронтенд разработчик с экспертизой в React и Vue.js. Помогу вам освоить современные технологии веб-разработки."
    },
    {
        id: 2,
        name: "Елена Смирнова",
        specialty: "UX/UI Дизайн",
        experience: "3-5 лет",
        rating: "4.8",
        category: "design",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Профессиональный дизайнер интерфейсов. Научу вас создавать удобные и красивые продукты."
    },
    {
        id: 3,
        name: "Дмитрий Иванов",
        specialty: "Бизнес-аналитика",
        experience: "5+ лет",
        rating: "4.7",
        category: "business",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Консультант по бизнес-аналитике с опытом работы в крупных международных компаниях."
    },
    {
        id: 4,
        name: "Ольга Кузнецова",
        specialty: "Digital маркетинг",
        experience: "3-5 лет",
        rating: "4.9",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Специалист по цифровому маркетингу. Помогу вам разобраться в SMM, контекстной рекламе и аналитике."
    },
    {
        id: 5,
        name: "Иван Сидоров",
        specialty: "Backend разработка",
        experience: "1-3 года",
        rating: "4.5",
        category: "programming",
        image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Backend разработчик на Node.js и Python. Научу вас создавать надежные и масштабируемые серверные приложения."
    },
    {
        id: 6,
        name: "Анна Васильева",
        specialty: "Мобильная разработка",
        experience: "3-5 лет",
        rating: "4.7",
        category: "programming",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Разработчик мобильных приложений для iOS и Android. Помогу вам освоить Swift, Kotlin и Flutter."
    },
    {
        id: 7,
        name: "Михаил Козлов",
        specialty: "Data Science",
        experience: "5+ лет",
        rating: "4.8",
        category: "programming",
        image: "https://images.unsplash.com/photo-1568585105565-e372998a195d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Специалист по машинному обучению и анализу данных. Обучаю Python, Pandas, TensorFlow и другим инструментам DS."
    },
    {
        id: 8,
        name: "Светлана Новикова",
        specialty: "Графический дизайн",
        experience: "3-5 лет",
        rating: "4.6",
        category: "design",
        image: "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Профессиональный графический дизайнер. Научу работать с Adobe Photoshop, Illustrator и Figma."
    },
    {
        id: 9,
        name: "Артем Волков",
        specialty: "Финансы и инвестиции",
        experience: "5+ лет",
        rating: "4.9",
        category: "business",
        image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Финансовый консультант с опытом работы в инвестиционном банке. Помогу разобраться в управлении финансами."
    },
    {
        id: 10,
        name: "Юлия Белова",
        specialty: "Контент-маркетинг",
        experience: "3-5 лет",
        rating: "4.7",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Специалист по контент-стратегиям. Научу создавать вовлекающий контент для разных платформ."
    },
    {
        id: 11,
        name: "Павел Семенов",
        specialty: "DevOps",
        experience: "5+ лет",
        rating: "4.8",
        category: "programming",
        image: " https://images.unsplash.com/photo-1484688493527-670f98f9b195?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        bio: "DevOps инженер. Обучаю работе с Docker, Kubernetes, AWS и CI/CD pipelines."
    },
    {
        id: 12,
        name: "Алина Морозова",
        specialty: "3D моделирование",
        experience: "1-3 года",
        rating: "4.4",
        category: "design",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "3D художник. Помогу освоить Blender, Maya и основы 3D визуализации."
    }
];

    // DOM Elements
    const mentorsContainer = document.getElementById('mentors-container');
    const categoryFilter = document.getElementById('category-filter');
    const experienceFilter = document.getElementById('experience-filter');
    const loadMoreBtn = document.getElementById('load-more');
    
    // Auth Elements
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const profileModal = document.getElementById('profile-modal');
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const profileInfo = document.getElementById('profile-info');
    
    // State
    let displayedMentors = 6;
    let filteredMentors = [...mentors];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Initialize
    updateAuthUI();
    displayMentors(filteredMentors);

    // Display mentors
    function displayMentors(mentorsToDisplay) {
        mentorsContainer.innerHTML = '';
        
        const limitedMentors = mentorsToDisplay.slice(0, displayedMentors);
        
        limitedMentors.forEach(mentor => {
            const mentorCard = document.createElement('div');
            mentorCard.className = 'mentor-card';
            mentorCard.innerHTML = `
                <div class="mentor-img">
                    <img src="${mentor.image}" alt="${mentor.name}">
                </div>
                <div class="mentor-info">
                    <h3>${mentor.name}</h3>
                    <span class="specialty">${mentor.specialty}</span>
                    <span class="experience">Опыт: ${mentor.experience}</span>
                    <div class="rating">
                        <i class="fas fa-star"></i> ${mentor.rating}
                    </div>
                    <p class="bio">${mentor.bio}</p>
                    <button class="btn btn-secondary ${currentUser ? '' : 'disabled'}" ${currentUser ? '' : 'disabled'}>
                        ${currentUser ? 'Выбрать наставника' : 'Войдите для выбора'}
                    </button>
                </div>
            `;
            mentorsContainer.appendChild(mentorCard);
        });

        // Show/hide load more button
        if (displayedMentors >= mentorsToDisplay.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    // Filter mentors
    function filterMentors() {
        const category = categoryFilter.value;
        const experience = experienceFilter.value;
        
        filteredMentors = mentors.filter(mentor => {
            const categoryMatch = !category || mentor.category === category;
            let experienceMatch = true;
            
            if (experience) {
                if (experience === '1-3') {
                    experienceMatch = mentor.experience === '1-3 года';
                } else if (experience === '3-5') {
                    experienceMatch = mentor.experience === '3-5 лет';
                } else if (experience === '5+') {
                    experienceMatch = mentor.experience === '5+ лет';
                }
            }
            
            return categoryMatch && experienceMatch;
        });
        
        displayedMentors = 6;
        displayMentors(filteredMentors);
    }

    // Update UI based on auth state
    function updateAuthUI() {
        if (currentUser) {
            loginBtn.style.display = 'none';
            registerBtn.style.display = 'none';
            
            // Create profile button if not exists
            if (!document.querySelector('.btn-profile')) {
                const profileBtn = document.createElement('button');
                profileBtn.className = 'btn btn-profile';
                profileBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
                profileBtn.addEventListener('click', () => {
                    showProfileModal();
                });
                document.querySelector('.auth-buttons').appendChild(profileBtn);
            } else {
                document.querySelector('.btn-profile').innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
            }
        } else {
            loginBtn.style.display = 'inline-block';
            registerBtn.style.display = 'inline-block';
            const profileBtn = document.querySelector('.btn-profile');
            if (profileBtn) {
                profileBtn.remove();
            }
        }
    }

    // Show login modal
    function showLoginModal() {
        loginModal.style.display = 'block';
        registerModal.style.display = 'none';
        profileModal.style.display = 'none';
    }

    // Show register modal
    function showRegisterModal() {
        registerModal.style.display = 'block';
        loginModal.style.display = 'none';
        profileModal.style.display = 'none';
    }

    // Show profile modal
    function showProfileModal() {
        profileInfo.innerHTML = `
            <p><strong>Имя:</strong> ${currentUser.name}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>Дата регистрации:</strong> ${new Date(currentUser.registeredAt).toLocaleDateString()}</p>
        `;
        profileModal.style.display = 'block';
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }

    // Close modal when clicking X
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            loginModal.style.display = 'none';
            updateAuthUI();
            displayMentors(filteredMentors);
            showToast('Вы успешно вошли в систему!');
        } else {
            showToast('Неверный email или пароль', 'error');
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        // Validate
        if (password !== confirmPassword) {
            showToast('Пароли не совпадают', 'error');
            return;
        }
        
        // Check if user exists
        if (users.some(u => u.email === email)) {
            showToast('Пользователь с таким email уже существует', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            registeredAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        registerModal.style.display = 'none';
        updateAuthUI();
        displayMentors(filteredMentors);
        showToast('Регистрация прошла успешно!');
    });

    // Logout
    logoutBtn.addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        profileModal.style.display = 'none';
        updateAuthUI();
        displayMentors(filteredMentors);
        showToast('Вы вышли из системы');
    });

    // Show toast messages
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Event listeners
    categoryFilter.addEventListener('change', filterMentors);
    experienceFilter.addEventListener('change', filterMentors);
    
    loadMoreBtn.addEventListener('click', () => {
        displayedMentors += 3;
        displayMentors(filteredMentors);
    });

    // Auth event listeners
    loginBtn.addEventListener('click', showLoginModal);
    registerBtn.addEventListener('click', showRegisterModal);
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterModal();
    });
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginModal();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});

// Add toast styles to the head
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: #2ecc71;
            color: white;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: translateX(200%);
            transition: transform 0.3s ease;
            z-index: 3000;
        }
        
        .toast.show {
            transform: translateX(0);
        }
        
        .toast-error {
            background: #e74c3c;
        }
    </style>
`);