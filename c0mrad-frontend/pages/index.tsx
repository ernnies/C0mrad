// pages/index.tsx
import Link from "next/link";

const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-yellow-600 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-8xl text-yellow-300 mb-8">c0mrad</h1>
        <p className="text-4xl mb-6">No-code DeFi automation app</p>
        <p className="text-2xl max-w-2xl mx-auto">
          Empowering users with AI-driven DeFi workflows on 0G blockchain.
        </p>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 py-6 bg-gray-800">
        <div className="flex space-x-6">
          <Link
            href="/features"
            className="px-6 py-3 bg-purple-700 rounded-lg hover:bg-purple-800 text-xl font-normal"
          >
            Features
          </Link>
          <Link
            href="/create"
            className="px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 text-xl font-normal"
          >
            Create
          </Link>
        </div>
        <div>
          <Link
            href="/connect"
            className="px-6 py-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-xl font-normal"
          >
            Connect Wallet
          </Link>
        </div>
      </nav>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What it does */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">What it does</h2>
            <p className="text-lg">
              C0mrad is a no-code, drag-and-drop DeFi automation app built on 0G’s
              decentralized AI Layer 1 blockchain. It empowers users to craft
              sophisticated crypto trading and DeFi workflows effortlessly,
              leveraging AI-driven analytics, real-time market data, and secure
              onchain execution to optimize strategies like yield farming,
              arbitrage, and automated swaps.
            </p>
          </div>

          {/* The problem it solves */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">The problem it solves</h2>
            <p className="text-lg">
              Traditional DeFi platforms require coding expertise, high costs,
              and centralized AI, limiting accessibility and transparency.
              C0mrad eliminates these barriers by offering a user-friendly
              interface, affordable decentralized AI via 0G Compute, and
              verifiable onchain workflows, making advanced financial automation
              a public good for all crypto enthusiasts.
            </p>
          </div>

          {/* Challenges I ran into */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">Challenges I ran into</h2>
            <p className="text-lg">Nothing serious for now</p>
          </div>

          {/* Technologies I used */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">Technologies I used</h2>
            <ul className="text-lg list-disc pl-6 space-y-2">
              <li>
                Next.js: For a fast, scalable front-end with dynamic routing.
              </li>
              <li>
                TypeScript: To ensure type-safe, maintainable code.
              </li>
              <li>
                Tailwind CSS: For a responsive, customizable drag-and-drop
                interface.
              </li>
              <li>
                0G Blockchain Services: Chain for smart contracts, Compute for
                AI, Storage for data, and DA for scalability.
              </li>
              <li>
                IPFS: For decentralized asset storage (e.g., workflow visuals).
              </li>
            </ul>
          </div>

          {/* How we built it */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">How we built it</h2>
            <p className="text-lg">
              We started with a prototype using Next.js and Tailwind CSS to
              design an intuitive drag-and-drop interface. Smart contracts were
              developed and deployed on 0G Chain to handle workflow execution.
              0G Compute powered AI models for market analysis, while 0G Storage
              secured user data. Iterative UI/UX refinements and subgraph
              integration for data querying completed the platform, with
              real-time analytics tied to 0G DA for scalability.
            </p>
          </div>

          {/* What we learned */}
          <div>
            <h2 className="text-3xl text-yellow-300 mb-4">What we learned</h2>
            <p className="text-lg">
              We gained deep insights into 0G’s modular architecture, mastering
              the synergy of its Chain, Compute, and Storage layers. Balancing AI
              accuracy with blockchain constraints taught us optimization
              techniques, and user feedback highlighted the need for simpler
              onboarding. Collaboration across AI and blockchain domains also
              sharpened our interdisciplinary skills.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6 text-center">
        <div className="space-x-6">
          <Link href="/documentation" className="text-blue-300 hover:text-blue-400">
            Documentation
          </Link>
          <Link href="/privacy-policy" className="text-blue-300 hover:text-blue-400">
            Privacy Policy
          </Link>
          <Link href="/faq" className="text-blue-300 hover:text-blue-400">
            FAQ
          </Link>
        </div>
        <p className="mt-2 text-sm">&copy; {getCurrentYear()} C0mrad. All rights reserved.</p>
      </footer>
    </div>
  );
}