// Ten skrypt pobiera string User-Agent, opisujący daną przeglądarkę i wkleja go do HTML
const uaString = window.navigator.userAgent;

// Poczekaj, aż dokument się załaduje
window.onload = () => {
  // Pobierz element o id ua-string i wstaw do niego informacje o przeglądarce
  document.getElementById('ua-string').textContent = uaString;
};

//testowane przeglądarki: edge, opera, chrome
//każda z przeglądarek "podszywa" się po inne
//przeglądarka chrome korzysta z najnowszych wersji innych przeglądarek
//
