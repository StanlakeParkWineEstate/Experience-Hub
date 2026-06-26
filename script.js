// =========================
// Google Analytics event tracking
// =========================
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== "function") return;

  gtag("event", eventName, parameters);
}

function getTrackingParameters(element) {
  const parameters = {};

  Object.keys(element.dataset).forEach(key => {
    if (key !== "track") {
      parameters[key] = element.dataset[key];
    }
  });

  if (element.href && !parameters.url) {
    parameters.url = element.href;
  }

  return parameters;
}

// Works for static links and for buttons/links added later by JavaScript.
document.addEventListener("click", event => {
  const trackedElement = event.target.closest("[data-track]");

  if (!trackedElement) return;

  trackEvent(trackedElement.dataset.track, getTrackingParameters(trackedElement));
});

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
    matches: ["Sparkling Rosé", "Champagne", "English Sparkling", "Prosecco", "Rosé"],
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
    matches: ["Pinot Noir", "Rioja", "Beaujolais"],
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
      <input type="checkbox" value="${pref}" data-track="wine_preference_selected" data-preference="${pref}">
      <span>${pref}</span>
    </label>
  `).join("");
}

function getSelectedPreferences() {
  return Array.from(optionsEl.querySelectorAll("input:checked")).map(input => input.value);
}

function calculateMatches(selected) {
  const exactNameBonus = 35;
  const preferredOrderBonus = {
    "Pinot Noir": {
      "Pinot Noir": 40,
      "The Reserve": 8
    },
    "Champagne": {
      "Stanlake Brut": 35,
      "Heritage Brut": 30,
      "Rosé Superior": 8
    },
    "Chardonnay": {
      "Kings Fumé": 30,
      "Fiano": 22,
      "Stanlake Brut": 10,
      "Heritage Brut": 8
    }
  };

  return wines
    .map(wine => {
      const matchingPrefs = wine.matches.filter(match => selected.includes(match));

      let score = 0;

      if (matchingPrefs.length > 0) {
        score = Math.min(96, 70 + matchingPrefs.length * 12);
      }

      selected.forEach(pref => {
        if (wine.name === pref) {
          score += exactNameBonus;
        }

        if (preferredOrderBonus[pref] && preferredOrderBonus[pref][wine.name]) {
          score += preferredOrderBonus[pref][wine.name];
        }
      });

      score = Math.min(score, 100);

      return { ...wine, matchingPrefs, score };
    })
    .filter(wine => wine.score > 0)
    .sort((a, b) => b.score - a.score);
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
            data-track="wine_selected"
            data-wine-name="${wine.name}"
            data-wine-style="${wine.style}"
            data-match-score="${wine.score}"
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

matchButton.addEventListener("click", () => {
  const selectedPreferences = getSelectedPreferences();

  trackEvent("wine_matcher_revealed", {
    selected_count: selectedPreferences.length,
    selected_preferences: selectedPreferences.join(", ")
  });

  renderResults();
});

resetButton.addEventListener("click", () => {
  trackEvent("wine_matcher_cleared");

  optionsEl.querySelectorAll("input").forEach(input => input.checked = false);
  renderResults();
});

renderOptions();
renderResults();
const explorerItems = [
  {
    name: "Haweli Tandoori",
    category: "food",
    distance: "Twyford, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Indian restaurant in Twyford and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Haweli+Tandoori+Twyford"
  },
  {
    name: "The Bell Inn",
    category: "food",
    distance: "Waltham St Lawrence, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Country pub close to Twyford and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Bell+Inn+Waltham+St+Lawrence"
  },
  {
    name: "The Horse & Groom",
    category: "food",
    distance: "Hare Hatch, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Local pub in Hare Hatch and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Horse+and+Groom+Hare+Hatch"
  },
  {
    name: "The White Oak",
    category: "food",
    distance: "Cookham, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Cookham pub and restaurant serving Stanlake Park wines.",
    link: "https://www.google.com/search?q=The+White+Oak+Cookham"
  },
  {
    name: "The Greyhound",
    category: "food",
    distance: "Finchampstead, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Village pub and Stanlake Park stockist in Finchampstead.",
    link: "https://www.google.com/search?q=The+Greyhound+Finchampstead"
  },
  {
    name: "Vegivores Caversham",
    category: "food",
    distance: "Caversham, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Plant based restaurant in Caversham and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Vegivores+Caversham"
  },
  {
    name: "Angel Bar",
    category: "food",
    distance: "Caversham, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Caversham bar and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Angel+Bar+Caversham"
  },
  {
    name: "Clays Hyderabadi Kitchen & Bar",
    category: "food",
    distance: "Caversham, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Hyderabadi Indian restaurant in Caversham and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Clays+Hyderabadi+Kitchen+Caversham"
  },
  {
    name: "The Plough Shiplake",
    category: "food",
    distance: "Shiplake, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Village pub near Henley and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Plough+Shiplake"
  },
  {
    name: "Bombay Story",
    category: "food",
    distance: "Maidenhead & Wokingham, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Indian restaurant group in Berkshire and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Bombay+Story+Maidenhead+Wokingham"
  },
  {
    name: "Cantley House",
    category: "food",
    distance: "Wokingham, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Hotel and events venue in Wokingham serving Stanlake Park wines.",
    link: "https://www.google.com/search?q=Cantley+House+Wokingham"
  },
  {
    name: "The Greene Oak",
    category: "food",
    distance: "Windsor, Berkshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Windsor pub and restaurant serving Stanlake Park wines.",
    link: "https://www.google.com/search?q=The+Greene+Oak+Windsor"
  },
  {
    name: "The Castle Hotel",
    category: "food",
    distance: "Windsor, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Historic Windsor hotel and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Castle+Hotel+Windsor"
  },
  {
    name: "Park Eat & Bar",
    category: "food",
    distance: "University of Reading, Berkshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "University of Reading food and drink venue serving Stanlake Park wines.",
    link: "https://www.google.com/search?q=Park+Eat+and+Bar+University+of+Reading"
  },
  {
    name: "Faber",
    category: "food",
    distance: "Hammersmith, London",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "London seafood restaurant and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Faber+Hammersmith"
  },
  {
    name: "Vanilla Pod",
    category: "food",
    distance: "Marlow, Buckinghamshire",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Marlow restaurant and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Vanilla+Pod+Marlow"
  },
  {
    name: "The Star Witley",
    category: "food",
    distance: "Godalming, Surrey",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Surrey pub and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Star+Witley+Godalming"
  },
  {
    name: "The Drumming Snipe",
    category: "food",
    distance: "Woking, Surrey",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Surrey pub and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=The+Drumming+Snipe+Woking"
  },
  {
    name: "Vegivores Bournemouth",
    category: "food",
    distance: "Bournemouth, Dorset",
    drive: "Stockist",
    setting: "Indoor",
    dog: false,
    description: "Plant based restaurant in Bournemouth and a Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Vegivores+Bournemouth"
  },
  {
    name: "Daisy's in the Park",
    category: "food",
    distance: "Pinner & Radlett, Hertfordshire",
    drive: "Stockist",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Cafe restaurant group and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Daisy%27s+in+the+Park+Pinner+Radlett"
  },
  {
    name: "Siren Craft Brew",
    category: "beer",
    distance: "Finchampstead, Berkshire",
    drive: "Local brewery",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Award winning local brewery with a taproom and fresh craft beer.",
    link: "https://www.google.com/search?q=Siren+Craft+Brew"
  },
  {
    name: "Double-Barrelled Brewery",
    category: "beer",
    distance: "Reading, Berkshire",
    drive: "Local brewery",
    setting: "Indoor",
    dog: true,
    description: "Independent Reading brewery with taproom, events and rotating beers.",
    link: "https://www.google.com/search?q=Double-Barrelled+Brewery+Reading"
  },
  {
    name: "Elusive Brewing",
    category: "beer",
    distance: "Finchampstead, Berkshire",
    drive: "Local brewery",
    setting: "Indoor",
    dog: true,
    description: "Small batch brewery known for hop forward and modern craft beers.",
    link: "https://www.google.com/search?q=Elusive+Brewing"
  },
  {
    name: "Loddon Brewery",
    category: "beer",
    distance: "Dunsden Green, Oxfordshire",
    drive: "Local brewery",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Independent brewery near Reading with a rural taproom.",
    link: "https://www.google.com/search?q=Loddon+Brewery+Dunsden+Green"
  },
  {
    name: "Dolphin Brewery",
    category: "beer",
    distance: "Reading, Berkshire",
    drive: "Local brewery",
    setting: "Indoor",
    dog: false,
    description: "Reading brewery producing modern craft beer.",
    link: "https://www.google.com/search?q=Dolphin+Brewery+Reading"
  },
  {
    name: "Renegade Brewery",
    category: "beer",
    distance: "Yattendon, Berkshire",
    drive: "Local brewery",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Berkshire brewery and taproom in the countryside near Yattendon.",
    link: "https://www.google.com/search?q=Renegade+Brewery+Yattendon"
  },
  {
    name: "Rebellion Beer Co",
    category: "beer",
    distance: "Marlow, Buckinghamshire",
    drive: "Local brewery",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Marlow brewery with shop, taproom and local following.",
    link: "https://www.google.com/search?q=Rebellion+Beer+Co+Marlow"
  },
  {
    name: "Beauty in Blooms",
    category: "producers",
    distance: "Twyford, Berkshire",
    drive: "Local producer",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Local flowers, plants and gifts close to Stanlake Park.",
    link: "https://www.google.com/search?q=Beauty+in+Blooms+Twyford"
  },
  {
    name: "Hamlet",
    category: "producers",
    distance: "Wokingham, Berkshire",
    drive: "Local producer",
    setting: "Indoor",
    dog: false,
    description: "Wokingham stockist and local independent business.",
    link: "https://www.google.com/search?q=Hamlet+Wokingham"
  },
  {
    name: "Bray Cured",
    category: "producers",
    distance: "Bray, Berkshire",
    drive: "Local producer",
    setting: "Indoor",
    dog: false,
    description: "Award winning British charcuterie producer in Bray.",
    link: "https://www.google.com/search?q=Bray+Cured"
  },
  {
    name: "Designs For Living Interiors",
    category: "producers",
    distance: "Wokingham, Berkshire",
    drive: "Local stockist",
    setting: "Indoor",
    dog: false,
    description: "Wokingham interiors shop and Stanlake Park stockist.",
    link: "https://www.google.com/search?q=Designs+For+Living+Interiors+Wokingham"
  },
  {
    name: "Hare Hatch Sheeplands",
    category: "producers",
    distance: "Hare Hatch, Berkshire",
    drive: "Farm shop",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Garden centre, farm shop and local destination close to Twyford.",
    link: "https://www.google.com/search?q=Hare+Hatch+Sheeplands"
  },
  {
    name: "French & Day",
    category: "producers",
    distance: "Ware, Hertfordshire",
    drive: "Local stockist",
    setting: "Indoor",
    dog: false,
    description: "Independent stockist in Ware, Hertfordshire.",
    link: "https://www.google.com/search?q=French+%26+Day+Ware"
  },
  {
    name: "Village Maid Cheese",
    category: "producers",
    distance: "Berkshire",
    drive: "Local producer",
    setting: "Indoor",
    dog: false,
    description: "Award winning local cheese producer with strong Berkshire roots.",
    link: "https://www.google.com/search?q=Village+Maid+Cheese"
  },
  {
    name: "Henley Distillery",
    category: "producers",
    distance: "Henley on Thames, Oxfordshire",
    drive: "Local producer",
    setting: "Indoor",
    dog: false,
    description: "Local distillery producing spirits near Henley on Thames.",
    link: "https://www.google.com/search?q=Henley+Distillery"
  },
  {
    name: "Twyford",
    category: "towns",
    distance: "1 mile",
    drive: "4 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Closest village to Stanlake Park, with rail links, pubs, caf\u00e9s and local shops.",
    link: "https://www.google.com/search?q=Twyford+Berkshire"
  },
  {
    name: "Henley on Thames",
    category: "towns",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Beautiful riverside town with shops, pubs and Thames walks.",
    link: "https://www.google.com/search?q=visit+Henley+on+Thames"
  },
  {
    name: "Marlow",
    category: "towns",
    distance: "13 miles",
    drive: "28 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Smart riverside town with restaurants, walks and independent shops.",
    link: "https://www.google.com/search?q=Visit+Marlow"
  },
  {
    name: "Windsor",
    category: "towns",
    distance: "18 miles",
    drive: "35 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic town with castle, riverfront and plenty for a full day out.",
    link: "https://www.google.com/search?q=Visit+Windsor"
  },
  {
    name: "Oxford",
    category: "towns",
    distance: "35 miles",
    drive: "55 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Historic university city with museums, colleges, restaurants and shopping.",
    link: "https://www.google.com/search?q=Visit+Oxford"
  },
  {
    name: "Eton",
    category: "towns",
    distance: "18 miles",
    drive: "35 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic riverside town beside Windsor, known for Eton College.",
    link: "https://www.google.com/search?q=Eton+Berkshire+visit"
  },
  {
    name: "Windsor Castle",
    category: "heritage",
    distance: "18 miles",
    drive: "35 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "World famous royal castle and a strong pairing with a Berkshire day out.",
    link: "https://www.google.com/search?q=Windsor+Castle"
  },
  {
    name: "Cliveden",
    category: "heritage",
    distance: "15 miles",
    drive: "30 mins",
    setting: "Outdoor",
    dog: true,
    description: "National Trust estate with gardens, woodland walks and Thames views.",
    link: "https://www.google.com/search?q=National+Trust+Cliveden"
  },
  {
    name: "Highclere Castle",
    category: "heritage",
    distance: "34 miles",
    drive: "55 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Iconic country house and gardens, famous as the setting of Downton Abbey.",
    link: "https://www.google.com/search?q=Highclere+Castle"
  },
  {
    name: "Ascot Racecourse",
    category: "heritage",
    distance: "16 miles",
    drive: "30 mins",
    setting: "Outdoor",
    dog: false,
    description: "One of the UK's best known racecourses and a major local visitor draw.",
    link: "https://www.google.com/search?q=Ascot+Racecourse"
  },
  {
    name: "Eton College",
    category: "heritage",
    distance: "18 miles",
    drive: "35 mins",
    setting: "Outdoor",
    dog: false,
    description: "Historic school and landmark in Eton, close to Windsor.",
    link: "https://www.google.com/search?q=Eton+College+visit"
  },
  {
    name: "Oxford City Centre",
    category: "heritage",
    distance: "35 miles",
    drive: "55 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Colleges, museums, architecture, shopping and restaurants for a full day out.",
    link: "https://www.google.com/search?q=Oxford+city+centre+things+to+do"
  },
  {
    name: "Basildon Park",
    category: "heritage",
    distance: "14 miles",
    drive: "28 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "National Trust house and parkland with countryside walks and views.",
    link: "https://www.google.com/search?q=National+Trust+Basildon+Park"
  },
  {
    name: "Mapledurham Estate",
    category: "heritage",
    distance: "10 miles",
    drive: "25 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic estate, village and riverside setting near Reading.",
    link: "https://www.google.com/search?q=Mapledurham+Estate"
  },
  {
    name: "Thames Rivercruise",
    category: "experiences",
    distance: "Reading",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "River cruises from Reading and Caversham along the Thames.",
    link: "https://www.google.com/search?q=Thames+Rivercruise+Reading"
  },
  {
    name: "Henley Royal Regatta",
    category: "experiences",
    distance: "Henley on Thames",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "World famous rowing event on the Thames.",
    link: "https://www.google.com/search?q=Henley+Royal+Regatta"
  },
  {
    name: "Henley Festival",
    category: "experiences",
    distance: "Henley on Thames",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "Summer music, food, comedy and culture festival by the river.",
    link: "https://www.google.com/search?q=Henley+Festival"
  },
  {
    name: "Nirvana Spa",
    category: "experiences",
    distance: "Sindlesham, Berkshire",
    drive: "10 mins",
    setting: "Indoor",
    dog: false,
    description: "Spa day experience close to the estate.",
    link: "https://www.google.com/search?q=Nirvana+Spa"
  },
  {
    name: "The Hexagon",
    category: "experiences",
    distance: "Reading, Berkshire",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Reading theatre, comedy, music and live entertainment venue.",
    link: "https://www.google.com/search?q=The+Hexagon+Reading"
  },
  {
    name: "Reading Biscuit Factory",
    category: "experiences",
    distance: "Reading, Berkshire",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Independent cinema, food, drinks and events in Reading.",
    link: "https://www.google.com/search?q=Reading+Biscuit+Factory"
  },
  {
    name: "Twyford Village Walk",
    category: "walks",
    distance: "1 mile",
    drive: "4 mins",
    setting: "Outdoor",
    dog: true,
    description: "An easy local walk before or after your vineyard visit.",
    link: "https://www.google.com/search?q=Twyford+village+walk"
  },
  {
    name: "Sonning Thames Walk",
    category: "walks",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Outdoor",
    dog: true,
    description: "Pretty riverside walk around Sonning and the Thames.",
    link: "https://www.google.com/search?q=Sonning+Thames+walk"
  },
  {
    name: "Dinton Pastures",
    category: "walks",
    distance: "4 miles",
    drive: "10 mins",
    setting: "Outdoor",
    dog: true,
    description: "Lakeside country park with walks, nature and watersports.",
    link: "https://www.google.com/search?q=Dinton+Pastures+Country+Park"
  },
  {
    name: "Henley Riverside Walk",
    category: "walks",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: true,
    description: "Classic Thames walk from one of the area's prettiest towns.",
    link: "https://www.google.com/search?q=Henley+Thames+walk"
  },
  {
    name: "Windsor Great Park",
    category: "walks",
    distance: "20 miles",
    drive: "40 mins",
    setting: "Outdoor",
    dog: true,
    description: "Expansive parkland and historic landscapes near Windsor.",
    link: "https://www.google.com/search?q=Windsor+Great+Park"
  },
  {
    name: "Beale Wildlife Park",
    category: "family",
    distance: "17 miles",
    drive: "30 mins",
    setting: "Outdoor",
    dog: false,
    description: "Wildlife park, gardens, play areas and family attractions.",
    link: "https://www.google.com/search?q=Beale+Wildlife+Park"
  },
  {
    name: "Wellington Country Park",
    category: "family",
    distance: "9 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: true,
    description: "Big family day out with play areas, trails and outdoor activities.",
    link: "https://www.google.com/search?q=Wellington+Country+Park"
  },
  {
    name: "Legoland Windsor",
    category: "family",
    distance: "17 miles",
    drive: "35 mins",
    setting: "Outdoor",
    dog: false,
    description: "Major theme park for families, rides and Lego themed attractions.",
    link: "https://www.google.com/search?q=Legoland+Windsor"
  },
  {
    name: "Odds Farm Park",
    category: "family",
    distance: "15 miles",
    drive: "30 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Farm park with animals, play areas and family activities.",
    link: "https://www.google.com/search?q=Odds+Farm+Park"
  },
  {
    name: "The Look Out Discovery Centre",
    category: "family",
    distance: "14 miles",
    drive: "28 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Hands on science centre and forest adventure near Bracknell.",
    link: "https://www.google.com/search?q=The+Look+Out+Discovery+Centre"
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
          data-track="guide_location_clicked"
          data-location-name="${item.name}"
          data-category="${item.category}"
        >
          Learn more →
        </a>
      `;

      explorerGrid.appendChild(card);
    });
}

renderExplorer();

let explorerSearchTimeout;

searchInput.addEventListener("input", () => {
  renderExplorer();

  clearTimeout(explorerSearchTimeout);
  explorerSearchTimeout = setTimeout(() => {
    if (searchInput.value.trim()) {
      trackEvent("guide_search", {
        search_term: searchInput.value.trim()
      });
    }
  }, 800);
});

document
.querySelectorAll(".explorer-tab[data-category]")
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

    trackEvent("guide_filter", {
      category: currentCategory
    });

    renderExplorer();

  });

});

const clearExplorerFilters = document.getElementById("clearExplorerFilters");

if (clearExplorerFilters) {
  clearExplorerFilters.addEventListener("click", () => {
    trackEvent("guide_filters_cleared");

    currentCategory = null;
    searchInput.value = "";

    document
      .querySelectorAll(".explorer-tab")
      .forEach(t => t.classList.remove("active"));

    renderExplorer();
  });
}

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
    link: "https://stanlakepark.com/calendar/",
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
    link: "https://stanlakepark.com/calendar/",
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
    link: "https://stanlakepark.com/calendar/",
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

    trackEvent("experience_option_toggled", {
      option: button.dataset.value,
      active: button.classList.contains("active")
    });
  });
});

const experienceMatchButton = document.getElementById("experienceMatchButton");
const experienceResult = document.getElementById("experienceResult");

if (experienceMatchButton) {
  experienceMatchButton.addEventListener("click", () => {
    const selected = Array.from(document.querySelectorAll(".experience-options button.active"))
      .map(button => button.dataset.value);

    if (!selected.length) {
      trackEvent("experience_matcher_no_selection");

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

        score = Math.min(score, 100);

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
      trackEvent("experience_matcher_no_result", {
        selected_options: selected.join(", ")
      });

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

    trackEvent("quiz_completed", {
      selected_count: selected.length,
      selected_options: selected.join(", ")
    });

    trackEvent("experience_recommended", {
      experience: best.name,
      score: best.finalScore,
      other_matches: others.map(item => item.name).join(", ")
    });

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

            <a href="${best.link}" target="_blank" rel="noopener noreferrer" data-track="book_click" data-experience="${best.name}" data-location="Experience Matcher Result">
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
                    data-track="outbound_click"
                    data-destination="Gift Vouchers"
                    data-location="Experience Matcher Result"
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

                    <a href="${item.link}" target="_blank" rel="noopener noreferrer" data-track="book_click" data-experience="${item.name}" data-location="Experience Matcher Other Match">
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
    trackEvent("experience_matcher_cleared");

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

    trackEvent("stay_size_selected", {
      party_size: selectedSize
    });

    updateStayRecommendation();
  });
});

document.querySelectorAll("#stay-location button").forEach(button => {
  button.addEventListener("click", () => {

    document.querySelectorAll("#stay-location button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedLocation = button.dataset.location;

    trackEvent("stay_location_selected", {
      stay_location: selectedLocation
    });

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
    recommendation = "⭐ We think you'll love North Lodge — a romantic vineyard stay for two.";
    document.getElementById("north-lodge").classList.add("recommended");
  } else if (
    (selectedSize === "3-5" || selectedSize === "6-9") &&
    selectedLocation === "vineyard"
  ) {
    recommendation = "⭐ We think you'll love South Lodge — ideal for families and groups on the vineyard.";
    document.getElementById("south-lodge").classList.add("recommended");
  } else if (selectedLocation === "henley") {
    recommendation = "⭐ We think you'll love Old School House — a characterful Henley stay for larger groups.";
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

  trackEvent("stay_recommendation_shown", {
    party_size: selectedSize,
    stay_location: selectedLocation,
    recommendation: recommendation.replace("⭐ ", "")
  });
}
const tourAccordion = document.querySelector(".tour-mobile-accordion");
const tourAccordionButton = document.querySelector(".tour-accordion-button");

if (tourAccordion && tourAccordionButton) {
  tourAccordionButton.addEventListener("click", () => {
    const isOpen = tourAccordion.classList.toggle("is-open");
    tourAccordionButton.setAttribute("aria-expanded", isOpen);

    trackEvent("tour_accordion_toggled", {
      open: isOpen
    });
  });
}

// =========================
// Automatic engagement tracking
// =========================
const viewedSections = new Set();

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const sectionName = entry.target.id || entry.target.className || "unnamed_section";

    if (viewedSections.has(sectionName)) return;

    viewedSections.add(sectionName);

    trackEvent("section_view", {
      section: sectionName
    });
  });
}, {
  threshold: 0.4
});

document.querySelectorAll("main section").forEach(section => {
  sectionObserver.observe(section);
});

const scrollMarks = [25, 50, 75, 100];
const reachedScrollMarks = new Set();

function trackScrollDepth() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) return;

  const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

  scrollMarks.forEach(mark => {
    if (scrollPercent >= mark && !reachedScrollMarks.has(mark)) {
      reachedScrollMarks.add(mark);

      trackEvent("scroll_depth", {
        percent: mark
      });
    }
  });
}

window.addEventListener("scroll", trackScrollDepth, { passive: true });
window.addEventListener("load", trackScrollDepth);

setTimeout(() => {
  trackEvent("engaged_120_seconds");
}, 120000);

window.addEventListener("error", event => {
  trackEvent("javascript_error", {
    message: event.message,
    source: event.filename,
    line: event.lineno
  });
});

