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

[CONTRIBUTING.md](CONTRIBUTING.md).

En résumé :

1. Forkez le projet
2. Créez une branche (feature/... ou fix/...)
3. Faites vos modifications
4. Poussez votre branche
5. Ouvrez une Pull Request

## **Licence**

Ce projet est sous licence MIT. Voir le fichier

[LICENSE](https://github.com/lod-d/todo-web/blob/main/LICENSE.md).



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