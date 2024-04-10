console.log("this is the real main");

//opponent


type OpponentData = string;

class Opponent {
   data: OpponentData;
   element: HTMLElement;

   constructor(data: OpponentData){
     this.data = data;
     this.element = document.createElement("div");
   }
}



window.onload = () => {
  launchNextOpponent();
}

const launchNextOpponent = () => {
  const opponent = getNextOpponent();
  triggerOpponentMovement(opponent);
}

const getNextOpponent = () => {
    const data = getNextOpponentData();
    return buildOpponent(data);
}

const getNextOpponentData = (): string => {
    return "data";
}

const triggerOpponentMovement = (opponent: Opponent) => {
  
}

const buildOpponent = (data: string) => {
  const opponent = new Opponent(data);
  initOpponentStyle(opponent);
  return opponent;
}

const initOpponentStyle = (opponent: Opponent) => {
    opponent.element.classList.add("opponent");
}

