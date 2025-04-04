"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import type { ProjectType } from "@/types/project"
import Image from "next/image"

interface ProjectDetailModalProps {
  project: ProjectType | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!project) return null

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? (project.gallery?.length || 1) - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === (project.gallery?.length || 1) - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base opacity-90">{project.shortDescription}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                {isMounted && (
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Project Description</h3>
                <p className="text-muted-foreground">{project.fullDescription}</p>

                {project.keyFeatures && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-4 space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Technical Specifications</h3>

                <div className="space-y-2">
                  <h4 className="font-medium">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.architecture && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Architecture</h4>
                    <p className="text-muted-foreground">{project.architecture}</p>
                  </div>
                )}

                {project.technicalDetails && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Implementation Details</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.technicalDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-4">
              {project.gallery && project.gallery.length > 0 ? (
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {isMounted && (
                        <Image
                          src={project.gallery[currentImageIndex] || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-center gap-1 mt-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No gallery images available for this project.
                </div>
              )}
            </TabsContent>

            <TabsContent value="challenges" className="mt-4 space-y-4">
              {project.challenges && project.challenges.length > 0 ? (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Challenges & Solutions</h3>

                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-2 pb-4 border-b last:border-0">
                      <h4 className="font-medium">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                      <div className="pt-2">
                        <h5 className="text-sm font-medium">Solution:</h5>
                        <p className="text-sm text-muted-foreground">{challenge.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">No challenges documented for this project.</div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>

          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}

            {project.link && (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

