import { Link } from "react-router-dom";
import Header from "@/components/Header";
import {
  Upload,
  Zap,
  FileText,
  Download,
  Edit3,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Upload,
      title: "Easy Document Upload",
      description:
        "Upload your documents in any format and let us handle the parsing",
    },
    {
      icon: Edit3,
      title: "Smart Editing",
      description:
        "Intuitive editor with real-time preview to create your perfect resume",
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description:
        "Export your resume as PDF, Word, or plain text in seconds",
    },
    {
      icon: Zap,
      title: "AI-Powered Suggestions",
      description:
        "Get intelligent suggestions to improve your resume content",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "See how your resume performs with ATS (Applicant Tracking Systems)",
    },
    {
      icon: FileText,
      title: "Templates & Themes",
      description:
        "Professional templates designed for modern hiring practices",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Upload Your Document",
      description: "Upload your existing resume or CV to get started",
    },
    {
      number: "2",
      title: "Edit & Customize",
      description:
        "Fine-tune every detail with our intuitive resume builder",
    },
    {
      number: "3",
      title: "Export & Share",
      description: "Download or share your resume in your preferred format",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  Build Your Perfect Resume
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create a professional resume in minutes. Upload documents, edit
                  with our intelligent editor, and export in any format. Made for
                  job seekers who want to stand out.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/builder"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 text-center"
                >
                  Start Building Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9★</p>
                  <p className="text-gray-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-8 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">
                      Your Resume
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">ATS Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">
                        Professional Format
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">Ready to Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you create a resume that gets
              noticed by recruiters and passes ATS systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition group"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg w-fit mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your professional resume ready in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-200 -z-10" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of job seekers creating winning resumes
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-white">ResumeBuilder</span>
            </div>
            <p className="text-center md:text-right">
              © 2024 ResumeBuilder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
