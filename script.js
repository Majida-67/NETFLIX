
$(document).ready(function () {
    // Language data for different languages
    const languageData = {
        en: {
            title: "Netflix Pakistan - Watch TV Shows Online, Watch Movies Online",
            heroTitle: "Enjoy big movies, hit series and more from ₹ 149.",
            heroSubtitle: "Join today. Cancel anytime.",
            heroText: "Ready to watch? Enter your email to create or restart your membership.",
            emailPlaceholder: "E-mail address",
            getStarted: "Get Started",
            feature1Title: "Enjoy on your TV",
            feature1Desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            feature2Title: "Download your shows to watch offline",
            feature2Desc: "Save your favourites easily and always have something to watch.",
            feature3Title: "Watch everywhere",
            feature3Desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            feature4Title: "Create profiles for kids",
            feature4Desc: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
            faqTitle: "Frequently Asked Questions",
            readyText: "Ready to watch? Enter your email to create or restart your membership.",
            questions: "Questions? Call 000-800-919-1694"
        },
        ur: {
            title: "نیٹ فلکس پاکستان - ٹی وی شوز آن لائن دیکھیں، فلمیں آن لائن دیکھیں",
            heroTitle: "بڑی فلموں، ہٹ سیریز اور مزید سے لطف اندوز ہوں ₹ 149 سے۔",
            heroSubtitle: "آج شامل ہوں۔ کسی بھی وقت منسوخ کریں۔",
            heroText: "دیکھنے کے لیے تیار ہیں؟ اپنی رکنیت بنانے یا دوبارہ شروع کرنے کے لیے اپنا ای میل درج کریں۔",
            emailPlaceholder: "ای میل ایڈریس",
            getStarted: "شروع کریں",
            feature1Title: "اپنے ٹی وی پر لطف اندوز ہوں",
            feature1Desc: "اسمارٹ ٹی وی، پلے اسٹیشن، ایکس باکس، کروم کاسٹ، ایپل ٹی وی، بلو رے پلیئرز اور زیادہ پر دیکھیں۔",
            feature2Title: "اپنے شوز ڈاؤن لوڈ کریں آف لائن دیکھنے کے لیے",
            feature2Desc: "اپنی پسندیدہ چیزیں آسانی سے محفوظ کریں اور ہمیشہ کچھ نہ کچھ دیکھنے کے لیے رکھیں۔",
            feature3Title: "ہر جگہ دیکھیں",
            feature3Desc: "اپنے فون، ٹیبلٹ، لیپ ٹاپ اور ٹی وی پر لامحدود فلمیں اور ٹی وی شوز دیکھیں۔",
            feature4Title: "بچوں کے لیے پروفائلز بنائیں",
            feature4Desc: "بچوں کو ان کے پسندیدہ کرداروں کے ساتھ مہم جوئی پر بھیجیں ایک ایسی جگہ میں جو صرف ان کے لیے بنائی گئی ہے—آپ کی رکنیت کے ساتھ مفت۔",
            faqTitle: "اکثر پوچھے جانے والے سوالات",
            readyText: "دیکھنے کے لیے تیار ہیں؟ اپنی رکنیت بنانے یا دوبارہ شروع کرنے کے لیے اپنا ای میل درج کریں۔",
            questions: "سوالات؟ کال کریں 000-800-919-1694"
        },
        ar: {
            title: "Netflix باكستان - شاهد عروض تلفزيونية عبر الإنترنت، شاهد أفلامًا عبر الإنترنت",
            heroTitle: "استمتع بأفلام كبيرة، مسلسلات ناجحة والمزيد من 149 روبية.",
            heroSubtitle: "انضم اليوم. يمكنك الإلغاء في أي وقت.",
            heroText: "هل أنت مستعد للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء حسابك أو إعادة تشغيل عضويتك.",
            emailPlaceholder: "عنوان البريد الإلكتروني",
            getStarted: "ابدأ الآن",
            feature1Title: "استمتع بالمشاهدة على تلفزيونك",
            feature1Desc: "شاهد على أجهزة التلفزيون الذكية، بلايستيشن، إكس بوكس، كروم كاست، آبل تي في، مشغلات Blu-ray والمزيد.",
            feature2Title: "حمّل عروضك للمشاهدة دون اتصال",
            feature2Desc: "احفظ أعمالك المفضلة بسهولة ولديك دائمًا ما تشاهده.",
            feature3Title: "شاهد في كل مكان",
            feature3Desc: "بث أفلام ومسلسلات تلفزيونية غير محدودة على هاتفك أو جهازك اللوحي أو حاسوبك المحمول أو تلفزيونك.",
            feature4Title: "إنشاء ملفات تعريف للأطفال",
            feature4Desc: "أرسل الأطفال في مغامرات مع شخصياتهم المفضلة في مساحة مصممة خصيصًا لهم — مجانًا مع عضويتك.",
            faqTitle: "أسئلة مكررة",
            readyText: "هل أنت مستعد للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء حسابك أو إعادة تشغيل عضويتك.",
            questions: "أسئلة؟ اتصل على 000-800-919-1694"
        },
        es: {
            title: "Netflix Pakistán - Ver programas de TV en línea, Ver películas en línea",
            heroTitle: "Disfruta de películas, series exitosas y más desde ₹149.",
            heroSubtitle: "Únete hoy. Cancela cuando quieras.",
            heroText: "¿Listo para ver? Ingresa tu correo para crear o reiniciar tu membresía.",
            emailPlaceholder: "Dirección de correo electrónico",
            getStarted: "Comenzar",
            feature1Title: "Disfruta en tu TV",
            feature1Desc: "Mira en smart TVs, PlayStation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y más.",
            feature2Title: "Descarga tus programas para verlos offline",
            feature2Desc: "Guarda tus favoritos fácilmente y siempre ten algo para ver.",
            feature3Title: "Mira en todas partes",
            feature3Desc: "Transmite películas y programas de TV ilimitados en tu teléfono, tablet, laptop y TV.",
            feature4Title: "Crea perfiles para niños",
            feature4Desc: "Envía a los niños a aventuras con sus personajes favoritos en un espacio creado solo para ellos—gratis con tu membresía.",
            faqTitle: "Preguntas frecuentes",
            readyText: "¿Listo para ver? Ingresa tu correo para crear o reiniciar tu membresía.",
            questions: "¿Preguntas? Llama al 000-800-919-1694"
        },
        hi: {
            title: "नेटफ्लिक्स पाकिस्तान - टीवी शो ऑनलाइन देखें, फिल्में ऑनलाइन देखें",
            heroTitle: "बड़ी फिल्मों, हिट श्रृंखलाओं और बहुत कुछ ₹149 से आनंद लें।",
            heroSubtitle: "आज ही शामिल हों। कभी भी रद्द करें।",
            heroText: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
            emailPlaceholder: "ईमेल पता",
            getStarted: "शुरू करें",
            feature1Title: "अपने टीवी पर आनंद लें",
            feature1Desc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर और अधिक पर देखें।",
            feature2Title: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
            feature2Desc: "अपने पसंदीदा को आसानी से सहेजें और हमेशा देखने के लिए कुछ न कुछ रखें।",
            feature3Title: "हर जगह देखें",
            feature3Desc: "अपने फोन, टैबलेट, लैपटॉप और टीवी पर असीमित फिल्में और टीवी शो स्ट्रीम करें।",
            feature4Title: "बच्चों के लिए प्रोफाइल बनाएं",
            feature4Desc: "बच्चों को उनके पसंदीदा किरदारों के साथ रोमांचक सफर पर भेजें - एक ऐसी जगह जो सिर्फ उनके लिए बनाई गई है, आपकी सदस्यता के साथ मुफ्त।",
            faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
            readyText: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
            questions: "प्रश्न? 000-800-919-1694 पर कॉल करें"
        }
    };

    // Set default language
    let currentLang = 'en';

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Change navbar background on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Email form validation
    $('.email-form').on('submit', function (e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        if (validateEmail(email)) {
            // Submit form or show success message
            alert('Thank you for your interest! We will contact you soon.');
            $(this).find('input[type="email"]').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Animate elements on scroll
    $(window).scroll(function () {
        $('.feature-section').each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scroll > position - windowHeight + 200) {
                $(this).addClass('animated');
            }
        });
    });

    // Video play/pause on hover for feature sections
    $('.feature-video-container').hover(
        function () {
            $(this).find('video').get(0).play();
        },
        function () {
            $(this).find('video').get(0).pause();
        }
    );

    // Language selector functionality
    $(document).on('click', '.language-option', function (e) {
        e.preventDefault();
        const lang = $(this).data('lang');
        currentLang = lang;
        updateLanguage(lang);

        // Update dropdown text in both navbar and footer
        const selectedText = $(this).text();
        $('.language-btn').html(`<i class="fas fa-language me-1"></i> ${selectedText.split(' (')[0]}`);
    });

    // Function to update all text elements
    function updateLanguage(lang) {
        const data = languageData[lang];

        // Update document title
        document.title = data.title;

        // Update hero section
        $('.hero-title').text(data.heroTitle);
        $('.hero-subtitle').text(data.heroSubtitle);
        $('.hero-text, .ready-text').text(data.heroText);
        $('.email-input').attr('placeholder', data.emailPlaceholder);
        $('.get-started-btn').html(`${data.getStarted} <i class="fas fa-chevron-right ms-1"></i>`);

        // Update features
        $('.feature-title').each(function (index) {
            $(this).text(data[`feature${index + 1}Title`]);
        });

        $('.feature-description').each(function (index) {
            $(this).text(data[`feature${index + 1}Desc`]);
        });

        // Update FAQ
        $('.faq-title').text(data.faqTitle);
        $('.questions').html(`<a href="tel:000-800-919-1694">${data.questions}</a>`);
    }

    // Enhanced hover effects
    $('.btn').hover(
        function () {
            $(this).css('transform', 'translateY(-3px)');
        },
        function () {
            $(this).css('transform', 'translateY(0)');
        }
    );

    $('.feature-section').hover(
        function () {
            $(this).find('.feature-text').css('transform', 'translateX(10px)');
            $(this).find('.feature-media img').css('transform', 'scale(1.03)');
        },
        function () {
            $(this).find('.feature-text').css('transform', 'translateX(0)');
            $(this).find('.feature-media img').css('transform', 'scale(1)');
        }
    );

    // Add ripple effect to buttons
    $('.btn').on('click', function (e) {
        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;

        const $ripple = $('<span class="ripple"></span>').css({
            left: x,
            top: y
        });

        $(this).append($ripple);

        setTimeout(() => {
            $ripple.remove();
        }, 1000);
    });
});