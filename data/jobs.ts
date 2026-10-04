export type Job = {
  slug: string;
  title: string;
  employer: string;
  country: string;
  city: string;
  category: string;
  salary: string;
  contract: string;
  experience: string;
  verified: boolean;
  posted: string;
  benefits: string[];
  description: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "heavy-truck-driver-riyadh",
    title: "Heavy Truck Driver",
    employer: "Al Faisal Logistics",
    country: "Saudi Arabia",
    city: "Riyadh",
    category: "Drivers",
    salary: "SAR 2,200 / month",
    contract: "2 years, renewable",
    experience: "3+ years",
    verified: true,
    posted: "2 days ago",
    benefits: ["Accommodation provided", "Meals provided", "Medical cover", "Annual leave"],
    description:
      "Al Faisal Logistics is seeking experienced heavy truck drivers for long-haul freight routes across the Riyadh region. Candidates should hold a valid heavy-vehicle licence and be comfortable with multi-day routes.",
    requirements: ["Valid heavy truck licence", "Minimum 3 years driving experience", "Clean driving record", "Basic English or Arabic"],
  },
  {
    slug: "registered-nurse-dubai",
    title: "Registered Nurse",
    employer: "Gulf Coast Medical Group",
    country: "United Arab Emirates",
    city: "Dubai",
    category: "Healthcare",
    salary: "AED 5,500 / month",
    contract: "2 years, renewable",
    experience: "2+ years",
    verified: true,
    posted: "5 days ago",
    benefits: ["Accommodation allowance", "Medical cover", "Flight allowance", "Annual leave"],
    description:
      "Gulf Coast Medical Group is hiring registered nurses for its Dubai facility. Candidates should be registered with their home nursing council and comfortable working in a multicultural clinical setting.",
    requirements: ["Valid nursing licence", "Minimum 2 years clinical experience", "DataFlow verification ready", "Good spoken English"],
  },
  {
    slug: "hotel-housekeeping-doha",
    title: "Hotel Housekeeping Supervisor",
    employer: "Pearl Bay Hospitality",
    country: "Qatar",
    city: "Doha",
    category: "Hospitality",
    salary: "QAR 2,600 / month",
    contract: "2 years",
    experience: "2+ years",
    verified: true,
    posted: "1 week ago",
    benefits: ["Accommodation provided", "Meals provided", "Medical cover", "Transport provided"],
    description:
      "Pearl Bay Hospitality is looking for a housekeeping supervisor to oversee a team of room attendants at a four-star property in Doha.",
    requirements: ["2+ years hotel housekeeping experience", "Supervisory experience preferred", "Good communication skills"],
  },
  {
    slug: "construction-site-supervisor-kuwait",
    title: "Construction Site Supervisor",
    employer: "Al Rashid Contracting",
    country: "Kuwait",
    city: "Kuwait City",
    category: "Construction",
    salary: "KWD 350 / month",
    contract: "2 years",
    experience: "5+ years",
    verified: true,
    posted: "3 days ago",
    benefits: ["Accommodation provided", "Transport provided", "Medical cover"],
    description:
      "Al Rashid Contracting requires an experienced site supervisor for a commercial building project in Kuwait City.",
    requirements: ["Diploma in civil engineering or related field", "5+ years site supervision experience", "OSHA awareness an advantage"],
  },
  {
    slug: "security-officer-manama",
    title: "Security Officer",
    employer: "Gulf Shield Security",
    country: "Bahrain",
    city: "Manama",
    category: "Security",
    salary: "BHD 130 / month",
    contract: "2 years",
    experience: "1+ years",
    verified: false,
    posted: "Today",
    benefits: ["Accommodation provided", "Meals provided", "Uniform provided"],
    description:
      "Gulf Shield Security is recruiting security officers for commercial sites across Manama. This listing is pending verification.",
    requirements: ["Prior security experience an advantage", "Physically fit", "Clean record"],
  },
  {
    slug: "domestic-worker-muscat",
    title: "Domestic Worker",
    employer: "Private Household",
    country: "Oman",
    city: "Muscat",
    category: "Domestic Employment",
    salary: "OMR 130 / month",
    contract: "2 years",
    experience: "Entry level",
    verified: true,
    posted: "4 days ago",
    benefits: ["Accommodation provided", "Meals provided", "Medical cover", "Annual leave"],
    description:
      "A private household in Muscat is seeking a domestic worker. Full pre-departure orientation and contract briefing provided by MK Connection Limited before travel.",
    requirements: ["Basic literacy", "Prior domestic work experience preferred", "Willingness to relocate"],
  },
];

export const categories = [
  "Healthcare",
  "Hospitality",
  "Construction",
  "Drivers",
  "Security",
  "Domestic Employment",
  "Manufacturing",
  "Engineering",
  "Skilled Trades",
  "Cleaning",
  "Technicians",
  "IT",
  "Administration",
];

export const destinations = [
  { name: "Saudi Arabia", code: "SA", jobs: jobs.filter((j) => j.country === "Saudi Arabia").length + 128, image: "/images/countries/saudiarabia.png", summary: "Household, hospitality, logistics and general employment opportunities as verified demand opens." },
  { name: "United Arab Emirates", code: "AE", jobs: jobs.filter((j) => j.country === "United Arab Emirates").length + 94, image: "/images/countries/dubaicity.png", summary: "Hospitality, healthcare, household, driving and professional opportunities across the UAE." },
  { name: "Qatar", code: "QA", jobs: jobs.filter((j) => j.country === "Qatar").length + 61, image: "/images/countries/qatar.png", summary: "Domestic, hospitality, construction and skilled roles with confirmed employer demand." },
  { name: "Kuwait", code: "KW", jobs: jobs.filter((j) => j.country === "Kuwait").length + 47, image: "/images/countries/kuwaitcity.jfif", summary: "Household, cleaning, warehouse and construction opportunities as openings are confirmed." },
  { name: "Bahrain", code: "BH", jobs: jobs.filter((j) => j.country === "Bahrain").length + 29, image: "/images/countries/manamabahrain.png", summary: "Hospitality, security and general employment pathways with current employer demand." },
  { name: "Oman", code: "OM", jobs: jobs.filter((j) => j.country === "Oman").length + 33, image: "/images/countries/muscatoman.png", summary: "Household, driving, maintenance and general roles subject to verified openings." },
];
