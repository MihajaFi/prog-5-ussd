class Menu {
    id: string;
    name: string;
    description: string;
    action?: () => void;

    constructor(id: string, name: string, description: string, action?: () => void) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.action = action;
    }
}

class MVolaUSSDMenu {
  code: string;
  menus: Map<string, Menu>;

  constructor(code: string) {
    this.code = code;
    this.menus = new Map();
    this.initMenus();
  }

  private initMenus() {
    // not implemented yet
  }
    
}


const ussdMenu = new MVolaUSSDMenu("#111*1");