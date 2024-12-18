'use client'

import { useState } from 'react'
import { UserProfileSetup } from './components/UserProfileSetup'
import { CareerMatcher } from './components/CareerMatcher'
import { SkillGapAnalysis } from './components/SkillGapAnalysis'
import { LearningResources } from './components/LearningResources'

export default function SkillToCareerMapper() {
  const [userProfile, setUserProfile] = useState(null)
  const [selectedCareer, setSelectedCareer] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Skill-to-Career Pathway Mapper</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {!userProfile ? (
          <UserProfileSetup onProfileComplete={setUserProfile} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CareerMatcher userProfile={userProfile} onCareerSelect={setSelectedCareer} />
              {selectedCareer && <SkillGapAnalysis userProfile={userProfile} selectedCareer={selectedCareer} />}
            </div>
            {selectedCareer && (
              <LearningResources userProfile={userProfile} selectedCareer={selectedCareer} />
            )}
          </div>
        )}
      </main>
    </div>
  )
}

