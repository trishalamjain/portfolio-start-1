// app/page.tsx
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="content-wrapper">
      {/* Pixel graphics remain unchanged, sizes are set in global.css */}

      <main className="flex flex-grow w-full h-full relative z-10">
        {/* Left 65% (Main body) */}
        <section className="w-[65%] flex flex-col h-full pr-8">
          <div className="my-auto">
            {/* Headline with correct bolding */}
            <h1 className="text-headline font-sans mb-0 leading-tight">
              Hello!
              <br />
              I&apos;m <span className="font-bold">Trishala Jain.</span>
            </h1>

            {/* Tagline with negative margin for closer spacing */}
            <p className="text-tagline mt-[-1rem] font-sans leading-tight w-[90%]">
              I build communication tools, ideate strategy playbooks, and ship human-centric products.
            </p>

            {/* Added separate paragraph for "Feel free..." with top margin for spacing */}
            <p className="text-tagline text-gray-700 font-sans mt-4"> {/* Added mt-4 for spacing */}
              Feel free to reach out! trishala [@] berkeley.edu
            </p>
          </div>

          {/* This div now only contains the LinkedIn icon and remains at the bottom */}
          <div className="mt-auto">
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedinIn size={32} className="text-gray-800 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Right 35% (Sidebar column) */}
        <aside className="w-[30%] flex flex-col items-end h-full text-right pl-8"> {/* Removed justify-center from aside */}
          {/* Added flex-grow and justify-center to nav for robust vertical centering */}
          <nav className="flex-grow flex flex-col justify-center">
            <ul className="list-none p-0 m-10">
              <li className="mb-3">
                <a href="/case-studies" target="_blank" rel="noopener noreferrer" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Case Studies</span> of a product manager
                </a>
              </li>
              <li className="mb-3">
                <a href="/crato" target="_blank" rel="noopener noreferrer" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Crato</span>, a capstone project agency
                </a>
              </li>
              <li className="mb-3">
                <a href="https://oratoraai.com" target="_blank" rel="noopener noreferrer" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
                  <span className="font-bold">Oratora</span>, an ai-powered enterprise LMS
                </a>
              </li>
              <li className="mb-3">
                <a href="/blog" target="_blank" rel="noopener noreferrer" className="text-nav-link whitespace-nowrap font-sans nav-link-style">
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