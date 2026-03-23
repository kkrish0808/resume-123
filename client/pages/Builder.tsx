import { useState } from "react";
import Header from "@/components/Header";
import {
  Upload,
  Download,
  FileText,
  Plus,
  Trash2,
  Save,
} from "lucide-react";

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
  }>;
  skills: string[];
}

export default function Builder() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const [activeTab, setActiveTab] = useState("contact");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // In a real app, you'd parse the document here
      alert("Document uploaded! You can now edit the content below.");
    }
  };

  const handleContactChange = (
    field: keyof Pick<ResumeData, "fullName" | "email" | "phone" | "location" | "summary">
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData({ ...resumeData, [field]: e.target.value });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const deleteExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          graduationDate: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const deleteEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);
    setResumeData({ ...resumeData, skills });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Editor Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 hover:border-blue-400 transition">
              <div className="flex flex-col items-center">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <label className="cursor-pointer">
                  <span className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                    Upload Your Resume
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-gray-500 text-sm mt-2">
                  or drag and drop (PDF, Word, TXT)
                </p>
                {uploadedFile && (
                  <p className="text-green-600 text-sm mt-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {uploadedFile.name}
                  </p>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
              {["contact", "experience", "education", "skills"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-semibold transition capitalize ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Sections */}
            <div className="bg-white rounded-xl p-8 space-y-6">
              {/* Contact Information */}
              {activeTab === "contact" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={resumeData.fullName}
                      onChange={handleContactChange("fullName")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={resumeData.email}
                        onChange={handleContactChange("email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={resumeData.phone}
                        onChange={handleContactChange("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={resumeData.location}
                      onChange={handleContactChange("location")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Professional Summary
                    </label>
                    <textarea
                      value={resumeData.summary}
                      onChange={handleContactChange("summary")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                      rows={4}
                      placeholder="Brief overview of your professional background..."
                    />
                  </div>
                </div>
              )}

              {/* Experience */}
              {activeTab === "experience" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Work Experience
                    </h3>
                    <button
                      onClick={addExperience}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Plus className="w-4 h-4" />
                      Add Experience
                    </button>
                  </div>

                  {resumeData.experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-6 border border-gray-300 rounded-lg space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(exp.id, "company", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Position
                          </label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) =>
                              updateExperience(exp.id, "position", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Job Title"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Start Date
                          </label>
                          <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) =>
                              updateExperience(exp.id, "startDate", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Jan 2020"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            End Date
                          </label>
                          <input
                            type="text"
                            value={exp.endDate}
                            onChange={(e) =>
                              updateExperience(exp.id, "endDate", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Present"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(exp.id, "description", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                          rows={3}
                          placeholder="Describe your responsibilities and achievements..."
                        />
                      </div>

                      <button
                        onClick={() => deleteExperience(exp.id)}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-semibold"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {activeTab === "education" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                    <button
                      onClick={addEducation}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Plus className="w-4 h-4" />
                      Add Education
                    </button>
                  </div>

                  {resumeData.education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-6 border border-gray-300 rounded-lg space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            School/University
                          </label>
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) =>
                              updateEducation(edu.id, "school", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="University Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Degree
                          </label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(edu.id, "degree", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Bachelor of Science"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Field of Study
                          </label>
                          <input
                            type="text"
                            value={edu.field}
                            onChange={(e) =>
                              updateEducation(edu.id, "field", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Computer Science"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Graduation Date
                          </label>
                          <input
                            type="text"
                            value={edu.graduationDate}
                            onChange={(e) =>
                              updateEducation(edu.id, "graduationDate", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="May 2023"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => deleteEducation(edu.id)}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-semibold"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {activeTab === "skills" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Skills</h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Skills (comma-separated)
                    </label>
                    <textarea
                      value={resumeData.skills.join(", ")}
                      onChange={handleSkillsChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                      rows={4}
                      placeholder="JavaScript, React, TypeScript, Node.js, CSS..."
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-4">Your skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Preview</h3>

              <div className="space-y-6 text-sm">
                {resumeData.fullName && (
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {resumeData.fullName}
                    </p>
                    {resumeData.email && (
                      <p className="text-gray-600">{resumeData.email}</p>
                    )}
                    {resumeData.phone && (
                      <p className="text-gray-600">{resumeData.phone}</p>
                    )}
                  </div>
                )}

                {resumeData.summary && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Summary</p>
                    <p className="text-gray-600 text-xs line-clamp-3">
                      {resumeData.summary}
                    </p>
                  </div>
                )}

                {resumeData.experience.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Experience</p>
                    <p className="text-gray-600 text-xs">
                      {resumeData.experience.length} position(s)
                    </p>
                  </div>
                )}

                {resumeData.education.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Education</p>
                    <p className="text-gray-600 text-xs">
                      {resumeData.education.length} degree(s)
                    </p>
                  </div>
                )}

                {resumeData.skills.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {resumeData.skills.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{resumeData.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="w-full flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
