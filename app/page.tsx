// app/page.tsx
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="content-wrapper">
      {/* Pixel graphics remain unchanged */}
      <Image
        src="/burst-shape.png"
        alt="Blue pixel burst shape"
        width={4000}
        height={4000}
        className="pixel-graphic-top-left"
        priority
      />

      <Image
        src="/blob-shape.png"
        alt="Blue pixel blob shape"
        width={3500}
        height={3500}
        className="pixel-graphic-bottom-right"
      />

      <main className="flex flex-grow w-full h-full relative z-10">
        {/* Left 65% (Main body) */}
        <section className="w-[65%] flex flex-col h-full pr-8">
        <div className="my-auto">
            {/* 1. "Hello! I'm" now not bold, "Trishala Jain." is bold */}
            <h1 className="text-headline font-bold mb-0 leading-tight">
              Hello!
              <br />
              I&apos;m <span className="font-bold">Trishala Jain.</span>
            </h1>

            <p className="text-tagline mt-[-1.5rem] font-sans leading-tight w-[90%]">
              I build communication tools, ideate strategy playbooks, and ship human-centric products.
            </p>
          </div>

          <div className="mt-auto">
            <p className="text-contact-link text-gray-700 font-sans">
              Feel free to reach out! trishala [@] berkeley.edu
            </p>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedinIn size={32} className="text-gray-800 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Right 35% (Sidebar column) */}
        <aside className="w-[35%] flex flex-col items-end justify-center h-full text-right pl-8">
          {/* Added list-none to remove bullet points */}
          <nav>
            <ul className="list-none p-0 m-0"> {/* Removed default padding/margin as well */}
              <li className="mb-3">
                {/* Applied new nav-link-style class */}
                <a href="/case-studies" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Case Studies</span> of a product manager
                </a>
              </li>
              <li className="mb-3">
                <a href="/crato" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Crato</span>, a capstone project agency
                </a>
              </li>
              <li className="mb-3">
                <a href="/oratora" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Oratora</span>, an ai-powered enterprise LMS
                </a>
              </li>
              {/* --- REMOVED: The <li> for the cursor image and its associated Image component --- */}
              <li className="mb-3"> {/* Re-added mb-3 and simplified the li as cursor is gone */}
                <a href="/knick-knacks" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Knick Knacks</span>, a personal blog
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  );
}