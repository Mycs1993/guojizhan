import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const baseUrl = "https://www.yudongboiler.com";

export const metadata: Metadata = {
  title: "About Us - Leading Boiler Manufacturer Since 1976",
  description: `${COMPANY_INFO.name} - A legacy of quality and innovation since ${COMPANY_INFO.founded}. Class A Boiler Manufacturing License, ISO9001 Certified. Exported to Southeast Asia, Europe, North America.`,
  keywords: ["boiler manufacturer", "China boiler factory", "industrial boiler supplier", "pressure vessel manufacturer", "boiler company", "ISO9001 boiler"],
  openGraph: {
    title: "About Us - Leading Boiler Manufacturer Since 1976",
    description: `${COMPANY_INFO.name} - Over 40 years of experience in industrial boiler manufacturing.`,
    url: `${baseUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            {COMPANY_INFO.name} - A legacy of quality and innovation since {COMPANY_INFO.founded}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Profile</h2>
            <div className="prose prose-slate lg:prose-lg text-slate-600">
              <p className="mb-4">
                {COMPANY_INFO.intro}
              </p>
              <p className="mb-4">
                Located in the {COMPANY_INFO.location}, our facility covers an area of 60,000 square meters. 
                We are proud to be one of the leading manufacturers in the boiler industry, dedicated to 
                providing energy-efficient and environmentally friendly heating solutions.
              </p>
              <p>
                Our commitment to quality is backed by our "Class A" Boiler Manufacturing License and 
                "Class D" Pressure Vessel Manufacturing License. We are also a council member of the 
                China Industrial Boiler Association and a member of the China Welding Association.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-blue-600 font-bold text-3xl mb-1">40+</div>
                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-blue-600 font-bold text-3xl mb-1">A-Class</div>
                <div className="text-sm text-slate-500 font-medium">Manufacturing License</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" />
                Certifications & Honors
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Class A Boiler Manufacturing License</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Class D Pressure Vessel Design & Manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700">ISO9001 Quality Management System Certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700">"Contract-honoring & Promise-keeping" Enterprise</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-blue-200" />
                Global Reach
              </h3>
              <p className="mb-6 text-blue-100">
                Our products are not only popular in the domestic market but are also exported to 
                Southeast Asia, Europe, North America, and other regions, showcasing the strength 
                of Chinese manufacturing.
              </p>
              <div className="flex items-center gap-2 font-medium">
                <Users size={20} className="text-blue-200" />
                <span>Serving 2000+ Industrial Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Factory Image Placeholder Section */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center text-slate-500 font-medium">
                 Factory/Workshop Image {i}
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
