"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeTab from "@/components/HomeTab";
import ProjectsTab from "@/components/ProjectsTab";
import ExperienceTab from "@/components/ExperienceTab";
import ContactModal from "@/components/ContactModal";
import CustomCursor from "@/components/CustomCursor";
import { portfolioData } from "@/data/portfolio";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const tabs = ["Home", "Projects", "Experience"];

  // Open modal handler
  const openContact = () => setIsContactOpen(true);
  // Close modal handler
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
      {/* Immersive Space Cosmic Background */}
      <div className="space-bg">
        <div className="nebula-glow-1" />
        <div className="nebula-glow-2" />
        <div className="nebula-glow-3" />
        <div className="star-field" />
      </div>

      {/* Immersive Follow Cursor */}
      <CustomCursor />

      <div>
        {/* Navigation Bar */}
        <Navbar onContactClick={openContact} />

        {/* Hero Header */}
        <Header
          name={portfolioData.profile.name}
          bio={portfolioData.profile.bio}
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
              {activeTab === "Home" && (
                <HomeTab
                  interests={portfolioData.interests}
                  goals={portfolioData.goals}
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
        version={portfolioData.profile.version}
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
