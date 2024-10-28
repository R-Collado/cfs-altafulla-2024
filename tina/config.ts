import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "player",
        label: "Players",
        path: "src/content/players",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nombre del jugador",
            required: true,
          },
          {
            type: "string",
            name: "first_surname",
            label: "Primer apellido",
            required: true,
          },
          {
            type: "string",
            name: "second_surname",
            label: "Segundo apellido",
            required: false,
          },
          {
            type: "string",
            name: "nickname",
            label: "Apodo",
            required: false,
          },
          {
            type: "string",
            name: "role",
            label: "Posición",
            options: [
              {
                value: "keeper",
                label: "Portero",
              },
              {
                value: "defender",
                label: "Cierre",
              },
              {
                value: "wing",
                label: "Ala",
              },
              {
                value: "pivot",
                label: "Pivot",
              },
            ],
            ui: {
              component: "radio-group",
              direction: "vertical",
            },
          },
          {
            type: "number",
            name: "number",
            label: "Dorsal",
            required: true,
          },
          {
            type: "number",
            name: "age",
            label: "Edad",
            required: true,
          },
          {
            type: "datetime",
            name: "birth_date",
            label: "Fecha de nacimiento",
            required: true,
          },
          {
            type: "string",
            name: "birth_place",
            label: "Lugar de nacimiento",
            required: true,
          },
          {
            type: "string",
            name: "birth_country",
            label: "País de nacimiento",
            required: true,
          },
          {
            type: "number",
            name: "background",
            label: "Background",
            required: true,
          },
          {
            type: "string",
            name: "last_teams",
            label: "Otros equipos",
            list: true,
            ui: {
              component: "tags",
              min: 1,
            },
            required: true,
          },
          {
            type: "number",
            name: "season_matches",
            label: "Partidos esta temporada",
            required: true,
          },
          {
            type: "number",
            name: "season_goals",
            label: "Goles esta temporada",
            required: true,
          },
          {
            type: "number",
            name: "total_matches",
            label: "Partidos totales",
            required: true,
          },
          {
            type: "number",
            name: "total_goals",
            label: "Goles totales",
            required: true,
          },
        ],
      },
      {
        name: "article",
        label: "Articles",
        path: "src/content/articles",
        defaultItem: () => {
          return {
            date: new Date().toISOString(),
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "post_id",
            label: "Id del post",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
            required: true,
          },
          {
            type: "image",
            name: "imageSrc",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Alt text for Featured Image",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Resumen",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
              min: 1,
            },
            required: true,
          },
          {
            type: "string",
            name: "lang",
            label: "Idioma",
            options: [
              {
                value: "es",
                label: "Español",
              },
              {
                value: "ca",
                label: "Catalán",
              },
              {
                value: "en",
                label: "Inglés",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo del artículo",
            isBody: true,
          },
        ],
      },
    ],
  },
});
