"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { boards, type EBoardMember } from "@/lib/data/eboard";

const roleColors: Record<string, string> = {
  "Co-President": "bg-lavender-100 text-lavender-600 border-lavender-200",
  "Vice President": "bg-sky-100 text-sky-600 border-sky-200",
  "Treasurer": "bg-blush-100 text-pink-500 border-blush-200",
  "Secretary": "bg-green-50 text-emerald-600 border-emerald-100",
  "Event Coordinator": "bg-amber-50 text-amber-600 border-amber-100",
  "Marketing Chair": "bg-violet-50 text-violet-600 border-violet-100",
};

function MemberCard({ member }: { member: EBoardMember }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Photo area */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-lavender-100 via-sky-100 to-blush-100 overflow-hidden">
          <Image
            src={member.photo}
            alt={`${member.name} — ${member.role}`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-violet-deep leading-tight">
                {member.name}
              </h3>
              <span
                className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${
                  roleColors[member.role] ??
                  "bg-lavender-50 text-lavender-500 border-lavender-100"
                }`}
              >
                {member.role}
              </span>
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="w-8 h-8 rounded-xl bg-lavender-100 flex items-center justify-center text-lavender-500 hover:bg-lavender-200 transition-colors flex-shrink-0"
              >
                <Linkedin size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BoardGrid({ members }: { members: EBoardMember[] }) {
  const presidents = members.filter(
    (m) => m.role === "Co-President" || m.role === "President"
  );
  const vp = members.filter((m) => m.role === "Vice President");
  const rest = members.filter(
    (m) =>
      m.role !== "Co-President" &&
      m.role !== "President" &&
      m.role !== "Vice President"
  );

  return (
    <>
      {/* Presidents + VP row */}
      {(presidents.length > 0 || vp.length > 0) && (
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5 max-w-2xl mx-auto">
          {[...presidents, ...vp].map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </StaggerContainer>
      )}

      {/* Rest of the board */}
      {rest.length > 0 && (
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {rest.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </StaggerContainer>
      )}
    </>
  );
}

function EmptyBoard({ year }: { year: string }) {
  return (
    <div className="glass rounded-3xl p-10 md:p-14 text-center max-w-xl mx-auto shadow-card">
      <div className="text-4xl mb-4">✦</div>
      <h3 className="font-display text-2xl font-semibold text-violet-deep mb-2">
        Coming soon
      </h3>
      <p className="font-body text-sm text-slate-500 leading-relaxed">
        The {year} e-board will be announced after spring elections. Follow
        our socials to hear when applications open.
      </p>
    </div>
  );
}

export function EBoard() {
  // Default to the most recent year that actually has members
  const defaultYear =
    [...boards].reverse().find((b) => b.members.length > 0)?.year ??
    boards[boards.length - 1].year;
  const [activeYear, setActiveYear] = useState(defaultYear);
  const activeBoard = boards.find((b) => b.year === activeYear) ?? boards[0];

  return (
    <section
      id="eboard"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Pixel grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="E-Board"
          title="Meet the team."
          subtitle="The people behind WiCS — dedicated to building community and making things happen."
          className="mb-10"
        />

        {/* Year tab switcher */}
        {boards.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-2xl bg-lavender-100 gap-1">
              {boards.map((board) => (
                <button
                  key={board.year}
                  onClick={() => setActiveYear(board.year)}
                  className="relative px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-colors duration-200"
                >
                  {activeYear === board.year && (
                    <motion.div
                      layoutId="eboard-tab-bg"
                      className="absolute inset-0 bg-white rounded-xl shadow-card"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      activeYear === board.year
                        ? "text-violet-deep"
                        : "text-slate-400"
                    }`}
                  >
                    {board.year}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {activeBoard.members.length > 0 ? (
              <BoardGrid members={activeBoard.members} />
            ) : (
              <EmptyBoard year={activeBoard.year} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Recruitment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-lavender-200/50 shadow-soft">
            <span className="text-base">🌟</span>
            <p className="font-body text-sm text-slate-600">
              Interested in joining the e-board?{" "}
              <a
                href="#join"
                className="font-semibold text-lavender-500 hover:text-lavender-600 transition-colors"
              >
                Stay connected for announcements
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
