[AsterPublicació](https://asterbcn-newsletter.vercel.app)

### Operativa para subir un proyecto a [Github](https://github.com/AsterBCN/newsletter) y [Vercel](https://vercel.com/asterbcns-projects/~/activity?slug=app-future&slug=en-US&slug=asterbcns-projects&slug=~&slug=activity&range=last-12-months)
- El proyecto Newsletter actual que está en producción está en la rama **next**.
``` bash
git add .
git commit -m "Comment"
git push
``` 

Al subir el proyecto a Github se actualiza automáticamente el despliegue en Vercel


------

### Subir un proyecto a Github.

1. **Preparar tu proyecto en local** \
Asegúrate de tener todos los archivos de tu proyecto en una carpeta local en tu computadora.

2. **Crear un repositorio en [GitHub](https://github.com/)** \
    Ve a GitHub e inicia sesión. \
    En la esquina superior derecha, haz clic en el botón "+" y selecciona New repository. \
    Dale un nombre a tu repositorio y selecciona si quieres que sea público o privado. \
    Si quieres, puedes agregar un archivo README, una licencia y un archivo .gitignore (recomendado para proyectos en JavaScript). \
    Haz clic en **Create repository**. 
3. **Configurar Git en tu máquina local** \
    Si es la primera vez que usas Git, debes configurarlo:

``` bash
git config --global user.name "TuNombreDeUsuario"
git config --global user.email "TuCorreo@ejemplo.com"
```
4. **Inicializar Git en tu proyecto local** \
    Abre una terminal o línea de comandos y navega hasta la carpeta de tu proyecto.
    Inicializa Git en tu carpeta local:

``` bash
git init
```
5. **Conectar tu proyecto local con el repositorio de GitHub**
Para conectar el repositorio local con GitHub, necesitas agregar la URL del repositorio remoto. Esto lo puedes hacer desde la terminal:

``` bash
git remote add origin https://github.com/Usuario/NuevoRepositorio.
```
Reemplaza https://github.com/Usuario/NuevoRepositorio.git con la URL de tu repositorio.

6. **Subir tus archivos al repositorio** \
    Agrega todos los archivos al área de preparación (staging area):

``` bash
git add .
```
Crea un commit con los cambios:

``` bash
git commit -m "Primer commit"
```

Sube los cambios a GitHub:
``` bash
git push -u origin master
```

La primera vez que subes el proyecto, necesitas especificar **-u origin master**. Después de esto, puedes simplemente usar git push.


**¡Y listo!** \
Tu proyecto ahora debería estar disponible en GitHub. Puedes verificarlo accediendo al repositorio en tu cuenta de GitHub.

**Ejemplo de flujo completo de comandos**
``` bash
cd /ruta/de/tu/proyecto
git init
git remote add origin https://github.com/Usuario/NuevoRepositorio.git
git add .
git commit -m "Primer commit"
git push -u origin master
```
Con esto, ya tendrás tu proyecto JavaScript subido a GitHub.







