"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Building, GraduationCap, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SplashScreen } from "@/components/splash-screen"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Educational Excellence Since 2020
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Bridging Students to <span className="text-green-600 dark:text-green-400">Industry</span>,{" "}
                  <span className="text-blue-600 dark:text-blue-400">One Visit</span> at a Time
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide industry visits, educational tours, trips, internships, corporate talks, and global
                  immersion programs for 1st to 12th grade and college students across all streams.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Students walking to industry"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transforming education through real-world experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-2 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700 transition-colors">
                <CardContent className="space-y-4">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                    <AnimatedCounter end={1500} suffix="+" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Industry Visits</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <CardContent className="space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    <AnimatedCounter end={75000} suffix="+" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Students Benefited</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <CardContent className="space-y-4">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Building className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                    <AnimatedCounter end={150} suffix="+" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">College Tie-ups</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Collaborations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Industry Collaborations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Partnering with leading companies to provide real-world exposure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {["Netflix", "Deloitte", "Infosys", "Microsoft", "Google", "Amazon"].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=${company} logo`}
                  alt={`${company} logo`}
                  width={120}
                  height={60}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Partners */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education Partners</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by leading educational institutions across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "IIT Delhi", type: "Engineering College", students: "2,500+" },
              { name: "St. Xavier's College", type: "Arts & Science", students: "1,800+" },
              { name: "Delhi Public School", type: "K-12 School", students: "3,200+" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="text-center space-y-4">
                    <Image
                      src={`/placeholder.svg?height=80&width=120&query=${partner.name} college logo`}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={80}
                      className="mx-auto"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{partner.type}</p>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{partner.students} Students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Students' Learning Experience?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of educational institutions that trust GrowGrad for industry exposure and practical
              learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                asChild
              >
                <Link href="/gallery">View Our Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
