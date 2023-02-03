export function postPlayers(whitePlayer, blackPlayer) {
  return fetch("http://localhost:3000/players", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ whitePlayer, blackPlayer }),
  }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }
      return response.json();
    });
}
