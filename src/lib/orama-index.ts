// src/lib/orama-index.ts
import { create, insert, search, save, load } from "@orama/orama";
import fs from "fs";
import path from "path";

// --- Configuración básica del esquema
const schema = {
  title: "string",
  content: "string",
  url: "string",
};

// --- Directorio donde están tus MDX (ajústalo si es distinto)
const docsDir = path.resolve("src/content/docs");

let db: any;

// --- Carga o crea el índice
async function buildIndex() {
  if (db) return db; // usa cache en memoria

  db = await create({ schema });

  const files = fs.readdirSync(docsDir).filter(f => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(docsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // extrae título (de frontmatter o primera línea tipo "# Título")
    const match = content.match(/^#\s*(.*)/m);
    const title = match ? match[1].trim() : file.replace(".mdx", "");

    await insert(db, {
      title,
      content,
      url: `/docs/${file.replace(".mdx", "")}`,
    });
  }

  return db;
}

// --- Función pública de búsqueda
export async function searchDocs(term: string) {
  const db = await buildIndex();
  const results = await search(db, { term });
  return results.hits.map((hit) => hit.document);
}
