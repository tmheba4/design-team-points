
// شاشة التحميل
window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if(loader){
            loader.classList.add('hidden');
        }
    }, 1500);
});


// بيانات التفاصيل لكل عضو
const memberDetails = {

"فرح الشمري": `المجموع: 24 نقطة

الأعمال:
• بوست التسجيل (1)
• 3 بوستات Silent Attacks (3)
• عرض النادي (1)
• 3 بوستات رمضان (3)
• 3 ستوريات رمضان (3)
• إطار الستوري (1)
• 3 بوستات النشرة (3)
• كتيب النشرة ملف (6)
• تعديلات Enigma (4 × 0.5 = 2)
• تعديل إعلان INE (0.5)
• اقتراح تحسين بوستات التسجيل (0.5)`,

"معاذ الحربي": `المجموع: 8 نقاط

الأعمال:
• بوست Enigma (1)
• إعلان INE (1)
• 6 بوستات القبول (6)`,

"ريم الحربي": `المجموع: 10 نقاط

الأعمال:
• 4 بوستات Enigma (4)
• كتيب النشرة ملف (6)`,

"البندري السرباتي": `المجموع: 7 نقاط

الأعمال:
• 1 بوست Silent Attacks (1)
• كتيب النشرة ملف (6)`,

"سارة البراك": `المجموع: 6 نقاط

الأعمال:
• 3 بوستات Silent Attacks (3)
• 3 ستوريات رمضان (3)`,

"اثير الفايز": `المجموع: 6 نقاط

الأعمال:
• 3 بوستات Silent Attacks (3)
• 3 بوستات النشرة (3)`,

"سارة السعود": `المجموع: 5 نقاط

الأعمال:
• 5 بوستات Enigma (5)`,

"شذى الرشيدي": `المجموع: 4 نقاط

الأعمال:
• 3 بوستات Enigma (3)
• تعديل بوستين Enigma (2 × 0.5 = 1)`,

"هبه التميمي": `لا توجد أعمال حالياً`,

"رفيدة جابر": `لا توجد أعمال حالياً`,

"خوله السديس": `لا توجد أعمال حالياً`,

"تسنيم كريم": `لا توجد أعمال حالياً`,

"سعود التميمي": `لا توجد أعمال حالياً`,

"موسى المرشدي": `لا توجد أعمال حالياً`

};



// فتح نافذة التفاصيل
function openPopup(name) {

const popup = document.getElementById('popup');
const title = document.getElementById('popup-title');
const body = document.getElementById('popup-body');

title.textContent = name;

body.textContent = memberDetails[name] || "لا توجد تفاصيل متاحة";

popup.classList.add('show');

}



// إغلاق النافذة
function closePopup() {

const popup = document.getElementById('popup');
popup.classList.remove('show');

}



// إغلاق عند الضغط خارج النافذة
window.addEventListener('click', function(e) {

const popup = document.getElementById('popup');

if (e.target === popup) {
closePopup();
}

});



// ظهور البطاقات عند التمرير
window.addEventListener('scroll', function() {

const cards = document.querySelectorAll('.member-card');

cards.forEach(card => {

const rect = card.getBoundingClientRect();

const visible =
rect.top < window.innerHeight - 100 &&
rect.bottom > 0;

if (visible) {

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});




// تأثير المربع الرئيسي
const mainCard = document.getElementById('mainCard');

if (mainCard) {

mainCard.addEventListener('mousedown', function() {

this.style.transform = "translateY(-5px) scale(1.01)";
this.style.boxShadow =
"0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.3)";

});

mainCard.addEventListener('mouseup', function() {

this.style.transform = "translateY(-10px) scale(1.02)";

});

mainCard.addEventListener('mouseleave', function() {

this.style.transform = "translateY(0) scale(1)";
this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";

});

}




// حركة عناصر الخلفية مع الماوس
document.addEventListener('mousemove', function(e) {

const elements = document.querySelectorAll('.element');

const mouseX = e.clientX / window.innerWidth;
const mouseY = e.clientY / window.innerHeight;

elements.forEach((element, index) => {

const speed = (index + 1) * 20;

const x = (mouseX * speed) - (speed / 2);
const y = (mouseY * speed) - (speed / 2);

element.style.transform = `translate(${x}px, ${y}px)`;

});

});
