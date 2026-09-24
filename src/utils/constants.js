export const business = {
  name: "Minos Wings",
  tagline: "Big Flavor. Every Bite.",
  phone: "(915) 231-0293",
  phoneHref: "tel:+19152310293",
  serviceArea: "Chaparral, NM",
  hours: "Monday–Friday · 8:00 am–8:00 pm",
  // Replace these placeholders, then set the matching verified flag to true.
  email: "hello@example.com",
  emailVerified: false,
  facebookUrl: "https://www.facebook.com/YOUR_PAGE_HERE",
  facebookVerified: false,
};
export const navigationLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Flavors", href: "#flavors" },
  { label: "Catering", href: "#catering" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
export const flavors = [
  "Buffalo",
  "Louisiana",
  "Mango Habanero",
  "Lemon Pepper",
  "Teriyaki",
];
export const wings = [
  { quantity: 6, flavors: 2, price: 9 },
  { quantity: 12, flavors: 3, price: 17 },
  { quantity: 18, flavors: 3, price: 25 },
  { quantity: 24, flavors: 4, price: 33 },
  { quantity: 30, flavors: 4, price: 40 },
  { quantity: 40, flavors: 4, price: 54 },
];
export const sides = [
  { name: "Homemade French fries", price: "$4" },
  { name: "Extra ranch", price: "$0.25" },
  { name: "Extra wing", note: "each wing", price: "$1.50" },
  { name: "Soda", price: "$1.50" },
];
export const combos = [
  {
    name: "Wing Combo",
    price: 13,
    label: "The classic craving",
    photo: "wings",
    description:
      "6 traditional wings, carrots, celery, homemade ranch, fries, and 1 soda.",
    detail: "Choose up to 2 flavors.",
  },
  {
    name: "Shrimp Combo",
    price: 14,
    label: "Meet your new favorite",
    photo: "shrimp",
    description: "Flavorful shrimp, corn, fries, and 1 soda.",
    detail: "Your choice of our five flavors.",
  },
];
export const faqs = [
  {
    question: "What flavors do you offer for wings and shrimp?",
    answer:
      "Choose from five delicious flavors: Buffalo, Louisiana, Mango Habanero, Lemon Pepper, and Teriyaki.",
  },
  {
    question: "Can I choose more than one flavor for my wing order?",
    answer:
      "Yes! Choose up to two flavors for 6 wings, up to three flavors for 12 or 18 wings, and up to four flavors for 24, 30, or 40 wings.",
  },
  {
    question: "What comes with your combo meals?",
    answer:
      "Our Wing Combo includes 6 wings, carrots, celery, homemade ranch, fries, and one soda. Our Shrimp Combo includes shrimp, corn, fries, and one soda.",
  },
  {
    question: "Do you offer catering for events?",
    answer:
      "Yes! Bring Minos Wings to your next gathering. Call us at (915) 231-0293 to discuss catering options, pricing, and availability.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Call (915) 231-0293 to place your order. Let us know your preferred items, quantities, and flavors, and we’ll confirm your order details.",
  },
];
