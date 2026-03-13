
// كود تشغيل شاشة التحميل وإخفائها بعد اكتمال تحميل الصفحة
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    // تأخير بسيط للتأكد من سلاسة الحركة
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// بيانات تفاصيل الأعضاء (يمكنك تعديل النصوص هنا بسهولة)
const membersData = {
    'فرح': "قائد الفريق.\nساهمت في تصميم 14 بوست، و7 ملفات متكاملة.\nبالإضافة إلى تقديم مقترحات تطويرية وتعديلات فنية مستمرة.",
    'معاذ': "نائب قائد الفريق.\nأنجز 8 بوستات احترافية وساهم في التخطيط لمهام الفريق.",
    'هبه': "عضو في فريق التصميم.\nفي انتظار التكليف بالمهام القادمة.",
    'ريم': "عضو فعال.\nأنجزت 4 بوستات وملف بوربوينت كامل بدقة عالية.",
    'البندري': "عضو متميز.\nساهمت في تصميم بوست واحد وملف كتيب تعريفي متكامل.",
    'سارة البراك': "عضو مبدع.\nأنجزت 6 بوستات متنوعة لمنصات التواصل الاجتماعي.",
    'أثير': "عضو مجتهد.\nساهمت في إنجاز 6 بوستات وتصاميم سريعة.",
    'سارة السعود': "عضو مساهم.\nأنجزت 5 بوستات فنية للفريق.",
    'شذى': "عضو تطويري.\nأنجزت 3 بوستات وساهمت في تعديلات هامة على التصاميم.",
    'رفيدة': "عضو في فريق التصميم.\nفي مرحلة التدريب والتحضير للمهام.",
    'خوله': "عضو جديد.\nمنضم حديثاً لفريق التصميم.",
    'تسنيم': "عضو جديد.\nمنضم حديثاً لفريق التصميم.",
    'سعود': "عضو مساند.\nساهم في تقديم الدعم التقني للفريق."
};

// وظيفة فتح النافذة المنبثقة
function openPopup(name) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const body = document.getElementById('popup-body');

    title.innerText = "تفاصيل " + name;
    // البحث عن البيانات بناءً على الاسم الممرر
    body.innerText = membersData[name] || "لا توجد تفاصيل إضافية متاحة حالياً.";

    popup.classList.add('show');
    // منع التمرير في الخلفية عند فتح النافذة
    document.body.style.overflow = 'hidden';
}

// وظيفة إغلاق النافذة المنبثقة
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    // إعادة التمرير للجسم الرئيسي
    document.body.style.overflow = 'auto';
}

// إغلاق النافذة عند الضغط خارج المربع الأبيض
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        closePopup();
    }
}
