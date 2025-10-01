// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Declare minimal gtag typing on window to satisfy TypeScript in the browser
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking (automatic with Next.js)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Custom events to track:
export const trackSubscribe = (_email: string) => {
  trackEvent('subscribe', 'engagement', 'email_signup');
};

export const trackConsultationClick = (consultationType: string) => {
  trackEvent('consultation_click', 'conversion', consultationType);
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', 'engagement', serviceName);
};

export const trackContactSubmit = (subject: string) => {
  trackEvent('contact_form', 'conversion', subject);
};

export const trackCTA = (ctaText: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${location}_${ctaText}`);
};

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`);
};

export const trackTimeOnPage = (seconds: number, page: string) => {
  trackEvent('time_on_page', 'engagement', page, seconds);
};
