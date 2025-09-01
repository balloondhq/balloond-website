// pages/careers.tsx
import type { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { prisma } from '../lib/prisma';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

interface CareersProps {
  careers: JobPosition[];
}

const Careers: NextPage<CareersProps> = ({ careers }) => {
  return (
    <>
      <NextSeo
        title="Careers - Balloon'd"
        description="Join the team at Balloon'd and help us build the future of authentic connections. Explore our open positions."
        canonical="https://balloond.com/careers"
      />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-stone-600">
              Join our passionate team and help people build meaningful connections.
              We're looking for talented individuals who want to make a difference.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">
              Open Positions
            </h2>
            {careers.length > 0 ? (
              <div className="space-y-6">
                {careers.map((job) => (
                  <div key={job.id} className="bg-stone-50 border border-stone-200 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-stone-900">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-stone-600 mt-2">
                        <span>{job.department}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎈</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">No Open Positions</h3>
                <p className="text-stone-600">
                  We're not currently hiring, but check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const careers = await prisma.career.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        department: true,
        location: true,
        type: true,
      },
      orderBy: { datePosted: 'desc' },
    });

    return {
      props: {
        careers: careers.map(career => ({
          ...career,
        })),
      },
    };
  } catch (error) {
    console.error('Error fetching careers:', error);
    return {
      props: {
        careers: [],
      },
    };
  }
};

export default Careers;
