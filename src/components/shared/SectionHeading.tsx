'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  className = '',
}: SectionHeadingProps) => {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${textAlign} ${maxWidth} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-accent-yellow font-semibold text-sm uppercase tracking-wide mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-deep-charcoal mb-6"
      >
        {heading}
      </motion.h2>
      
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg md:text-xl text-charcoal-gray leading-relaxed"
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
