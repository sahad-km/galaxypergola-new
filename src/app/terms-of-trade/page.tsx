import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Trade | Cluster Outdoor Solutions',
  description: 'Terms of Trade and supply conditions for Cluster Outdoor Solutions.',
};

export default function TermsOfTradePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-bg pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-100 shadow-xl space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary block mb-2">
                Legal & Supply Conditions
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-black">
                Terms of Trade
              </h1>
              <p className="text-xs text-neutral-gray mt-2">
                Last updated: August 2026
              </p>
            </div>

            <div className="prose prose-neutral max-w-none text-sm text-neutral-charcoal leading-relaxed space-y-6">
              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">1. General</h2>
                <p>
                  These Terms of Trade govern all quotes, orders, custom manufacturing, supply, and installation services provided by Cluster Outdoor Solutions ("the Company") to the customer ("the Client"). By accepting a quote or placing an order, the Client agrees to be bound by these Terms of Trade.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">2. Quotations & Pricing</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All quotations remain valid for 30 days from the date of issue unless stated otherwise in writing.</li>
                  <li>Prices are quoted in New Zealand Dollars (NZD) and include GST unless specified otherwise.</li>
                  <li>Quotations are based on site details provided or measured during initial assessment. Any unforeseen site structural requirements or building consent modifications may incur additional charges.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">3. Payment Terms & Finance</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Custom manufacturing begins upon order confirmation and receipt of the agreed deposit or finance agreement.</li>
                  <li>Final payment is due upon practical completion of installation or delivery of kitset components.</li>
                  <li>Any late payments may incur interest calculated at 2.5% per month on outstanding balances.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">4. Site Access & Installation</h2>
                <p>
                  The Client must ensure clear and safe access to the installation area for our installation team and equipment. It is the Client's responsibility to inform the Company of any hidden underground utilities or structural hazards before work commences.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">5. Guarantees & Warranties</h2>
                <p className="mb-2">Cluster Outdoor Solutions structures come backed by comprehensive warranty terms:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>10-Year Structural Warranty:</strong> Covers structural aluminium framing, posts, and roof panels against manufacturing defect and severe atmospheric breakdown.</li>
                  <li><strong>5-Year Finish / Component Warranty:</strong> Covers powder-coated surface finishes, motors, and track hardware under standard environmental conditions.</li>
                  <li><strong>2-Year Workmanship Warranty:</strong> Covers installation joinery and weather-sealing integrity executed by authorized Cluster Outdoor installers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by New Zealand law, the Company's liability for any defect, delay, or breach shall be limited to the repair or replacement of defective materials or services. The Company shall not be liable for indirect or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-neutral-black mb-3">7. Governing Law</h2>
                <p>
                  These Terms of Trade are governed by and construed in accordance with the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of New Zealand courts.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex justify-between items-center">
              <Link href="/" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                ← Return to Home
              </Link>
              <Link href="/privacy-policy" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-primary">
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
