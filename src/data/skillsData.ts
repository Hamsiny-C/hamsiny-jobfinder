export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'creative' | 'business' | 'service' | 'skilled';
}

export interface Role {
  id: string;
  name: string;
  category: 'it' | 'non-it' | 'skilled' | 'freelance' | 'service';
  description: string;
  requiredSkills: string[];
  experienceLevel: 'fresher' | 'junior' | 'experienced' | 'any';
  salaryRange: string;
  growthPath: string;
  commonMistakes: string[];
  platforms: Platform[];
}

export interface Platform {
  name: string;
  url: string;
  type: 'job' | 'freelance';
  instructions: string[];
}

export const skills: Skill[] = [
  // Technical
  { id: 'java', name: 'Java', category: 'technical' },
  { id: 'python', name: 'Python', category: 'technical' },
  { id: 'javascript', name: 'JavaScript', category: 'technical' },
  { id: 'react', name: 'React', category: 'technical' },
  { id: 'nodejs', name: 'Node.js', category: 'technical' },
  { id: 'sql', name: 'SQL', category: 'technical' },
  { id: 'html-css', name: 'HTML/CSS', category: 'technical' },
  { id: 'spring-boot', name: 'Spring Boot', category: 'technical' },
  { id: 'data-analysis', name: 'Data Analysis', category: 'technical' },
  { id: 'excel', name: 'Excel', category: 'technical' },
  
  // Creative
  { id: 'graphic-design', name: 'Graphic Design', category: 'creative' },
  { id: 'video-editing', name: 'Video Editing', category: 'creative' },
  { id: 'content-writing', name: 'Content Writing', category: 'creative' },
  { id: 'photography', name: 'Photography', category: 'creative' },
  { id: 'ui-ux', name: 'UI/UX Design', category: 'creative' },
  
  // Business
  { id: 'communication', name: 'Communication', category: 'business' },
  { id: 'sales', name: 'Sales', category: 'business' },
  { id: 'marketing', name: 'Marketing', category: 'business' },
  { id: 'customer-service', name: 'Customer Service', category: 'business' },
  { id: 'data-entry', name: 'Data Entry', category: 'business' },
  
  // Service
  { id: 'cooking', name: 'Cooking', category: 'service' },
  { id: 'driving', name: 'Driving', category: 'service' },
  { id: 'cleaning', name: 'Cleaning', category: 'service' },
  { id: 'security', name: 'Security', category: 'service' },
  
  // Skilled
  { id: 'electrical', name: 'Electrical Work', category: 'skilled' },
  { id: 'plumbing', name: 'Plumbing', category: 'skilled' },
  { id: 'carpentry', name: 'Carpentry', category: 'skilled' },
  { id: 'mechanics', name: 'Mechanics', category: 'skilled' },
  { id: 'welding', name: 'Welding', category: 'skilled' },
];

export const roles: Role[] = [
  // IT Roles
  {
    id: 'java-developer',
    name: 'Java Developer',
    category: 'it',
    description: 'Build robust backend applications, APIs, and enterprise software using Java and related frameworks like Spring Boot.',
    requiredSkills: ['java', 'sql', 'spring-boot'],
    experienceLevel: 'any',
    salaryRange: '₹3-15 LPA',
    growthPath: 'Junior Developer → Senior Developer → Tech Lead → Architect',
    commonMistakes: ['Not learning frameworks', 'Ignoring clean code practices', 'Skipping unit tests'],
    platforms: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Java%20Developer&location=India',
        type: 'job',
        instructions: [
          'Click the link to open LinkedIn Jobs',
          'Sign in or create a free account',
          'Complete your profile with skills and experience',
          'Click "Easy Apply" on job listings',
          'Upload your resume and submit',
          'Track applications in "My Jobs" section'
        ]
      },
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=java+developer',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create an account or sign in',
          'Build your Indeed resume',
          'Click "Apply" on job listings',
          'Follow application instructions',
          'Check email for responses'
        ]
      },
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=java%20spring%20boot',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Build your gig with portfolio samples',
          'Set competitive pricing',
          'Respond quickly to buyer requests',
          'Deliver quality work to build ratings'
        ]
      }
    ]
  },
  {
    id: 'python-developer',
    name: 'Python Developer',
    category: 'it',
    description: 'Develop applications, scripts, and data solutions using Python. Work on web apps, automation, or data science projects.',
    requiredSkills: ['python', 'sql'],
    experienceLevel: 'any',
    salaryRange: '₹3-18 LPA',
    growthPath: 'Junior Developer → Data Engineer → Senior Developer → ML Engineer',
    commonMistakes: ['Not learning libraries like Pandas/Django', 'Poor code organization', 'Ignoring virtual environments'],
    platforms: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Python%20Developer&location=India',
        type: 'job',
        instructions: [
          'Click the link to open LinkedIn Jobs',
          'Sign in or create a free account',
          'Complete your profile with Python skills',
          'Click "Easy Apply" on job listings',
          'Upload your resume and submit',
          'Track applications in "My Jobs" section'
        ]
      },
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=python',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Create gigs for Python development',
          'Show portfolio and past work',
          'Set competitive rates',
          'Respond promptly to inquiries'
        ]
      }
    ]
  },
  {
    id: 'full-stack-developer',
    name: 'Full Stack Developer',
    category: 'it',
    description: 'Build complete web applications from frontend to backend. Handle databases, APIs, and user interfaces.',
    requiredSkills: ['javascript', 'react', 'nodejs', 'sql', 'html-css'],
    experienceLevel: 'junior',
    salaryRange: '₹5-20 LPA',
    growthPath: 'Junior Developer → Full Stack Developer → Senior Developer → Tech Lead',
    commonMistakes: ['Focusing only on one side', 'Not understanding databases', 'Ignoring security'],
    platforms: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Full%20Stack%20Developer&location=India',
        type: 'job',
        instructions: [
          'Click the link to open LinkedIn Jobs',
          'Sign in or create a free account',
          'Add all your tech stack skills',
          'Click "Easy Apply" on job listings',
          'Include GitHub portfolio link',
          'Track applications in "My Jobs" section'
        ]
      },
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=web%20development',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Showcase web development projects',
          'Offer website building services',
          'Set package pricing tiers',
          'Maintain fast response times'
        ]
      }
    ]
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    category: 'it',
    description: 'Analyze data to help businesses make better decisions. Create reports, visualizations, and insights from raw data.',
    requiredSkills: ['excel', 'sql', 'data-analysis', 'python'],
    experienceLevel: 'any',
    salaryRange: '₹4-12 LPA',
    growthPath: 'Data Analyst → Senior Analyst → Data Scientist → Analytics Manager',
    commonMistakes: ['Ignoring data cleaning', 'Poor visualization choices', 'Not asking the right questions'],
    platforms: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Data%20Analyst&location=India',
        type: 'job',
        instructions: [
          'Click the link to open LinkedIn Jobs',
          'Sign in or create a free account',
          'Highlight analytical skills and tools',
          'Click "Easy Apply" on job listings',
          'Include portfolio of dashboards',
          'Track applications in "My Jobs" section'
        ]
      },
      {
        name: 'Internshala',
        url: 'https://internshala.com/internships/data-analytics-internship',
        type: 'job',
        instructions: [
          'Click to open Internshala',
          'Create a student/fresher account',
          'Complete your profile fully',
          'Apply to internships',
          'Write good cover letters',
          'Check regularly for new opportunities'
        ]
      }
    ]
  },
  // Non-IT Roles
  {
    id: 'customer-support',
    name: 'Customer Support Executive',
    category: 'non-it',
    description: 'Help customers with their questions and problems. Handle calls, emails, and chat support professionally.',
    requiredSkills: ['communication', 'customer-service'],
    experienceLevel: 'fresher',
    salaryRange: '₹2-5 LPA',
    growthPath: 'Support Executive → Team Lead → Manager → Head of Support',
    commonMistakes: ['Losing patience', 'Not listening properly', 'Giving wrong information'],
    platforms: [
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=customer+support+executive',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create an account or sign in',
          'Build your Indeed resume',
          'Apply to multiple listings',
          'Highlight communication skills',
          'Be available for interviews'
        ]
      },
      {
        name: 'Naukri',
        url: 'https://www.naukri.com/customer-support-jobs',
        type: 'job',
        instructions: [
          'Click to open Naukri',
          'Register with your details',
          'Upload your resume',
          'Apply directly to jobs',
          'Keep profile updated',
          'Check for recruiter messages'
        ]
      }
    ]
  },
  {
    id: 'data-entry-operator',
    name: 'Data Entry Operator',
    category: 'non-it',
    description: 'Enter and manage data in computer systems. Maintain accuracy and speed while handling information.',
    requiredSkills: ['data-entry', 'excel'],
    experienceLevel: 'fresher',
    salaryRange: '₹1.5-3 LPA',
    growthPath: 'Data Entry Operator → Senior Operator → Data Supervisor → Admin Manager',
    commonMistakes: ['Making typing errors', 'Not double-checking work', 'Poor organization'],
    platforms: [
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=data+entry+operator',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create your profile',
          'Mention typing speed',
          'Apply to relevant jobs',
          'Complete any tests required',
          'Follow up on applications'
        ]
      },
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=data%20entry',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Offer data entry services',
          'Set hourly or project rates',
          'Deliver accurate work quickly',
          'Build your reputation'
        ]
      }
    ]
  },
  {
    id: 'sales-executive',
    name: 'Sales Executive',
    category: 'non-it',
    description: 'Sell products or services to customers. Build relationships and achieve sales targets.',
    requiredSkills: ['sales', 'communication'],
    experienceLevel: 'fresher',
    salaryRange: '₹2-8 LPA + Commission',
    growthPath: 'Sales Executive → Senior Executive → Team Lead → Sales Manager',
    commonMistakes: ['Being too pushy', 'Not understanding product', 'Poor follow-up'],
    platforms: [
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=sales+executive',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create your profile',
          'Highlight any sales experience',
          'Apply to multiple companies',
          'Prepare for interviews',
          'Show enthusiasm and energy'
        ]
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Sales%20Executive&location=India',
        type: 'job',
        instructions: [
          'Click the link to LinkedIn',
          'Sign in or create account',
          'Build a professional profile',
          'Connect with recruiters',
          'Apply using Easy Apply',
          'Network in sales groups'
        ]
      }
    ]
  },
  // Skilled Roles
  {
    id: 'electrician',
    name: 'Electrician',
    category: 'skilled',
    description: 'Install, repair, and maintain electrical systems in homes and buildings. Work with wiring, circuits, and electrical equipment.',
    requiredSkills: ['electrical'],
    experienceLevel: 'any',
    salaryRange: '₹2-6 LPA',
    growthPath: 'Helper → Electrician → Senior Electrician → Contractor',
    commonMistakes: ['Ignoring safety protocols', 'Not getting certified', 'Poor quality materials'],
    platforms: [
      {
        name: 'Google Jobs',
        url: 'https://www.google.com/search?q=electrician+jobs+near+me',
        type: 'job',
        instructions: [
          'Click to search on Google',
          'Browse local job listings',
          'Click on job cards for details',
          'Apply through listed platforms',
          'Check local classifieds too',
          'Register on UrbanClap/Urban Company'
        ]
      },
      {
        name: 'Urban Company',
        url: 'https://partners.urbancompany.com/',
        type: 'freelance',
        instructions: [
          'Click to open Urban Company Partners',
          'Register as a service partner',
          'Complete verification process',
          'Set your availability',
          'Accept service requests',
          'Maintain good ratings'
        ]
      }
    ]
  },
  {
    id: 'driver',
    name: 'Driver',
    category: 'skilled',
    description: 'Drive vehicles professionally for transport companies, ride-sharing apps, or private employers.',
    requiredSkills: ['driving'],
    experienceLevel: 'any',
    salaryRange: '₹2-5 LPA',
    growthPath: 'Driver → Senior Driver → Fleet Supervisor → Transport Manager',
    commonMistakes: ['Ignoring traffic rules', 'Poor vehicle maintenance', 'Bad customer behavior'],
    platforms: [
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=driver',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create your profile',
          'Upload driving license details',
          'Apply to driver jobs',
          'Mention vehicle types you can drive',
          'Be ready for driving tests'
        ]
      },
      {
        name: 'Ola/Uber',
        url: 'https://www.uber.com/in/en/drive/',
        type: 'freelance',
        instructions: [
          'Click to open Uber Driver',
          'Sign up as a driver partner',
          'Submit required documents',
          'Complete background check',
          'Start accepting rides',
          'Maintain good rating'
        ]
      }
    ]
  },
  {
    id: 'delivery-executive',
    name: 'Delivery Executive',
    category: 'service',
    description: 'Deliver food, packages, or goods to customers. Work with delivery apps or companies.',
    requiredSkills: ['driving'],
    experienceLevel: 'fresher',
    salaryRange: '₹1.5-4 LPA',
    growthPath: 'Delivery Executive → Senior Executive → Hub Manager → Operations Manager',
    commonMistakes: ['Late deliveries', 'Damaging packages', 'Poor customer interaction'],
    platforms: [
      {
        name: 'Indeed',
        url: 'https://in.indeed.com/jobs?q=delivery+executive',
        type: 'job',
        instructions: [
          'Open the link to Indeed',
          'Create your profile',
          'Mention vehicle availability',
          'Apply to delivery jobs',
          'Be prepared for local area test',
          'Have valid driving license'
        ]
      },
      {
        name: 'Swiggy/Zomato',
        url: 'https://www.swiggy.com/delivery-partner',
        type: 'freelance',
        instructions: [
          'Click to open Swiggy Partner',
          'Register as delivery partner',
          'Submit documents and ID proof',
          'Complete onboarding',
          'Start accepting orders',
          'Earn based on deliveries'
        ]
      }
    ]
  },
  // Creative/Freelance Roles
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    category: 'freelance',
    description: 'Create visual content like logos, posters, social media graphics, and branding materials.',
    requiredSkills: ['graphic-design'],
    experienceLevel: 'any',
    salaryRange: '₹3-10 LPA / Project-based',
    growthPath: 'Junior Designer → Senior Designer → Art Director → Creative Director',
    commonMistakes: ['Ignoring client briefs', 'Poor typography', 'Not building portfolio'],
    platforms: [
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=graphic%20design',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Build attractive gigs with samples',
          'Set tiered pricing packages',
          'Respond quickly to inquiries',
          'Deliver creative work on time'
        ]
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Graphic%20Designer&location=India',
        type: 'job',
        instructions: [
          'Click to open LinkedIn Jobs',
          'Sign in or create account',
          'Add design portfolio link',
          'Apply using Easy Apply',
          'Connect with design companies',
          'Share your work regularly'
        ]
      }
    ]
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    category: 'freelance',
    description: 'Write articles, blogs, website content, and marketing copy for businesses and publications.',
    requiredSkills: ['content-writing', 'communication'],
    experienceLevel: 'any',
    salaryRange: '₹2-8 LPA / Per article',
    growthPath: 'Content Writer → Senior Writer → Editor → Content Manager',
    commonMistakes: ['Grammar errors', 'Not researching topics', 'Missing deadlines'],
    platforms: [
      {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/search/gigs?query=content%20writing',
        type: 'freelance',
        instructions: [
          'Click to open Fiverr',
          'Create a seller account',
          'Showcase writing samples',
          'Offer different content types',
          'Set per-word or per-article pricing',
          'Deliver plagiarism-free content'
        ]
      },
      {
        name: 'Internshala',
        url: 'https://internshala.com/internships/content-writing-internship',
        type: 'job',
        instructions: [
          'Click to open Internshala',
          'Create a student account',
          'Apply to content writing internships',
          'Include writing samples',
          'Complete any tests assigned',
          'Build your experience'
        ]
      }
    ]
  }
];

export const experienceLevels = [
  { id: 'fresher', label: 'Fresher (0-1 year)', description: 'Just starting or looking for first job' },
  { id: 'junior', label: 'Junior (1-3 years)', description: 'Some experience in the field' },
  { id: 'experienced', label: 'Experienced (3+ years)', description: 'Significant work experience' },
];

export const workPreferences = [
  { id: 'job', label: 'Full-time Job', description: 'Looking for stable employment' },
  { id: 'freelance', label: 'Freelance', description: 'Want to work independently on projects' },
  { id: 'both', label: 'Both', description: 'Open to any opportunity' },
];

export function getMatchingRoles(
  selectedSkills: string[],
  experienceLevel: string,
  workPreference: string
): Role[] {
  if (selectedSkills.length === 0) return [];

  return roles.filter(role => {
    // Check if any selected skill matches
    const hasMatchingSkill = role.requiredSkills.some(skill => 
      selectedSkills.includes(skill)
    );
    
    if (!hasMatchingSkill) return false;

    // Filter by experience level
    if (role.experienceLevel !== 'any') {
      if (experienceLevel === 'fresher' && role.experienceLevel === 'experienced') {
        return false;
      }
    }

    // Filter by work preference
    if (workPreference !== 'both') {
      if (workPreference === 'job' && role.category === 'freelance') {
        return false;
      }
      if (workPreference === 'freelance' && role.category !== 'freelance') {
        // Still show IT roles for freelance as they have freelance platforms
        if (!role.platforms.some(p => p.type === 'freelance')) {
          return false;
        }
      }
    }

    return true;
  }).slice(0, 5); // Return max 5 roles
}

export function getWhyItFits(role: Role, selectedSkills: string[]): string {
  const matchingSkills = role.requiredSkills.filter(skill => 
    selectedSkills.includes(skill)
  );
  
  const skillNames = matchingSkills.map(skillId => 
    skills.find(s => s.id === skillId)?.name || skillId
  );

  if (skillNames.length === 1) {
    return `Your ${skillNames[0]} skill is a great match for this role.`;
  } else if (skillNames.length > 1) {
    const lastSkill = skillNames.pop();
    return `Your skills in ${skillNames.join(', ')} and ${lastSkill} make you a strong fit for this position.`;
  }
  
  return 'This role aligns well with your skillset.';
}
