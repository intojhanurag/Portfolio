import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";


const DSA = () => {
  // Static stats for now (update as needed)
  const stats = {
    submissions: 2225,
    maxStreak: 103,
    currentStreak: 14,
    ActiveDays:320,
    Contests:50,
    codolioUrl: "https://codolio.com/profile/5TCQCjMM",
  };

  return (
    <Card className="border border-blue-900 bg-black w-full  shadow-xl p-6 md:p-9 rounded-xl max-w-3xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2">
            DSA Grinding
            <Badge className="ml-2 bg-green-600 text-white">LIVE</Badge>
          </h2>
          <div className="flex flex-wrap gap-6 mt-3 text-gray-200">
            <div>
              <span className="text-xl font-bold text-green-400">{stats.submissions}</span>
              <span className="block text-xs uppercase tracking-widest text-gray-400">Submissions</span>
            </div>
            <div>
              <span className="text-xl font-bold text-green-300">{stats.maxStreak}</span>
              <span className="block text-xs uppercase tracking-widest text-gray-400">Max Streak</span>
            </div>
            <div>
              <span className="text-xl font-bold text-green-200">{stats.currentStreak}</span>
              <span className="block text-xs uppercase tracking-widest text-gray-400">Cur. Streak</span>
            </div>
            <div>
              <span className="text-xl font-bold text-green-200">{stats.ActiveDays}+</span>
              <span className="block text-xs uppercase tracking-widest text-gray-400">Active Days</span>
            </div>
            <div>
              <span className="text-xl font-bold text-green-200">{stats.Contests}+</span>
              <span className="block text-xs uppercase tracking-widest text-gray-400">Contests</span>
            </div>
          </div>
        </div>
        <a
          href={stats.codolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#191a20] hover:bg-green-700 transition text-green-200 rounded-md shadow hover:scale-105 hover:ring-2 hover:ring-green-300 text-base font-medium"
        >
          View Live on Codolio
          <ArrowRight size={18} />
        </a>
      </div>
      <div className="mt-6 w-full md:mt-8 rounded-lg overflow-hidden border border-[#23252c] shadow-inner animate-fade-in">
        <img
          src="/dsa.png"
          alt="DSA Heatmap"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-xs text-gray-500 mt-2 text-center animate-fade-in">
        <span>Live data available on&nbsp;</span>
        <a
          href={stats.codolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-400 transition"
        >
          Codolio
        </a>
        <span>. Graph updates as you keep grinding!</span>
      </div>
    </Card>
  );
};

export default DSA;
