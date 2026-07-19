const API_KEY = "8ff5866e-f100-46ca-a8e8-241fcf9f3313";

async function loadMatches() {
  const container = document.getElementById("liveMatches");
  container.innerHTML = "Loading live matches...";

  try {
    const response = await fetch(`https://api.cricketdata.org/v1/matches?apikey=${API_KEY}`, {
  method: "GET"
});
    const result = await response.json();

    console.log(result);

    if (!result.data || result.data.length === 0) {
      container.innerHTML = "No live matches available";
      return;
    }

    let html = "";

    result.data.forEach(match => {
      html += `
        <div class="card">
          <h3>${match.team1} vs ${match.team2}</h3>
          <p>${match.status}</p>
          <button class="btn">View Match</button>
          <button class="btn" onclick="placeBet(100)">Bet 100 Coins</button>
        </div>
      `;
    });

    container.innerHTML = html;

  } catch (err) {
    console.error(err);
    container.innerHTML = "API Error";
  }
}

loadMatches();
setInterval(loadMatches, 60000);
