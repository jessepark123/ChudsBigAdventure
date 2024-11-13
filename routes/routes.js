module.exports = function(app) {

    // Home screen
    // TODO: place to enter a room code
    // TODO: place to enter a username
    // TODO: rulebook / guide
    app.get('/', (req, res) => {
        res.render('index', { title: "home page", message: "this is the home page" })
    })

    // Lobby screen
    // TODO: chatroom
    // TODO: team selection
    // TODO: game settings / modifiers
    app.get('/lobby', (req, res) => {
        res.render('lobby', { title: "lobby page", message: "this is the lobby page" })
    })

    // Game screen
    // TODO: chat window
    // TODO: house the game entirely within this page 
    app.get('/game', (req, res) => {
        res.render('game', { title: "game page", message: "this is the game page" })
    })

}