// app/crato/page.tsx
import styles from './Crato.module.css';

export const metadata = {
  title: 'Crato - Capstone Project Coaching',
  description: 'Guided capstone project coaching to enhance college applications.',
};

const SampleProjectCard = ({ category, points }: { category: string; points: string[] }) => (
  <div className={styles.sampleProjectCard}>
    <h3 className={styles.sampleProjectCategory}>{category}</h3>
    <ul className={styles.sampleProjectList}>
      {points.map((point, index) => (
        <li key={index} className={styles.sampleProjectListItem}>
          <span className={styles.sampleProjectBullet}>•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function CratoPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>

        {/* Main Title Section */}
        <div className={`${styles.section} ${styles.textCenter}`}>
          <h1 className={styles.title}>
            Capstone Project Coaching for College Admissions
          </h1>
          <p className={styles.subtitle}>
            Create the Story Colleges Want to See
          </p>
        </div>

        {/* Introduction / Core Value Proposition */}
        <div className={`${styles.section} ${styles.textCenter}`}>
          <p className={styles.valueProp}>
            Most counselors help students refine what already exists.
            <span className={styles.valuePropHighlight}>I help students build what doesn’t.</span>
          </p>
          <p className={styles.paragraph}>
            Through guided capstone projects, from startups to social impact campaigns, I help students design, launch, and grow initiatives that bring coherence, depth, and real-world impact to their college applications.
          </p>
        </div>

        {/* Why Capstone Projects? Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Capstone Projects?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleBlue}`}>Narrative & Depth</h3>
              <p className={styles.paragraph}>
                Capstone projects transform fragmented activities into a focused narrative arc. They don’t just say what a student cares about…they show it. Executed well, these projects demonstrate creativity, leadership, initiative, and purpose – exactly the traits top colleges seek.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleGreen}`}>Application Impact</h3>
              <p className={styles.paragraph}>
                Students can write about these capstone projects in their college essays, connecting the dots between a variety of extracurricular activities to show a final leadership project weaving the experiences together. Capstone projects can also be written about in the activities and extracurriculars section of the college application.
              </p>
            </div>
          </div>
        </div>

        {/* My High School Background Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My High School Background</h2>
          <p className={`${styles.paragraph} ${styles.textCenter}`} style={{ marginBottom: '2rem' }}>
            I’ve launched and scaled several projects that shaped my own admissions story:
          </p>
          <ul className={styles.list}>
            <li><span>Interned at NASA & published a research paper</span> on COVID-19’s impact on aviation and urban air mobility</li>
            <li><span>Founded TEDxDublinHigh</span>, leading licensing, speaker curation, and event execution for the high school’s first TEDx event</li>
            <li><span>Co-founded an ocular health startup</span> that raised $100k+ in venture capital</li>
            <li><span>Built Bloom Startup Competition</span>, a global all-girls virtual startup competition with 300+ participants across 12+ countries</li>
            <li><span>Authored startup curriculum</span> used by 2,000+ girls worldwide through the Technovation Challenge.</li>
          </ul>
          <p className={styles.italic}>
            These experiences led to acceptances at every UC, Berkeley MET (merit scholarship), UPenn M&T, USC, UT Austin, UIUC (merit scholarship), Georgia Tech (merit scholarship), Purdue Honors, and Michigan Ross (merit scholarship). All for CS + Business.
          </p>
        </div>

        {/* Sample Capstone Projects Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Sample Capstone Projects</h2>
          <p className={`${styles.paragraph} ${styles.textCenter}`} style={{ marginBottom: '2.5rem' }}>
            Customized guidance based on your interests and goals. Here are some examples:
          </p>
          <div className={styles.sampleProjectGrid}>
            <SampleProjectCard category="Technology" points={["Launch a high school hackathon (templates provided).", "Build a startup (guidance on ideation, MVP, landing page, interviews)."]} />
            <SampleProjectCard category="Bio/Medicine" points={["Build a patient education platform or TikTok-style channel (content research, scripting, outreach).", "Launch a community health campaign (planning, partnerships, execution strategy)."]} />
            <SampleProjectCard category="Business" points={["Organize a Youth Entrepreneurship Fair (workshops, pitch competitions).", "Create a high school VC simulation (pitch decks, rubrics, game structure).", "Build and scale a Gen-Z market trends blog (positioning, content, distribution)."]} />
            <SampleProjectCard category="Community Service" points={["Launch a youth-led campaign to improve language access, transportation, or tech access (storytelling, local advocacy strategy)."]} />
            <SampleProjectCard category="Sports" points={["Build an inclusive rec sports league (recruiting teams, finding sponsors, promoting the league)."]} />
          </div>
        </div>

        {/* Pricing Section */}
        <div className={`${styles.section} ${styles.pricingSection}`}>
          <h2 className={styles.pricingTitle}>Flexible Pricing for Every Vision</h2>
          <p className={styles.pricingText}>
            Packages range from <span className={styles.pricingAmount}>$500</span> (1-month project guidance) to <span className={styles.pricingAmount}>$2,500+</span> (multi-month comprehensive support).
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`} style={{ marginTop: 0 }}>
            Custom quotes are available after a free consultation to discuss your specific goals and scope.
          </p>
        </div>

        {/* About Me Section */}
        <div className={`${styles.section} ${styles.textCenter}`}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.paragraph} style={{ marginBottom: '1rem' }}>
            A UC Berkeley MET graduate, I've served as Student Board President (2023-2024) and VP of Admissions & Marketing (2022-2023).
          </p>
          <p className={styles.paragraph}>
            I'm an incoming Associate Product Manager (APM) at Google, and co-founder of an AI-first enterprise L&D platform backed by Mayfield Fund and Unusual Ventures.
          </p>
        </div>

        {/* Next Steps Section */}
        <div className={`${styles.section} ${styles.ctaSection}`}>
          <h2 className={styles.ctaTitle}>Ready to Create Your Story?</h2>
          <p className={styles.ctaText}>
            Schedule a free 15-minute consultation to see if this is the right fit for you:
          </p>
          <div className={styles.ctaButtonWrapper}>
            <a href="mailto:trishala@berkeley.edu" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`} target="_blank" rel="noopener noreferrer">
              trishala@berkeley.edu
            </a>
            <a href="tel:+19255499821" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`} target="_blank" rel="noopener noreferrer">
              925-549-9821
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}