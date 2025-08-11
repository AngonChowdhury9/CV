import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  Globe,
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CV() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${baseUrl}CV_Angon_Chowdhury.pdf`;
    link.download = "CV_Angon_Chowdhury.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 pt-8 pb-16" id="cv-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 md:sticky md:top-6 self-start h-fit">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto aspect-square w-32 rounded-full overflow-hidden mb-4 shadow">
                  <img
                    src={`${baseUrl}Angon.jpg`}
                    alt="Profile"
                    className="w-full h-full object-contain rotate-0"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Angon Chowdhury
                </CardTitle>
                <p className="text-muted-foreground mt-1">Software Engineer</p>

                <div className="flex justify-center space-x-2 mb-0">
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="LinkedIn"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/angon-chowdhury/",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-4" />
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 mr-3 mt-1 text-muted-foreground" />
                    <span>angonchowdhuryiiuc@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>+8801881460708</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1 text-muted-foreground" />
                    <span>Chittagong, Bangladesh</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="space-y-2 mt-6">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={downloadPDF}
                    >
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-8 space-y-8">
            <section id="about">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-justify">
                    I’m a passionate Software Engineer with expertise in full
                    stack development, specializing in .NET Framework, Angular,
                    and OutSystems low-code platform. Continuously learning and
                    evolving my skills in software development, DevOps, and
                    cloud computing to stay ahead in the fast-changing tech
                    landscape
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="experience">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* SJ Group Experience */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white flex items-center justify-center">
                        <img
                          src={`${baseUrl}sj_logo.jpeg`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-semibold text-base">
                              SJ Group
                            </h3>
                            <span className="text-sm text-gray-500">
                              Full-time · 2 yrs 2 mos
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 mt-1 md:mt-0">
                            Apr 2025 – Jun 2025
                          </span>
                        </div>
                        {/* Timeline */}
                        <div className="ml-2 border-l-2 border-gray-200 pl-4 mt-2">
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm">
                              Software Engineer
                            </h4>
                            <div className="text-xs text-gray-500 mb-1">
                              Apr 2025 – Jun 2025
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">
                              Junior Software Engineer
                            </h4>
                            <div className="text-xs text-gray-500 mb-1">
                              May 2023 – Apr 2025
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* S3 Innovate Experience */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white flex items-center justify-center">
                        <img
                          src={`${baseUrl}s3innovate_logo.jpeg`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-semibold text-base">
                              S3 Innovate Pte. Ltd.
                            </h3>
                            <span className="text-sm text-gray-500">
                              Full-time · 8 mos
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 mt-1 md:mt-0">
                            Aug 2022 – April 2023
                          </span>
                        </div>
                        {/* Timeline */}
                        <div className="mt-1">
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm">
                              Trainee Software Engineer
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Dev Skill Experience */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white flex items-center justify-center">
                        <img
                          src={`${baseUrl}devSkill_logo.jpeg`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-semibold text-base">
                              Dev Skill
                            </h3>
                            <span className="text-sm text-gray-500">
                              Internship · 3 mos
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 mt-1 md:mt-0">
                            May 2022 – Jul 2022
                          </span>
                        </div>
                        {/* Timeline */}
                        <div className="mt-1">
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm">
                              Intern (Software Engineering)
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="projects">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  {/* Project Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="font-semibold text-lg">
                      AETOS Admin System
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>.NET</Badge>
                      <Badge>Angular</Badge>
                      <Badge>PostgreSQL</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 text-justify">
                      This project manages all administrative functions for
                      AETOS, including employee management, project monitoring,
                      HR management, and rescue operations. I worked on a
                      dedicated module to develop and enhance features for
                      employee monitoring and human resource management.
                    </p>
                  </div>
                  {/* Project Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="font-semibold text-lg">Experiential LMS</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>OutSystems O11</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 text-justify">
                      Supported and enhanced an OutSystems-based Learning
                      Management System (LMS) by resolving bugs, implementing
                      new features, and developing enhancements to improve
                      functionality and user experience. Collaborated directly
                      with clients to gather requirements, provide updates, and
                      ensure satisfaction.
                    </p>
                  </div>
                  {/* Project Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="font-semibold text-lg">
                      1Infiniti – Project Management System
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>.NET</Badge>
                      <Badge>Angular</Badge>
                      <Badge>PostgreSQL</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 text-justify">
                      It’s a large-scale SaaS-based project management system
                      that simulates processes from tendering to carbon emission
                      calculations. Functioning as an ERP, it includes seven
                      modules, and I handled the complete development lifecycle
                      of three covering implementation and integration.
                    </p>
                  </div>
                  {/* Project Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="font-semibold text-lg">
                      MDB LTMS – Lift Management System
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>.NET</Badge>
                      <Badge>Angular</Badge>
                      <Badge>MSSQL</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 text-justify">
                      This large-scale project analyzes data from numerous smart
                      sensor-enabled lifts across Singapore, generating valuable
                      insights from the tremendous amount of sensor data
                      collected. The application primarily monitors lift
                      operations and facilitates quick action in case of any
                      issues. I contributed by developing operational programs
                      to present various types of data insights effectively.
                    </p>
                  </div>
                  {/* Project Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="font-semibold text-lg">
                      Devify – Multi-Vendor System
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>C#</Badge>
                      <Badge>.NET Framework</Badge>
                      <Badge>SignalR</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 text-justify">
                      This multi-vendor web application allows users to create
                      and manage eCommerce sites with an inventory system. Users
                      receive a subdomain for customer access, while a Super
                      Admin manages store permissions and payments. During my
                      training program, I developed CRUD operations, configured
                      subdomains, and designed Super Admin features.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="skills">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-left">
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="backend" className="w-full">
                    {/* Tab Buttons */}
                    <TabsList className="flex gap-2 p-2 bg-gray-50 rounded-lg">
                      <TabsTrigger
                        value="backend"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        Backend
                      </TabsTrigger>
                      <TabsTrigger
                        value="frontend"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        Frontend
                      </TabsTrigger>
                      <TabsTrigger
                        value="uiux"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        UI/UX
                      </TabsTrigger>
                      <TabsTrigger
                        value="cloud"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        Cloud & Containerization
                      </TabsTrigger>
                      <TabsTrigger
                        value="database"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        Database
                      </TabsTrigger>
                      <TabsTrigger
                        value="lowcode"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border border-gray-200"
                      >
                        Low Code Development
                      </TabsTrigger>
                    </TabsList>

                    {/* Tab Contents */}
                    <TabsContent
                      value="backend"
                      className="mt-4 animate-fadeIn"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          C#
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          .NET 6+
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Entity Framework
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          LINQ
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Dependency Injection
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          .Net Identity Server
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Unit Testing(Nunit)
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Threading
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg">
                          SignalR
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          REST API
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Minimal APIs
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Logging (Serilog, NLog)
                        </Badge>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="frontend"
                      className="mt-4 animate-fadeIn"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Angular
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Typescript
                        </Badge>
                      </div>
                    </TabsContent>

                    <TabsContent value="uiux" className="mt-4 animate-fadeIn">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Figma
                        </Badge>
                      </div>
                    </TabsContent>

                    <TabsContent value="cloud" className="mt-4 animate-fadeIn">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Docker
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          AWS SQS
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          AWS S3
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          AWS DynamoDB
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Azure API Management
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Azure Data Studio
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Azure Functions
                        </Badge>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="database"
                      className="mt-4 animate-fadeIn"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          Microsoft SQL Server
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          PostgreSQL
                        </Badge>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="lowcode"
                      className="mt-4 animate-fadeIn"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          OutSystems O11
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          OutSystems Service Studio
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          OutSystems Lifecycle
                        </Badge>
                        <Badge className="w-full py-2 text-base flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg hover:text-black">
                          OutSystems Service Center
                        </Badge>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Animation style */}
              <style>
                {`
                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(4px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                  }
                `}
              </style>
            </section>

            {/* Certifications Section - moved to right side */}
            <section id="certifications">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-bold">
                      Certifications
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="p-4 rounded-lg bg-white/80 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 group">
                        <a
                          href="https://devskill.com/Certificate/273/1yj3rcga0i0?referralCode=ANGD011231"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                          aria-label="View certificate"
                        >
                          <Globe className="w-5 h-5 text-blue-500" />
                        </a>
                        <div>
                          <span className="font-semibold">
                            Full Stack Asp.net Core MVC Web Development
                          </span>
                          <div className="text-xs text-gray-500 mt-1">
                            By <b>Dev Skill</b>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-4 rounded-lg bg-white/80 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 group">
                        <a
                          href="https://devskill.com/Certificate/46/sarfrlmlls0?referralCode=ANGD011231"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                          aria-label="View certificate"
                        >
                          <Globe className="w-5 h-5 text-blue-500" />
                        </a>
                        <div>
                          <span className="font-semibold  ">
                            Professional Programming with C#
                          </span>
                          <div className="text-xs text-gray-500 mt-1">
                            By <b>Dev Skill</b>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
            <section id="education">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="pl-0">
                    {/* Degree 1 */}
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 3L2 8l10 5 10-5-10-5zm0 7.5L4.21 8.21l7.79 3.89 7.79-3.89L12 10.5zm0 2.5v7.5m-6-2.5v-2.5m12 2.5v-2.5"
                            stroke="#6366f1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">
                          Bachelor of Science in Computer Science & Engineering
                        </h3>
                        <p className="text-sm text-gray-500">
                          International Islamic University Chittagong,
                          Chattogram
                        </p>
                        <p className="text-xs text-gray-400">
                          CGPA: 3.21 / 4.00
                        </p>
                      </div>
                    </div>
                    {/* Degree 2 */}
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 3L2 8l10 5 10-5-10-5zm0 7.5L4.21 8.21l7.79 3.89 7.79-3.89L12 10.5zm0 2.5v7.5m-6-2.5v-2.5m12 2.5v-2.5"
                            stroke="#6366f1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">
                          Higher Secondary School Certificate
                        </h3>
                        <p className="text-sm text-gray-500">
                          Hazera Tazu Degree College, Chattogram
                        </p>
                        <p className="text-xs text-gray-400">
                          GPA: 4.17 / 5.00
                        </p>
                      </div>
                    </div>
                    {/* Degree 3 */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 3L2 8l10 5 10-5-10-5zm0 7.5L4.21 8.21l7.79 3.89 7.79-3.89L12 10.5zm0 2.5v7.5m-6-2.5v-2.5m12 2.5v-2.5"
                            stroke="#6366f1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">
                          Secondary School Certificate
                        </h3>
                        <p className="text-sm text-gray-500">
                          Mern Sun School, Chattogram
                        </p>
                        <p className="text-xs text-gray-400">
                          GPA: 5.00 / 5.00
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
