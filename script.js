const preferences = [
  "Sauvignon Blanc",
  "Pinot Grigio",
  "Albariño",
  "Chardonnay",
  "Riesling",
  "Provence Rosé",
  "Pinot Noir",
  "Rioja",
  "Malbec",
  "Merlot",
  "Prosecco",
  "Champagne",
  "English Sparkling",
  "Natural Wine",
  "White Rioja",
  "Beaujolais"
];

const wines = [
  {
    name: "Bacchus",
    style: "Fresh aromatic white",
    matches: ["Sauvignon Blanc", "Pinot Grigio", "Albariño"],
    notes: "Zesty, aromatic and refreshing, with citrus, elderflower and green fruit character.",
    why: "A brilliant choice if you like crisp, bright whites with plenty of freshness."
  },
  {
    name: "Madeleine",
    style: "Light floral white",
    matches: ["Pinot Grigio", "Riesling"],
    notes: "Light, floral and delicate, with a gentle freshness.",
    why: "A good option if you enjoy easy drinking whites with lift and perfume."
  },
  {
    name: "Kings Fumé",
    style: "Textured white",
    matches: ["Chardonnay", "White Rioja"],
    notes: "Richer and more textured, with savoury depth and food friendly weight.",
    why: "Great if you like whites with more body and complexity."
  },
  {
    name: "Pinot Noir Rosé",
    style: "Dry English rosé",
    matches: ["Provence Rosé", "Pinot Noir"],
    notes: "Dry, crisp and refreshing with red berry fruit.",
    why: "A natural next step for fans of pale, dry rosé styles."
  },
  {
    name: "Rosé Superior",
    style: "Fuller rosé",
    matches: ["Provence Rosé", "Merlot"],
    notes: "Fruit forward and generous, with a little more body.",
    why: "Good if you want rosé with more flavour and presence."
  },
  {
    name: "Reserve",
    style: "Elegant English red",
    matches: ["Pinot Noir", "Rioja", "Beaujolais"],
    notes: "Red fruit, gentle spice and a lighter, elegant feel.",
    why: "Ideal for people who enjoy lighter reds rather than big, heavy styles."
  },
  {
    name: "Cricket Grove",
    style: "Richer red",
    matches: ["Malbec", "Merlot", "Rioja"],
    notes: "Deeper fruit character with more structure and warmth.",
    why: "A good match for red wine drinkers looking for something fuller from Stanlake."
  },
  {
    name: "Heritage Brut",
    style: "Traditional method sparkling",
    matches: ["Champagne", "English Sparkling"],
    notes: "Fine bubbles, freshness and classic sparkling wine character.",
    why: "Perfect if you usually choose Champagne, Crémant or traditional method fizz."
  },
  {
    name: "Hinton Brut",
    style: "Fresh sparkling",
    matches: ["Champagne", "English Sparkling", "Prosecco"],
    notes: "Bright, lively and celebratory.",
    why: "A crowd pleasing sparkling wine for celebrations and gifts."
  },
  {
    name: "Bacchus Brut",
    style: "Aromatic sparkling",
    matches: ["Prosecco", "Sauvignon Blanc", "English Sparkling"],
    notes: "Fresh, aromatic and lively with a crisp finish.",
    why: "Great if you like easy, bright sparkling wines with aromatic freshness."
  },
  {
    name: "Orange",
    style: "Skin contact white",
    matches: ["Natural Wine", "Riesling", "Albariño"],
    notes: "Textural, expressive and a little more adventurous.",
    why: "Choose this if you enjoy discovering something different."
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
  return wines
    .map(wine => {
      const matchingPrefs = wine.matches.filter(match => selected.includes(match));
      const score = matchingPrefs.length === 0 ? 0 : Math.min(98, 68 + matchingPrefs.length * 12);
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
    "Bacchus": "bacchus",
    "Madeleine": "madeleine",
    "Kings Fumé": "kings-fume",
    "Pinot Noir Rosé": "pinot-noir-rose",
    "Rosé Superior": "rose-superior",
    "Reserve": "reserve",
    "Cricket Grove": "cricket-grove",
    "Heritage Brut": "heritage-brut",
    "Hinton Brut": "hinton-brut",
    "Bacchus Brut": "bacchus-brut",
    "Orange": "orange"
  };

  emptyEl.style.display = "none";

  resultsEl.innerHTML = matches.slice(0, 4).map((wine, index) => {
    const slug = slugMap[wine.name];
    const wineUrl = `https://www.stanlakepark.com/product/${slug}/?utm_source=experience_hub&utm_medium=wine_matcher&utm_campaign=find_your_wine`;

    return `
      <article class="result-card">
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
