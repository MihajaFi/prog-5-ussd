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

  addMenu(menu: Menu): void {
        this.menus.set(menu.id, menu);
    }

  private initMenus() {
        this.addMenu(new Menu(
            "1",
            "Acheter crédit ou offre Telma",
            "Achetez du crédit ou des forfaits pour votre numéro ou un autre.",
            () => console.log("Tu as choisi d'acheter du crédit ou une offre Telma.")
        ));

        this.addMenu(new Menu(
            "2",
            "Transférer argent (vers toute destination)",
            "Envoyez de l'argent à d'autres utilisateurs, y compris ceux utilisant Orange Money ou Airtel Money.",
            () => console.log("Tu as choisi de transférer de l'argent.")
        )); 

        this.addMenu(new Menu(
            "3",
            "MVola Avance ou Épargne",
            "Accédez aux services d'avance de fonds ou d'épargne proposés par MVola.",
            () => console.log("Tu as choisi MVola Avance ou Épargne.")
        ));

        this.addMenu(new Menu(
            "4",
            "Retrait d'argent",
            "Effectuez un retrait d'argent via un agent MVola.",
            () => console.log("Tu as choisi de faire un retrait d'argent.")
        ));

        this.addMenu(new Menu(
            "5",
            "Paiement factures & partenaires",
            "Payez vos factures (électricité, eau, etc.) ou effectuez des paiements chez les partenaires de MVola.",
            () => console.log("Tu as choisi de payer une facture ou un partenaire.")
        ));

        this.addMenu(new Menu(
            "6",
            "Mon compte",
            "Consultez votre solde, changez votre code secret, ou accédez à d'autres informations liées à votre compte.",
            () => console.log("Tu as choisi de consulter ton compte.")
        ));
    }

    
}


const ussdMenu = new MVolaUSSDMenu("#111*1");