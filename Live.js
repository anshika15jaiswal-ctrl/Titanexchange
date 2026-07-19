window.onload = function () {

const matches = [
{
team1: "🇮🇳 India",
team2: "🇦🇺 Australia",
status: "🔴 LIVE"
},
{
team1: "🏴 England",
team2: "🇵🇰 Pakistan",
status: "🟡 Upcoming"
},
{
team1: "🇿🇦 South Africa",
team2: "🇳🇿 New Zealand",
status: "🟢 Today"
}
];

let html = "";

matches.forEach(function(match){

html += `
<div class="match">
<h3>${match.team1} vs ${match.team2}</h3>
<p>Status : ${match.status}</p>

<button class="btn" onclick="placeBet(100)">
Bet 100 Coins
</button>

<hr>
</div>
`;

});

document.getElementById("liveMatches").innerHTML = html;

};

function placeBet(amount){

let coins = localStorage.getItem("coins");

if(coins == null){
coins = 1000;
}

coins = parseInt(coins);

if(coins < amount){
alert("Not enough coins!");
return;
}

coins = coins - amount;

localStorage.setItem("coins", coins);

alert("Bet placed successfully!\nRemaining Coins: " + coins);

}
