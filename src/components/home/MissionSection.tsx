'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed unused import
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-deep-charcoal mb-6"
            >
              The Mission Behind{' '}
              <span className="text-electric-blue">Tech-sess</span>
            </motion.h2>

            <div className="space-y-6 text-lg text-charcoal-gray leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The tech industry has a representation problem. Despite being one of the most 
                innovative sectors, it continues to struggle with diversity and inclusion. 
                Underrepresented communities face systemic barriers that limit their access 
                to opportunities, mentorship, and career advancement.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tech-sess exists to change that narrative. We believe that diversity isn&apos;t 
                just a moral imperative—it&apos;s a competitive advantage. When we create 
                pathways for underrepresented talent, we unlock innovation, creativity, 
                and solutions that benefit everyone.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-electric-blue/5 p-6 rounded-lg border-l-4 border-electric-blue"
              >
                  <p className="text-lg font-medium text-deep-charcoal italic">
                    &ldquo;Through three core pillars—representation, pipeline opportunities, 
                    and strategic partnerships—we&apos;re creating lasting change.&rdquo;
                  </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue-hover">
                  <Link href="/about">Read My Full Story</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue-hover/30">
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-electric-blue/60 text-center">
                  <div className="w-24 h-24 bg-electric-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">👥</span>
                  </div>
                  <p className="text-lg font-medium">Diverse Team</p>
                  <p className="text-sm opacity-80">Working Together</p>
                </div>
              </div>
            </div>
            
            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg max-w-sm"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">&ldquo;</div>
                <p className="text-sm text-charcoal-gray italic">
                  Every person deserves a fair shot at success in tech, regardless of their background.
                </p>
                <div className="text-xs text-electric-blue font-semibold mt-2">
                  — Hassan Shahid
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
