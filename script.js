const preferences = [
  "Sauvignon Blanc",
  "Pinot Grigio",
  "Chardonnay",
  "Riesling",
  "Albariño",
  "Viognier",
  "White Rioja",

  "Provence Rosé",
  "Rosé",
  "White Zinfandel",
  "Sparkling Rosé",

  "Pinot Noir",
  "Merlot",
  "Malbec",
  "Rioja",
  "Beaujolais",

  "Champagne",
  "Prosecco",
  "English Sparkling",

  "Natural Wine",
  "Orange Wine",
  "Fruit Wine"
];

const wines = [
  {
    name: "Bacchus Brut",
    style: "Aromatic sparkling",
    image: "shad-sparkling-bacchus-brut--front-no-background-stanlake-park.png",
    matches: ["Prosecco", "Sauvignon Blanc", "English Sparkling"],
    notes: "Fresh, aromatic and lively with a crisp finish.",
    why: "Great if you like bright sparkling wines with aromatic freshness."
  },
  {
    name: "Hinton Brut",
    style: "Fresh sparkling",
    image: "shad-sparkling-hinton-brut-front-no-background-stanlake-park.png",
    matches: ["English Sparkling", "Prosecco"],
    notes: "Bright, lively and celebratory.",
    why: "A crowd pleasing sparkling wine for celebrations and gifts."
  },
  {
    name: "Stanlake Brut",
    style: "Classic sparkling",
    image: "shad-sparkling-stanlake-brut-front-no-background-stanlake-park.png",
    matches: ["Champagne", "English Sparkling"],
    notes: "Classic, elegant and refreshing.",
    why: "A strong match if you enjoy traditional sparkling wine styles."
  },
  {
    name: "Rosé Superior",
    style: "Sparkling rosé",
    image: "shad-sparkling-rose-superior-front-no-background-stanlake-park.png",
    matches: ["Sparkling Rosé", "English Sparkling", "Prosecco", "Rosé"],
    notes: "Elegant, refreshing and celebratory.",
    why: "One of our best sellers and a great choice for rosé and sparkling fans."
  },
  {
    name: "Heritage Brut",
    style: "Traditional method sparkling",
    image: "shad-sparkling-heritage-brut-front-no-background-stanlake-park.png",
    matches: ["Champagne", "English Sparkling"],
    notes: "Fine bubbles, freshness and classic sparkling wine character.",
    why: "Perfect if you usually choose Champagne or traditional method fizz."
  },
  {
    name: "Bacchus",
    style: "Fresh aromatic white",
    image: "shad-bacchus-front-no-background-stanlake-park.png",
    matches: ["Sauvignon Blanc", "Pinot Grigio", "Albariño", "Riesling"],
    notes: "Zesty, aromatic and refreshing, with citrus, elderflower and green fruit character.",
    why: "A brilliant choice if you like crisp, bright whites with plenty of freshness."
  },
  {
    name: "Madeleine",
    style: "Light floral white",
    image: "shad-madelaine-front-no-background-stanlake-park.png",
    matches: ["Pinot Grigio", "Riesling"],
    notes: "Light, floral and delicate, with a gentle freshness.",
    why: "A good option if you enjoy easy drinking whites with lift and perfume."
  },
  {
    name: "Kings Fumé",
    style: "Textured white",
    image: "shad-kings-fume-front-no-background-stanlake-park.png",
    matches: ["Chardonnay", "White Rioja"],
    notes: "Richer and more textured, with savoury depth and food friendly weight.",
    why: "Great if you like whites with more body and complexity."
  },
  {
    name: "Regatta",
    style: "Crisp white",
    image: "shad-regatta-front-no-background-stanlake-park.png",
    matches: ["Sauvignon Blanc", "Pinot Grigio", "Albariño"],
    notes: "Fresh, crisp and easy drinking.",
    why: "A great match if you enjoy clean, refreshing white wines."
  },
  {
    name: "Orange",
    style: "Skin contact white",
    image: "shad-orange-front-no-background-stanlake-park.png",
    matches: ["Natural Wine", "Orange Wine", "Riesling", "Albariño"],
    notes: "Textural, expressive and a little more adventurous.",
    why: "Choose this if you enjoy discovering something different."
  },
  {
    name: "Pinot Noir Rosé",
    style: "Dry English rosé",
    image: "shad-pinot-noir-rose-front-no-background-stanlake-park.png",
    matches: ["Provence Rosé", "Rosé"],
    notes: "Dry, crisp and refreshing with red berry fruit.",
    why: "One of our best sellers and a natural choice for fans of pale, dry rosé."
  },
  {
    name: "Pinot Low",
    style: "Lower alcohol rosé",
    image: "shad-pinot-low-front-no-background-stanlake-park.png",
    matches: ["Rosé", "Provence Rosé", "Pinot Grigio"],
    notes: "Light, fresh and easy drinking.",
    why: "A good match if you want something lighter and refreshing."
  },
  {
    name: "Berkshire Breeze: Peach",
    style: "Peach flavoured wine drink",
    image: "shad-berkshire-breeze-front-no-background-stanlake-park.png",
    matches: ["Fruit Wine", "White Zinfandel", "Prosecco"],
    notes: "Fresh, fruity and peachy.",
    why: "A fun choice if you enjoy fruitier, lighter styles."
  },
  {
    name: "The Reserve",
    style: "Elegant English red",
    image: "shad-the-reserve-front-no-background-stanlake-park.png",
    matches: ["Rioja", "Beaujolais"],
    notes: "Red fruit, gentle spice and a lighter, elegant feel.",
    why: "Ideal for people who enjoy lighter reds rather than big, heavy styles."
  },
  {
    name: "Cricket Grove",
    style: "Richer red",
    image: "shad-cricket-grove-front-no-background-stanlake-park.png",
    matches: ["Malbec", "Merlot", "Rioja"],
    notes: "Deeper fruit character with more structure and warmth.",
    why: "A good match for red wine drinkers looking for something fuller from Stanlake."
  },
  {
    name: "Pinot Noir",
    style: "Light red",
    image: "shad-pinot-noir-front-no-background-stanlake-park.png",
    matches: ["Pinot Noir", "Beaujolais"],
    notes: "Light, elegant and red fruited.",
    why: "A great choice if you like delicate reds with freshness."
  },
  {
    name: "Fiano",
    style: "Italian white",
    image: "shad-fiano-front-no-background-stanlake-park.png",
    matches: ["Chardonnay", "Viognier", "White Rioja"],
    notes: "Textured, rounded and food friendly.",
    why: "Good if you enjoy fuller whites with character."
  },
  {
    name: "Primitivo Rosé",
    style: "Italian rosé",
    image: "shad-primitivo-rose-front-no-background-stanlake-park.png",
    matches: ["Provence Rosé", "Rosé", "White Zinfandel"],
    notes: "Fruity, bright and generous.",
    why: "A good option if you like rosé with a little more fruit."
  },
  {
    name: "Negroamaro",
    style: "Italian red",
    image: "shad-negroamaro-front-no-background-stanlake-park.png",
    matches: ["Malbec", "Merlot", "Rioja"],
    notes: "Rich, warm and full of dark fruit.",
    why: "A great match for people who enjoy fuller red wines."
  }
];

const optionsEl = document.getElementById("preference-options");
const resultsEl = document.getElementById("results-list");
const emptyEl = document.getElementById("results-empty");
const matchButton = document.getElementById("match-button");
const resetButton = document.getElementById("reset-button");

function renderOptions() {
  optionsEl.innerHTML = preferences.map(pref => `
    <label>
      <input type="checkbox" value="${pref}">
      <span>${pref}</span>
    </label>
  `).join("");
}

function getSelectedPreferences() {
  return Array.from(optionsEl.querySelectorAll("input:checked")).map(input => input.value);
}

function calculateMatches(selected) {
  const directPriority = {
    "Pinot Noir": {
      "Pinot Noir": 100,
      "The Reserve": 82,
      "Cricket Grove": 72
    },
    "Champagne": {
      "Stanlake Brut": 100,
      "Heritage Brut": 96,
      "Bacchus Brut": 82
    },
    "Chardonnay": {
      "Kings Fumé": 100,
      "Fiano": 88,
      "Stanlake Brut": 78,
      "Heritage Brut": 76
    },
    "Sauvignon Blanc": {
      "Bacchus": 100,
      "Regatta": 90,
      "Bacchus Brut": 78
    },
    "Pinot Grigio": {
      "Madeleine": 96,
      "Regatta": 90,
      "Bacchus": 82
    },
    "Prosecco": {
      "Hinton Brut": 92,
      "Bacchus Brut": 88,
      "Rosé Superior": 82
    },
    "English Sparkling": {
      "Stanlake Brut": 96,
      "Heritage Brut": 94,
      "Bacchus Brut": 88,
      "Hinton Brut": 82,
      "Rosé Superior": 80
    },
    "Sparkling Rosé": {
      "Rosé Superior": 100,
      "Pinot Noir Rosé": 78
    },
    "Provence Rosé": {
      "Pinot Noir Rosé": 100,
      "Pinot Low": 82,
      "Primitivo Rosé": 76
    },
    "Rosé": {
      "Pinot Noir Rosé": 96,
      "Pinot Low": 86,
      "Rosé Superior": 84,
      "Primitivo Rosé": 78
    },
    "White Zinfandel": {
      "Berkshire Breeze: Peach": 92,
      "Primitivo Rosé": 84,
      "Pinot Low": 74
    },
    "Malbec": {
      "Cricket Grove": 96,
      "Negroamaro": 92,
      "The Reserve": 72
    },
    "Merlot": {
      "Cricket Grove": 92,
      "Negroamaro": 88,
      "The Reserve": 76
    },
    "Rioja": {
      "The Reserve": 88,
      "Cricket Grove": 86,
      "Negroamaro": 82
    },
    "Beaujolais": {
      "Pinot Noir": 88,
      "The Reserve": 84
    },
    "Riesling": {
      "Bacchus": 88,
      "Madeleine": 86,
      "Orange": 78
    },
    "Albariño": {
      "Regatta": 90,
      "Bacchus": 88,
      "Orange": 76
    },
    "Viognier": {
      "Fiano": 88,
      "Kings Fumé": 84
    },
    "White Rioja": {
      "Kings Fumé": 96,
      "Fiano": 86
    },
    "Natural Wine": {
      "Orange": 96
    },
    "Orange Wine": {
      "Orange": 100
    },
    "Fruit Wine": {
      "Berkshire Breeze: Peach": 100
    }
  };

  return wines
    .map(wine => {
      let score = 0;
      const matchingPrefs = [];

      selected.forEach(pref => {
        if (directPriority[pref] && directPriority[pref][wine.name]) {
          score += directPriority[pref][wine.name];
          matchingPrefs.push(pref);
        } else if (wine.matches.includes(pref)) {
          score += 72;
          matchingPrefs.push(pref);
        }
      });

      if (!matchingPrefs.length) {
        return { ...wine, matchingPrefs, score: 0 };
      }

      const finalScore = Math.min(100, Math.round(score / matchingPrefs.length));

      return { ...wine, matchingPrefs, score: finalScore };
    })
    .filter(wine => wine.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function renderResults() {
  const selected = getSelectedPreferences();
  const matches = calculateMatches(selected);

  if (!selected.length || !matches.length) {
    emptyEl.style.display = "grid";
    resultsEl.innerHTML = "";
    emptyEl.innerHTML = selected.length
      ? "<span>🍾</span><p>No direct match yet. Try a broader style like Champagne, Pinot Noir or Sauvignon Blanc.</p>"
      : "<span>✨</span><p>Select a few familiar grapes or styles to reveal your matches.</p>";
    return;
  }

 const slugMap = {
  "Bacchus Brut": "bacchus-brut",
  "Hinton Brut": "hinton-brut",
  "Stanlake Brut": "stanlake-brut",
  "Rosé Superior": "rose-superior",
  "Heritage Brut": "heritage-brut",
  "Bacchus": "bacchus",
  "Madeleine": "madeleine",
  "Kings Fumé": "kings-fume",
  "Regatta": "regatta",
  "Orange": "orange",
  "Pinot Noir Rosé": "pinot-noir-rose",
  "Pinot Low": "pinot-low",
  "Berkshire Breeze: Peach": "berkshire-breeze-peach",
  "The Reserve": "the-reserve",
  "Cricket Grove": "cricket-grove",
  "Pinot Noir": "pinot-noir",
  "Fiano": "fiano",
  "Primitivo Rosé": "primitivo-rose",
  "Negroamaro": "negroamaro"
};

  emptyEl.style.display = "none";

  resultsEl.innerHTML = matches.slice(0, 4).map((wine, index) => {
    const slug = slugMap[wine.name];
    const wineUrl = `https://www.stanlakepark.com/product/${slug}/?utm_source=experience_hub&utm_medium=wine_matcher&utm_campaign=find_your_wine`;

    return `
<article class="result-card">
  <img src="${wine.image}" alt="${wine.name} bottle" class="wine-result-image">
  <div>
          <p class="card-label">Match ${index + 1}</p>
          <h3>${wine.name}</h3>
          <p><strong>${wine.style}</strong></p>
          <p>${wine.notes}</p>
          <p>${wine.why}</p>

          <ul class="match-reasons">
            ${wine.matchingPrefs.map(pref => `<li>You like ${pref}</li>`).join("")}
          </ul>

          <a
            href="${wineUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="wine-link"
          >
            View ${wine.name} →
          </a>
        </div>

        <span class="score">${wine.score}% match</span>
      </article>
    `;
  }).join("");
}
const menuButton = document.querySelector(".menu-button");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const navLinksMenu = document.querySelectorAll(".nav a");

navLinksMenu.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
  });
});

matchButton.addEventListener("click", renderResults);

resetButton.addEventListener("click", () => {
  optionsEl.querySelectorAll("input").forEach(input => input.checked = false);
  renderResults();
});

renderOptions();
renderResults();
const explorerItems = [
  {
    name: "Haweli Tandoori",
    category: "food",
    distance: "Twyford",
    drive: "Nearby",
    setting: "Indoor",
    dog: false,
    description: "Local Stanlake Park stockist in Twyford, useful for visitors staying or dining nearby.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Bell Inn",
    category: "food",
    distance: "Waltham St Lawrence",
    drive: "Nearby",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Country pub and Stanlake Park stockist close to the estate.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Horse & Groom",
    category: "food",
    distance: "Hare Hatch",
    drive: "Nearby",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Local pub and Stanlake Park stockist near Twyford and Wargrave.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The White Oak",
    category: "food",
    distance: "Cookham",
    drive: "Maidenhead area",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Cookham pub and restaurant listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Greyhound",
    category: "food",
    distance: "Finchampstead",
    drive: "Wokingham area",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Berkshire pub and restaurant listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Vegivores",
    category: "food",
    distance: "Caversham",
    drive: "Reading area",
    setting: "Indoor",
    dog: false,
    description: "Plant based restaurant and Stanlake Park stockist in Caversham.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Angel Bar",
    category: "food",
    distance: "Caversham",
    drive: "Reading area",
    setting: "Indoor",
    dog: false,
    description: "Caversham bar listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Plough Shiplake",
    category: "food",
    distance: "Shiplake",
    drive: "Henley area",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Village pub and Stanlake Park stockist near Henley.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Bombay Story",
    category: "food",
    distance: "Maidenhead & Wokingham",
    drive: "Berkshire",
    setting: "Indoor",
    dog: false,
    description: "Indian restaurant group listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Greene Oak",
    category: "food",
    distance: "Windsor",
    drive: "Windsor area",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Windsor area pub and restaurant listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "The Castle Hotel",
    category: "food",
    distance: "Windsor",
    drive: "Windsor area",
    setting: "Indoor",
    dog: false,
    description: "Windsor hotel listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Vanilla Pod",
    category: "food",
    distance: "Marlow",
    drive: "Marlow area",
    setting: "Indoor",
    dog: false,
    description: "Marlow restaurant listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Elusive Brewing",
    category: "beer",
    distance: "Wokingham",
    drive: "Nearby",
    setting: "Indoor",
    dog: true,
    description: "Local taproom listed as a Stanlake Park stockist.",
    link: "https://stanlakepark.com/stockists/"
  },
  {
    name: "Twyford",
    category: "towns",
    distance: "Closest village",
    drive: "Nearby",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Your nearest village, with rail links, pubs, cafés and local shops.",
    link: "https://stanlakepark.com"
  },
  {
    name: "Henley on Thames",
    category: "towns",
    distance: "Nearby",
    drive: "Short drive",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Riverside town with shops, pubs, walks and easy access to our Old School House stay.",
    link: "https://visit-henley.com"
  },
  {
    name: "Windsor",
    category: "towns",
    distance: "Berkshire",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic town with Windsor Castle, river walks, shopping and restaurants.",
    link: "https://www.windsor.gov.uk"
  },
  {
    name: "Oxford City Centre",
    category: "towns",
    distance: "Oxford",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Historic university city with museums, architecture, restaurants and shopping.",
    link: "https://www.experienceoxfordshire.org"
  },
  {
    name: "Marlow",
    category: "towns",
    distance: "Buckinghamshire",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Smart riverside town with independent shops, walks and restaurants.",
    link: "https://www.visitmarlow.com"
  },
  {
    name: "Dinton Pastures",
    category: "walks",
    distance: "Nearby",
    drive: "Short drive",
    setting: "Outdoor",
    dog: true,
    description: "Lakeside country park with walks, nature and outdoor activities.",
    link: "https://www.wokinghamcountryside.co.uk/dinton-pastures-country-park"
  },
  {
    name: "Sonning Thames Walk",
    category: "walks",
    distance: "Sonning",
    drive: "Short drive",
    setting: "Outdoor",
    dog: true,
    description: "Pretty riverside walk around Sonning and the Thames.",
    link: "https://www.visitthames.co.uk"
  },
  {
    name: "Henley Riverside Walk",
    category: "walks",
    distance: "Henley",
    drive: "Short drive",
    setting: "Outdoor",
    dog: true,
    description: "Classic Thames walk from one of the area's best known riverside towns.",
    link: "https://visit-henley.com"
  },
  {
    name: "Windsor Castle",
    category: "experiences",
    distance: "Windsor",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "One of the UK's most famous royal attractions, ideal for a bigger Berkshire itinerary.",
    link: "https://www.rct.uk/visit/windsor-castle"
  },
  {
    name: "Ascot Racecourse",
    category: "experiences",
    distance: "Ascot",
    drive: "Day trip",
    setting: "Outdoor",
    dog: false,
    description: "World famous racecourse and major source of visitors to the area.",
    link: "https://www.ascot.com/"
  },
  {
    name: "Highclere Castle",
    category: "experiences",
    distance: "Hampshire",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Historic castle known around the world and a strong option for a wider trip.",
    link: "https://www.highclerecastle.co.uk/"
  },
  {
    name: "Eton College and Eton High Street",
    category: "experiences",
    distance: "Eton",
    drive: "Day trip",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Historic town and college area, easy to combine with Windsor.",
    link: "https://www.windsor.gov.uk/ideas-and-inspiration/eton"
  },
  {
    name: "Michelin Star Dining in Bray",
    category: "experiences",
    distance: "Bray",
    drive: "Day trip",
    setting: "Indoor",
    dog: false,
    description: "Bray is one of the UK's best known fine dining villages, with several acclaimed restaurants nearby.",
    link: "https://guide.michelin.com/en/gb/windsor-and-maidenhead/bray/restaurants"
  },
  {
    name: "Clays Kitchen & Bar",
    category: "experiences",
    distance: "Caversham",
    drive: "Reading area",
    setting: "Indoor",
    dog: false,
    description: "Highly regarded Caversham restaurant specialising in regional Indian food.",
    link: "https://clayskitchen.co.uk/"
  },
  {
    name: "Beale Wildlife Park",
    category: "family",
    distance: "Lower Basildon",
    drive: "Day trip",
    setting: "Outdoor",
    dog: false,
    description: "Wildlife park, gardens, play areas and family attractions.",
    link: "https://bealepark.org.uk"
  },
  {
    name: "Wellington Country Park",
    category: "family",
    distance: "Riseley",
    drive: "Day trip",
    setting: "Outdoor",
    dog: true,
    description: "Big family day out with play areas, trails and outdoor activities.",
    link: "https://wellingtoncountrypark.co.uk"
  },
  {
    name: "Legoland Windsor",
    category: "family",
    distance: "Windsor",
    drive: "Day trip",
    setting: "Outdoor",
    dog: false,
    description: "Major family theme park near Windsor.",
    link: "https://www.legoland.co.uk"
  }
];
const explorerGrid =
document.getElementById("explorerGrid");

const searchInput =
document.getElementById("explorerSearch");

let currentCategory = null;

function renderExplorer() {
  const search = searchInput.value.toLowerCase();

  explorerGrid.innerHTML = "";
if (!currentCategory && !search) {
  explorerGrid.innerHTML = `
    <div class="explorer-empty">
      <h3>Choose a category to start exploring</h3>
      <p>Find pubs, restaurants, breweries, walks, towns, family days out and local experiences near Stanlake Park.</p>
    </div>
  `;
  return;
}
  explorerItems
    .filter(item => {
const categoryMatch =
  currentCategory &&
  (
    currentCategory === "all" ||
    item.category === currentCategory
  );

      const searchMatch =
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    })
    .forEach(item => {
      const card = document.createElement("div");

      card.className = "explorer-card";

      card.innerHTML = `
        <div class="explorer-card-top">
          <span class="explorer-category">${item.category}</span>
          <span class="explorer-distance">${item.distance}</span>
        </div>

        <h3>${item.name}</h3>

        <p>${item.description}</p>

        <div class="explorer-meta">
          <span>📍 ${item.distance}</span>
          <span>🚗 ${item.drive}</span>
          <span>${item.setting === "Indoor" ? "🏠" : item.setting === "Outdoor" ? "🌿" : "🌦️"} ${item.setting}</span>
          ${item.dog ? "<span>🐶 Dog friendly</span>" : ""}
        </div>

        <a
          href="${item.link}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more →
        </a>
      `;

      explorerGrid.appendChild(card);
    });
}

renderExplorer();

searchInput.addEventListener(
"input",
renderExplorer
);

document
.querySelectorAll(".explorer-tab")
.forEach(tab => {

  tab.addEventListener("click", () => {

    document
      .querySelectorAll(".explorer-tab")
      .forEach(t =>
        t.classList.remove("active")
      );

    tab.classList.add("active");

    currentCategory =
      tab.dataset.category;

    renderExplorer();

  });

});
const experienceChoices = [];

const experiences = [
  {
    name: "Wine Tour & Tasting",
    badge: "Most Popular",
    image: "wine-tour.jpg",
    bestFor: "First time visitors",
      includes: [
    "Vineyard walk",
    "Winery tour",
    "Six wine tastings",
    "Expert guide"
  ],
    tags: ["day out", "wine", "vineyard", "winery", "learning", "unique", "relaxed", "friends"],
    popularity: 12,
    description: "Explore the vineyard and winery before tasting six wines with one of our friendly guides.",
    reasons: [
      "You want the full Stanlake Park experience",
      "You are interested in wine",
      "You want to see the vineyard and winery"
    ],
    addon: "Stay for food or a glass of wine in the Wine Bar afterwards.",
    link: "https://stanlakepark.com/wine-tours/",
    cta: "View Tour Dates"
  },
  {
    name: "Wine & Cheese Tour",
    badge: "Food & Wine Favourite",
    image: "cheese-wine-tour.jpg",
    bestFor: "Food & Wine lovers",
    includes: [
  "Vineyard walk",
  "Winery tour",
  "Wine tasting",
  "Cheese pairings"
],
    tags: ["food", "wine", "pairings", "day out", "date", "special occasion", "gift", "relaxed", "learning"],
    popularity: 10,
    description: "A guided vineyard and winery tour with cheese and wine pairings included.",
    reasons: [
      "You enjoy food and wine together",
      "You want a more indulgent tour",
      "You are planning a date, gift or special occasion"
    ],
    addon: "Make it a full afternoon with a drink in the Wine Bar.",
    link: "https://stanlakepark.com/wine-tours/",
    cta: "Explore Wine & Cheese Tours"
  },
  {
    name: "Cheese & Wine Tasting",
    badge: "Relaxed Tasting",
    image: "cheese-wine-tasting.jpg",
    bestFor: "A shorter seated tasting",
    includes: [
  "Guided tasting",
  "Cheese pairings",
  "Seated experience",
  "Wine expert host"
],
    tags: ["food", "wine", "pairings", "relaxed", "gift"],
    popularity: 7,
    description: "A seated tasting experience pairing Stanlake Park wines with cheese.",
    reasons: [
      "You want a relaxed tasting",
      "You love food pairings",
      "You do not need the full vineyard tour"
    ],
    addon: "Great before or after lunch nearby.",
    link: "https://stanlakepark.com/wine-tastings/",
    cta: "View Tastings"
  },
  {
    name: "Wine Tour & Cream Tea",
    badge: "Afternoon Treat",
    image: "cream-tea-tour.jpg",
    bestFor: "A relaxed afternoon",
    includes: [
  "Vineyard walk",
  "Winery tour",
  "Wine tasting",
  "Cream tea"
],
    tags: ["relaxed", "date", "special occasion", "vineyard", "day out", "gift", "unique"],
    popularity: 7,
    description: "Enjoy a vineyard tour and tasting followed by a cream tea.",
    reasons: [
      "You want a slower afternoon",
      "You are planning something relaxed",
      "You like a classic countryside treat"
    ],
    addon: "Perfect for couples and relaxed celebrations.",
    link: "https://stanlakepark.com/wine-tours/",
    cta: "Explore Cream Tea Tours"
  },
  {
    name: "Monthly Wine Tastings with Natalia",
    badge: "Hosted by Natalia, our Director",
    image: "monthly-wine-tasting.jpg",
    bestFor: "Curious wine drinkers",
    includes: [
  "Hosted by Natalia, our Director",
  "World wine theme",
  "Guided tasting",
  "Small group format"
],
    tags: ["learning", "wine", "world wine", "unique"],
    popularity: 9,
    description: "Hosted by Natalia, our Director, these monthly tastings explore wine regions, grapes and styles from around the world.",
    reasons: [
      "You enjoy learning about wine",
      "You want something different from a vineyard tour",
      "You are curious about wines from around the world"
    ],
    addon: "Ideal for returning visitors, WSET students and curious wine drinkers.",
    link: "https://stanlakepark.com/events/",
    cta: "View Upcoming Tastings"
  },
  {
    name: "Wine Bar Visit",
    badge: "Flexible Visit",
    image: "wine-bar.jpg",
    bestFor: "Relaxed visits and groups",
    includes: [
  "Wine flights",
  "Sharing boards",
  "Local beers",
  "Indoor and outdoor seating"
],
    tags: ["day out", "relaxed", "friends", "food", "wine"],
    popularity: 8,
    description: "Drop into the Wine Bar for wine, local drinks, sharing boards and a relaxed vineyard setting.",
    reasons: [
      "You want something flexible",
      "You are visiting with friends",
      "You would like food and drinks without booking a full tour"
    ],
    addon: "Try a wine flight or sharing board while you are here.",
    link: "https://stanlakepark.com/wine-bar/",
    cta: "Explore the Wine Bar"
  },
  {
    name: "North Lodge Stay",
    badge: "Romantic Stay",
    image: "north-lodge.jpg",
    bestFor: "Couples and weekend breaks",
    includes: [
  "Sleeps 2",
  "Private accommodation",
  "Vineyard setting",
  "Self catering"
],
    tags: ["date", "weekend", "overnight", "relaxed", "special occasion"],
    popularity: 6,
    description: "A vineyard stay for two, perfect for a romantic getaway.",
    reasons: [
      "You are planning a special visit",
      "You want to stay overnight",
      "You want something memorable"
    ],
    addon: "Add a Wine Tour & Tasting during your stay.",
    link: "https://stanlakepark.com/accommodation/",
    cta: "Explore North Lodge"
  },
  {
    name: "South Lodge Stay",
    badge: "Group Getaway",
    image: "south-lodge.jpg",
    bestFor: "Friends, families and groups",
    includes: [
  "Sleeps 8",
  "Group accommodation",
  "Large communal spaces",
  "Vineyard setting"
],
    tags: ["friends", "weekend", "overnight", "special occasion"],
    popularity: 5,
    description: "A spacious vineyard stay for friends, families and group getaways.",
    reasons: [
      "You are bringing a group",
      "You want to stay overnight",
      "You are planning a celebration"
    ],
    addon: "Pair it with a group tasting or Wine Bar visit.",
    link: "https://stanlakepark.com/accommodation/",
    cta: "Explore South Lodge"
  },
  {
    name: "Old School House",
    badge: "Henley Escape",
    image: "old-school-house.jpg",
    bestFor: "Groups exploring Henley",
    includes: [
  "Sleeps up to 9",
  "Henley location",
  "Group friendly",
  "Self catering"
],
    tags: ["friends", "weekend", "overnight", "special occasion", "day out"],
    popularity: 5,
    description: "A characterful house in Henley on Thames, perfect for group getaways and exploring the town, river and surrounding countryside.",
    reasons: [
      "You are planning a group getaway",
      "You want to explore Henley",
      "You want more space for family or friends"
    ],
    addon: "Pair your stay with a Stanlake Park Wine Tour or Wine Bar visit.",
    link: "https://stanlakepark.com/accommodation/",
    cta: "Explore Old School House"
  },
  {
    name: "Wedding Show Round",
    badge: "Wedding Planning",
    image: "wedding-showround.jpg",
    bestFor: "Engaged couples",
    includes: [
  "Venue tour",
  "Wedding consultation",
  "Explore ceremony spaces",
  "See reception areas"
],
    tags: ["wedding"],
    popularity: 20,
    description: "Explore our vineyard wedding venue and see how your day could look.",
    reasons: [
      "You are planning a wedding",
      "You love the estate setting",
      "You want something personal and memorable"
    ],
    addon: "Book a show round and explore the venue in person.",
    link: "https://stanlakepark.com/weddings/",
    cta: "Book a Show Round"
  }
];

document.querySelectorAll(".experience-options button").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

const experienceMatchButton = document.getElementById("experienceMatchButton");
const experienceResult = document.getElementById("experienceResult");

if (experienceMatchButton) {
  experienceMatchButton.addEventListener("click", () => {
    const selected = Array.from(document.querySelectorAll(".experience-options button.active"))
      .map(button => button.dataset.value);

    if (!selected.length) {
      experienceResult.style.display = "block";
      experienceResult.innerHTML = `
        <div class="experience-result-card">
          <h3>Choose a few options first</h3>
          <p>Select what brings you here, what you enjoy and how you want to spend your time.</p>
        </div>
      `;
      return;
    }

    const wantsWedding = selected.includes("wedding");
    const wantsGift = selected.includes("gift");

    const results = experiences
      .filter(experience => {
        if (experience.name === "Wedding Show Round") {
          return wantsWedding;
        }
        return true;
      })
      .map(experience => {
        const matches = experience.tags.filter(tag => selected.includes(tag));
        const matchRatio = matches.length / selected.length;

        let score = Math.round(matchRatio * 90) + experience.popularity;

        if (matchRatio >= 0.75) {
          score += 10;
        }

        if (selected.includes("learning")) {
          if (experience.name === "Wine Tour & Tasting") score += 14;
          if (experience.name === "Monthly Wine Tastings with Natalia") score += 14;
          if (experience.name === "Wine & Cheese Tour") score += 12;
        }

        if (selected.includes("unique")) {
          if (experience.name === "Monthly Wine Tastings with Natalia") score += 16;
          if (experience.name === "Wine Tour & Cream Tea") score += 15;
          if (experience.name === "Wine Tour & Tasting") score += 6;
        }

        if (selected.includes("friends")) {
          if (experience.name === "Wine Tour & Tasting") score += 22;
          if (experience.name === "Wine Bar Visit") score += 20;
          if (experience.name === "South Lodge Stay") score += 16;
          if (experience.name === "Monthly Wine Tastings with Natalia") score -= 30;
        }

        if (selected.includes("vineyard")) {
          if (experience.name === "Wine Tour & Tasting") score += 12;
          if (experience.name === "Wine & Cheese Tour") score += 10;
          if (experience.name === "Wine Tour & Cream Tea") score += 10;
        }

        score = Math.max(0, Math.min(score, 100));

        return {
          ...experience,
          matches,
          finalScore: score
        };
      })
      .filter(experience => experience.matches.length > 0)
      .sort((a, b) => b.finalScore - a.finalScore)
      .slice(0, 3);

    if (!results.length) {
      experienceResult.style.display = "block";
      experienceResult.innerHTML = `
        <div class="experience-result-card">
          <h3>No perfect match yet</h3>
          <p>Try selecting a few broader options like wine, relaxed, food or day out.</p>
        </div>
      `;
      return;
    }

    const best = results[0];
    const others = results.slice(1);

    experienceResult.style.display = "block";

    experienceResult.innerHTML = `
      <div class="experience-result-card">

        <img
          src="${best.image}"
          alt="${best.name}"
          class="experience-result-image"
        >

        <div class="experience-result-content">

          <p><strong>${best.badge}</strong></p>

          <h3>${best.name}</h3>

          <p class="experience-score">${best.finalScore}% Match</p>

          <p>${best.description}</p>

          <div class="experience-result-columns">

            <div class="experience-includes">
              <h4>Includes</h4>

              <ul>
                ${best.includes.map(item => `
                  <li>✓ ${item}</li>
                `).join("")}
              </ul>
            </div>

            <div>
              <p><strong>Best for</strong><br>${best.bestFor}</p>
              <p><strong>Recommended add on</strong><br>${best.addon}</p>
            </div>

          </div>

          <div class="experience-why">
            <h3>Why we picked this</h3>

            <ul>
              ${best.reasons.map(reason => `<li>${reason}</li>`).join("")}
            </ul>
          </div>

          <div class="experience-result-actions">

            <a href="${best.link}" target="_blank" rel="noopener noreferrer">
              ${best.cta} →
            </a>

            ${
              wantsGift
                ? `
                  <a
                    href="https://stanlakepark.com/product-category/gift-vouchers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="gift-voucher-button"
                  >
                    View Gift Vouchers →
                  </a>
                `
                : ""
            }

          </div>

        </div>

      </div>

      ${
        others.length
          ? `
            <div class="experience-other-matches">
              <h3>Other good matches for you...</h3>

              <div class="experience-mini-grid">
                ${others.map(item => `
                  <article class="experience-mini-card">
                    <img
                      src="${item.image}"
                      alt="${item.name}"
                      class="experience-mini-image"
                    >

                    <p><strong>${item.badge}</strong></p>
                    <h3>${item.name}</h3>
                    <p>${item.finalScore}% Match</p>
                    <p>${item.bestFor}</p>

                    <a href="${item.link}" target="_blank" rel="noopener noreferrer">
                      ${item.cta} →
                    </a>
                  </article>
                `).join("")}
              </div>
            </div>
          `
          : ""
      }
    `;
  });
}

const clearExperienceButton = document.getElementById("clearExperienceButton");

if (clearExperienceButton) {
  clearExperienceButton.addEventListener("click", () => {
    document
      .querySelectorAll(".experience-options button")
      .forEach(button => button.classList.remove("active"));

    if (experienceResult) {
      experienceResult.style.display = "none";
      experienceResult.innerHTML = "";
    }
  });
}
const pageSections = document.querySelectorAll(
  "#matcher, #experience-matcher, #nearby, #stay, #journeys, #what-to-expect, #estate"
);

const navLinks = document.querySelectorAll(".nav a");

function updateActiveNav() {
  let currentSection = "";

  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
let selectedSize = null;
let selectedLocation = null;

const stayResult = document.getElementById("stay-result");

document.querySelectorAll("#party-size button").forEach(button => {
  button.addEventListener("click", () => {

    document.querySelectorAll("#party-size button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedSize = button.dataset.size;

    updateStayRecommendation();
  });
});

document.querySelectorAll("#stay-location button").forEach(button => {
  button.addEventListener("click", () => {

    document.querySelectorAll("#stay-location button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedLocation = button.dataset.location;

    updateStayRecommendation();
  });
});

function updateStayRecommendation() {
  if (!selectedSize || !selectedLocation) return;

  let recommendation = "";

  document.querySelectorAll(".stay-card").forEach(card => {
    card.classList.remove("recommended");
  });

  if (selectedSize === "2" && selectedLocation === "vineyard") {
    recommendation = "We think you'll love North Lodge — a romantic vineyard stay for two.";
    document.getElementById("north-lodge").classList.add("recommended");
  } else if (
    (selectedSize === "3-5" || selectedSize === "6-9") &&
    selectedLocation === "vineyard"
  ) {
    recommendation = "We think you'll love South Lodge — ideal for families and groups on the vineyard.";
    document.getElementById("south-lodge").classList.add("recommended");
  } else if (selectedLocation === "henley") {
    recommendation = "We think you'll love Old School House — a characterful Henley stay for larger groups.";
    document.getElementById("old-school-house").classList.add("recommended");
  } else {
    recommendation = "Browse all accommodation options below.";
  }

  const stayShowcase = document.querySelector(".stay-showcase");
  const recommendedCard = document.querySelector(".stay-card.recommended");

  if (stayShowcase && recommendedCard) {
    stayShowcase.prepend(recommendedCard);
  }

  stayResult.innerHTML = recommendation;
}

const clearExplorerFilters = document.getElementById("clearExplorerFilters");

if (clearExplorerFilters) {
  clearExplorerFilters.addEventListener("click", () => {
    currentCategory = null;
    if (searchInput) searchInput.value = "";
    document.querySelectorAll(".explorer-tab").forEach(tab => tab.classList.remove("active"));
    renderExplorer();
  });
}
