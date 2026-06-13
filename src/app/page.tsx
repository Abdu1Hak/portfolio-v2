"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SummaryTab from "@/components/HomeTab";
import ProjectsTab from "@/components/ProjectsTab";
import ExperienceTab from "@/components/ExperienceTab";
import ContactModal from "@/components/ContactModal";
import CustomCursor from "@/components/CustomCursor";
import { portfolioData } from "@/data/portfolio";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("Summary");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const tabs = ["Summary", "Projects", "Experience"];

  // Open modal handler
  const openContact = () => setIsContactOpen(true);
  // Close modal handler
  const closeContact = () => setIsContactOpen(false);




  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Immersive Space Cosmic Background */}
  
      {/* Dark White Dotted Grid Background */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: -10,
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
      {/* Your Content/Components */}

      {/* Immersive Follow Cursor */}
      <CustomCursor />

      <div>
        {/* Navigation Bar */}
        <Navbar onContactClick={openContact} />

        {/* Hero Header */}
        <Header
          name={portfolioData.profile.name}
          badgeText={portfolioData.profile.badgeText}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />

        {/* Main Content Area */}
        <main className="w-full py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {activeTab === "Summary" && (
                <SummaryTab
                  interests={portfolioData.interests}
                  activities={portfolioData.activities}
                  awards={portfolioData.awards}
                />
              )}

              {activeTab === "Projects" && (
                <ProjectsTab
                  projects={portfolioData.projects}
                  metrics={portfolioData.metrics}
                />
              )}

              {activeTab === "Experience" && (
                <ExperienceTab experience={portfolioData.experience} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer Grid */}
      <Footer
        email={portfolioData.socials.email}
        github={portfolioData.socials.github}
        linkedin={portfolioData.socials.linkedin}
        twitter={portfolioData.socials.twitter}
        onEmailClick={openContact}
      />

      {/* Contact Popup Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        email={portfolioData.socials.email}
        github={portfolioData.socials.github}
        linkedin={portfolioData.socials.linkedin}
      />
    </div>
  );
}
