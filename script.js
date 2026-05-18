const gradientColors = [
  ['#1a5276', '#1b7a6c'],
  ['#e8a838', '#e8563a'],
  ['#2d6a4f', '#1b7a6c'],
  ['#6c3483', '#1b7a6c'],
  ['#e8563a', '#e8a838'],
  ['#148f77', '#1a5276'],
  ['#f39c12', '#e74c3c'],
  ['#1b7a6c', '#2d6a4f'],
  ['#8e44ad', '#3498db'],
  ['#d35400', '#1b7a6c'],
  ['#2c3e50', '#1b7a6c'],
  ['#16a085', '#e8a838'],
  ['#c0392b', '#8e44ad'],
  ['#2980b9', '#1b7a6c'],
  ['#8e44ad', '#c0392b'],
];

let allBeaches = [];
let filteredBeaches = [];
const translations = {"nav": {"home": {"ar": "الرئيسية", "fr": "Accueil", "en": "Home"}, "beaches": {"ar": "الشواطئ", "fr": "Plages", "en": "Beaches"}, "about": {"ar": "عن الموقع", "fr": "À propos", "en": "About"}}, "hero": {"title": {"ar": "اكتشف شواطئ المغرب", "fr": "Découvrez les plages du Maroc", "en": "Discover Morocco's Beaches"}, "subtitle": {"ar": "من الساحل الأطلسي إلى البحر الأبيض المتوسط، اكتشف أجمل الشواطئ المغربية واختر وجهتك المثالية", "fr": "De l'Atlantique à la Méditerranée, découvrez les plus belles plages marocaines et choisissez votre destination idéale", "en": "From the Atlantic coast to the Mediterranean Sea, discover Morocco's most beautiful beaches and choose your perfect destination"}, "searchPlaceholder": {"ar": "ابحث عن شاطئ...", "fr": "Rechercher une plage...", "en": "Search for a beach..."}, "statBeach": {"ar": "شاطئ", "fr": "Plages", "en": "Beaches"}, "statRegion": {"ar": "مناطق ساحلية", "fr": "Régions", "en": "Coastal Regions"}, "statCoast": {"ar": "كلم من الساحل", "fr": "km de côte", "en": "km of Coastline"}}, "section": {"title": {"ar": "جميع الشواطئ المغربية", "fr": "Toutes les plages du Maroc", "en": "All Moroccan Beaches"}, "subtitle": {"ar": "اختر الشاطئ الذي يناسبك من بين أفضل الوجهات الساحلية في المغرب", "fr": "Choisissez la plage qui vous convient parmi les meilleures destinations côtières du Maroc", "en": "Choose the beach that suits you from the best coastal destinations in Morocco"}, "searchPlaceholder": {"ar": "ابحث بالاسم أو المنطقة...", "fr": "Rechercher par nom ou région...", "en": "Search by name or region..."}, "allRegions": {"ar": "جميع المناطق", "fr": "Toutes les régions", "en": "All Regions"}, "allActivities": {"ar": "جميع الأنشطة", "fr": "Toutes les activités", "en": "All Activities"}, "sortRating": {"ar": "الترتيب: التقييم", "fr": "Trier: Note", "en": "Sort: Rating"}, "sortName": {"ar": "الترتيب: الاسم", "fr": "Trier: Nom", "en": "Sort: Name"}, "noResults": {"ar": "لا توجد نتائج للبحث", "fr": "Aucun résultat", "en": "No results found"}, "noResultsHint": {"ar": "حاول تغيير كلمات البحث أو تصفية مختلفة", "fr": "Essayez de modifier votre recherche", "en": "Try changing your search terms"}}, "modal": {"bestTime": {"ar": "أفضل وقت للزيارة:", "fr": "Meilleure période:", "en": "Best time to visit:"}, "temperature": {"ar": "درجة الحرارة:", "fr": "Température:", "en": "Temperature:"}, "activities": {"ar": "الأنشطة المتاحة", "fr": "Activités disponibles", "en": "Available Activities"}, "features": {"ar": "المميزات", "fr": "Caractéristiques", "en": "Features"}}, "about": {"title": {"ar": "عن الموقع", "fr": "À propos", "en": "About"}, "desc1": {"ar": "شواطئ المغرب هو دليل سياحي شامل يهدف إلى تعريف الزوار بأجمل الشواطئ المغربية على طول الساحل الأطلسي والبحر الأبيض المتوسط.", "fr": "Plages du Maroc est un guide touristique complet qui vise à faire découvrir aux visiteurs les plus belles plages marocaines le long de la côte atlantique et de la mer Méditerranée.", "en": "Morocco Beaches is a comprehensive travel guide that aims to introduce visitors to the most beautiful Moroccan beaches along the Atlantic coast and the Mediterranean Sea."}, "desc2": {"ar": "نقدم معلومات دقيقة ومفصلة عن كل شاطئ تشمل الأنشطة المتاحة، أفضل أوقات الزيارة، والتقييمات لمساعدتك في اختيار الوجهة المثالية لقضاء عطلتك.", "fr": "Nous fournissons des informations précises et détaillées sur chaque plage, y compris les activités disponibles, les meilleures périodes de visite et les évaluations pour vous aider à choisir la destination idéale pour vos vacances.", "en": "We provide accurate and detailed information about each beach including available activities, best visiting times, and ratings to help you choose the perfect destination for your vacation."}, "feature1": {"ar": "30+ شاطئ", "fr": "30+ Plages", "en": "30+ Beaches"}, "feature2": {"ar": "8 مناطق ساحلية", "fr": "8 Régions côtières", "en": "8 Coastal Regions"}, "feature3": {"ar": "معلومات شاملة", "fr": "Infos complètes", "en": "Comprehensive Info"}, "feature4": {"ar": "تقييمات دقيقة", "fr": "Notes précises", "en": "Accurate Ratings"}}, "footer": {"brand": {"ar": "شواطئ المغرب", "fr": "Plages du Maroc", "en": "Morocco Beaches"}, "tagline": {"ar": "دليلك الشامل لاكتشاف أجمل الشواطئ المغربية", "fr": "Votre guide complet pour découvrir les plus belles plages marocaines", "en": "Your complete guide to discovering the most beautiful Moroccan beaches"}, "copyright": {"ar": "جميع الحقوق محفوظة", "fr": "Tous droits réservés", "en": "All rights reserved"}}, "lang": {"ar": "العربية", "fr": "Français", "en": "English"}, "theme": {"light": {"ar": "الوضع النهاري", "fr": "Mode clair", "en": "Light mode"}, "dark": {"ar": "الوضع الليلي", "fr": "Mode sombre", "en": "Dark mode"}}};
let currentLang = localStorage.getItem('lang') || 'ar';
let isDark = localStorage.getItem('darkMode') === 'true';

const regionKeys = {
  'طنجة-تطوان-الحسيمة': { fr: 'Tanger-Tétouan-Al Hoceima', en: 'Tangier-Tetouan-Al Hoceima' },
  'الشرق': { fr: 'Oriental', en: 'Oriental' },
  'الدار البيضاء-سطات': { fr: 'Casablanca-Settat', en: 'Casablanca-Settat' },
  'مراكش-آسفي': { fr: 'Marrakech-Safi', en: 'Marrakech-Safi' },
  'سوس-ماسة': { fr: 'Souss-Massa', en: 'Souss-Massa' },
  'كلميم-واد نون': { fr: 'Guelmim-Oued Noun', en: 'Guelmim-Oued Noun' },
  'العيون-الساقية الحمراء': { fr: 'Laâyoune-Sakia El Hamra', en: 'Laayoune-Sakia El Hamra' },
  'الداخلة-وادي الذهب': { fr: 'Dakhla-Oued Ed-Dahab', en: 'Dakhla-Oued Ed-Dahab' },
};

const activityKeys = {
  'السباحة': { fr: 'Natation', en: 'Swimming' },
  'ركوب الأمواج': { fr: 'Surf', en: 'Surfing' },
  'الكايت سيرف': { fr: 'Kitesurf', en: 'Kitesurfing' },
  'الغوص': { fr: 'Plongée', en: 'Diving' },
  'صيد السمك': { fr: 'Pêche', en: 'Fishing' },
  'التجديف': { fr: 'Paddle', en: 'Paddleboarding' },
  'المشي': { fr: 'Randonnée', en: 'Walking' },
  'اليوغا': { fr: 'Yoga', en: 'Yoga' },
  'التصوير': { fr: 'Photographie', en: 'Photography' },
  'ركوب الزوارق': { fr: 'Bateaux', en: 'Boating' },
  'الجت سكي': { fr: 'Jet ski', en: 'Jet skiing' },
  'الكرة الطائرة': { fr: 'Volley-ball', en: 'Volleyball' },
  'الطيران الشراعي': { fr: 'Parapente', en: 'Paragliding' },
  'التخييم': { fr: 'Camping', en: 'Camping' },
  'مراقبة الطيور': { fr: 'Observation oiseaux', en: 'Bird watching' },
  'رياضات مائية': { fr: 'Sports nautiques', en: 'Water sports' },
  'المقاهي': { fr: 'Cafés', en: 'Cafes' },
  'التسوق': { fr: 'Shopping', en: 'Shopping' },
  'الحياة الليلية': { fr: 'Vie nocturne', en: 'Nightlife' },
  'المطاعم': { fr: 'Restaurants', en: 'Restaurants' },
  'ركوب الدراجات': { fr: 'Vélo', en: 'Cycling' },
  'جولة بالقوارب': { fr: 'Balade en bateau', en: 'Boat ride' },
  'تذوق المحار': { fr: 'Dégustation huîtres', en: 'Oyster tasting' },
  'تذوق المأكولات البحرية': { fr: 'Fruits de mer', en: 'Seafood tasting' },
  'زيارة المدينة القديمة': { fr: 'Visite médina', en: 'Old town visit' },
  'زيارة المدينة': { fr: 'Visite ville', en: 'City visit' },
  'مشاهدة الجداريات': { fr: 'Fresques murales', en: 'Mural viewing' },
  'زيارة المعرض الفني': { fr: 'Visite galeries', en: 'Gallery visit' },
  'زيارة متحف إكزوبيري': { fr: 'Musée Exupéry', en: 'Exupéry Museum' },
  'زيارة الآثار': { fr: 'Visite ruines', en: 'Ruins visit' },
  'مشاهدة صناعة الخزف': { fr: 'Ateliers poterie', en: 'Pottery workshops' },
  'رحلات بحرية': { fr: 'Croisières', en: 'Boat trips' },
  'مراقبة النجوم': { fr: 'Observation étoiles', en: 'Stargazing' },
  'مراقبة غروب الشمس': { fr: 'Coucher de soleil', en: 'Sunset watching' },
  'المشي على الكورنيش': { fr: 'Promenade corniche', en: 'Corniche walk' },
  'المشي في الجبال': { fr: 'Randonnée montagne', en: 'Mountain hiking' },
  'مراقبة الطبيعة': { fr: 'Observation nature', en: 'Nature watching' },
  'زيارة الغابة': { fr: 'Visite forêt', en: 'Forest visit' },
};

function _(key) {
  const keys = key.split('.');
  let val = translations;
  for (const k of keys) {
    if (!val || !val[k]) return key;
    val = val[k];
  }
  if (val && typeof val === 'object' && val[currentLang]) return val[currentLang];
  return key;
}

function getBeachField(beach, field) {
  if (field === 'name') {
    if (currentLang === 'fr') return beach.nameFr || beach.name;
    if (currentLang === 'en') return beach.nameEn || beach.name;
    return beach.name;
  }
  if (field === 'region') {
    if (currentLang === 'fr') return beach.regionFr || beach.region;
    if (currentLang === 'en') return beach.regionEn || beach.region;
    return beach.region;
  }
  if (field === 'city') {
    if (currentLang === 'fr') return beach.cityFr || beach.city;
    if (currentLang === 'en') return beach.cityEn || beach.city;
    return beach.city;
  }
  if (field === 'description') {
    if (currentLang === 'fr') return beach.descFr || beach.description;
    if (currentLang === 'en') return beach.descEn || beach.description;
    return beach.description;
  }
  if (field === 'activities') {
    if (currentLang === 'fr') return beach.activitiesFr || beach.activities;
    if (currentLang === 'en') return beach.activitiesEn || beach.activities;
    return beach.activities;
  }
  if (field === 'features') {
    if (currentLang === 'fr') return beach.featuresFr || beach.features;
    if (currentLang === 'en') return beach.featuresEn || beach.features;
    return beach.features;
  }
  if (field === 'bestTime') {
    if (currentLang === 'fr') return beach.bestTimeFr || beach.bestTime;
    if (currentLang === 'en') return beach.bestTimeEn || beach.bestTime;
    return beach.bestTime;
  }
  if (field === 'temperature') {
    if (currentLang === 'fr') return beach.tempFr || beach.temperature;
    if (currentLang === 'en') return beach.tempEn || beach.temperature;
    return beach.temperature;
  }
  return beach[field] || '';
}

function tActivity(ar) {
  if (currentLang === 'ar') return ar;
  const entry = activityKeys[ar];
  return entry ? (entry[currentLang] || ar) : ar;
}

function tRegion(ar) {
  if (currentLang === 'ar') return ar;
  const entry = regionKeys[ar];
  return entry ? (entry[currentLang] || ar) : ar;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = _(key);
    if (translated !== key) el.textContent = translated;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translated = _(key);
    if (translated !== key) el.placeholder = translated;
  });
  document.title = _('hero.title');
  updateFilterOptions();
}

function updateFilterOptions() {
  const regionSel = document.getElementById('regionFilter');
  for (let i = 1; i < regionSel.options.length; i++) {
    const val = regionSel.options[i].value;
    regionSel.options[i].textContent = tRegion(val);
  }
  const activitySel = document.getElementById('activityFilter');
  for (let i = 1; i < activitySel.options.length; i++) {
    const val = activitySel.options[i].value;
    activitySel.options[i].textContent = tActivity(val);
  }
}

function applyDirection() {
  const html = document.documentElement;
  if (currentLang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    document.body.classList.remove('ltr');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', currentLang);
    document.body.classList.add('ltr');
  }
}

function applyDarkMode() {
  document.documentElement.classList.toggle('dark-mode', isDark);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.title = isDark ? _('theme.light') : _('theme.dark');
  }
  localStorage.setItem('darkMode', isDark);
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyDirection();
  applyTranslations();
  applyDarkMode();
  const data = filteredBeaches.length ? filteredBeaches : allBeaches;
  renderBeaches(data);
  if (document.getElementById('modalOverlay').classList.contains('active')) {
    closeModal();
  }
}

function toggleDark() {
  isDark = !isDark;
  applyDarkMode();
}



async function loadBeaches() {
  try {
    const res = await fetch('data/beaches.json');
    const data = await res.json();
    allBeaches = data.beaches;
    filteredBeaches = [...allBeaches];
    renderBeaches(allBeaches);
  } catch (err) {
    document.getElementById('beachesGrid').innerHTML = `
      <div style="text-align:center;padding:60px 20px;color:var(--text-light);grid-column:1/-1">
        <i class="fas fa-exclamation-triangle" style="font-size:3rem;margin-bottom:15px;color:var(--accent);"></i>
        <p style="font-size:1.2rem;">${_('section.noResults')}</p>
      </div>
    `;
  }
}

function createBeachCard(beach, index) {
  const colors = gradientColors[index % gradientColors.length];
  const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  const name = getBeachField(beach, 'name');
  const region = getBeachField(beach, 'region');
  const city = getBeachField(beach, 'city');
  const desc = getBeachField(beach, 'description');
  const acts = getBeachField(beach, 'activities');

  const card = document.createElement('div');
  card.className = 'beach-card';

  card.innerHTML = `
    <div class="card-image">
      <div class="img-placeholder" style="background: ${gradient};">
        <i class="fas fa-umbrella-beach"></i>
      </div>
      <div class="card-badge">${beach.rating} <i class="fas fa-star" style="color:#e8a838;font-size:0.65rem;"></i></div>
    </div>
    <div class="card-body">
      <div class="card-title">${name}</div>
      ${currentLang === 'ar' ? `<div class="card-title-fr">${beach.nameFr}</div>` : ''}
      <div class="card-region"><i class="fas fa-map-marker-alt"></i> ${region} - ${city}</div>
      <div class="card-desc">${truncate(desc, 100)}</div>
      <div class="card-footer">
        <div class="card-rating"><i class="fas fa-star"></i> ${beach.rating}</div>
        <div class="card-activities">
          ${acts.slice(0, 2).map(a => `<span>${a}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openModal(beach));
  return card;
}

function truncate(str, len) {
  if (!str) return '';
  if (str.length <= len) return str;
  return str.slice(0, len) + '...';
}

function renderBeaches(beaches) {
  const grid = document.getElementById('beachesGrid');
  const noResults = document.getElementById('noResults');
  if (beaches.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';
  grid.innerHTML = '';
  beaches.forEach((beach, i) => grid.appendChild(createBeachCard(beach, i)));
}

function filterBeaches() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const region = document.getElementById('regionFilter').value;
  const activity = document.getElementById('activityFilter').value;
  const sort = document.getElementById('sortFilter').value;

  filteredBeaches = allBeaches.filter(beach => {
    const matchSearch = !searchTerm ||
      beach.name.includes(searchTerm) ||
      beach.nameFr.toLowerCase().includes(searchTerm) ||
      (beach.nameEn || '').toLowerCase().includes(searchTerm) ||
      beach.city.includes(searchTerm) ||
      (beach.cityFr || '').toLowerCase().includes(searchTerm) ||
      (beach.cityEn || '').toLowerCase().includes(searchTerm) ||
      beach.region.includes(searchTerm) ||
      beach.description.includes(searchTerm);
    const matchRegion = region === 'all' || beach.region === region;
    const matchActivity = activity === 'all' || beach.activities.includes(activity);
    return matchSearch && matchRegion && matchActivity;
  });

  if (sort === 'rating') {
    filteredBeaches.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'name') {
    filteredBeaches.sort((a, b) => getBeachField(a, 'name').localeCompare(getBeachField(b, 'name')));
  }
  renderBeaches(filteredBeaches);
}

function openModal(beach) {
  const overlay = document.getElementById('modalOverlay');
  const colors = gradientColors[beach.id % gradientColors.length];
  const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  const name = getBeachField(beach, 'name');
  const region = getBeachField(beach, 'region');
  const city = getBeachField(beach, 'city');
  const desc = getBeachField(beach, 'description');
  const acts = getBeachField(beach, 'activities');
  const feats = getBeachField(beach, 'features');

  document.getElementById('modalImage').style.background = gradient;
  document.getElementById('modalImage').innerHTML = '<i class="fas fa-umbrella-beach"></i>';
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalRegion').textContent = `${region} - ${city}`;
  document.getElementById('modalDesc').textContent = desc;

  const fullStars = Math.floor(beach.rating);
  const hasHalf = beach.rating % 1 >= 0.5;
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) starsHtml += '<i class="fas fa-star"></i>';
    else if (i === fullStars && hasHalf) starsHtml += '<i class="fas fa-star-half-alt"></i>';
    else starsHtml += '<i class="far fa-star"></i>';
  }
  document.getElementById('modalRating').innerHTML = `${starsHtml} ${beach.rating}`;
  document.getElementById('modalBestTime').textContent = getBeachField(beach, 'bestTime');
  document.getElementById('modalTemp').textContent = getBeachField(beach, 'temperature');
  document.getElementById('modalActivities').innerHTML = acts.map(a => `<span>${a}</span>`).join('');
  document.getElementById('modalFeatures').innerHTML = feats.map(f => `<span>${f}</span>`).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

async function init() {

  await loadBeaches();

  applyDirection();
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  applyDarkMode();
  applyTranslations();

  document.getElementById('themeToggle').addEventListener('click', toggleDark);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  document.getElementById('heroSearch').addEventListener('input', (e) => {
    document.getElementById('searchInput').value = e.target.value;
    filterBeaches();
    document.querySelector('#beaches').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('searchInput').addEventListener('input', filterBeaches);
  document.getElementById('regionFilter').addEventListener('change', filterBeaches);
  document.getElementById('activityFilter').addEventListener('change', filterBeaches);
  document.getElementById('sortFilter').addEventListener('change', filterBeaches);

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}

document.addEventListener('DOMContentLoaded', init);
