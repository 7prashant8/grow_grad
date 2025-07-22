"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Plane, Users, MessageSquare, Filter } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All", icon: Filter },
    { id: "industrial", label: "Industrial Visits", icon: Building },
    { id: "immersion", label: "Immersion Programs", icon: Plane },
    { id: "talks", label: "Corporate Talks", icon: Users },
    { id: "testimonials", label: "Student Testimonials", icon: MessageSquare },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "industrial",
      title: "Tech Company Visit - Bangalore",
      description: "Students exploring cutting-edge technology at a leading IT company",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 2024",
    },
    {
      id: 2,
      category: "immersion",
      title: "Singapore University Exchange",
      description: "International immersion program at National University of Singapore",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 2024",
    },
    {
      id: 3,
      category: "talks",
      title: "Leadership Talk by CEO",
      description: "Inspiring session with industry leader on entrepreneurship",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 2024",
    },
    {
      id: 4,
      category: "industrial",
      title: "Manufacturing Plant Tour",
      description: "Behind-the-scenes look at automotive manufacturing processes",
      image: "/placeholder.svg?height=300&width=400",
      date: "December 2023",
    },
    {
      id: 5,
      category: "immersion",
      title: "Dubai Business District",
      description: "Exploring global business practices in Dubai's financial hub",
      image: "/placeholder.svg?height=300&width=400",
      date: "November 2023",
    },
    {
      id: 6,
      category: "talks",
      title: "AI & Future of Work",
      description: "Panel discussion on artificial intelligence and career opportunities",
      image: "/placeholder.svg?height=300&width=400",
      date: "October 2023",
    },
    {
      id: 7,
      category: "testimonials",
      title: "Student Success Stories",
      description: "Alumni sharing their career journey and achievements",
      image: "/placeholder.svg?height=300&width=400",
      date: "September 2023",
    },
    {
      id: 8,
      category: "industrial",
      title: "Pharmaceutical Research Lab",
      description: "Students learning about drug development and research processes",
      image: "/placeholder.svg?height=300&width=400",
      date: "August 2023",
    },
    {
      id: 9,
      category: "immersion",
      title: "London Business School",
      description: "Academic exchange program with prestigious London institution",
      image: "/placeholder.svg?height=300&width=400",
      date: "July 2023",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Gallery
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Moments That <span className="text-green-600 dark:text-green-400">Matter</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the incredible experiences and transformative moments from our educational programs, industry
            visits, and student achievements.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 ${
                activeFilter === category.id
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "hover:bg-green-50 dark:hover:bg-green-950"
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {item.date}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      {categories.find((cat) => cat.id === item.category) && (
                        <>
                          {(() => {
                            const CategoryIcon = categories.find((cat) => cat.id === item.category)?.icon || Filter
                            return <CategoryIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                          })()}
                          <Badge variant="outline" className="text-xs">
                            {categories.find((cat) => cat.id === item.category)?.label}
                          </Badge>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="hover:bg-green-50 dark:hover:bg-green-950 bg-transparent">
            Load More Photos
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Want to Be Part of Our Next Adventure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning experience with GrowGrad's programs.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Journey Today
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
