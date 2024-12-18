'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function UserProfileSetup({ onProfileComplete }) {
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')
  const [education, setEducation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onProfileComplete({
      skills: skills.split(',').map(skill => skill.trim()),
      interests: interests.split(',').map(interest => interest.trim()),
      education
    })
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">User Profile Setup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., JavaScript, Python, Communication"
            />
          </div>
          <div>
            <Label htmlFor="interests">Interests (comma-separated)</Label>
            <Input
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., Technology, Healthcare, Finance"
            />
          </div>
          <div>
            <Label htmlFor="education">Education</Label>
            <Textarea
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Briefly describe your educational background"
            />
          </div>
          <Button type="submit">Complete Profile</Button>
        </form>
      </div>
    </div>
  )
}

