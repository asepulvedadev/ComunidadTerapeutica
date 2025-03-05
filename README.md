# Comunidad Terapéutica Dr. Sillworth - Landing Page

## Descripción

Landing page moderna y responsiva para la Comunidad Terapéutica Dr. Sillworth, desarrollada con Astro, React y Tailwind CSS.

## Stack Tecnológico

- Framework Principal: Astro 4.x
- Frontend: React 18
- Estilos: Tailwind CSS
- State Management: Zustand
- Animaciones: Framer Motion
- Interacciones: Headless UI
- Iconos: Lucide React
- Validación: Zod
- Formularios: React Hook Form

## Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/comunidad-dr-sillworth.git
cd comunidad-dr-sillworth
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir el navegador en `http://localhost:4321`

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye el proyecto para producción
- `npm run preview`: Previsualiza la build de producción

## Estructura del Proyecto

```
dr-sillworth-landing/
├── src/
│   ├── components/
│   │   ├── layout/      # Componentes de layout
│   │   ├── ui/          # Componentes de UI
│   │   ├── sections/    # Secciones de la página
│   │   └── common/      # Componentes comunes
│   ├── hooks/           # Hooks personalizados
│   ├── store/           # Estado global
│   ├── utils/           # Utilidades
│   └── pages/           # Páginas de Astro
├── public/              # Archivos estáticos
└── ...
```

## Características

- Diseño responsivo con breakpoints personalizados
- Animaciones suaves y transiciones
- Optimización de rendimiento
- SEO optimizado
- Accesibilidad (WCAG)

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Dr. Sillworth - info@drsillworth.com

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
