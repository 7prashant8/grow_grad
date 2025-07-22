"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Plane, Building, CheckCircle, ArrowRight, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Internships",
      description: "Real-world work experience with leading companies across various industries",
      features: [
        "3-6 month internship programs",
        "Mentorship from industry professionals",
        "Certificate of completion",
        "Potential job opportunities",
      ],
      image: "/placeholder.svg?height=300&width=400",
      color: "green",
    },
    {
      icon: Users,
      title: "Corporate Talks",
      description: "Interactive sessions with industry leaders and subject matter experts",
      features: [
        "Expert speakers from top companies",
        "Interactive Q&A sessions",
        "Industry insights and trends",
        "Career guidance and networking",
      ],
      image: "/placeholder.svg?height=300&width=400",
      color: "blue",
    },
    {
      icon: Plane,
      title: "International Immersion Programs",
      description: "Global exposure through educational tours to leading international destinations",
      features: [
        "7-14 day international programs",
        "University and company visits",
        "Cultural exchange activities",
        "Global networking opportunities",
      ],
      image: "/placeholder.svg?height=300&width=400",
      color: "purple",
    },
    {
      icon: Building,
      title: "Industry Tours & Visits",
      description: "Behind-the-scenes access to leading companies and manufacturing facilities",
      features: [
        "Guided facility tours",
        "Interaction with professionals",
        "Understanding of industry processes",
        "Career exploration opportunities",
      ],
      image: "/placeholder.svg?height=300&width=400",
      color: "orange",
    },
  ]

  const stats = [
    { label: "Success Rate", value: "98%", icon: Star },
    { label: "Average Duration", value: "5 Days", icon: Clock },
    { label: "Locations Covered", value: "25+", icon: MapPin },
    { label: "Industry Partners", value: "200+", icon: Building },
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
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Educational <span className="text-green-600 dark:text-green-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From industry visits to international immersion programs, we offer a complete range of educational services
            designed to enhance practical learning and career readiness.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <CardContent className="space-y-3">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 bg-${service.color}-600 text-white p-3 rounded-full`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`bg-${service.color}-100 dark:bg-${service.color}-900 p-2 rounded-lg`}>
                          <service.icon
                            className={`h-6 w-6 text-${service.color}-600 dark:text-${service.color}-400`}
                          />
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-${service.color}-200 text-${service.color}-700 dark:text-${service.color}-300`}
                        >
                          Premium Service
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl text-gray-900 dark:text-white">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-lg text-gray-600 dark:text-gray-300">{service.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle
                                className={`h-5 w-5 text-${service.color}-600 dark:text-${service.color}-400 flex-shrink-0`}
                              />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white`} asChild>
                          <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/gallery">View Gallery</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Students' Learning Experience?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can customize our services to meet your institution's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
