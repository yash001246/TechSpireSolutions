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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
   slug: 'my-project',            // unique, lowercase, no spaces (use - )
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
];

export default projects;