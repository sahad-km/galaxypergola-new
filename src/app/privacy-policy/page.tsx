import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Cluster Outdoor Solutions',
  description: 'Privacy Policy and data protection terms for Cluster Outdoor Solutions.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-bg pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-100 shadow-xl space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary block mb-2">
                Legal & Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-black">
                Privacy Policy
              </h1>
              <p className="text-xs text-neutral-gray mt-2">
                Last updated: August 2026
              </p>
            </div>

            <div className="prose prose-neutral max-w-none text-sm text-neutral-charcoal leading-relaxed space-y-6">
              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">1. Introduction</h2>
                <p>
                  Cluster Outdoor Solutions ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or interact with our services, in accordance with the New Zealand Privacy Act 2020.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">2. Information We Collect</h2>
                <p className="mb-2">We collect personal information that you voluntarily provide to us when requesting a quote, contacting our team, or booking an onsite consultation. This information includes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name</li>
                  <li>Email address and phone number</li>
                  <li>Property location / region (e.g. Taranaki, Whanganui)</li>
                  <li>Product interest, site requirements, and custom notes</li>
                  <li>Website analytics and technical log data (IP address, browser type)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">3. How We Use Your Information</h2>
                <p className="mb-2">Your information is used strictly for legitimate business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Processing quote requests and arranging free onsite consultations</li>
                  <li>Designing, manufacturing, and installing your shelter system</li>
                  <li>Communicating project updates, site visits, and warranty details</li>
                  <li>Improving our website performance, products, and customer experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">4. Data Storage and Security</h2>
                <p>
                  We store form submissions and customer communications securely using industry-standard encrypted storage and secure cloud databases. We take all reasonable administrative and technical precautions to protect your personal data from unauthorized access, loss, or misuse.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">5. Disclosure of Information</h2>
                <p>
                  We do not sell, rent, or trade your personal information to third parties. We may disclose your information only to trusted third-party service providers (such as sub-contracted installation crews or delivery logistics providers) who assist us in fulfilling your order, or where required by New Zealand law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">6. Your Rights</h2>
                <p>
                  Under the Privacy Act 2020, you have the right to request access to any personal information we hold about you and to request corrections if any information is inaccurate. To exercise these rights, please contact us at <a href="mailto:info@clusteroutdoor.co.nz" className="text-primary font-bold underline">info@clusteroutdoor.co.nz</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">7. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact Cluster Outdoor Solutions at:
                </p>
                <div className="mt-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-xs font-semibold text-neutral-charcoal">
                  <p className="font-extrabold text-neutral-black mb-1">Cluster Outdoor Solutions</p>
                  <p>Email: info@clusteroutdoor.co.nz</p>
                  <p>Phone: 022 420 2266</p>
                  <p>Regions: Taranaki & Whanganui, New Zealand</p>
                </div>
              </section>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex justify-between items-center">
              <Link href="/" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                ← Return to Home
              </Link>
              <Link href="/terms-of-trade" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-primary">
                View Terms of Trade →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
