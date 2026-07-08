import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Page() {
  return (
    <LegalStub
      title="Terms of Use"
      intro="This page will set out the terms governing use of this website."
    />
  );
}
