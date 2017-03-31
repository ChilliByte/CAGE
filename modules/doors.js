//Depends on module "ai", "platform"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module switch";
} else {
  //Push "platform" to list of included modules
  modules.push("switch");
  
  var doorArray = [];
  var Door = class Door extends Platform {
    constructor(x,y,w,h,tile,defaultPosition,id) {
      super(x,y,w,h,tile);
      this.isOpen = defaultPosition;
      this.s = !defaultPosition;
      this.defaultPosition = defaultPosition;
      this.id = id;
      doorArray[id] = this;
    }
    
    draw() {
      if(!this.isOpen) {
        this.t.draw(this.x,this.y,this.w,this.h);
      }
    }
    
    update(){
      if(this.isOpen){
        this.close();
      } else {
        this.open();
      }
    }
      
    reset() {
      this.isOpen = this.defaultPosition;
      this.s = true;
    }
    
    open() {
      this.isOpen = true;
      this.s = false;
    }
    
    close() {
      this.isOpen = false;
      this.s = true;
    }
  };
  Door.type = "static"; //Stops door being tested 60x per second. door.update() is called when switch is fired.
}