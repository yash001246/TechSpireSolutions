// All 26 services, each with its own detail page at /services/<slug>.
// To change a page, edit its entry here. Fields: slug, name, category, summary, overview, includes, benefits, tools.
// "tools" is optional: leave it as [] to hide the "Tools and platforms" section on that page.

export const services = [
  // ---------------- Development ----------------
  {
    slug: 'web-development',
    name: 'Web Development',
    category: 'Development',
    summary: 'Fast, responsive websites and web apps built to look sharp and turn visitors into customers.',
    overview:
      'We design and build websites and web applications that load quickly, work on every screen and are easy for your team to update. From a company website to a full customer portal, we plan the structure, build it and launch it with care.',
    includes: [
      'Business and marketing websites',
      'Custom web applications and customer portals',
      'Responsive design for phone, tablet and desktop',
      'Content management, so you can edit pages yourself',
      'SEO-friendly structure and fast page speed'
    ],
    benefits: [
      'A professional first impression for every visitor',
      'Easy updates without waiting for a developer',
      'A foundation that grows as your business grows'
    ],
    tools: ['React', 'Node.js']
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'Development',
    summary: 'Android and iOS apps that feel smooth and give people a reason to come back.',
    overview:
      'We build mobile apps that are simple to use and reliable in everyday conditions. We handle the whole journey: planning the features, designing the screens, building the app, testing it on real devices and getting it into the app stores.',
    includes: [
      'Android and iOS apps',
      'Cross-platform builds from a single codebase',
      'Push notifications and in-app payments',
      'Secure login and offline support',
      'App store submission and later updates'
    ],
    benefits: [
      'Reach customers on the device they use most',
      'One team for design, development and launch',
      'Regular updates after release to keep the app current'
    ],
    tools: []
  },
  {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    category: 'Development',
    summary: 'Online stores on Shopify and WooCommerce that are easy to manage and ready to sell.',
    overview:
      'We set up and customize online stores so you can start selling quickly and manage orders without stress. We choose the platform that suits your products and budget, then shape it around how your customers like to shop.',
    includes: [
      'Store setup and theme customization',
      'Product catalog, categories and inventory',
      'Payment gateway and shipping setup',
      'Custom features and third-party integrations',
      'Migration from another platform'
    ],
    benefits: [
      'Start selling online without a long build',
      'Orders, stock and customers managed in one place',
      'A checkout designed to keep shoppers from dropping off'
    ],
    tools: ['Shopify', 'WooCommerce']
  },
  {
    slug: 'saas-product-development',
    name: 'SaaS Product Development',
    category: 'Development',
    summary: 'From idea to subscription product: we design, build and launch SaaS platforms.',
    overview:
      'We help founders and companies turn a software idea into a working subscription product. We start with a focused first version, then add features as real users give feedback, keeping the architecture ready to scale.',
    includes: [
      'Product discovery and MVP planning',
      'User accounts, teams and roles',
      'Subscription billing and usage dashboards',
      'Scalable cloud architecture',
      'Continuous feature releases after launch'
    ],
    benefits: [
      'Launch a first version quickly and learn from users',
      'Architecture that scales as your customer base grows',
      'One team from the first sketch to ongoing releases'
    ],
    tools: ['React', 'Node.js', 'AWS']
  },
  {
    slug: 'api-backend-development',
    name: 'API and Backend Development',
    category: 'Development',
    summary: 'Secure, well-documented APIs and backends that power your apps behind the scenes.',
    overview:
      'The backend is what keeps your product fast, secure and reliable. We design the data, build the APIs and connect the services your app depends on, with clear documentation so other developers can work with it easily.',
    includes: [
      'REST API design and development',
      'Database design and optimization',
      'Authentication and access control',
      'Integrations with payments, messaging and CRMs',
      'Automated testing and documentation'
    ],
    benefits: [
      'A reliable base for web and mobile apps',
      'Easy integration with the tools you already use',
      'Security considered from the first line of code'
    ],
    tools: ['Node.js', 'Python', 'Java']
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud and DevOps Solutions',
    category: 'Development',
    summary: 'Cloud setup, automation and monitoring on AWS, Azure and Google Cloud.',
    overview:
      'We move your product to the cloud and set up the automation around it, so releases are quick, safe and repeatable. We also watch costs and performance, so you only pay for what you actually need.',
    includes: [
      'Cloud setup and migration',
      'CI/CD pipelines for automatic testing and deployment',
      'Infrastructure automation',
      'Monitoring, alerts and backups',
      'Cost review and optimization'
    ],
    benefits: [
      'Faster, safer releases',
      'Infrastructure that scales when traffic grows',
      'Less money wasted on unused resources'
    ],
    tools: ['AWS', 'Azure', 'Google Cloud']
  },
  {
    slug: 'performance-optimization',
    name: 'Performance Optimization',
    category: 'Development',
    summary: 'Make your website or app faster, so visitors stay and search engines notice.',
    overview:
      'Slow pages lose visitors. We measure where your site or app is slow, fix the biggest causes first and show you the difference with a before-and-after report.',
    includes: [
      'Speed audit and Core Web Vitals review',
      'Image, code and caching optimization',
      'Database and API tuning',
      'Load testing',
      'A clear before-and-after report'
    ],
    benefits: [
      'Fewer visitors leaving before the page loads',
      'A better base for search ranking',
      'A smoother experience on slow connections and older phones'
    ],
    tools: []
  },
  {
    slug: 'monitoring-software',
    name: 'Spy Monitoring Software',
    category: 'Development',
    summary: 'Device and activity monitoring software for organizations and families, used with consent.',
    overview:
      'We build monitoring software for company-owned devices, workforce activity and parental supervision. These tools are meant to be used openly and lawfully, with the knowledge and consent of the people being monitored, and in line with local privacy laws.',
    includes: [
      'Activity and usage dashboards',
      'Reports and alerts',
      'Secure data storage and access control',
      'Admin controls and policy settings',
      'Consent notices and audit logs'
    ],
    benefits: [
      'Clear visibility into how company devices are used',
      'Reports that are easy to read and act on',
      'Privacy and security built into the design'
    ],
    tools: []
  },
  {
    slug: 'ethical-hacking-training',
    name: 'Ethical Hacking Training',
    category: 'Development',
    summary: 'Hands-on training that shows teams how attackers think, so they can defend better.',
    overview:
      'Our training teaches the methods attackers use, so your people can spot and close weaknesses before they are exploited. Everything is practiced in safe lab environments and taught for lawful, defensive use only.',
    includes: [
      'Security fundamentals',
      'Penetration testing basics',
      'Web and network vulnerability labs',
      'Writing clear security reports',
      'Sessions for teams or individuals'
    ],
    benefits: [
      'Stronger in-house security skills',
      'Practice in safe, legal lab environments',
      'A better understanding of the risks your business faces'
    ],
    tools: []
  },
  {
    slug: 'cybersecurity-audits',
    name: 'Cybersecurity Audits',
    category: 'Development',
    summary: 'A clear review of your systems, with a prioritized list of what to fix first.',
    overview:
      'We review your website, apps and infrastructure for weaknesses, and report what we find in plain language. You get a ranked list of risks and practical guidance on fixing them, starting with the ones that matter most.',
    includes: [
      'Vulnerability assessment',
      'Review of access control and configuration',
      'Web application and API security checks',
      'A risk-ranked report',
      'Guidance on fixing each issue'
    ],
    benefits: [
      'Know where you are exposed before someone else does',
      'A practical plan instead of a long technical list',
      'Greater confidence for customers and partners'
    ],
    tools: []
  },
  {
    slug: 'crm-erp-development',
    name: 'CRM/ERP Development',
    category: 'Development',
    summary: 'Custom CRM and ERP systems that bring sales, operations and finance into one place.',
    overview:
      'Off-the-shelf software does not always fit how you work. We build CRM and ERP systems around your own processes, so your team stops juggling spreadsheets and starts working from one source of truth.',
    includes: [
      'Customer and lead management',
      'Inventory, orders and invoicing',
      'Role-based access for each team',
      'Reports and dashboards',
      'Integration with your existing tools'
    ],
    benefits: [
      'Less manual work and fewer mistakes',
      'Everyone sees the same, up-to-date information',
      'Software that matches how your business actually runs'
    ],
    tools: []
  },
  {
    slug: 'data-recovery',
    name: 'Data Recovery Services',
    category: 'Development',
    summary: 'Help getting back files and databases after loss, damage or accidental deletion.',
    overview:
      'When data goes missing, speed and care matter. We assess what happened, recover what can be recovered and handle your information confidentially. Results depend on the condition of the data, and we tell you plainly what is possible before we begin.',
    includes: [
      'Assessment of the problem',
      'Recovery from drives, backups and databases',
      'Confidential handling of your data',
      'A backup plan so it does not happen again',
      'Clear updates throughout'
    ],
    benefits: [
      'Less downtime after a data loss',
      'Honest advice about what can be recovered',
      'Protection against the same problem in future'
    ],
    tools: []
  },
  {
    slug: 'maintenance-support',
    name: 'Maintenance and Support (24/7)',
    category: 'Development',
    summary: 'Round-the-clock monitoring, updates and long-term support for your website or app.',
    overview:
      'Launching is only the start. We keep your product secure, up to date and running smoothly, and we are available around the clock when something needs attention.',
    includes: [
      '24/7 monitoring and alerts',
      'Security patches and software updates',
      'Bug fixes and small improvements',
      'Regular backups',
      'Monthly performance reports'
    ],
    benefits: [
      'Problems caught early, often before users notice',
      'A team that already knows your product',
      'Peace of mind, day and night'
    ],
    tools: []
  },
  {
    slug: 'fundraising-solutions',
    name: 'Fund Raising Solutions',
    category: 'Development',
    summary: 'Platforms and pages that help organizations collect donations and build supporters.',
    overview:
      'We build the digital tools that organizations need to raise funds online: campaign pages, secure payments and donor records, with the reporting to see what is working.',
    includes: [
      'Donation and campaign pages',
      'Secure online payments',
      'Donor records and receipts',
      'Campaign analytics',
      'Email and social promotion support'
    ],
    benefits: [
      'Make it simple for supporters to give',
      'See which campaigns bring in the most',
      'Stay in touch with donors after their first gift'
    ],
    tools: []
  },

  // ---------------- Design ----------------
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Design',
    summary: 'Interfaces that are clear, easy to use and a pleasure to come back to.',
    overview:
      'Good design starts with understanding the people who will use your product. We research their needs, map their journey, then design screens that are simple to understand and test them before anything is built.',
    includes: [
      'User research and journey mapping',
      'Wireframes and clickable prototypes',
      'Visual interface design',
      'Design systems for consistency',
      'Usability testing'
    ],
    benefits: [
      'Fewer usability problems after launch',
      'A consistent look across web and mobile',
      'Designs developers can build without guessing'
    ],
    tools: []
  },
  {
    slug: 'video-editing-motion-graphics',
    name: 'Video Editing and Motion Graphics',
    category: 'Design',
    summary: 'Promos, explainers and social videos that hold attention.',
    overview:
      'We turn raw footage and ideas into polished videos, and add motion graphics that make your message clearer and more memorable. Every video is prepared in the right format for where it will be seen.',
    includes: [
      'Promo, product and explainer videos',
      'Motion graphics and animated logos',
      'Subtitles and captions',
      'Color correction and sound clean-up',
      'Versions for each social platform'
    ],
    benefits: [
      'Videos that look professional on any screen',
      'Clearer explanations of products and services',
      'Content ready for every platform you use'
    ],
    tools: []
  },
  {
    slug: 'branding-visual-identity',
    name: 'Branding and Visual Identity',
    category: 'Design',
    summary: 'A logo, colors and voice that make your business instantly recognizable.',
    overview:
      'Your brand is more than a logo. We build a complete identity: how you look, how you sound and how you show up everywhere, with guidelines that keep it consistent as you grow.',
    includes: [
      'Logo design',
      'Color palette and typography',
      'Brand guidelines',
      'Stationery and social media templates',
      'Tone of voice and messaging'
    ],
    benefits: [
      'A look that sets you apart from competitors',
      'Consistency across every channel',
      'A brand your team can use confidently'
    ],
    tools: []
  },

  // ---------------- Marketing ----------------
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Marketing',
    summary: 'A joined-up plan across search, social, email and ads to bring in the right customers.',
    overview:
      'We look at your goals, your audience and your budget, then build a marketing plan that works across the channels that matter for you. We track results and adjust the plan as we learn.',
    includes: [
      'Marketing strategy and channel planning',
      'Campaign setup and management',
      'Audience research',
      'Monthly reports',
      'Ongoing optimization'
    ],
    benefits: [
      'One plan instead of disconnected activity',
      'Spend focused on channels that work',
      'Clear reporting on what you get for your budget'
    ],
    tools: []
  },
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    category: 'Marketing',
    summary: 'Get found on search engines by people who are looking for what you offer.',
    overview:
      'We improve your website so search engines understand it and people can find it. That covers the technical foundations, the content and the links that point to you.',
    includes: [
      'Keyword and competitor research',
      'On-page optimization',
      'Technical SEO audit and fixes',
      'Content recommendations',
      'Ranking and traffic reports'
    ],
    benefits: [
      'More visitors who are already interested',
      'Results that build over time, without paying per click',
      'A faster, better-structured website'
    ],
    tools: []
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    category: 'Marketing',
    summary: 'Regular, on-brand posting and community care across your social channels.',
    overview:
      'We plan, create and publish your social media content, reply to your audience and report on what is working, so your accounts stay active and on brand without taking up your time.',
    includes: [
      'Content calendar and post design',
      'Publishing and scheduling',
      'Community replies and monitoring',
      'Hashtag and trend research',
      'Monthly performance reports'
    ],
    benefits: [
      'Consistent presence without extra work for your team',
      'A voice that matches your brand',
      'Insights into what your audience likes'
    ],
    tools: []
  },
  {
    slug: 'paid-advertising',
    name: 'Paid Advertising',
    category: 'Marketing',
    summary: 'Google and Meta ad campaigns that reach the right people and track every rupee.',
    overview:
      'We set up and manage paid campaigns on Google and Meta, testing different audiences and messages, and shifting budget toward what performs. You see exactly what each campaign delivers.',
    includes: [
      'Campaign planning and audience targeting',
      'Ad creative and copy',
      'Google and Meta ad account management',
      'Conversion tracking',
      'Regular budget and performance reviews'
    ],
    benefits: [
      'Reach new customers quickly',
      'Control over budget and targeting',
      'Clear numbers on cost per lead or sale'
    ],
    tools: ['Google Ads', 'Meta Ads']
  },
  {
    slug: 'content-strategy-copywriting',
    name: 'Content Strategy and Copywriting',
    category: 'Marketing',
    summary: 'Clear, persuasive words and a plan for what to publish and where.',
    overview:
      'We decide what your audience needs to read and write it well. From website copy to blog posts and product descriptions, everything follows one consistent voice and supports a clear goal.',
    includes: [
      'Content plan and topic research',
      'Website and landing page copy',
      'Blog articles and product descriptions',
      'Brand voice guidelines',
      'Editing and proofreading'
    ],
    benefits: [
      'Messages that are easy to understand and act on',
      'Content that supports search and social',
      'A consistent voice across every page'
    ],
    tools: []
  },
  {
    slug: 'email-marketing-automation',
    name: 'Email Marketing and Automation',
    category: 'Marketing',
    summary: 'Emails that reach inboxes and automated journeys that follow up for you.',
    overview:
      'Email is still one of the best ways to stay close to customers. We design the emails, build automated sequences such as welcome series and reminders, and track what people open and click.',
    includes: [
      'Email design and templates',
      'Welcome, follow-up and reminder sequences',
      'List segmentation',
      'A/B testing',
      'Open, click and conversion reports'
    ],
    benefits: [
      'Follow-ups that happen on time, every time',
      'Messages tailored to different groups of customers',
      'A direct line to your audience'
    ],
    tools: []
  },
  {
    slug: 'influencer-collaboration',
    name: 'Influencer Collaboration',
    category: 'Marketing',
    summary: 'Partnerships with creators whose audience matches your customers.',
    overview:
      'We find creators who suit your brand and audience, agree clear terms and manage the campaign from brief to report, so the collaboration feels genuine and delivers results you can measure.',
    includes: [
      'Influencer research and shortlisting',
      'Outreach and agreements',
      'Campaign briefs and content approvals',
      'Posting schedule and coordination',
      'Results reporting'
    ],
    benefits: [
      'Reach audiences that already trust the creator',
      'Content that feels natural to the platform',
      'One point of contact for the whole campaign'
    ],
    tools: []
  },
  {
    slug: 'celebrity-collaboration',
    name: 'Celebrity Collaboration',
    category: 'Marketing',
    summary: 'Brand partnerships and endorsements with well-known personalities.',
    overview:
      'For brands that want wider visibility, we help arrange celebrity partnerships, from finding the right personality to agreeing the terms and running the campaign around them.',
    includes: [
      'Personality shortlisting that fits your brand',
      'Outreach and negotiation support',
      'Campaign concept and creative direction',
      'Launch and promotion planning',
      'Campaign reporting'
    ],
    benefits: [
      'Faster brand recognition',
      'Added credibility from a trusted face',
      'A managed process from first contact to launch'
    ],
    tools: []
  },
  {
    slug: 'analytics-cro',
    name: 'Analytics and CRO (Conversion Rate Optimization)',
    category: 'Marketing',
    summary: 'Understand how people use your site, then improve it so more of them take action.',
    overview:
      'We set up tracking so you can see what visitors do, find where they drop off and test improvements. Small, tested changes to pages and forms often lift sign-ups and sales without any extra ad spend.',
    includes: [
      'Analytics and conversion tracking setup',
      'Funnel and behavior analysis',
      'Landing page and form improvements',
      'A/B testing',
      'Dashboards and regular reports'
    ],
    benefits: [
      'Decisions based on data, not guesses',
      'More results from the traffic you already have',
      'Clear proof of what is working'
    ],
    tools: []
  }
];

export const getService = (slug) => services.find((s) => s.slug === slug);

// Groups shown on the Services page and on Home. "items" are the service objects.
const groupInfo = [
  {
    category: 'Development',
    title: 'Development services',
    text: 'From websites and apps to cloud, security and round-the-clock support, built to perform and to scale.'
  },
  {
    category: 'Design',
    title: 'Design services',
    text: 'Interfaces, motion and brand identities that make your product easy to use and easy to remember.'
  },
  {
    category: 'Marketing',
    title: 'Marketing services',
    text: 'Campaigns, content and analytics that bring in the right customers and help you keep them.'
  }
];

export const serviceGroups = groupInfo.map((g) => ({
  title: g.title,
  text: g.text,
  items: services.filter((s) => s.category === g.category)
}));

export const stack = [
  { title: 'Frontend', items: ['React'] },
  { title: 'Backend', items: ['Node.js', 'Python', 'Java'] },
  { title: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
  { title: 'E-commerce', items: ['Shopify', 'WooCommerce'] }
];