// app/crato/page.tsx
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata = {
  title: 'Crato - Capstone Project Coaching',
  description: 'Guided capstone project coaching to enhance college applications.',
};

const SampleProjectCard = ({ category, points }: { category: string; points: string[] }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold tracking-tight mb-4 text-gray-800">
      {category}
    </h3>
    <ul className="list-none pl-0 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start text-gray-700 font-sans text-base leading-relaxed">
          <span className="mr-2 text-gray-500 text-lg leading-none">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function CratoPage() {
  return (
    // Increased py-32 to py-40 for maximum top/bottom spacing
    <section className="py-40">
      {/* Central content container: Drastically reduced max-width and increased side padding */}
      <div className="max-w-2xl mx-auto px-20 lg:px-24"> {/* Changed max-w-4xl to max-w-2xl; increased px-16 to px-20/24 */}

        {/* Main Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-sans leading-tight mb-4 text-gray-900 balance-text">
            Capstone Project Coaching for College Admissions
          </h1>
          <p className="text-2xl font-light font-sans text-gray-700 max-w-2xl mx-auto">
            Create the Story Colleges Want to See
          </p>
        </div>

        {/* Introduction / Core Value Proposition */}
        <div className="mb-20 text-center"> {/* Removed max-w-3xl, relying on parent's max-w-2xl */}
          <p className="font-sans text-xl leading-relaxed text-gray-800 mb-6">
            Most counselors help students refine what already exists.
            <span className="font-semibold text-blue-600 ml-2">I help students build what doesn’t.</span>
          </p>
          <p className="font-sans text-lg leading-relaxed text-gray-700">
            Through guided capstone projects, from startups to social impact campaigns, I help students
            design, launch, and grow initiatives that bring coherence, depth, and real-world impact to their
            college applications.
          </p>
        </div>

        {/* Why Capstone Projects? Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-gray-900 text-center">
            Why Capstone Projects?
          </h2>
          <div className="grid grid-cols-1 gap-8"> {/* Removed md:grid-cols-2, relying on single column within max-w-2xl */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Narrative & Depth</h3>
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Capstone projects transform fragmented activities into a focused narrative arc. They don’t just say
                what a student cares about…they show it. Executed well, these projects demonstrate creativity,
                leadership, initiative, and purpose – exactly the traits top colleges seek.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Application Impact</h3>
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                Students can write about these capstone projects in their college essays, connecting the dots
                between a variety of extracurricular activities to show a final leadership project weaving the
                experiences together. Capstone projects can also be written about in the activities and
                extracurriculars section of the college application.
              </p>
            </div>
          </div>
        </div>

        {/* My High School Background Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-gray-900 text-center">
            My High School Background
          </h2>
          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-8 text-center"> {/* Removed max-w-2xl, relying on parent's max-w-2xl */}
            I’ve launched and scaled several projects that shaped my own admissions story:
          </p>
          <ul className="list-disc list-inside font-sans text-lg leading-relaxed text-gray-800 space-y-4">
            <li><span className="font-medium text-blue-600">Interned at NASA & published a research paper</span> on COVID-19’s impact on aviation and urban air mobility</li>
            <li><span className="font-medium text-blue-600">Founded TEDxDublinHigh</span>, leading licensing, speaker curation, and event execution for the high school’s first TEDx event</li>
            <li><span className="font-medium text-blue-600">Co-founded an ocular health startup</span> that raised $100k+ in venture capital</li>
            <li><span className="font-medium text-blue-600">Built Bloom Startup Competition</span>, a global all-girls virtual startup competition with 300+ participants across 12+ countries</li>
            <li><span className="font-medium text-blue-600">Authored startup curriculum</span> used by 2,000+ girls worldwide through the Technovation Challenge.</li>
          </ul>
          <p className="font-sans text-xl italic text-gray-600 mt-12 text-center"> {/* Removed max-w-3xl, relying on parent's max-w-2xl */}
            These experiences led to acceptances at every UC, Berkeley MET (merit scholarship), UPenn M&T, USC, UT Austin, UIUC (merit scholarship), Georgia Tech (merit scholarship), Purdue Honors, and Michigan Ross (merit scholarship). All for CS + Business.
          </p>
        </div>

        {/* Sample Capstone Projects Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-gray-900 text-center">
            Sample Capstone Projects
          </h2>
          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-10 text-center"> {/* Removed max-w-xl, relying on parent's max-w-2xl */}
            Customized guidance based on your interests and goals. Here are some examples:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Simplified grid for narrower parent */}
            <SampleProjectCard
              category="🤖 Technology"
              points={[
                "Launch a high school hackathon (templates provided).",
                "Build a startup (guidance on ideation, MVP, landing page, interviews).",
              ]}
            />
            <SampleProjectCard
              category="🧬 Bio/Medicine"
              points={[
                "Build a patient education platform or TikTok-style channel (content research, scripting, outreach).",
                "Launch a community health campaign (planning, partnerships, execution strategy).",
              ]}
            />
            <SampleProjectCard
              category="📈 Business"
              points={[
                "Organize a Youth Entrepreneurship Fair (workshops, pitch competitions).",
                "Create a high school VC simulation (pitch decks, rubrics, game structure).",
                "Build and scale a Gen-Z market trends blog (positioning, content, distribution).",
              ]}
            />
            <SampleProjectCard
              category="🌍 Community Service"
              points={[
                "Launch a youth-led campaign to improve language access, transportation, or tech access (storytelling, local advocacy strategy).",
              ]}
            />
            <SampleProjectCard
              category="⚽ Sports"
              points={[
                "Build an inclusive rec sports league (recruiting teams, finding sponsors, promoting the league).",
              ]}
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-800">
            Flexible Pricing for Every Vision
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-6 text-blue-700 max-w-xl mx-auto"> {/* Removed max-w-2xl, relying on parent's max-w-2xl but added max-w-xl to this p */}
            Packages range from <span className="text-blue-900 font-extrabold">$500</span> (1-month project guidance)
            to <span className="text-blue-900 font-extrabold">$2,500+</span> (multi-month comprehensive support).
          </p>
          <p className="font-sans text-lg italic text-blue-700">
            Custom quotes are available after a free consultation to discuss your specific goals and scope.
          </p>
        </div>

        {/* About Me Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-gray-900">
            About Me
          </h2>
          <p className="font-sans text-lg leading-relaxed text-gray-700 max-w-xl mx-auto mb-4"> {/* Removed max-w-2xl, relying on parent's max-w-2xl but added max-w-xl to this p */}
            A UC Berkeley MET graduate, I've served as Student Board President (2023-2024) and VP of Admissions & Marketing (2022-2023).
          </p>
          <p className="font-sans text-lg leading-relaxed text-gray-700 max-w-xl mx-auto mb-4"> {/* Removed max-w-2xl, relying on parent's max-w-2xl but added max-w-xl to this p */}
            I'm an incoming Associate Product Manager (APM) at Google, and co-founder of an AI-first enterprise L&D platform backed by Mayfield Fund and Unusual Ventures.
          </p>
        </div>

        {/* Next Steps Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8 shadow-inner border border-gray-100">
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-gray-900">
            Ready to Create Your Story?
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-8 text-gray-700 max-w-xl mx-auto">
            Schedule a free 15-minute consultation to see if this is the right fit for you:
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:trishala@berkeley.edu"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="mr-3 text-white" /> trishala@berkeley.edu
            </a>
            <a
              href="tel:+19255499821"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="mr-3 text-gray-600" /> 925-549-9821
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}