if(modules.indexOf("collectible") == -1) {
  throw "DependancyError: Module collectible is required for Module coin";
} else {
  modules.push("coin");

  var Coin = class Coin extends Collectible {
    constructor(x,y,t) {
      super(x,y,0.3,0.3,t);
    }
    
    collect(x) {
      if(!this.collected) {
        var collectedBy = x;
        if(!collectedBy.coins) {
          collectedBy.coins = 0;
        }
        collectedBy.coins++;
        this.collected = true;
      }
    }
  };
}