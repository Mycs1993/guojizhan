import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { CheckCircle, Award, Users, Globe, Factory, Target, TrendingUp, Shield, Zap, Leaf } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FacilityImage } from "@/components/about/FacilityImage";
import { GlobalMap } from "@/components/about/GlobalMap";
import Image from "next/image";

const baseUrl = "https://gljyw.top";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
  const companyName = getCompInfo('name');

  return {
    title: t("title"),
    description: `${companyName} - ${t("subtitle")}. ${t("intro").slice(0, 100)}...`,
    keywords: ["boiler manufacturer", "China boiler factory", "industrial boiler supplier", "pressure vessel manufacturer", "boiler company", "ISO9001 boiler", "steam boiler manufacturer"],
    openGraph: {
      title: t("title"),
      description: `${companyName} - ${t("subtitle")}`,
      url: `${baseUrl}/about`,
      type: "website",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("AboutPage");

  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
  const companyName = getCompInfo('name');

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            {companyName} - {t("subtitle")}
          </p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            {t("subtitle2")}
          </p>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t("companyProfile")}</h2>
            <div className="prose prose-slate lg:prose-lg text-slate-600">
              <p className="mb-4">
                {getCompInfo('intro')}
              </p>
              <p className="mb-4">
                {getCompInfo('location')}
              </p>
              <p className="mb-4">
                {t("commitment")}
              </p>
              <p>
                {t("team")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100">
                <div className="text-blue-600 font-bold text-4xl mb-2">{new Date().getFullYear() - COMPANY_INFO.founded}+</div>
                <div className="text-sm text-slate-600 font-medium">{t("yearsExperience")}</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100">
                <div className="text-blue-600 font-bold text-4xl mb-2">A-Class</div>
                <div className="text-sm text-slate-600 font-medium">{t("manufacturingLicense")}</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100">
                <div className="text-blue-600 font-bold text-4xl mb-2">2000+</div>
                <div className="text-sm text-slate-600 font-medium">{t("globalClients")}</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100">
                <div className="text-blue-600 font-bold text-4xl mb-2">60K m²</div>
                <div className="text-sm text-slate-600 font-medium">{t("factoryArea")}</div>
              </div>
            </div>

            {/* Global Map Section */}
            <div className="mt-8 h-64 md:h-80">
              <GlobalMap />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                {t("certifications")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert4")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert5")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert6")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert7")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert8")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert9")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{t("cert10")}</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
                    <Image
                      src={`/images/about/certificates/cert-${i}.jpg`}
                      alt={`Certificate ${i}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 33vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>



      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">{t("ourMission")}</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">{t("ourVision")}</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {t("visionDesc")}
            </p>
          </div>
        </div>

        {/* Core Strengths Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t("coreStrengths")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("strength1Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("strength1Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-green-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("strength2Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("strength2Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-purple-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("strength3Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("strength3Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("strength4Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("strength4Desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Product Range Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">{t("productRange")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product1Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product1Desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product2Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product2Desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product3Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product3Desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product4Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product4Desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product5Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product5Desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">{t("product6Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("product6Desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Service & Support Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">{t("serviceSupport")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("service1Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("service1Desc")}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("service2Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("service2Desc")}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("service3Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("service3Desc")}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{t("service4Title")}</h4>
              <p className="text-sm text-slate-600">
                {t("service4Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Factory Image Placeholder Section */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">{t("facilities")}</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            {t("facilitiesDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/production-workshop.jpg"
                alt={t("facility1Title")}
                icon="Factory"
                iconColor="text-blue-600"
                gradientFrom="from-blue-100"
                gradientTo="to-blue-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility1Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility1Desc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/quality-testing-lab.jpg"
                alt={t("facility2Title")}
                icon="Shield"
                iconColor="text-green-600"
                gradientFrom="from-green-100"
                gradientTo="to-green-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility2Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility2Desc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/rd-center.jpg"
                alt={t("facility3Title")}
                icon="Zap"
                iconColor="text-purple-600"
                gradientFrom="from-purple-100"
                gradientTo="to-purple-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility3Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility3Desc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/material-storage.jpg"
                alt={t("facility4Title")}
                icon="Award"
                iconColor="text-orange-600"
                gradientFrom="from-orange-100"
                gradientTo="to-orange-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility4Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility4Desc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/assembly-area.jpg"
                alt={t("facility5Title")}
                icon="Users"
                iconColor="text-cyan-600"
                gradientFrom="from-cyan-100"
                gradientTo="to-cyan-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility5Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility5Desc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <FacilityImage
                src="/images/facilities/quality-control.jpg"
                alt={t("facility6Title")}
                icon="CheckCircle"
                iconColor="text-indigo-600"
                gradientFrom="from-indigo-100"
                gradientTo="to-indigo-200"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t("facility6Title")}</h3>
                <p className="text-sm text-slate-600">{t("facility6Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
