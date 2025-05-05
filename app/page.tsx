import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-8 font-sans">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sadat Sagar</h1>
        <p className="text-lg text-gray-700">Sydney | 0490517409 | sadatmd.sagar@gmail.com | <a href="https://github.com/DeathBlade205" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/DeathBlade205</a> | <a href="https://sadatmd.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sadatmd.vercel.app/</a></p>
      </header>

      {/* Education Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-700">The University of Technology Sydney</h3>
          <p className="text-gray-600">BS in Computing Science</p>
          <p className="text-gray-600">NSW, Australia | Graduating 2027-2028</p>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Projects</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-700">Esports Timetable Manager</h3>
          <p className="text-gray-600">HSC Major Project - 10 Weeks</p>
          <p className="text-gray-600 mb-2"><a href="https://github.com/DeathBlade205/Software-Major" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/DeathBlade205/Software-Major</a></p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tailored the tool specifically to address scheduling and communication issues faced by competitive esports teams.</li>
            <li>Created a clean and functional user interface for easy navigation and input of team data.</li>
            <li>Used GitHub for version control and collaborative development practices.</li>
            <li>Applied object-oriented design principles to create scalable and reusable components.</li>
          </ul>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work Experience</h2>

        {/* Winning Group */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-xl font-medium text-gray-700">Winning Group</h3>
          <p className="text-gray-600">Full-stack Developer</p>
          <p className="text-gray-600">NSW | 2025</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Used version control systems to manage contributions and ensure smooth integration.</li>
            <li>Contributed to UI/UX improvements based on developer and stakeholder feedback.</li>
            <li>Collaborated in Agile teams using GitBucket and Jira to develop and ship web-based product updates.</li>
            <li>Resolved bugs and implemented feature enhancements based on QA reports and user feedback.</li>
            <li>Wrote and maintained frontend, backend and Database code, contributing to scalable platform improvements.</li>
          </ul>
        </div>

        {/* Appliances Online */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-xl font-medium text-gray-700">Appliances Online</h3>
          <p className="text-gray-600">Customer Sales and Service Consultant</p>
          <p className="text-gray-600">NSW | 2024-2025</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Acted as liaison between stakeholders (installers, customers, manufacturers) to resolve conflicts.</li>
            <li>Used internal software systems to log, track, and manage customer service cases efficiently.</li>
            <li>Built strong team relationships and contributed to a positive workplace culture.</li>
            <li>Documented product issue trends for internal reporting and product team feedback.</li>
            <li>Gained expertise across product lines through structured technical training.</li>
          </ul>
        </div>

        {/* KFC */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-xl font-medium text-gray-700">KFC</h3>
          <p className="text-gray-600">Restaurant Crew Member</p>
          <p className="text-gray-600">NSW | 2020-2021</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Managed high-pressure cooking tasks while maintaining consistency and food safety standards.</li>
            <li>Followed strict standard operating procedures for hygiene, equipment safety, and food prep.</li>
            <li>Supported team members in both front- and back-of-house roles when needed.</li>
            <li>Built resilience and accountability through consistently high performance.</li>
          </ul>
        </div>
      </section>

      {/* Miscellaneous Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Miscellaneous</h2>

        {/* Local Mosques */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-xl font-medium text-gray-700">Local Mosques</h3>
          <p className="text-gray-600">Community Volunteer</p>
          <p className="text-gray-600">NSW | 2025</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provided guidance and support to community members in both social and faith-based contexts.</li>
            <li>Supported digital and physical coordination of prayer times, events, and announcements.</li>
            <li>Maintained cleanliness and organization of shared spaces to promote accessibility and safety.</li>
          </ul>
        </div>

        {/* Esports */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-xl font-medium text-gray-700">Esports</h3>
          <p className="text-gray-600">Competitive Valorant Player</p>
          <p className="text-gray-600 mb-2"><a href="https://www.vlr.gg/player/37160/deathblade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.vlr.gg/player/37160/deathblade</a></p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Competed in regional and national tournaments, including LPL Gold and VCL Oceania.</li>
            <li>Developed and shared custom Sova lineups and strategies, contributing to team success.</li>
            <li>Practiced rapid decision-making and problem-solving in high-stress environments.</li>
            <li>Demonstrated leadership in and out of the game through strategy development and team support.</li>
            <li>Balanced tournament commitments with academic and professional goals.</li>
          </ul>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Interests</h2>
        <p className="text-gray-600">
          <span className="font-medium">Skills:</span> Python, Flask, Java, Docker, Linux, Cloud, SQL, CI/CD, PHP, BitBucket, git, Jira
        </p>
        {/* Add Interests if available in the future */}
      </section>

      {/* Footer Section (Optional) */}
      <footer className="text-center text-gray-600 mt-10">
        <p>&copy; {new Date().getFullYear()} Sadat Sagar. All rights reserved.</p>
      </footer>
    </div>
  );
}
