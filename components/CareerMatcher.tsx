'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock function to simulate AI-powered career matching
const mockCareerMatch = (userProfile) => {
  const careers = [
    { title: 'Software Developer', match: 95 },
    { title: 'Data Scientist', match: 88 },
    { title: 'UX Designer', match: 82 },
    { title: 'Product Manager', match: 75 },
    { title: 'Digital Marketer', match: 70 },
  ]
  return new Promise(resolve => setTimeout(() => resolve(careers), 1000))
}

export function CareerMatcher({ userProfile, onCareerSelect }) {
  const [careers, setCareers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    mockCareerMatch(userProfile).then(matchedCareers => {
      setCareers(matchedCareers)
      setLoading(false)
    })
  }, [userProfile])

  if (loading) {
    return <div>Loading career matches...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Career Matches</CardTitle>
        <CardDescription>Based on your profile, here are your top career matches:</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {careers.map((career, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{career.title} - {career.match}% match</span>
              <Button onClick={() => onCareerSelect(career)}>Select</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

