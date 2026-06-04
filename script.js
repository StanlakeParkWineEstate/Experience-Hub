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
    matches: ["Champagne", "English Sparkling", "Prosecco"],
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
    matches: ["Provence Rosé", "Pinot Noir", "Rosé"],
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
      <input type="checkbox" value="${pref}">
      <span>${pref}</span>
    </label>
  `).join("");
}

function getSelectedPreferences() {
  return Array.from(optionsEl.querySelectorAll("input:checked")).map(input => input.value);
}

function calculateMatches(selected) {
  const popularityBonus = {
    "Pinot Noir Rosé": 8,
    "Rosé Superior": 8,
    "Bacchus": 3,
    "Hinton Brut": 2
  };

  return wines
    .map(wine => {
      const matchingPrefs = wine.matches.filter(match => selected.includes(match));
      const baseScore = matchingPrefs.length === 0 ? 0 : Math.min(96, 68 + matchingPrefs.length * 10);
      const score = baseScore + (popularityBonus[wine.name] || 0);

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
          >
            View ${wine.name} →
          </a>
        </div>

        <span class="score">${wine.score}% match</span>
      </article>
    `;
  }).join("");
}
document.querySelector(".menu-button").addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  const button = document.querySelector(".menu-button");
  const isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
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
    name: "Siren Craft Brew",
    category: "beer",
    distance: "5 miles",
    drive: "12 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Award winning local brewery with a taproom and fresh craft beer.",
    link: "https://www.sirencraftbrew.com"
  },
  {
    name: "Double-Barrelled Brewery",
    category: "beer",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: true,
    description: "Independent Reading brewery with taproom, events and rotating beers.",
    link: "https://doublebarrelled.co.uk"
  },
  {
    name: "Elusive Brewing",
    category: "beer",
    distance: "5 miles",
    drive: "12 mins",
    setting: "Indoor",
    dog: true,
    description: "Small batch brewery known for hop forward and modern craft beers.",
    link: "https://www.elusivebrewing.com"
  },
  {
    name: "Phantom Brewing Co",
    category: "beer",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: true,
    description: "Reading craft brewery and taproom with bold modern beers.",
    link: "https://www.phantombrew.com"
  },
  {
    name: "Indie Rabble Brewing Co",
    category: "beer",
    distance: "9 miles",
    drive: "20 mins",
    setting: "Indoor",
    dog: true,
    description: "Windsor based brewery with taproom and independent beer releases.",
    link: "https://indierabble.co.uk"
  },

  {
    name: "Coppa Club Sonning",
    category: "food",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Relaxed riverside dining in pretty Sonning.",
    link: "https://www.coppaclub.co.uk/sonning"
  },
  {
    name: "The French Horn",
    category: "food",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Indoor",
    dog: false,
    description: "Classic riverside restaurant and hotel in Sonning.",
    link: "https://thefrenchhorn.co.uk"
  },
  {
    name: "The Bull Inn, Sonning",
    category: "food",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic village pub with food and rooms.",
    link: "https://www.bullinnsonning.co.uk"
  },
  {
    name: "The Baskerville",
    category: "food",
    distance: "7 miles",
    drive: "15 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Village pub near Henley with food, garden and rooms.",
    link: "https://www.thebaskerville.com"
  },
  {
    name: "The Crooked Billet",
    category: "food",
    distance: "12 miles",
    drive: "25 mins",
    setting: "Indoor",
    dog: false,
    description: "Characterful pub restaurant near Henley, loved for food.",
    link: "https://www.thecrookedbillet.co.uk"
  },
  {
    name: "London Street Brasserie",
    category: "food",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Smart riverside restaurant in central Reading.",
    link: "https://londonstbrasserie.co.uk"
  },
  {
    name: "Bluegrass BBQ Reading",
    category: "food",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "American style barbecue and comfort food in Reading.",
    link: "https://bluegrass-bbq.com"
  },
  {
    name: "The Corn Stores",
    category: "food",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Steak, cocktails and smart dining close to Reading station.",
    link: "https://thecornstoresreading.co.uk"
  },
  {
    name: "The Boathouse, Henley",
    category: "food",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Riverside food and drinks in Henley on Thames.",
    link: "https://www.boathousehenley.com"
  },
  {
    name: "The Bell at Waltham St Lawrence",
    category: "food",
    distance: "5 miles",
    drive: "12 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Country pub in a pretty village close to Twyford.",
    link: "https://www.thebellwsl.com"
  },

  {
    name: "Anonymous Coffee",
    category: "coffee",
    distance: "0 miles",
    drive: "On site",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Local coffee served at Stanlake Park Wine Bar.",
    link: "https://stanlakepark.com"
  },
  {
    name: "Picnic Foods",
    category: "coffee",
    distance: "1 mile",
    drive: "4 mins",
    setting: "Indoor",
    dog: false,
    description: "Independent café and food spot in Twyford.",
    link: "https://www.picnicfoods.co.uk"
  },
  {
    name: "Workhouse Coffee",
    category: "coffee",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Speciality coffee roaster and café in Reading.",
    link: "https://workhousecoffee.com"
  },
  {
    name: "Geo Café, Henley",
    category: "coffee",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Independent café close to the river in Henley.",
    link: "https://www.geocafe.co.uk"
  },
  {
    name: "Coppa Club Sonning Café",
    category: "coffee",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "A relaxed coffee stop by the Thames.",
    link: "https://www.coppaclub.co.uk/sonning"
  },

  {
    name: "Twyford Village Walk",
    category: "walks",
    distance: "1 mile",
    drive: "4 mins",
    setting: "Outdoor",
    dog: true,
    description: "An easy local walk before or after your vineyard visit.",
    link: "https://stanlakepark.com"
  },
  {
    name: "Sonning Thames Walk",
    category: "walks",
    distance: "3 miles",
    drive: "8 mins",
    setting: "Outdoor",
    dog: true,
    description: "Pretty riverside walk around Sonning and the Thames.",
    link: "https://www.visitthames.co.uk"
  },
  {
    name: "Dinton Pastures",
    category: "walks",
    distance: "4 miles",
    drive: "10 mins",
    setting: "Outdoor",
    dog: true,
    description: "Lakeside country park with walks, nature and watersports.",
    link: "https://www.wokinghamcountryside.co.uk/dinton-pastures-country-park"
  },
  {
    name: "Henley Riverside Walk",
    category: "walks",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: true,
    description: "Classic Thames walk from one of the area's prettiest towns.",
    link: "https://visit-henley.com"
  },
  {
    name: "Basildon Park Walks",
    category: "walks",
    distance: "14 miles",
    drive: "28 mins",
    setting: "Outdoor",
    dog: true,
    description: "National Trust estate with parkland walks and countryside views.",
    link: "https://www.nationaltrust.org.uk/visit/oxfordshire-buckinghamshire-berkshire/basildon-park"
  },

  {
    name: "Twyford",
    category: "towns",
    distance: "1 mile",
    drive: "4 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Your closest village, with rail links, pubs, cafés and local shops.",
    link: "https://stanlakepark.com"
  },
  {
    name: "Reading",
    category: "towns",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Shopping, restaurants, breweries, nightlife, theatre and riverside walks.",
    link: "https://www.visit-reading.com"
  },
  {
    name: "Henley on Thames",
    category: "towns",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Beautiful riverside town with shops, pubs and Thames walks.",
    link: "https://visit-henley.com"
  },
  {
    name: "Marlow",
    category: "towns",
    distance: "13 miles",
    drive: "28 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Smart riverside town with restaurants, walks and independent shops.",
    link: "https://www.visitmarlow.com"
  },
  {
    name: "Windsor",
    category: "towns",
    distance: "18 miles",
    drive: "35 mins",
    setting: "Indoor & Outdoor",
    dog: true,
    description: "Historic town, castle, riverfront and plenty for a full day out.",
    link: "https://www.windsor.gov.uk"
  },

  {
    name: "Beale Wildlife Park",
    category: "family",
    distance: "17 miles",
    drive: "30 mins",
    setting: "Outdoor",
    dog: false,
    description: "Wildlife park, gardens, play areas and family attractions.",
    link: "https://bealepark.org.uk"
  },
  {
    name: "Wellington Country Park",
    category: "family",
    distance: "9 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: true,
    description: "Big family day out with play areas, trails and outdoor activities.",
    link: "https://wellingtoncountrypark.co.uk"
  },
  {
    name: "Legoland Windsor",
    category: "family",
    distance: "17 miles",
    drive: "35 mins",
    setting: "Outdoor",
    dog: false,
    description: "Major theme park for families, rides and Lego themed attractions.",
    link: "https://www.legoland.co.uk"
  },
  {
    name: "Odds Farm Park",
    category: "family",
    distance: "15 miles",
    drive: "30 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Farm park with animals, play areas and family activities.",
    link: "https://www.oddsfarm.co.uk"
  },
  {
    name: "The Look Out Discovery Centre",
    category: "family",
    distance: "14 miles",
    drive: "28 mins",
    setting: "Indoor & Outdoor",
    dog: false,
    description: "Hands on science centre and forest adventure near Bracknell.",
    link: "https://www.bracknell-forest.gov.uk/leisure-services/look-out-discovery-centre"
  },

  {
    name: "Deadlocked Escape Rooms",
    category: "experiences",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Award winning escape rooms in Reading.",
    link: "https://deadlockedrooms.com"
  },
  {
    name: "Clays Reading",
    category: "experiences",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Competitive clay target style gaming, cocktails and food.",
    link: "https://clays.bar/reading"
  },
  {
    name: "Reading FC",
    category: "experiences",
    distance: "9 miles",
    drive: "20 mins",
    setting: "Outdoor",
    dog: false,
    description: "Football at the Select Car Leasing Stadium.",
    link: "https://www.readingfc.co.uk"
  },
  {
    name: "The Hexagon",
    category: "experiences",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Reading theatre, comedy, music and live entertainment venue.",
    link: "https://whatsonreading.com/venues/hexagon"
  },
  {
    name: "Reading Biscuit Factory",
    category: "experiences",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Indoor",
    dog: false,
    description: "Independent cinema, food, drinks and events in Reading.",
    link: "https://readingbiscuitfactory.co.uk"
  },
  {
    name: "Thames Rivercruise",
    category: "experiences",
    distance: "7 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "River cruises from Reading and Caversham.",
    link: "https://www.thamesrivercruise.co.uk"
  },
  {
    name: "Go Ape Bracknell",
    category: "experiences",
    distance: "14 miles",
    drive: "28 mins",
    setting: "Outdoor",
    dog: false,
    description: "Treetop adventure and high ropes in Swinley Forest.",
    link: "https://goape.co.uk/locations/bracknell"
  },
  {
    name: "Nirvana Spa",
    category: "experiences",
    distance: "4 miles",
    drive: "10 mins",
    setting: "Indoor",
    dog: false,
    description: "Spa day experience close to the estate.",
    link: "https://nirvanaspa.co.uk"
  },
  {
    name: "Henley Royal Regatta",
    category: "experiences",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "World famous rowing event on the Thames.",
    link: "https://www.hrr.co.uk"
  },
  {
    name: "Henley Festival",
    category: "experiences",
    distance: "8 miles",
    drive: "18 mins",
    setting: "Outdoor",
    dog: false,
    description: "Summer music, food, comedy and culture festival by the river.",
    link: "https://henley-festival.co.uk"
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
    badge: "🍷 Most Popular",
    image: "wine-tour.jpg",
    bestFor: "First time visitors",
      includes: [
    "Vineyard walk",
    "Winery tour",
    "Six wine tastings",
    "Expert guide"
  ],
    tags: ["day out", "wine", "vineyard", "winery", "learning", "unique", "relaxed"],
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
    name: "Cheese & Wine Tour",
    badge: "🧀 Food Lover Favourite",
    image: "cheese-wine-tour.jpg",
    bestFor: "Food lovers",
    includes: [
  "Vineyard walk",
  "Winery tour",
  "Wine tasting",
  "Cheese pairings"
],
    tags: ["food", "wine", "pairings", "day out", "date", "special occasion", "gift", "relaxed"],
    popularity: 10,
    description: "A guided vineyard and winery tour with cheese and wine pairings included.",
    reasons: [
      "You enjoy food and wine together",
      "You want a more indulgent tour",
      "You are planning a date, gift or special occasion"
    ],
    addon: "Make it a full afternoon with a drink in the Wine Bar.",
    link: "https://stanlakepark.com/wine-tours/",
    cta: "Explore Cheese Tours"
  },
  {
    name: "Cheese & Wine Tasting",
    badge: "🧀 Relaxed Tasting",
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
    badge: "☕ Afternoon Treat",
    image: "cream-tea-tour.jpg",
    bestFor: "A relaxed afternoon",
    includes: [
  "Vineyard walk",
  "Winery tour",
  "Wine tasting",
  "Cream tea"
],
    tags: ["relaxed", "date", "special occasion", "vineyard", "day out", "gift"],
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
    badge: "🍷 Hosted by Natalia DipWSET",
    image: "monthly-wine-tasting.jpg",
    bestFor: "Curious wine drinkers",
    includes: [
  "Hosted by Natalia DipWSET",
  "World wine theme",
  "Guided tasting",
  "Small group format"
],
    tags: ["learning", "wine", "world wine", "unique", "friends"],
    popularity: 9,
    description: "Hosted by Natalia Pezzone DipWSET, these monthly tastings explore wine regions, grapes and styles from around the world.",
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
    badge: "🍷 Flexible Visit",
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
    badge: "❤️ Romantic Stay",
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
    badge: "🏡 Group Getaway",
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
    badge: "🏡 Henley Escape",
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
    badge: "💍 Wedding Planning",
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
