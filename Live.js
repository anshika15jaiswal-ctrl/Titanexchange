const API_KEY = "YAHAN_APNI_API_KEY_PASTE_KARO";

async function loadMatches() {
  const url = `https://api.cricketdata.org/v1/matches?apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let html = "";

    data.data.forEach(match => {
      html += `
        <div class="card">
          <h3>${match.team1} vs ${match.team2}</h3>
          <p>Status: ${match.status}</p>
          <button class="btn">View Match</button>
          <button class="btn" onclick="placeBet(100)">
            Bet 100 Coins
          </button>
        </div>
      `;
    });

    document.getElementById("liveMatches").innerHTML = html;

  } catch (e) {
    document.getElementById("liveMatches").innerHTML =
      "Failed to load matches";
  }
}

loadMatches();
setInterval(loadMatches, 60000);
