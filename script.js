
@import url('https://fonts.googleapis.com/css2?family=Beiruti:wght@200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Beiruti', sans-serif;
    background: linear-gradient(135deg, #2B090c 0%, #041831 100%);
    min-height: 100vh;
    color: #fff;
    overflow-x: hidden;
    position: relative;
}

/* صورة الخلفية الكبيرة */
.large-bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.15;
    animation: slowZoom 30s infinite alternate ease-in-out;
}

@keyframes slowZoom {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
}

/* العناصر المضيئة */
.floating-elements {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
}

.element {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(60px);
    animation: float 20s infinite ease-in-out;
}

.element:nth-child(1) {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    background: rgba(138, 43, 226, 0.2);
    animation-delay: 0s;
}

.element:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: 10%;
    left: -50px;
    background: rgba(255, 69, 0, 0.15);
    animation-delay: -3s;
}

.element:nth-child(3) {
    width: 500px;
    height: 500px;
    top: 30%;
    left: 20%;
    background: rgba(75, 0, 130, 0.15);
    animation-delay: -7s;
}

.element:nth-child(4) {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 15%;
    background: rgba(255, 215, 0, 0.1);
    animation-delay: -12s;
}

.element:nth-child(5) {
    width: 350px;
    height: 350px;
    top: 60%;
    right: 25%;
    background: rgba(147, 112, 219, 0.2);
    animation-delay: -5s;
}

@keyframes float {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(50px, 50px) scale(1.1);
    }
    50% {
        transform: translate(0, 100px) scale(0.9);
    }
    75% {
        transform: translate(-50px, 50px) scale(1.05);
    }
}

/* ===== شاشة التحميل الجديدة ===== */
.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2B090c 0%, #041831 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
    overflow: hidden;
}

.loader-wrapper.hidden {
    opacity: 0;
    visibility: hidden;
}

/* خلفية متدرجة مع نجوم */
.loader-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.15) 0%, transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(0, 168, 255, 0.15) 0%, transparent 30%),
                linear-gradient(135deg, #2B090c 0%, #041831 100%);
}

/* حاوية الكرة الأرضية */
.earth-container {
    position: relative;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* النقاط المضيئة (القارات) */
.point-cloud {
    position: absolute;
    width: 100%;
    height: 100%;
}

.point {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #0066ff;
    border-radius: 50%;
    box-shadow: 0 0 20px #0066ff, 0 0 40px #00a8ff, 0 0 60px #0066ff;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: 0 0 20px #0066ff, 0 0 40px #00a8ff;
    }
    50% {
        opacity: 1;
        transform: scale(1.5);
        box-shadow: 0 0 40px #0066ff, 0 0 80px #00a8ff, 0 0 120px #0066ff;
    }
}

/* شبكة الاتصالات */
.network-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}

.network-line {
    stroke-dasharray: 5 5;
    animation: dash 2s linear infinite;
    filter: drop-shadow(0 0 8px #0066ff);
}

@keyframes dash {
    to {
        stroke-dashoffset: -20;
    }
}

/* أيقونات المستخدمين */
.user-icons {
    position: absolute;
    width: 100%;
    height: 100%;
}

.user-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    background: rgba(0, 102, 255, 0.2);
    border: 2px solid #0066ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0066ff;
    font-size: 16px;
    box-shadow: 0 0 20px #0066ff;
    animation: glow 1s ease-in-out infinite;
    transform: translate(-50%, -50%);
}

.user-icon i {
    font-size: 14px;
}

@keyframes glow {
    0%, 100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 20px #0066ff;
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.3);
        box-shadow: 0 0 40px #0066ff, 0 0 80px #00a8ff;
    }
}

/* نص التحميل */
.loader-text {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1.5rem;
    font-family: 'Beiruti', sans-serif;
    text-shadow: 0 0 20px #0066ff, 0 0 40px #00a8ff;
    animation: textPulse 1s ease-in-out infinite;
    white-space: nowrap;
    z-index: 10;
}

@keyframes textPulse {
    0%, 100% {
        opacity: 0.7;
        text-shadow: 0 0 20px #0066ff, 0 0 40px #00a8ff;
    }
    50% {
        opacity: 1;
        text-shadow: 0 0 40px #0066ff, 0 0 80px #00a8ff, 0 0 120px #0066ff;
    }
}

/* الشعار */
.loader-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    animation: logoAppear 1s ease-out forwards;
}

.logo-glow {
    width: 150px;
    height: auto;
    filter: brightness(0) invert(1) drop-shadow(0 0 30px #0066ff);
    animation: logoPulse 2s ease-in-out infinite;
}

@keyframes logoAppear {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes logoPulse {
    0%, 100% {
        filter: brightness(0) invert(1) drop-shadow(0 0 30px #0066ff);
    }
    50% {
        filter: brightness(0) invert(1) drop-shadow(0 0 60px #00a8ff);
    }
}

/* المحتوى الرئيسي */
.content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 40px;
}

/* الهيدر */
.glass-header {
    background: rgba(10, 20, 30, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 15px 30px;
    margin-bottom: 40px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.glass-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    100% { left: 100%; }
}

.logo-container {
    display: flex;
    justify-content: center;
}

.logo {
    height: 60px;
    width: auto;
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
}

.logo-large {
    height: 100px;
}

/* العنوان الرئيسي */
.hero-section {
    text-align: center;
    margin-bottom: 60px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease forwards;
}

.main-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #fff, #a8b8ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    font-family: 'Beiruti', sans-serif;
}

.subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    font-family: 'Beiruti', sans-serif;
}

/* التصميم الزجاجي العام */
.glass-card {
    background: rgba(20, 30, 45, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.glass-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
}

.glass-card:active {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.3);
}

/* المربع الرئيسي */
.main-card {
    padding: 40px;
    margin-bottom: 80px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease 0.3s forwards;
}

.card-title {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #fff;
    position: relative;
    display: inline-block;
    font-family: 'Beiruti', sans-serif;
}

.card-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #fff, transparent);
}

/* شكل البنود */
.points-items {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.item {
    background: rgba(255, 255, 255, 0.08);
    padding: 15px 25px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.item:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(-5px);
}

.item-name {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Beiruti', sans-serif;
}

.item-value {
    font-size: 2rem;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.3);
    padding: 5px 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-family: 'Beiruti', sans-serif;
}

.blue-value {
    color: #0066ff;
    text-shadow: 0 0 20px #0066ff, 0 0 40px #00a8ff;
}

/* عنوان الفريق */
.team-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;
    background: linear-gradient(135deg, #fff, #0066ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease 0.6s forwards;
    font-family: 'Beiruti', sans-serif;
}

/* شبكة البطاقات */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
}

/* بطاقة العضو */
.member-card {
    padding: 30px 20px;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease forwards;
    animation-fill-mode: forwards;
}

.member-card:nth-child(1) { animation-delay: 0.1s; }
.member-card:nth-child(2) { animation-delay: 0.15s; }
.member-card:nth-child(3) { animation-delay: 0.2s; }
.member-card:nth-child(4) { animation-delay: 0.25s; }
.member-card:nth-child(5) { animation-delay: 0.3s; }
.member-card:nth-child(6) { animation-delay: 0.35s; }
.member-card:nth-child(7) { animation-delay: 0.4s; }
.member-card:nth-child(8) { animation-delay: 0.45s; }
.member-card:nth-child(9) { animation-delay: 0.5s; }
.member-card:nth-child(10) { animation-delay: 0.55s; }
.member-card:nth-child(11) { animation-delay: 0.6s; }
.member-card:nth-child(12) { animation-delay: 0.65s; }
.member-card:nth-child(13) { animation-delay: 0.7s; }
.member-card:nth-child(14) { animation-delay: 0.75s; }

/* حاوية الأفاتار */
.avatar-container {
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
}

.avatar {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #3a3a3a, #1a1a1a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

/* أفاتار الرجال */
.avatar.male {
    background: linear-gradient(135deg, #e0e0e0, #b0b0b0);
}

/* تنسيق الأيقونات */
.avatar i {
    font-size: 3rem;
    color: white;
}

.avatar.male i {
    color: black;
}

.avatar:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.member-name {
    font-size: 1.4rem;
    margin-bottom: 5px;
    color: #fff;
    font-family: 'Beiruti', sans-serif;
    display: block;
    text-align: center;
    width: 100%;
}

.member-role {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 15px;
    font-family: 'Beiruti', sans-serif;
    display: block;
    text-align: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

/* تفاصيل النقاط */
.points-details {
    margin: 20px 0;
    text-align: right;
}

.point-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
    margin: 5px 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    transition: all 0.3s ease;
    font-family: 'Beiruti', sans-serif;
}

.point-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-5px);
}

.point-item.total {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), transparent);
    font-weight: bold;
    margin-top: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.point-value {
    font-family: 'Beiruti', sans-serif;
}

.white-value {
    color: white;
}

.blue-total {
    color: #0066ff !important;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 15px #0066ff, 0 0 30px #00a8ff;
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 20px;
    border-radius: 50px;
    border: 1px solid #0066ff;
}

/* زر التفاصيل */
.details-btn {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 10px 25px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 15px 0 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    font-family: 'Beiruti', sans-serif;
}

.details-btn:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
}

/* الفوتر */
.glass-footer {
    background: rgba(10, 20, 30, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    padding: 30px;
    margin-top: 80px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;
}

.copyright {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-family: 'Beiruti', sans-serif;
}

.supervisor {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 30px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: 'Beiruti', sans-serif;
}

.whatsapp-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
    margin-top: 5px;
}

.whatsapp-circle:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(37, 211, 102, 0.8);
}

.whatsapp-circle i {
    font-size: 2.5rem;
}

/* نافذة منبثقة */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 10000;
    justify-content: center;
    align-items: center;
}

.popup.show {
    display: flex;
}

.popup-content {
    background: linear-gradient(135deg, #2B090c, #041831);
    padding: 40px;
    border-radius: 30px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.close-popup {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
}

.close-popup:hover {
    color: white;
    transform: scale(1.2);
}

#popup-title {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Beiruti', sans-serif;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.popup-body {
    color: white;
    font-size: 1.2rem;
    line-height: 1.8;
    font-family: 'Beiruti', sans-serif;
    white-space: pre-line;
}

/* أنيميشن */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* تحسينات للشاشات الصغيرة */
@media (max-width: 768px) {
    .content {
        padding: 15px;
    }

    .main-title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .team-grid {
        grid-template-columns: 1fr;
    }

    .points-items {
        grid-template-columns: 1fr;
    }

    .glass-header {
        padding: 10px 20px;
    }

    .logo-large {
        height: 70px;
    }
    
    .earth-container {
        width: 350px;
        height: 350px;
    }
    
    .loader-text {
        font-size: 1.2rem;
        bottom: -40px;
    }
    
    .logo-glow {
        width: 100px;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }

    .member-card {
        padding: 20px 15px;
    }

    .avatar {
        width: 80px;
        height: 80px;
    }
    
    .avatar i {
        font-size: 2.5rem;
    }
    
    .popup-content {
        padding: 30px 20px;
    }
    
    .earth-container {
        width: 280px;
        height: 280px;
    }
    
    .point {
        width: 3px;
        height: 3px;
    }
    
    .user-icon {
        width: 25px;
        height: 25px;
        font-size: 12px;
    }
    
    .user-icon i {
        font-size: 12px;
    }
}

/* تخصيص شريط التمرير */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #0066ff, #00a8ff);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #00a8ff, #0066ff);
}

/* الخط الأبيض المتوهج تحت الاسم */
.member-name::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* إلغاء أي خط قديم */
.member-name::before {
    display: none;
}
