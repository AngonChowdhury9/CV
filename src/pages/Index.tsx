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
          <div className="md:col-span-4 md:sticky md:top-8 self-start h-fit">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto aspect-square w-32 rounded-full overflow-hidden mb-4 border border-gray-300 shadow">
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

                <div className="flex justify-center mt-4 space-x-2">
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

                <div className="space-y-2 mt-6">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={downloadPDF}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
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
                    and OutSystems low-code platform. I have hands-on experience
                    building scalable enterprise applications and integrating
                    cloud services like Azure and AWS. Skilled at collaborating
                    with clients to gather requirements and delivering
                    high-quality solutions that meet business needs.
                    Continuously learning and evolving my skills in software
                    development, DevOps, and cloud computing to stay ahead in
                    the fast-changing tech landscape
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="experience">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Experience Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Software Engineer
                        </h3>
                        <p className="text-muted-foreground">
                          Surbana Technologies Pte. Ltd.
                        </p>
                      </div>
                      <Badge variant="outline" className="h-fit">
                        May 2023 – Present
                      </Badge>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Software Engineering Trainee
                        </h3>
                        <p className="text-muted-foreground">
                          S3 Innovate Pte. Ltd.
                        </p>
                      </div>
                      <Badge variant="outline" className="h-fit">
                        Aug 2022 – Apr 2023
                      </Badge>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Software Engineer Intern
                        </h3>
                        <p className="text-muted-foreground">Dev Skill</p>
                      </div>
                      <Badge variant="outline" className="h-fit">
                        May 2022 – July 2022
                      </Badge>
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
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Backend Development */}
                  <div>
                    <h4 className="font-semibold text-base mb-2">
                      Backend Development
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                      <li>
                        Full Stack Web Application development using .NET
                        Framework, C#, Microsoft SQL Server, and PostgreSQL
                      </li>
                      <li>
                        Developing Windows Services using the .NET Worker
                        Service tool
                      </li>
                      <li>
                        Advanced C# features: Reflection, LINQ, Delegates &
                        Events, Threading, Collections, Expressions
                      </li>
                      <li>Writing Unit Tests using NUnit for .NET Framework</li>
                      <li>
                        Building Web APIs using the Web Service tool of .NET
                        Framework following REST API conventions
                      </li>
                    </ul>
                  </div>

                  {/* Cloud & Containerization */}
                  <div>
                    <h4 className="font-semibold text-base mb-2">
                      Cloud & Containerization
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                      <li>
                        Containerizing .NET Web applications using Docker
                        Desktop and Command Prompt
                      </li>
                      <li>
                        Developing Windows Services using the .NET Worker
                        Service tool
                      </li>
                      <li>Familiar with AWS tools: SQS, S3 Bucket, DynamoDB</li>
                      <li>
                        Working with Azure services: Azure API Management
                        (APIM), Azure Data Studio
                      </li>
                      <li>Hands-on experience with Azure Functions</li>
                    </ul>
                  </div>

                  {/* Architecture & Design */}
                  <div>
                    <h4 className="font-semibold text-base mb-2">
                      Architecture & Design
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                      <li>
                        Maintaining Object-Oriented Design Principles: SOLID,
                        DRY, YAGNI, PEN
                      </li>
                      <li>
                        Familiarity with Design Patterns: Unit of Work,
                        Repository, Singleton, Builder
                      </li>
                      <li>
                        Familiar with Microservices and Clean Architecture
                        patterns
                      </li>
                    </ul>
                  </div>

                  {/* Frontend Development & UI/UX */}
                  <div>
                    <h4 className="font-semibold text-base mb-2">
                      Frontend Development & UI/UX
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                      <li>Angular for frontend development</li>
                      <li>Experience in UI/UX design using Figma</li>
                    </ul>
                  </div>

                  {/* Low-Code Development */}
                  <div>
                    <h4 className="font-semibold text-base mb-2">
                      Low-Code Development
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                      <li>
                        Designing and developing responsive web and mobile
                        applications using OutSystems Service Studio.
                      </li>
                      <li>
                        Creating data models and entity relationships directly
                        within the platform.
                      </li>
                      <li>
                        Implementing business logic with client/server actions
                        and built-in functions.
                      </li>
                      <li>
                        Applying lifecycle management with OutSystems Lifetime
                        for staging and deployment.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="education">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">
                      Bachelor of Science in Computer Science & Engineering
                    </h3>
                    <p className="text-muted-foreground">
                      International Islamic University Chittagong, Chattogram,
                      Bangladesh.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      CGPA: 3.21 / 4.00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">
                      Higher Secondary School Certificate
                    </h3>
                    <p className="text-muted-foreground">
                      Hazera Tazu Degree College, Chattogram, Bangladesh.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      GPA: 4.17 / 5.00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">
                      Secondary School Certificate
                    </h3>
                    <p className="text-muted-foreground">
                      Mern Sun School, Chattogram, Bangladesh.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      GPA: 5.00 / 5.00
                    </p>
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
