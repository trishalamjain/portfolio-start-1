// app/case-studies/page.tsx
export const metadata = {
    title: 'Case Studies',
    description: 'Explore my product management case studies.',
  };
  
  export default function CaseStudiesPage() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Case Studies</h1>
        <p>This is where my product management case studies will go.</p>
        {/* Add your case study content here */}
      </section>
    );
  }