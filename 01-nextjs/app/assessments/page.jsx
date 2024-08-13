"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// experience data
const experience = {
  icon: "/assets/assessments/badge.svg",
  title: "GCP Security Assessments",
  description:
    "Our comprehensive security assessments evaluate your Google Cloud Platform services against industry best practices and compliance standards.",
  items: [
    {
      service: "Cloud Run",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Compliant",
    },
    {
      service: "Cloud Functions",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Partially Compliant",
    },
    {
      service: "Cloud Storage",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Compliant",
    },
    {
      service: "Compute Engine",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Compliant",
    },
    {
      service: "Cloud SQL",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Partially Compliant",
    },
    {
      service: "Cloud IAM",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Compliant",
    },
    {
      service: "Virtual Private Cloud (VPC)",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Compliant",
    },
    {
      service: "Kubernetes Engine (GKE)",
      criteria: "NIST CSF, CIS Benchmarks, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001",
      verdict: "Partially Compliant",
    },
  ],
};

// education data
const education = {
  icon: "/assets/assessments/cap.svg",
  title: "Assessment Methodology",
  description:
    "Our security assessments begin with a thorough review of each GCP service's configuration and security posture. We continuously monitor Google Cloud news and updates to ensure our assessments reflect the latest best practices and vulnerabilities. This proactive approach allows us to adapt our methodology and maintain accurate, up-to-date evaluations of your GCP environment's security.",
};

// skills data
const skills = {
  title: "GCP Expertise",
  description:
    "Our team of certified Google Cloud professionals holds a deep understanding of GCP security best practices and compliance frameworks. We leverage this expertise to conduct thorough assessments, identifying potential vulnerabilities and providing tailored recommendations for improvement. With Cloud Blueprints, you're gaining access to proven expertise in securing your GCP environment.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Assessments = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Assessments</TabsTrigger>
            <TabsTrigger value="education">Methodology</TabsTrigger>
            <TabsTrigger value="skills">Expertise</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* assessment */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.verdict}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.service}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.criteria}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Assessments;
