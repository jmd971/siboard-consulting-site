/* /cdn-cgi/l/email-protection : artefact Cloudflare d'obfuscation des
   adresses email, laisse par un hebergement anterieur. Jamais une page,
   rien a rediriger.

   410 Gone comme pour /tmp/ : Google desindexe plus vite un
   « definitivement parti » qu'un « introuvable ». */

export const dynamic = "force-static";

export function GET() {
  return new Response(null, { status: 410, statusText: "Gone" });
}

export function generateStaticParams() {
  return [];
}
