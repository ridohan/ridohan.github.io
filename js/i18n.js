(function () {
  'use strict';

  var STORAGE_KEY = 'rk-lang';
  var currentLang = 'fr';

  function getLang() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'fr') {
      try { localStorage.setItem(STORAGE_KEY, urlLang); } catch (e) {}
      return urlLang;
    }
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fr') return stored;
    } catch (e) {}
    var browserLangs = [];
    if (navigator.languages && navigator.languages.length) {
      browserLangs = navigator.languages;
    } else if (navigator.language) {
      browserLangs = [navigator.language];
    }

    var hasFrench = browserLangs.some(function (lang) {
      return String(lang).toLowerCase().indexOf('fr') === 0;
    });

    return hasFrench ? 'fr' : 'en';
  }

  function applyTranslations(lang) {
    var t = window.translations[lang];
    if (!t) return;
    currentLang = lang;

    document.documentElement.lang = lang;
    document.title = t['meta.title'];

    var metaDesc = document.querySelector('meta[name="description"]:not([property])');
    if (metaDesc) metaDesc.setAttribute('content', t['meta.description']);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t['meta.title']);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t['meta.description']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    var switcher = document.getElementById('lang-switcher');
    if (switcher) {
      switcher.textContent = t['lang.switch'];
      switcher.setAttribute('title', t['lang.switch.title']);
      switcher.setAttribute('href', '?lang=' + (lang === 'fr' ? 'en' : 'fr'));
    }
  }

  currentLang = getLang();
  applyTranslations(currentLang);

  window.rkI18n = {
    t: function (key) {
      return (window.translations[currentLang] || {})[key] || key;
    },
    getLang: function () { return currentLang; }
  };
})();
