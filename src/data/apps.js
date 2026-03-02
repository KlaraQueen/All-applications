const base = import.meta.env.BASE_URL;

export const apps = [
  {
    id: "quizy",
    name: "QuizY",
    tagline: "QuizY – tysiące pytań z historii, lektur, biologii, fizyki, chemii i wielu innych dziedzin. Ucz się, rozwiązuj quizy i śledź swoje postępy.",
    description: `QuizY – Twoja wiedza w jednym miejscu

QuizY to aplikacja quizowa, która łączy naukę z zabawą. Tysiące pytań z różnych dziedzin, śledzenie postępów i możliwość tworzenia własnych quizów – wszystko w jednej, intuicyjnej aplikacji.

Co znajdziesz w QuizY?
• 5000+ pytań w kilkunastu kategoriach
• Tryb nauki – przeglądaj pytania przed quizem
• Quiz własny – wybierz kategorię, podkategorię i liczbę pytań (10, 15, 20 lub 50)
• Postępy – historia wyników, statystyki i rozwijane szczegóły każdego quizu
• Zapis lokalny – wyniki i ustawienia zapisują się automatycznie

Kategorie: Flagi, Historia, Lektury, Język Polski, Anatomia, Bezpieczeństwo, Granice państw, Biologia, Informatyka, Polscy nobliści, Wynalazcy, Angielski, Hiszpański, Fizyka, Chemia i wiele innych.

QuizY – ucz się, sprawdzaj się, rozwijaj.`,
    icon: base + "quizy/logo.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.quizy.app",
    regulationsUrl: "/regulamin",
    privacyPolicyUrl: "/polityka-prywatnosci",
    screenshots: [
      base + "quizy/screen1.png",
      base + "quizy/screen2.png",
      base + "quizy/screen3.png",
      base + "quizy/screen4.png",
      base + "quizy/screen5.png",
      base + "quizy/screen6.png",
      base + "quizy/screen7.png",
      base + "quizy/screen8.png",
    ],
  },
];
