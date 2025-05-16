import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

  constructor() {
    this.code = "#111*1";
    this.menus = new Map();
    this.initMenus();
  }

  
  private initMenus() {
        this.addMenu(new Menu("1", "Acheter crédit ou offre Telma", "Achetez du crédit pour votre numéro ou un autre.", 
            () => this.simulateProcessing(() => this.buyCredit())
        ));
        this.addMenu(new Menu("2", "Transférer argent (vers toute destination)", "Envoyez de l'argent à d'autres utilisateurs.", 
            () => this.simulateProcessing(() => this.transferMoney())
        ));
        this.addMenu(new Menu("3", "MVola Avance ou Épargne", "Accédez aux services d'avance ou épargne.", 
            () => this.simulateProcessing(() => this.advanceOrSave())
        ));
        this.addMenu(new Menu("4", "Retrait d'argent", "Effectuez un retrait d'argent via un agent MVola.", 
            () => this.simulateProcessing(() => this.withdrawMoney())
        ));
        this.addMenu(new Menu("5", "Paiement factures & partenaires", "Payez vos factures ou partenaires.", 
            () => this.simulateProcessing(() => this.payBill())
        ));
        this.addMenu(new Menu("6", "Mon compte", "Consultez votre solde ou changez votre code secret.", 
            () => this.simulateProcessing(() => this.checkBalance())
        ));
  }
        
  askChoice(): void {
        rl.question("Choisissez une option : ", (choice) => {
            if (choice === "0") {
                console.log("Merci d'avoir utilisé MVola. À bientôt !");
                rl.close();
            } else if (this.menus.has(choice)) {
                const menu = this.menus.get(choice);
                console.log(`\nTu as choisi : ${menu?.name}`);
                menu?.action?.();
            } else {
                console.log("Désolé, ce menu n'existe pas. Essayez encore.");
                this.showMenus();
            }
        });
  }
  addMenu(menu: Menu): void {
      this.menus.set(menu.id, menu);
  }

  showMenus(): void {
        console.log("\n=== MENU MVola ===");
        this.menus.forEach((menu) => {
            console.log(`${menu.id}. ${menu.name} - ${menu.description}`);
        });
        console.log("0. Précédent (ou quitter)\n");
        this.askChoice();
  }

  
    
   buyCredit(): void {
        rl.question("Montant du crédit : ", (amount) => {
            rl.question("Numéro de téléphone : ", (phone) => {
                console.log(`✅ Achat de ${amount} Ar de crédit pour le numéro ${phone}.`);
                this.showBackOption();
            });
        });
  }

    
  transferMoney(): void {
        rl.question("Numéro du destinataire : ", (recipient) => {
            rl.question("Montant à transférer : ", (amount) => {
                console.log(`✅ Transfert de ${amount} Ar à ${recipient} effectué avec succès !`);
                this.showBackOption();
            });
        });
  }

  advanceOrSave(): void {
        rl.question("Montant de l'avance ou de l'épargne : ", (amount) => {
            console.log(`✅ Demande de ${amount} Ar pour avance ou épargne confirmée.`);
            this.showBackOption();
        });
  }

  
  withdrawMoney(): void {
        rl.question("Numéro de l'agent : ", (agent) => {
            rl.question("Montant à retirer : ", (amount) => {
                console.log(`✅ Retrait de ${amount} Ar chez l'agent ${agent}.`);
                this.showBackOption();
            });
        });
  }

  
  payBill(): void {
        rl.question("Nom de la facture (ex: JIRAMA) : ", (billType) => {
            rl.question("Montant à payer : ", (amount) => {
                console.log(`✅ Paiement de ${amount} Ar pour ${billType} confirmé.`);
                this.showBackOption();
            });
        });
  }

  checkBalance(): void {
        console.log("✅ Votre solde est de : 50 000 Ar.");
        this.showBackOption();
  }
  showBackOption(): void {
        rl.question("\nTapez 0 pour revenir au menu principal : ", (choice) => {
            if (choice === "0") {
                this.showMenus();
            } else {
                console.log("Merci d'avoir utilisé MVola. À bientôt !");
                rl.close();
            }
        });
  }

  simulateProcessing(callback: () => void) {
    console.log("\nTraitement en cours...");
    let loadingText = "";

    const loadingInterval = setInterval(() => {
        process.stdout.write("\rChargement" + loadingText);
        loadingText = loadingText.length < 3 ? loadingText + "." : "";
    }, 500);

    const delay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
        clearInterval(loadingInterval);
        process.stdout.write("\rChargement terminé.           \n");
        callback();
    }, delay);
}
}


function startMVolaUSSD() {
    rl.question("Composez le code USSD : ", (code) => {
        if (code === "#111*1#") {
            const ussdMenu = new MVolaUSSDMenu();
            ussdMenu.showMenus();
        } else {
            console.log("Code incorrect. Veuillez réessayer.");
            startMVolaUSSD();
        }
    });
}

startMVolaUSSD();