import React from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const CodeOfConduct = () => (
  <PageBgAndCursor>
    <div className="max-w-3xl mx-auto p-8 text-white bg-gray-900/90 rounded-xl shadow-lg mt-24">
      <h1 className="text-3xl font-bold mb-4">Code of Conduct</h1>
    <p className="text-sm text-white/70 mb-2">Last updated: August 12, 2025</p>
    <p className="mb-4">We want our online spaces to reflect the spirit of BITS Pilani Dubai — respectful, inclusive, and collaborative.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Be respectful to all members of the community.</li>
      <li>Use polite and constructive language in comments or submissions.</li>
      <li>Avoid harassment, discrimination, or offensive material.</li>
      <li>Follow college rules and UAE laws when using this site.</li>
    </ul>
    <p className="mt-4">Violations may result in removal of posts, loss of access to site features, or further action in line with college policies.</p>
  </div>
  </PageBgAndCursor>
);

export default CodeOfConduct;
