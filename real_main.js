console.log("this is the real main");
var Opponent = /** @class */ (function () {
    function Opponent(data) {
        this.data = data;
        this.element = document.createElement("div");
    }
    return Opponent;
}());
window.onload = function () {
    launchNextOpponent();
};
var launchNextOpponent = function () {
    var opponent = getNextOpponent();
    triggerOpponentMovement(opponent);
};
var getNextOpponent = function () {
    var data = getNextOpponentData();
    return buildOpponent(data);
};
var getNextOpponentData = function () {
    return "data";
};
var triggerOpponentMovement = function (opponent) {
};
var buildOpponent = function (data) {
    var opponent = new Opponent(data);
    initOpponentStyle(opponent);
    return opponent;
};
var initOpponentStyle = function (opponent) {
    opponent.element.classList.add("opponent");
};
