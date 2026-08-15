import { redirect } from "next/navigation";

// L'audit gratuit est devenu L'État des lieux, prestation payante — voir CLAUDE.md
export default function AuditGratuitPage() {
  redirect("/etat-des-lieux");
}
