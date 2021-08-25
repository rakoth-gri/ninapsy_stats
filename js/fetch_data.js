export const fetch_data = function(data) {
    return fetch('https://stats-app-base-default-rtdb.firebaseio.com/cards.json', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};