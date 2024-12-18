'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock function to simulate learning resource recommendations
const mockLearningResources = (userProfile, selectedCareer) => {
  const resources = [
    { title: 'Introduction to Machine Learning', platform: 'Coursera', url: 'https://www.coursera.org/learn/machine-learning' },
    { title: 'Data Visualization with D3.js', platform: 'Udacity', url: 'https://www.udacity.com/course/data-visualization-and-d3js--ud507' },
    { title: 'Advanced SQL for Data Scientists', platform: 'DataCamp', url: 'https://www.datacamp.com/courses/advanced-sql' },
  ]
  return new Promise(resolve => setTimeout(() => resolve(resources), 1000))
}

export function LearningResources({ userProfile, selectedCareer }) {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    mockLearningResources(userProfile, selectedCareer).then(recommendedResources => {
      setResources(recommendedResources)
      setLoading(false)
    })
  }, [userProfile, selectedCareer])

  if (loading) {
    return <div>Loading learning resources...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Learning Resources</CardTitle>
        <CardDescription>Courses and materials to help you develop the required skills:</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {resources.map((resource, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.platform}</p>
              <Button variant="link" className="p-0" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

