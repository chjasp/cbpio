"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const guides = [
  {
    num: "01",
    title: "Cloud Run Cookbook",
    description:
      "Comprehensive guide to deploying and managing containerized applications on Google Cloud Run. Learn best practices for scalable and efficient serverless deployments.",
    href: "",
  },
  {
    num: "02",
    title: "VPC Service Controls Guide",
    description:
      "In-depth exploration of VPC Service Controls in GCP. Discover how to define security perimeters and protect sensitive data in your cloud environment.",
    href: "",
  },
  {
    num: "03",
    title: "Private Service Connect Guide",
    description:
      "Master the intricacies of Private Service Connect in GCP. Learn to securely access services across VPC networks and improve your cloud network architecture.",
    href: "",
  },
  {
    num: "04",
    title: "Web Application on GCP Guide",
    description:
      "Step-by-step tutorial for building and deploying web applications on Google Cloud Platform. Covers App Engine, Cloud Storage, and other essential GCP services.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Guides = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {guides.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Guides;
