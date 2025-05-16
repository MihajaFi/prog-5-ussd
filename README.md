
# 📌 Simulation USSD MVola avec Node.js (TypeScript)

## 🌟 Présentation
Ce projet est une **simulation de menu USSD MVola**, codé en **TypeScript avec Node.js**. Il permet aux utilisateurs de naviguer dans un menu interactif pour effectuer des opérations comme :

- ✅ Acheter du crédit
- ✅ Transférer de l'argent
- ✅ Faire une avance ou une épargne
- ✅ Effectuer un retrait
- ✅ Payer des factures
- ✅ Consulter le solde de votre compte

Chaque action nécessite un **code secret** pour confirmer l'opération.

---

## 🚀 Prérequis
- **Node.js** installé sur votre machine (version 12 ou supérieure).
- **TypeScript** installé globalement. Si ce n'est pas le cas, utilisez :
  ```bash
  npm install -g typescript
  ```

---

## 📁 Installation
1. **Clonez ce projet** sur votre machine :
   ```bash
   git clone https://github.com/votre-utilisateur/mvola-ussd.git
   cd mvola-ussd
   ```

2. **Installez les dépendances** (si nécessaire) :
   ```bash
   npm install
   ```

3. **Compilez le code TypeScript** :
   ```bash
   tsc ussd.ts
   ```

---

## ⚡ Lancer la simulation
Pour lancer le menu USSD :
```bash
node ussd.js
```

---

## 💡 Comment utiliser l'application
- Vous serez invité à **composer un code USSD**.
  ```bash
  Composez le code USSD : #111*1#
  ```
- Une fois le code entré, vous verrez le **menu MVola** :
  1. Acheter crédit ou offre Telma  
  2. Transférer argent (vers toute destination)  
  3. MVola Avance ou Épargne  
  4. Retrait d'argent  
  5. Paiement factures & partenaires  
  6. Mon compte  
  0. Précédent (ou quitter)

### 🔹 Exemple de transaction (Achat de crédit)
- Choisissez l'option `1` (Acheter crédit)
- Entrez le **montant du crédit** et le **numéro de téléphone** :
  ```bash
  Montant du crédit : 5000
  Numéro de téléphone : 0341234567
  ```
- Entrez votre **code secret** pour confirmer :
  ```bash
  Entrez votre code secret pour confirmer : 1234
  ```
- L'achat sera confirmé après un chargement.

---

## 🔑 Configuration du code secret
- Le **code secret par défaut est `1234`**.
- Vous pouvez le modifier dans la classe `MVolaUSSDMenu` :
  ```typescript
  this.secretCode = "1234";
  ```

---

## 🛠️ Fonctionnalités ajoutées
- ✅ Chargement simulé avant chaque confirmation d'opération.
- ✅ Protection par **code secret** avant chaque opération.
- ✅ Possibilité de revenir au menu principal après chaque opération.

---

## 📌 Conseils pour les développeurs
- Vous pouvez ajouter d'autres options de menu en modifiant la méthode `initMenus` de la classe `MVolaUSSDMenu`.
- Pour personnaliser les messages de chaque option, modifiez les méthodes comme `buyCredit`, `transferMoney`, etc.

---

## 📞 Support
Pour toute question, problème ou amélioration, n'hésitez pas à ouvrir une **issue** ou à me contacter.

