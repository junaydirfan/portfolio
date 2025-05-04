"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// Removed Badge import
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Icon as LucideIcon } from "lucide-react"
import type { ProjectType } from "@/types/project"
import Image from "next/image"
import { IconType } from "react-icons" // Import IconType

interface ProjectDetailModalProps {
  project: ProjectType | null
  isOpen: boolean
  onClose: () => void
  getTechIcon: (tag: string) => IconType | LucideIcon | null // Accept the helper function
}

export function ProjectDetailModal({ project, isOpen, onClose, getTechIcon }: ProjectDetailModalProps) { // Added getTechIcon prop
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Reset image index when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project]);


  if (!project) return null

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? (project.gallery?.length || 1) - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === (project.gallery?.length || 1) - 1 ? 0 : prev + 1))
  }

  // Dynamically determine tab grid columns based on available tabs for THIS project
  const getTabCols = () => {
      let count = 2; // Overview, Technical always present? Assume yes.
      const hasGallery = project.gallery && project.gallery.length > 0 && project.id !== "busrc-website" && project.id !== "this-website" && project.id !== "bulletin-board" && project.id !== "socialsight"; // Check specific logic
      const hasChallenges = project.challenges && project.challenges.length > 0 && project.id !== "busrc-website"; // Check specific logic

      if (hasGallery) count++;
      if (hasChallenges) count++;

      if (count === 4) return "grid-cols-4";
      if (count === 3) return "grid-cols-3";
      return "grid-cols-2"; // Default or count is 2
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Increased max-width slightly, adjusted padding */}
      <DialogContent className="max-w-5xl w-[95vw] md:w-[90vw] max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <DialogHeader className="mb-4 pr-6"> {/* Added padding right for close button spacing */}
          <DialogTitle className="text-2xl md:text-3xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base md:text-lg opacity-90">{project.shortDescription}</DialogDescription>
        </DialogHeader>

        <div className="mt-2"> {/* Reduced margin top */}
          <Tabs defaultValue="overview" className="w-full">
            {/* Simplified TabsList - let it wrap naturally or use scroll area if too many */}
            <TabsList className={`grid w-full ${getTabCols()}`}>
               {/* Conditional Rendering of Tabs */}
               <TabsTrigger value="overview">Overview</TabsTrigger>
               <TabsTrigger value="technical">Technical</TabsTrigger>
               {project.gallery && project.gallery.length > 0 && project.id !== "busrc-website" && project.id !== "this-website" && project.id !== "bulletin-board" && project.id !== "socialsight" && (
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                )}
               {project.challenges && project.challenges.length > 0 && project.id !== "busrc-website" && (
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                )}
             </TabsList>


            {/* --- Overview Tab --- */}
            <TabsContent value="overview" className="mt-6 space-y-6"> {/* Increased spacing */}
                {/* Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border/50">
                 {isMounted && project.image ? (
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 800px" // Example sizes
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-muted-foreground">Image loading...</div>
                 )}
                </div>

               <div className="space-y-4">
                 <h3 className="text-lg font-semibold text-foreground">Project Description</h3>
                 <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>

                 {project.keyFeatures && project.keyFeatures.length > 0 && (
                   <div className="space-y-2 pt-2">
                     <h4 className="font-semibold text-foreground">Key Features</h4>
                     <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                       {project.keyFeatures.map((feature, index) => (
                         <li key={index}>{feature}</li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
            </TabsContent>

            {/* --- Technical Tab --- */}
            <TabsContent value="technical" className="mt-6 space-y-6">
              <div className="space-y-4">
                 <h3 className="text-lg font-semibold text-foreground">Technical Specifications</h3>

                 <div className="space-y-2">
                   <h4 className="font-semibold text-foreground">Tech Stack</h4>
                   {/* Replaced Badges with Icons */}
                   <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-2">
                     {project.tags.map((tag) => {
                       const IconComponent = getTechIcon(tag); // Use passed function
                       if (IconComponent) {
                         return (
                           <div key={tag} title={tag} className="relative flex items-center justify-center">
                             <IconComponent className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground/90" />
                           </div>
                         );
                       }
                       return null; // Or render tag text as fallback
                     })}
                   </div>
                 </div>

                {project.architecture && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-semibold text-foreground">Architecture</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
                  </div>
                )}

                {project.technicalDetails && project.technicalDetails.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-semibold text-foreground">Implementation Details</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                      {project.technicalDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* --- Gallery Tab (Conditionally Rendered) --- */}
             {project.gallery && project.gallery.length > 0 && project.id !== "busrc-website" && project.id !== "this-website" && project.id !== "bulletin-board" && project.id !== "socialsight" && (
                <TabsContent value="gallery" className="mt-6">
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border/50">
                       {/* Image Display */}
                       <div className="absolute inset-0 flex items-center justify-center">
                          {isMounted && project.gallery[currentImageIndex] ? (
                             <Image
                               src={project.gallery[currentImageIndex]}
                               alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                               fill
                               className="object-contain" // Use contain to avoid cropping screenshots
                               sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 600px" // Example sizes
                             />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-muted-foreground">Image loading...</div>
                           )}
                       </div>

                      {/* Navigation Buttons (only if more than 1 image) */}
                       {project.gallery.length > 1 && (
                         <>
                           <Button
                             variant="outline" // Changed variant
                             size="icon"
                             className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/70 hover:bg-background/90 backdrop-blur-sm" // Adjusted style
                             onClick={handlePrevImage}
                             aria-label="Previous image"
                           >
                             <ChevronLeft className="h-4 w-4" />
                           </Button>

                           <Button
                             variant="outline" // Changed variant
                             size="icon"
                             className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/70 hover:bg-background/90 backdrop-blur-sm" // Adjusted style
                             onClick={handleNextImage}
                             aria-label="Next image"
                           >
                             <ChevronRight className="h-4 w-4" />
                           </Button>
                         </>
                       )}
                    </div>

                     {/* Dot Indicators (only if more than 1 image) */}
                     {project.gallery.length > 1 && (
                        <div className="flex justify-center gap-1.5 mt-3">
                         {project.gallery.map((_, index) => (
                           <button
                             key={index}
                             aria-label={`Go to image ${index + 1}`}
                             className={`w-2 h-2 rounded-full transition-colors ${
                               index === currentImageIndex ? "bg-foreground" : "bg-muted hover:bg-muted-foreground/30" // Adjusted colors
                             }`}
                             onClick={() => setCurrentImageIndex(index)}
                           />
                         ))}
                       </div>
                     )}
                  </div>
               </TabsContent>
             )}

            {/* --- Challenges Tab (Conditionally Rendered) --- */}
             {project.challenges && project.challenges.length > 0 && project.id !== "busrc-website" && (
               <TabsContent value="challenges" className="mt-6 space-y-4">
                 <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Challenges & Solutions</h3>

                   {project.challenges.map((challenge, index) => (
                     <div key={index} className="space-y-1.5 pb-4 border-b border-border/50 last:border-0">
                       <h4 className="font-medium text-foreground">{challenge.title}</h4>
                       <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
                       <div className="pt-2">
                         <h5 className="text-sm font-medium text-foreground/90">Solution:</h5>
                         <p className="text-sm text-muted-foreground leading-relaxed">{challenge.solution}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </TabsContent>
             )}
          </Tabs>
        </div>

        {/* Modal Footer Buttons */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center mt-6 sm:mt-8 pt-6 border-t border-border/50 gap-3">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Close
          </Button>
           <div className="flex gap-2 w-full sm:w-auto">
            {project.github && project.github !== "#" && (
              <Button variant="outline" className="flex-1 sm:flex-none" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
             {project.link && project.id !== "smartballot" && project.id !== "bulletin-board" && ( // Adjusted logic if needed
               <Button className="flex-1 sm:flex-none" asChild>
                 <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
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