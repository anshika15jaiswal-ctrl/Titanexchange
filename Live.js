const API_KEY = "8ff5866e-f100-46ca-a8e8-241fcf9f3313";

// Wallet
if (!localStorage.getItem("coins")) {
    localStorage.setItem("coins", "1000");
}

function updateWallet() {
    const coinSpan = document.getElementById("coins");
    if (coinSpan) {
        coinSpan.innerText = localStorage.getItem("coins");
    }
}

function placeBet(amount) {
    let coins = parseInt(localStorage.getItem("coins"));

    if (coins < amount) {
        alert("Not enough coins!");
        return;
    }

    coins -= amount;
    localStorage.setItem("coins", coins);
    updateWallet();

    alert("Bet placed successfully!");
}

// Live Matches
async function loadMatches() {
    const container = document.getElementById("liveMatches");

    if (!container) return;

    container.innerHTML = "Loading...";

    try {
        const response = await fetch(
            `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
        );

        const result = await response.json();

        if (!result.data || result.data.length === 0) {
            container.innerHTML = "<p>No live matches found.</p>";
            return;
        }

        container.innerHTML = "";

        result.data.forEach(match => {
            container.innerHTML += `
                <div class="card">
                    <h3>${match.name}</h3>
                    <p>${match.status}</p>
                    <button class="btn" onclick="placeBet(100)">
                        Bet 100 Coins
                    </button>
                    <br><br>
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "<p>Failed to load live matches.</p>";
        console.error(error);
    }
}

updateWallet();
loadMatches();
