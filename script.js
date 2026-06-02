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

document.querySelectorAll(".nearby-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".nearby-tile").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".nearby-panel").forEach(panel => panel.classList.remove("active"));
    tile.classList.add("active");
    document.getElementById(tile.dataset.panel).classList.add("active");
  });
});

matchButton.addEventListener("click", renderResults);

resetButton.addEventListener("click", () => {
  optionsEl.querySelectorAll("input").forEach(input => input.checked = false);
  renderResults();
});

renderOptions();
renderResults();
