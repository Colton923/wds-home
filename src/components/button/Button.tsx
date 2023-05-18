//Do not use this component. it was for the initial load

// import { createClient } from '@vercel/kv'

// export default async function Button() {
//   const kv = createClient({
//     url: process.env.KV_REST_API_URL ? process.env.KV_REST_API_URL : '',
//     token: process.env.KV_REST_API_TOKEN ? process.env.KV_REST_API_TOKEN : '',
//   })

//   const setted = await kv.set('blog', [
//     {
//       id: '1',
//       title: 'Top 5 Most Effective New Business Ideas',
//       content: `
//         <h2>Top 5 Most Effective New Business Ideas</h2>
//         <p>Are you an aspiring entrepreneur looking for fresh business ideas that can make a significant impact? In this blog post, we'll explore the top 5 most effective new business ideas that have the potential to thrive in today's competitive market.</p>
//         <h2>1. E-commerce Subscription Box Service</h2>
//         <p>An e-commerce subscription box service involves curating and delivering personalized products or experiences to customers on a recurring basis. This business idea has gained popularity due to its convenience and surprise element. You can choose a specific niche or target a particular audience segment to create a successful subscription box service. Examples include subscription boxes for beauty products, snacks, books, or even pet supplies. By offering unique and curated items, you can attract customers looking for convenience, personalization, and discovery.</p>
//         <h2>2. Virtual Reality (VR) Arcade</h2>
//         <p>With the advancements in virtual reality (VR) technology, opening a VR arcade can be a highly engaging and profitable venture. A VR arcade allows customers to experience immersive virtual reality environments and play multiplayer games. By offering a wide range of VR experiences, from thrilling adventures to educational simulations, you can attract gamers, VR enthusiasts, and individuals looking for unique entertainment experiences. Creating a captivating environment with state-of-the-art VR equipment can enhance the overall customer experience and set your VR arcade apart.</p>
//         <h2>3. Sustainable Products and Services</h2>
//         <p>The increasing awareness and concern for environmental sustainability have opened up opportunities for businesses that focus on sustainable products and services. This business idea involves offering eco-friendly alternatives to conventional products or providing sustainable solutions. Examples include organic and eco-friendly clothing lines, renewable energy products, zero-waste packaging solutions, or even sustainable consulting services. By catering to the growing demand for environmentally conscious options, you can attract customers who prioritize sustainability and contribute to a greener future.</p>
//         <h2>4. Digital Marketing Agency</h2>
//         <p>In the digital age, businesses rely heavily on digital marketing strategies to reach their target audience effectively. If you have expertise in digital marketing, starting a digital marketing agency can be a lucrative venture. As a digital marketing agency, you would assist businesses in optimizing their online presence, developing effective marketing campaigns, and driving results through various digital channels. Services may include search engine optimization (SEO), social media marketing, content marketing, pay-per-click advertising, and web design. With the increasing demand for digital marketing expertise, you can provide valuable services to businesses across different industries.</p>
//         <h2>5. Health and Wellness Coaching</h2>
//         <p>The health and wellness industry is experiencing significant growth as people prioritize their physical and mental well-being. Starting a health and wellness coaching business allows you to provide personalized guidance and support to individuals seeking to improve their health and overall well-being. As a health coach, you can assist clients in setting and achieving fitness goals, adopting healthier lifestyles, and implementing sustainable changes. Services may include personalized workout plans, nutritional guidance, stress management techniques, and accountability support. By empowering and guiding individuals on their wellness journeys, you can make a positive impact and create a fulfilling business.</p>
//         <p>Remember, while these are considered effective new business ideas, success ultimately depends on thorough market research, understanding your target audience, and providing high-quality products or services. Passion, dedication, and adaptability are key to building a successful business in any industry.</p>
//         `,
//     },
//     {
//       id: '2',
//       title: 'The Evolution of Visual Basic into .NET and the Rise of JavaScript',
//       content: `
//         <h2>Unlock New Business Opportunities: The Evolution of Visual Basic into .NET and the Rise of JavaScript</h2>
//         <p>Are you a web developer looking to expand your client base and stay ahead in the ever-changing world of programming languages? In this blog post, we'll explore the evolution of Visual Basic (VB) into .NET and delve into how JavaScript emerged as the dominant force in web development. Understanding these shifts will help you seize new business opportunities and attract clients seeking cutting-edge solutions.</p>
//         <h2>The Rise of Visual Basic: Simplifying Application Development</h2>
//         <p>Visual Basic, introduced by Microsoft in the early 1990s, quickly gained popularity among developers due to its user-friendly nature, drag-and-drop interface, and robust support for building Windows applications. The intuitive syntax and rapid development capabilities of Visual Basic made it a go-to language for many developers seeking to create powerful graphical user interfaces (GUIs) and leverage the capabilities of the Windows operating system.</p>
//         <h2>The Birth of .NET: Unifying Development with Enhanced Features</h2>
//         <p>As technology progressed, Microsoft recognized the need for a more robust and versatile framework, resulting in the birth of the .NET framework. Visual Basic underwent a significant transformation and became Visual Basic .NET (VB.NET), joining other languages such as C# and F# under the .NET umbrella. This transition brought enhanced features, improved performance, and seamless integration with the .NET framework, expanding the possibilities for developers.</p>
//         <h2>Advantages of VB.NET and .NET Framework: Unleash Your Potential</h2>
//         <p>VB.NET inherited the ease of use and familiar syntax from Visual Basic while gaining access to the extensive capabilities offered by the .NET framework. By leveraging VB.NET and the .NET framework, you can benefit from:</p>
//         <ul>
//         <li>Object-oriented programming support: Build modular and scalable applications by embracing object-oriented principles.</li>
//         <li>Language interoperability: Seamlessly interact with other .NET languages, facilitating code reuse and collaboration.</li>
//         <li>Rich class libraries: Save time and effort by utilizing the vast collection of pre-built classes and libraries provided by the .NET framework.</li>
//         <li>Efficient memory management: Focus on coding instead of manual memory management tasks and reduce the risk of memory leaks with .NET's managed memory model.</li>
//         <li>Enhanced security: VB.NET and the .NET framework offer robust security features, including code access security and role-based security, ensuring the safety of your applications.</li>
//         </ul>
//         <h2>The Emergence of JavaScript: Empowering Web Development</h2>
//         <p>The rise of the internet brought new challenges and opportunities, and JavaScript emerged as a game-changer in web development. Initially introduced as a client-side scripting language for web browsers, JavaScript empowered developers to manipulate web page elements, handle events, and perform asynchronous operations seamlessly. Its flexibility, widespread browser support, and growing demand for dynamic web applications propelled JavaScript to the forefront of the industry.</p>
//         <h2>JavaScript's Dominance in Web Development: Embrace the Future</h2>
//         <p>Several factors contributed to JavaScript's eventual dominance in web development:</p>
//         <ul>
//         <li>Client-side interactivity: Create rich and interactive user experiences by leveraging JavaScript's ability to manipulate web page elements and respond to user actions.</li>
//         <li>Server-side capabilities: Expand beyond the browser with Node.js, enabling full-stack JavaScript development and empowering you to build scalable and efficient web applications.</li>
//         <li>Large developer community: Join a massive and passionate developer community that continuously contributes to JavaScript's ecosystem, resulting in numerous libraries, frameworks, and tools that enhance productivity and extend functionality.</li>
//         <li>Compatibility across platforms: JavaScript's platform independence allows it to run on various devices and operating systems, making it a versatile programming language that can cater to a wide range of client requirements.</li>
//         </ul>
//         <p>As a web developer seeking new clients, it's crucial to recognize JavaScript's dominant position in web development. By embracing JavaScript, you can tap into a vast market of businesses and individuals looking for innovative web solutions.</p>
//         <p>While Visual Basic and .NET continue to be widely used for Windows application development, the demand for web-based applications has shifted the industry's focus toward JavaScript. Its versatility, flexibility, and widespread adoption make it the de facto language for web development. Moreover, the introduction of TypeScript, a superset of JavaScript, adds static typing and additional development capabilities, combining the benefits of JavaScript with enhanced code quality and maintainability.</p>
//         <p>By staying up-to-date with the latest trends and technologies, you position yourself as a competent and forward-thinking web developer. Offering expertise in both VB.NET and JavaScript allows you to cater to diverse client needs, from Windows applications to dynamic web solutions.</p>
//         <p>As you embark on your journey to attract new clients, be sure to highlight your skills and experience in both VB.NET and JavaScript. Showcase the advantages of each language, emphasizing how you can leverage their strengths to deliver innovative and efficient solutions tailored to your clients' specific requirements.</p>
//         <p>In conclusion, the evolution of Visual Basic into .NET and the rise of JavaScript in web development have shaped the programming landscape. To unlock new business opportunities, embrace the power of JavaScript while leveraging your expertise in VB.NET and the .NET framework. By offering a comprehensive skill set, you position yourself as a capable web developer ready to meet the demands of today's market and attract new clients seeking cutting-edge solutions.</p>
//         `,
//     },
//     {
//       id: '3',
//       title: 'Unlocking the Power of INDEX and MATCH Functions',
//       content: ` <h2>Unlocking the Power of INDEX and MATCH Functions: Creating Relational Data Tables in Excel</h2>
//         <p>Excel is a powerful tool for organizing and analyzing data, and the INDEX and MATCH functions are two essential tools that can take your data management skills to the next level. In this blog post, we'll explore how the INDEX and MATCH functions can be used together effectively to create relational data tables in Excel. By understanding and harnessing the power of these functions, you can enhance the flexibility and efficiency of your data analysis workflows.</p>
//         <h2>The INDEX Function</h2>
//         <p>The INDEX function in Excel allows you to retrieve a value from a specific cell within a range of cells. Its syntax is straightforward: INDEX(array, row_num, [column_num]). The "array" parameter represents the range of cells from which you want to retrieve data, while "row_num" and "column_num" indicate the position of the desired value within that range.</p>
//         <h2>The MATCH Function</h2>
//         <p>The MATCH function complements the INDEX function by enabling you to find the position of a specific value within a range. Its syntax is MATCH(lookup_value, lookup_array, [match_type]). The "lookup_value" is the value you want to find, and "lookup_array" represents the range of cells in which you're searching. The optional "match_type" parameter allows you to specify the type of matching: exact match, approximate match, or the closest match.</p>
//         <h2>Creating Relational Data Tables with INDEX and MATCH</h2>
//         <p>When used together effectively, the INDEX and MATCH functions can create powerful relational data tables in Excel. Here's a step-by-step guide:</p>
//         <ol>
//         <li>Set up your data: Organize your data into separate tables, each with a unique identifier (such as an ID or key) and related information.</li>
//         <li>Determine the relationship: Identify the common field between the tables that will establish the relationship. For example, if you have a customer table and an order table, the customer ID may serve as the linking field.</li>
//         <li>Use MATCH to find the matching row: In the table where you want to retrieve data, use the MATCH function to find the position of the unique identifier from the other table. This will help you locate the corresponding row.</li>
//         <li>Use INDEX to retrieve the desired data: Once you have the row position from the MATCH function, utilize the INDEX function to extract the relevant information from the related table. Specify the array as the desired range and the row number as the result of the MATCH function.</li>
//         </ol>
//         <h2>Benefits of Relational Data Tables</h2>
//         <p>By leveraging the INDEX and MATCH functions to create relational data tables, you can enjoy several benefits:</p>
//         <ul>
//         <li>Data consistency: Relational data tables ensure consistent and accurate data across multiple tables, reducing the risk of errors and inconsistencies.</li>
//         <li>Efficiency in data analysis: With relational data tables, you can quickly retrieve related information without manually searching through extensive datasets. This saves time and simplifies data analysis processes.</li>
//         <li>Flexibility: Relational data tables allow you to easily add or remove data without disrupting the entire dataset. This flexibility enables you to adapt to changing requirements and expand your data analysis capabilities.</li>
//         </ul>
//         <p>As you can see, the INDEX and MATCH functions are powerful tools that can enhance your data analysis workflows. By creating relational data tables, you can enjoy the benefits of data consistency, efficiency, and flexibility.</p>
//         <p>Remember, while the INDEX and MATCH functions are useful, they are not the only tools at your disposal. Excel offers a wide range of functions and features that can help you organize and analyze data effectively. By continuously learning and exploring Excel's capabilities, you can unlock new opportunities and expand your data analysis skills.</p>
//         `,
//     },
//   ])

//   return (
//     <div>
//       {setted ? (
//         <div>
//           <h1>Setted</h1>
//         </div>
//       ) : (
//         <div>
//           <h1>Not Setted</h1>
//         </div>
//       )}
//     </div>
//   )
// }
