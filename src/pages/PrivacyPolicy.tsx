import React from "react";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const PrivacyPolicy = () => (
  <PageBgAndCursor>
    <div className="max-w-3xl mx-auto p-8 text-white bg-gray-900/90 rounded-xl shadow-lg mt-24">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="text-sm text-white/70 mb-2">Last updated: August 12, 2025</p>
    <p className="mb-4">Your privacy matters to us.</p>
    <h2 className="text-xl font-semibold mt-4 mb-2">What we collect</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Information you provide through forms (e.g., name, email, student ID, event registrations).</li>
      <li>Basic site analytics (page views, clicks) to improve the site.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-4 mb-2">How we use it</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>To manage event registrations and communications.</li>
      <li>To improve site features and content.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-4 mb-2">How we protect it</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Data is stored securely and only accessible by authorized Student Council members and relevant college staff.</li>
      <li>We do not sell, rent, or share your personal information with outside organizations.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-4 mb-2">Your rights</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>You can request to view or delete your personal data by contacting us at <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="underline">studentcouncil@dubai.bits-pilani.ac.in</a>.</li>
    </ul>
  </div>
  </PageBgAndCursor>
);

export default PrivacyPolicy;
