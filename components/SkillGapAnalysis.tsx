'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock function to simulate skill gap analysis
const mockSkillGapAnalysis = (userProfile, selectedCareer) => {
  const skillGaps = [
    { skill: 'Machine Learning', level: 'Intermediate' },
    { skill: 'Data Visualization', level: 'Beginner' },
    { skill: 'SQL', level: 'Advanced' },
  ]
  return new Promise(resolve => setTimeout(() => resolve(skillGaps), 1000))
}

export function SkillGapAnalysis({ userProfile, selectedCareer }) {
  const [skillGaps, setSkillGaps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    mockSkillGapAnalysis(userProfile, selectedCareer).then(gaps => {
      setSkillGaps(gaps)
      setLoading(false)
    })
  }, [userProfile, selectedCareer])

  if (loading) {
    return <div>Analyzing skill gaps...</div>
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skill Gap Analysis</CardTitle>
        <CardDescription>For {selectedCareer.title}, you need to develop these skills:</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skillGaps.map((gap, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{gap.skill}</span>
              <Badge>{gap.level}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

