import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalStub
      title="Privacy Policy"
      intro="This page will describe how the firm collects, uses, and safeguards client information, consistent with Regulation S-P."
    />
  );
}
