// Country data with triggers
const countryData = {
    "Italy 🇮🇹": [
        "Don't you think pineapple adds a tropical sophistication to pizza? 🍕",
        "Would breaking spaghetti in half make it easier to eat? Let's try! 🍝",
        "Why waste time with espresso when instant coffee exists? It's basically the same! ☕",
        "Isn't Olive Garden basically authentic Italian cuisine? 👨‍🍳",
        "This pasta is good but needs some ketchup to make it perfect! 🍅"
    ],
    "Japan 🇯🇵": [
        "These house slippers are uncomfortable - mind if I keep my shoes on? 👞",
        "Don't these chopsticks look pretty standing up in the rice? 🍚",
        "Isn't Chinese animation more expressive than anime? 📺",
        "Would adding more soy sauce make this rice less bland? 🍶",
        "Why not mix all the wasabi into the soy sauce at once? 🥢"
    ],
    "France 🇫🇷": [
        "Don't you think American cheese slices have more personality than Brie? 🧀",
        "Would it kill you to put just a few ice cubes in this warm wine? 🍷",
        "Excuse me garçon, can I get some ketchup for my coq au vin? 🍅",
        "Have you ever noticed how British cuisine just has that certain... je ne sais quoi? 🇬🇧",
        "Why do you all eat dinner so late? Are you nocturnal or something? 🕕"
    ]
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const countryDropdown = document.getElementById('countryDropdown');
const selectedCountryElement = document.getElementById('selectedCountry');
const triggerElement = document.getElementById('trigger');
const randomBtn = document.getElementById('randomBtn');
const shareBtn = document.getElementById('shareBtn');
const searchContainer = document.getElementById('searchContainer');
const toast = document.getElementById('toast');

let selectedCountry = '';

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            countryDropdown.classList.add('hidden');
        }
    });

    // Search input handler
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCountries = Object.keys(countryData).filter(country =>
            country.toLowerCase().includes(searchTerm)
        );

        updateDropdown(filteredCountries);
        countryDropdown.classList.remove('hidden');
    });

    // Random country button
    randomBtn.addEventListener('click', handleRandomCountry);

    // Share button
    shareBtn.addEventListener('click', handleShare);
});

// Functions
function updateDropdown(countries) {
    countryDropdown.innerHTML = '';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-option';
        div.textContent = country;
        div.addEventListener('click', () => {
            selectCountry(country);
            countryDropdown.classList.add('hidden');
            searchInput.value = country;
        });
        countryDropdown.appendChild(div);
    });
}

function selectCountry(country) {
    selectedCountry = country;
    selectedCountryElement.textContent = country;
    const triggers = countryData[country];
    const randomTrigger = triggers[Math.floor(Math.random() * triggers.length)];
    triggerElement.textContent = randomTrigger;
}

function handleRandomCountry() {
    const countries = Object.keys(countryData);
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    selectCountry(randomCountry);
    searchInput.value = randomCountry;
}

function handleShare() {
    if (!selectedCountry) return;
    
    const trigger = triggerElement.textContent;
    const textToShare = `🌍 Want to know how to trigger men from ${selectedCountry}?\n\n"${trigger}" 😈\n\nFind more at culturaltriggers.com #CulturalTriggers`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Cultural Trigger',
            text: textToShare,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(textToShare);
        });
    } else {
        copyToClipboard(textToShare);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showToast('Copied to clipboard!'))
        .catch(() => showToast('Failed to copy'));
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-enter');
    
    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('toast-enter', 'toast-exit');
        }, 300);
    }, 3000);
}
