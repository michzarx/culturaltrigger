const culturalFacts = [
    {
        country: "Japan",
        fact: "In Japan, it's considered polite to slurp your noodles. The louder the better! This shows you're enjoying the meal."
    },
    {
        country: "Finland",
        fact: "In Finland, it's common to sit in saunas naked with strangers, as saunas are seen as a place for relaxation and socializing."
    },
    {
        country: "India",
        fact: "In India, it's traditional to eat with your right hand, as the left hand is considered unclean."
    },
    {
        country: "Argentina",
        fact: "In Argentina, it's common to greet everyone with a kiss on the cheek, even in business settings."
    },
    {
        country: "China",
        fact: "In China, giving clocks as gifts is considered very unlucky as 'giving a clock' sounds similar to 'attending a funeral' in Chinese."
    }
];

let currentFactIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    const factDiv = document.getElementById('cultureFact');
    const newFactBtn = document.getElementById('newFactBtn');
    const shareBtn = document.getElementById('shareBtn');
    const searchInput = document.getElementById('searchInput');

    // Show random fact on load
    showRandomFact();

    // New fact button
    newFactBtn.addEventListener('click', showRandomFact);

    // Share button
    shareBtn.addEventListener('click', () => {
        const fact = culturalFacts[currentFactIndex];
        const text = `Cultural Fun Fact about ${fact.country}: ${fact.fact}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Cultural Fun Fact',
                text: text,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(text)
                .then(() => alert('Fact copied to clipboard!'))
                .catch(() => alert('Failed to copy fact'));
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredFact = culturalFacts.find(fact => 
            fact.country.toLowerCase().includes(searchTerm)
        );

        if (filteredFact) {
            displayFact(filteredFact);
        }
    });

    function showRandomFact() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * culturalFacts.length);
        } while (newIndex === currentFactIndex && culturalFacts.length > 1);
        
        currentFactIndex = newIndex;
        displayFact(culturalFacts[currentFactIndex]);
    }

    function displayFact(fact) {
        factDiv.innerHTML = `
            <h3 class="text-xl font-bold text-purple-600 mb-2">${fact.country}</h3>
            <p class="text-gray-700">${fact.fact}</p>
        `;
        factDiv.classList.remove('fade-in');
        void factDiv.offsetWidth; // Trigger reflow
        factDiv.classList.add('fade-in');
    }
});
