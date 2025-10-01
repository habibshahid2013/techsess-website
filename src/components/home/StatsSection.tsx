'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, Building2, TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon: Icon, value, suffix, label, delay }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-2"
      >
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            {value}
          </motion.span>
        ) : (
          '0'
        )}
        <span className="text-electric-blue">{suffix}</span>
      </motion.div>
      <p className="text-lg text-charcoal-gray font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Community Members',
    },
    {
      icon: Clock,
      value: 50,
      suffix: '+',
      label: 'Consultation Hours',
    },
    {
      icon: Building2,
      value: 10,
      suffix: '+',
      label: 'Partner Organizations',
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Making an Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Together, we&apos;re building a more diverse and inclusive tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
