'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
              {price}
            </span>
          </div>
          
          <h3 className="text-xl font-bold font-heading text-deep-charcoal mb-3">
            {title}
          </h3>
          
          <p className="text-charcoal-gray leading-relaxed mb-6">
            {description}
          </p>
          
          <Button 
            asChild 
            variant="outline" 
            className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-colors duration-300"
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Tech Education & Training',
      description: 'Comprehensive courses tailored for underrepresented communities, covering programming fundamentals to advanced software development.',
      price: 'From $200/course',
    },
    {
      icon: Users,
      title: 'One-on-One Consulting',
      description: 'Personalized career guidance, resume review, interview prep, and strategic planning to advance your tech career.',
      price: '$100-200/hour',
    },
    {
      icon: Briefcase,
      title: 'Pipeline Programs & Partnerships',
      description: 'Structured programs including bootcamps, mentorship initiatives, and internship placements for organizations.',
      price: 'Custom pricing',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            How I Can Help You
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            Whether you&apos;re an individual looking to break into tech or an organization 
            committed to building diverse teams, I offer comprehensive solutions to 
            advance diversity and inclusion in the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue-hover">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
