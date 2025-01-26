import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-neutral-600">
            We may collect personal information from you, including but not limited to:
            <ul className="list-disc list-inside">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information</li>
            </ul>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-neutral-600">
            We use the information we collect to:
            <ul className="list-disc list-inside">
              <li>Provide and maintain our services</li>
              <li>Communicate with you</li>
              <li>Process transactions</li>
              <li>Personalize your experience</li>
              <li>Improve our services</li>
            </ul>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
          <p className="text-neutral-600">
            We may share your information with third parties only in the ways that are described in this Privacy Policy. We do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
          <p className="text-neutral-600">
            You have the right to:
            <ul className="list-disc list-inside">
              <li>Access and update your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your personal information</li>
            </ul>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="text-neutral-600">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
          <p className="text-neutral-600">
            Your information, including personal information, may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to Our Privacy Policy</h2>
          <p className="text-neutral-600">
            We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you here.
          </p>
        </section>
      </div>
    </div>
  );
}
