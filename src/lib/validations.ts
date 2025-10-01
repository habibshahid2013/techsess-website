// lib/validations.ts
import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z.string().email('Invalid email address').min(5).max(100),
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  role: z.string().max(100).optional(),
  source: z.string().max(100).optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.enum(['general', 'press', 'partnership', 'speaking', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export const consultationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  consultationType: z.enum(['individual', 'organization']),
  preferredDate: z.string(),
  notes: z.string().max(500).optional(),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type ConsultationFormData = z.infer<typeof consultationSchema>;
