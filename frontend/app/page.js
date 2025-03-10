"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, GamepadIcon } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import TestComponent from "@/components/TestComponent";
import AnimatedBlurBackground from "@/components/AnimatedBlurBackground";
import NFTRewardSection from "@/components/NFTRewardSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Animated background blur */}
      <AnimatedBlurBackground />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-24">
        <TestComponent />
        {/* Glass card container */}
        <div className="backdrop-blur-lg bg-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl border border-white/20 max-w-3xl w-full text-center">
          {/* Grid effect */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-20"
            style={{
              backgroundSize: "4px 4px",
              backgroundImage:
                "linear-gradient(to right, rgb(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(139, 92, 246, 0.1) 1px, transparent 1px)",
            }}
          />

          <h1 className="text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            NFT Scavenger Hunt
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-xl mx-auto">
            Embark on an epic digital treasure hunt. Solve cryptic puzzles,
            follow the trail of clues, and claim your exclusive NFT rewards!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <Link href="/game" className="flex items-center gap-2">
                <GamepadIcon size={20} />
                Start Your Quest
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent font-bold py-4 px-8 rounded-lg transform transition-all hover:scale-105"
            >
              <Link href="/leaderboard" className="flex items-center gap-2">
                <Trophy size={20} />
                Leaderboard
              </Link>
            </Button>

            <ShareButton />
          </div>

          {/* Feature highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold mb-2">Unique Puzzles</h3>
              <p className="text-sm">
                Challenge yourself with our cryptographic riddles
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold mb-2">Rare NFTs</h3>
              <p className="text-sm">Collect exclusive digital treasures</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="font-bold mb-2">Global Rankings</h3>
              <p className="text-sm">Compete with players worldwide</p>
            </div>
          </div>
        </div>
      </div>
    {/* NFT REWARD SECTION */}
    <NFTRewardSection/>
    </main>
  );
}
