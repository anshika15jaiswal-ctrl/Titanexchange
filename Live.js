const API_KEY = "8ff5866e-f100-46ca-a8e8-241fcf9f3313";

async function getLiveMatches() {
  try {
    const res = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
    );

    const data = await res.json();
    console.log(data);

    // Yahan match data ko website par display karna hai
  } catch (err) {
    console.error(err);
  }
}

getLiveMatches();
