/**
 * siteConfig.js — Single source of truth for all site-wide metadata.
 * Update your personal info here and it propagates everywhere automatically.
 */

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const SITE_CONFIG = {
  name: "Mouhssine Id-bella",
  shortName: "MOUHSSINE",
  title: "Full Stack Developer",
  subtitle: "React & Laravel",
  description:
    "Full Stack Developer specializing in React.js and Laravel, building industrial and enterprise-grade web applications.",
  email: "idbellamouhssine@gmail.com",
  phone: "+212 638 832 959",
  location: "Guelmim, Morocco",
  github: "https://github.com/mouhssineidbella",
  linkedin: "https://www.linkedin.com/in/idbella-mouhssine/",
  cvPath: "/CV.pdf",
  cvFileName: "CV_Mouhssine_Idbella.pdf",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: SITE_CONFIG.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: SITE_CONFIG.linkedin,
    label: "LinkedIn",
  },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: "#",
  },
];
