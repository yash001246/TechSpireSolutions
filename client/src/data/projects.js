// ============================================================================
//  YOUR PROJECTS. Edit this file to change the Work page, the Portfolio page
//  and "Recent work" on the Home page. No database or server change needed.
//
//  HOW TO ADD A PROJECT
//  1. Copy the template below and paste it inside the list, above the samples.
//  2. Fill in your own details.
//  3. (Optional) Add a screenshot: put the image in  client/public/projects/
//     and write its path in `image`, for example '/projects/my-project.jpg'.
//     Use a landscape image, around 1200 x 800 px, under 300 KB.
//  4. Delete the sample projects (the ones with  sample: true).
//  5. git add . / git commit / git push, and Vercel updates the site.
//
//  TEMPLATE (copy this):
//  {
//    slug: 'my-project',            // unique, lowercase, no spaces (use - )
//    name: 'Project Name',          // short name shown on the card
//    sector: 'Retail',              // industry of the client
//    year: '2025',                  // optional
//    title: 'One line about what you built',
//    summary: 'Two short sentences about the project and the problem it solved.',
//    tags: ['Web', 'Cloud'],        // any words you like. The filter buttons are created from these.
//    results: ['Result one', 'Result two', 'Result three'],
//    link: 'https://client-website.com',   // optional: live website, or '' to hide the button
//    image: '/projects/my-project.jpg',    // optional: screenshot, or '' to use the colour card
//    color: '#3D4BFF', textColor: '#FFFFFF', accent: '#FFD66B'   // colour card (used when there is no image)
//  },
//
//  Colours you can reuse:
//    blue #3D4BFF (text #FFFFFF)   sun #FFD66B (text #0C1230)   coral #FF6A4D (text #0C1230)
//    ink #0C1230 (text #FFFFFF)    mint #BFF0DC (text #0C1230)  mist #DDE1F2 (text #0C1230)
// ============================================================================

const projects = [
  // ---- Put your real projects here ----
  {
   slug: 'barton-g',            // unique, lowercase, no spaces (use - )
   name: 'Barton G',          // short name shown on the card
   sector: 'Restaurants',              // industry of the client
   //year: '2025',                  // optional
   title: 'Reserve Tables In Restaurants',
   summary: 'Helps To Book Table For Family.',
   tags: ['Web', 'Restaurants' , 'Cloud'],        // any words you like. The filter buttons are created from these.
    results: ['Restaurants', 'Event', 'Catering'],
   link: "https://bartong.com/",   // optional: live website, or '' to hide the button
   image: '/bartong.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'hello-monday',            // unique, lowercase, no spaces (use - )
   name: 'Hello Monday',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'An Product Based Website',
   summary: 'Helps To Make Products And Grow Brands.',
   tags: ['Web', 'UI/UX' , 'Branding'],        // any words you like. The filter buttons are created from these.
    results: ['Product', 'Branding', 'Exeperince'],
   link: "https://hellomonday.com/",   // optional: live website, or '' to hide the button
   image: '/hellomonday.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'makro-pro',            // unique, lowercase, no spaces (use - )
   name: 'Makro PRO',          // short name shown on the card
   sector: 'Application',              // industry of the client
   //year: '2025',                  // optional
   title: 'Android app for grocery',
   summary: 'Android app for grocery and essentials delivery.',
   tags: ['Android', 'Mobile'],        // any words you like. The filter buttons are created from these.
    results: ['Product', 'Grocery', 'Essentials items'],
   link: "https://play.google.com/store/apps/details?id=com.makromangoapp.production",   // optional: live website, or '' to hide the button
   image: '/makropro.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'walomi-android',            // unique, lowercase, no spaces (use - )
   name: 'Walomi (Android)',          // short name shown on the card
   sector: 'Application',              // industry of the client
   //year: '2025',                  // optional
   title: 'An Andriod App For Parenting Support',
   summary: 'Android app for community and parenting support..',
   tags: ['Android', 'Mobile'],        // any words you like. The filter buttons are created from these.
    results: ['Support', 'Community', 'Parenting'],
   link: "https://play.google.com/store/apps/details?id=com.wolomi",   // optional: live website, or '' to hide the button
   image: '/wolomi.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'yolo-matrix',            // unique, lowercase, no spaces (use - )
   name: 'Yolo Matrix',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'Travel Agency',
   summary: 'Luxury concierge and travel experiences website..',
   tags: ['Web', 'Nex.js' , 'Travel'],        // any words you like. The filter buttons are created from these.
    results: ['Travel', 'Next.js', 'Web'],
   link: "https://yolomatrix-2.vercel.app/",   // optional: live website, or '' to hide the button
   image: '/yolo.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'learn-hub',            // unique, lowercase, no spaces (use - )
   name: 'LearnHub',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'Online Learing Portal',
   summary: 'Web platform for courses and e-learning..',
   tags: ['Web', 'React', 'Hosting'],        // any words you like. The filter buttons are created from these.
    results: ['Learing', 'e-Learing', 'courses'],
   link: "https://learnhub.com/",   // optional: live website, or '' to hide the button
   image: '/learnhub.png',    // optional: screenshot, or '' to use the colour card
   },

   {
    slug: 'brand-reel',
    category: 'Video Editing',              // ye line zaroori hai
    name: 'Brand Reel',
    sector: 'Fashion',
    title: 'A 30-second launch video',
    summary: 'Fast cuts, motion text and sound design for Instagram and YouTube.',
    tags: ['Reel', 'Motion'],
    results: ['16:9 and 9:16 versions', 'Colour graded', 'Sound mixed'],
    video: '/groovy.mp4',               // public folder mein jahan file hai wahi path
    image: '/groovy.png',         // cover image (recommended)
    vertical: false,                        // Reel / Shorts ho to true
    link: '',
    color: '#FF6A4D', textColor: '#0C1230', accent: '#FFD66B'
  },

  {
   slug: 'melyssa-griffin',            // unique, lowercase, no spaces (use - )
   name: 'Melyssa Griffin',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'creative entrepreneur and guide',
   summary: 'Work for an creative entrepreneur and guide for soulful business owners.',
   tags: ['Web', 'React', 'Hosting'],        // any words you like. The filter buttons are created from these.
    results: ['entrepreneur', 'guide', 'soulful business owners'],
   link: "https://melyssagriffin.com/",   // optional: live website, or '' to hide the button
   image: '/griffin.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'serai-collective',            // unique, lowercase, no spaces (use - )
   name: 'Serai Collective',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'An Ecommerce Platform',
   summary: 'An Ecommerce Platform for international client',
   tags: ['Web', 'ecommerce', 'Hosting'],        // any words you like. The filter buttons are created from these.
    results: ['web', 'ecommerce', 'product'],
   link: "https://seraicollective.com/",   // optional: live website, or '' to hide the button
   image: '/serai.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'yooy-drinks',            // unique, lowercase, no spaces (use - )
   name: 'YOOY',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'YOOY Drinks',
   summary: 'YOOY Drinks website for an international client..',
   tags: ['Web', 'ecommerce', 'Hosting', 'Shopify'],        // any words you like. The filter buttons are created from these.
    results: ['product', 'ecommerce', 'Shopify'],
   link: "https://yooydrinks.com/",   // optional: live website, or '' to hide the button
   image: '/yooy.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'quick-14',            // unique, lowercase, no spaces (use - )
   name: 'quick14studio',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'An web design Studio',
   summary: 'Web design studio ehich use figma and work on UI/UX.',
   tags: ['Web', 'React', 'Hosting', 'UI/UX'],        // any words you like. The filter buttons are created from these.
    results: ['Web Designs', 'Host', 'UI/UX'],
   link: "https://www.quick14studio.com/",   // optional: live website, or '' to hide the button
   image: '/quick.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'next-on-scene',            // unique, lowercase, no spaces (use - )
   name: 'Next On Scene',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'Personal Brand & PR Agency',
   summary: 'Personal Brand & PR Agency for brands and influncer.',
   tags: ['Web', 'React', 'Hosting'],        // any words you like. The filter buttons are created from these.
    results: ['web', 'page', 'host'],
   link: "https://nextonscene.com/",   // optional: live website, or '' to hide the button
   image: '/next.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'home-plunge',            // unique, lowercase, no spaces (use - )
   name: 'Home Plunge',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'For home appliances',
   summary: 'Web platform for home appliances and iteans which are used at home.',
   tags: ['Web', 'React', 'Hosting', 'Wordpress'],        // any words you like. The filter buttons are created from these.
    results: ['web', 'ecommerce', 'Host'],
   link: "https://www.thehomeplunge.com/",   // optional: live website, or '' to hide the button
   image: '/home.png',    // optional: screenshot, or '' to use the colour card
   },

   {
   slug: 'tim-allen',            // unique, lowercase, no spaces (use - )
   name: 'Tim allen properties',          // short name shown on the card
   sector: 'web devlopment',              // industry of the client
   //year: '2025',                  // optional
   title: 'Properties & Real Estate platform',
   summary: 'Web platform for Properties & Real Estate platform.',
   tags: ['Web', 'Hosting', 'Wordpress'],        // any words you like. The filter buttons are created from these.
    results: ['web', 'Real Estate', 'Properties', 'Wordpress'],
   link: "https://timallenproperties.com/",   // optional: live website, or '' to hide the button
   image: '/tim.png',    // optional: screenshot, or '' to use the colour card
   },
];

export default projects;