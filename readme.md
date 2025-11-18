# Todo Web

Petite application **Todo List** en **HTML / CSS / JavaScript**.

Ce projet sert surtout d'exemple pédagogique pour expliquer :

- comment fonctionne un dépôt GitHub
- comment contribuer en open source
- comment utiliser issues, branches, commits, pull requests, etc.

## Démo locale

1. Cloner le dépôt :

```bash
git clone https://github.com/<ton-pseudo>/todo-web.git
cd todo-web
```

1. Ouvrir le fichier index.html dans votre navigateur :
- soit en double-cliquant dessus
- soit avec un petit serveur local (optionnel) :

```
# Exemple avec Python 3
python -m http.server 8000
# Puis aller sur http://localhost:8000 dans le navigateur
```

## **Fonctionnalités**

- Ajouter une tâche
- Marquer une tâche comme faite
- Supprimer une tâche
- Supprimer toutes les tâches faites
- Supprimer toutes les tâches
- Sauvegarde automatique dans le navigateur via localStorage

## **Comment contribuer ?**

Merci de lire d’abord le fichier

[CONTRIBUTING.md](https://www.notion.so/deladev-greta/CONTRIBUTING.md).

En résumé :

1. Forkez le projet
2. Créez une branche (feature/... ou fix/...)
3. Faites vos modifications
4. Poussez votre branche
5. Ouvrez une Pull Request

## **Licence**

Ce projet est sous licence MIT. Voir le fichier

[LICENSE](https://www.notion.so/deladev-greta/LICENSE).

---

### 4.2. `LICENSE` (MIT)

```text
MIT License

Copyright (c) 2025 lodd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### **4.3.** `CONTRIBUTING.md`

# Contribuer à Todo Web

Merci de votre intérêt pour ce petit projet pédagogique open source 💛

## 1. Prérequis

- Avoir un compte GitHub
- Connaître les bases de Git (clone, commit, push)
- Avoir un navigateur web récent

## 2. Fork du dépôt

1. Cliquez sur le bouton **Fork** sur la page GitHub du projet.
2. Une copie du dépôt sera créée sur votre compte.

## 3. Cloner votre fork

```bash
git clone https://github.com/<votre-pseudo>/todo-web.git
cd todo-web
```

## **4. Créer une branche**

Créez toujours une branche pour vos changements :

```
git checkout -b feature/nom-de-votre-fonctionnalite
```

Exemples :

- feature/filtre-taches
- feature/dark-mode
- fix/orthographe-readme

## **5. Faire des modifications**

- Modifiez le code dans index.html, styles.css ou script.js
- Ouvrez index.html dans le navigateur pour tester

## **6. Commits**

Utilisez des messages de commit clairs :

```
git add .
git commit -m "Ajoute un mode sombre pour l'interface"
```

## **7. Pousser la branche**

```
git push origin feature/nom-de-votre-fonctionnalite
```

## **8. Ouvrir une Pull Request (PR)**

1. Allez sur votre fork sur GitHub.
2. Cliquez sur **Compare & pull request**.
3. Donnez un titre et une description claire :
    - Ce que vous avez fait
    - Pourquoi
    - Comment tester

## **9. Code de conduite**

En contribuant, vous acceptez de respecter le

[Code de Conduite](https://www.notion.so/deladev-greta/CODE_OF_CONDUCT.md)

.


---

### 4.4. `CODE_OF_CONDUCT.md`

# Code de Conduite

## Notre engagement

Nous voulons que ce projet soit un espace accueillant pour tout le monde, indépendamment de :

- l'âge, le genre, l'orientation sexuelle, l'identité de genre
- le handicap
- l'apparence physique
- la nationalité, la religion, l'origine

## Comportements attendus

- Utiliser un langage respectueux et bienveillant
- Accepter les critiques constructives
- Aider les nouveaux contributeurs
- Collaborer de bonne foi

## Comportements inacceptables

- Insultes, trolls, attaques personnelles
- Harcèlement ou discrimination
- Partage de contenu offensant

## Application

Si vous voyez un comportement inapproprié, contactez le mainteneur du projet (via les issues ou les coordonnées indiquées).

Le mainteneur peut :

- demander d'arrêter un comportement
- supprimer des commentaires ou issues
- bloquer un utilisateur en cas de problème grave ou répété

---


### **4.5.** `.gitignore`
Pour un petit projet web sans build :

```md
# Fichiers système
.DS_Store
Thumbs.db

# Éditeurs
.vscode/
.idea/

# Si un jour on ajoute un build ou des dépendances
node_modules/
dist/
```

---



### **4.6.** `.github/ISSUE_TEMPLATE.md`

## Résumé

Le but de cette issue est de **expliquer** le bug ou l'amélioration proposée.


## modèle de issue de base

```md
# Description

Décrivez clairement le bug ou l'amélioration proposée.

## Type d'issue

- [ ] Bug
- [ ] Nouvelle fonctionnalité
- [ ] Amélioration de la documentation

## Étapes pour reproduire (si bug)

1. …
2. …
3. …

## Résultat attendu

Ce que vous pensiez que l'application devait faire.

## Résultat actuel

Ce qu'elle fait réellement.

## Environnement

- Navigateur :
- Version du navigateur :
- OS (Windows, macOS, Linux, etc.) :
```

---

## **5. Comment l’utiliser pour expliquer GitHub en open source**

Avec ce projet, tu peux montrer :

- **Création du repo** + push initial
- **README** = présentation + mode d’emploi
- **LICENSE** = droits d’utilisation
- **CONTRIBUTING** = règles de contribution
- **CODE_OF_CONDUCT** = respect & comportement
- **Issues** = signaler bug / demander fonctionnalité
- **Branches** = développer une fonctionnalité
- **Pull Request** = proposer ses changements