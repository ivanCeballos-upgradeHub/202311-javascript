# Bajarse un repo
git clone https://github.com/ivanCeballos-upgradeHub/202311-javascript

# Ver estado del repo
git status

# Ver las ramas que tengo
git branch

# Cambiar a una rama
git checkout <rama>

# Crear una rama
git checkout -b <rama>

# Push al repositorio
git push
git push origin <nombre de rama en remoto>
git push --set-upstream origin <nombre de rama en remoto>

# Cambios
## Añadir elementos al commit 
git add <ficheros>

## Descartar cambios
git restore <ficheros>

## Commit
git commit -m <Texto de mensaje>

## Subir el commit 
git push

# Eliminar una rama
Os teneis que poner fuera de la rama a eliminar
git branch -D <nombre de rama>

# Mergear una rama
1. Pull Request, como se tiene que hacer (ver clase)

2. Mergear a las bravas
Nos movemos a la rama dónde queremos que estén los cambios nuevos
git merge <rama donde están los datos nuevos>

# Git Flow
https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow