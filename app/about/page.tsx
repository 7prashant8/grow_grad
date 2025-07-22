"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Calendar } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2020",
      event: "GrowGrad Founded",
      description: "Started with a vision to bridge the gap between education and industry",
    },
    {
      year: "2021",
      event: "First 100 Visits",
      description: "Successfully organized 100+ industry visits across Maharashtra",
    },
    {
      year: "2022",
      event: "International Expansion",
      description: "Launched international immersion programs to Singapore and Dubai",
    },
    {
      year: "2023",
      event: "50,000 Students",
      description: "Reached milestone of 50,000+ students benefited from our programs",
    },
    {
      year: "2024",
      event: "150+ Partnerships",
      description: "Established partnerships with 150+ colleges and 50+ industry leaders",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      content:
        "GrowGrad has transformed how our students perceive real-world applications of their studies. The industry visits are exceptionally well-organized.",
      rating: 5,
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "HOD Computer Science, IIT Delhi",
      content:
        "The corporate talks arranged by GrowGrad provide invaluable insights to our students about industry trends and career opportunities.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Student, St. Xavier's College",
      content:
        "The international immersion program to Singapore was life-changing. It opened my eyes to global opportunities and different work cultures.",
      rating: 5,
    },
  ]

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
            About GrowGrad
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Empowering Students Through <span className="text-green-600 dark:text-green-400">Real-World</span>{" "}
            Experiences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We believe that true learning happens when students step out of classrooms and into the real world. Our
            mission is to provide transformative educational experiences that prepare students for successful careers.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full border-2 border-green-100 dark:border-green-900">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To bridge the gap between theoretical education and practical industry knowledge by providing students
                  with immersive, hands-on experiences that prepare them for successful careers in their chosen fields.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full border-2 border-blue-100 dark:border-blue-900">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To become India's leading educational services provider, transforming how students learn and grow by
                  creating meaningful connections between academia and industry across all educational levels.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Company Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From a small idea to transforming thousands of lives
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-400"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="p-6">
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.event}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say About Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Hear from our partners and students</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
