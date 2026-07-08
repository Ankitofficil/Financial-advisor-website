import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = { title: "Disclosures & Investor Charter" };

export default function Page() {
  return (
    <LegalStub
      title="Disclosures & Investor Charter"
      intro="This page will host the firm's regulatory disclosures, the SEBI Investor Charter for Investment Advisers, complaint data, and other mandated documents."
    />
  );
}
