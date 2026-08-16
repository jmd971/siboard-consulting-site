/* Artefacts du constructeur de pages GoHighLevel, du type
   /tmp/workspace/production/leadgen/common/builder-preview/locales/no.json
   Le fichier de langue norvegien implique une trentaine de voisins :
   une regle generale vaut mieux que des redirections une par une.

   410 Gone plutot que 404 : le 410 dit « definitivement parti », ce que
   Google traite plus vite pour desindexer.

   ⚠️ Ne jamais bloquer /tmp/ dans le robots.txt. Google ne pourrait plus
   explorer ces URLs, donc plus constater qu'elles sont mortes, et il les
   garderait indexees plus longtemps. */

export const dynamic = "force-static";

export function GET() {
  return new Response(null, { status: 410, statusText: "Gone" });
}

export function generateStaticParams() {
  return [];
}
