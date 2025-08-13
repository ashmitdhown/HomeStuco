import React from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const TermsOfUse = () => (
  <PageBgAndCursor>
    <div className="max-w-3xl mx-auto p-8 text-white bg-gray-900/90 rounded-xl shadow-lg mt-24">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
    <p className="text-sm text-white/70 mb-2">Last updated: August 12, 2025</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><b>Purpose</b>: This site is managed by the Student Council to share news, events, and resources for the BITS Pilani Dubai community.</li>
      <li><b>Accuracy</b>: We try to keep all information up to date, but we can’t guarantee everything is always accurate or error-free.</li>
      <li><b>Use of Content</b>: You may read and share our content for personal or academic use. Please don’t copy, modify, or use it for commercial purposes without permission.</li>
      <li><b>Respectful Use</b>: Do not misuse the site (e.g., hacking attempts, spamming, posting inappropriate content).</li>
      <li><b>External Links</b>: We may link to other sites. We are not responsible for their content or policies.</li>
      <li><b>Changes</b>: We may update these terms at any time without prior notice.</li>
    </ul>
  </div>
  </PageBgAndCursor>
);

export default TermsOfUse;
