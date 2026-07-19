const API_KEY = "8ff5866e-f100-46ca-a8e8-241fcf9f3313";

async function getLiveMatches() {
  try {
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
    );

    const data = await response.json();

    const container = document.getElementById("liveMatches");

    if (!data.data || data.data.length === 0) {
      container.innerHTML = "<p>No live matches available.</p>";
      return;
    }

    container.innerHTML = "";

    data.data.forEach(match => {
      container.innerHTML += `
        <div class="match">
          <h3>${match.name}</h3>
          <p>Status: ${match.status}</p>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

getLiveMatches();
