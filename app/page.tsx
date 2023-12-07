import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 w-full">
        <div className="container mx-auto flex items-center justify-center">
          <nav className="flex space-x-4">
            <Link href="/">
              <p className="hover:underline">Home</p>
            </Link>
            <Link href="/about">
              <p className="hover:underline">About</p>
            </Link>
            <Link href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/">
              <p className="hover:underline">LinkedIn</p>
            </Link>
            <Link href="https://github.com/Guruprasad1399?tab=repositories">
              <p className="hover:underline">Github</p>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center p-10 flex-grow">

        {/* Professional Photo */}
        <div className="mb-8 rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          <Image
            src="/GuruprasadVenkatraman.jpg"
            alt="Professional Photo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-800">Welcome to my Full-Stack Development Journey</h1>
          <p className="text-gray-600">
            Hello, I'm Guruprasad Venkatraman, a dedicated and versatile software developer with
            3+ years of experience in creating and developing websites, writing API endpoints
            and automating the deployment process. a mission to create innovative solutions that
            seamlessly blend technology and user-centric design. My journey in the world of
            software development has been marked by a passion for crafting responsive
            web applications and implementing cutting-edge technologies to elevate user experiences.
            My approach to development goes beyond writing code; it's about
            solving real-world problems and delivering solutions that make a meaningful impact.
            I thrive in dynamic environments and enjoy the challenge of staying up-to-date with
            the latest industry trends to ensure my work is at the forefront of innovation.
          </p>
        </div>

        <div className="text-center mb-8">
          <h2 className="font-bold text-gray-700">
            <a href="/Guruprasad_Resume.pdf" download>
              <h2 className="hover:underline">DOWNLOAD RESUME</h2>
            </a>
          </h2>
        </div>
        {/* Skills Section */}
        <section className="text-center my-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each Skill Category */}
            {[
              { title: 'Programming Languages', skills: 'JavaScript, Java, TypeScript, C, Python, PHP' },
              { title: 'Web Technologies/ Frameworks', skills: 'Node.js, Spring Boot, Express, React, Vue, Redux, AngularJS, React Native, jQuery, Next JS' },
              { title: 'Database', skills: 'MongoDB, MSSQL, MySQL, Oracle 12c, PostgreSQL' },
              { title: 'Cloud Computing', skills: 'Azure and AWS Services, Kubernetes, Docker, Terraform' },
              { title: 'DevOps', skills: 'Git, Jenkins, CI/CD, Ansible, Lambda, Apache Kafka, RabbitMQ' },
              { title: 'Testing', skills: 'JUnit, Jest, Cucumber, Unit Testing' },
              { title: 'Others', skills: 'Agile, Scrum, GraphQL, Linux, Shell Scripting, .Net, Data Analysis' },
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{category.title}</h3>
                <p className="text-gray-700">{category.skills}</p>
              </div>
            ))}

          </div>
        </section>

        {/* Projects Section */}
        <section className="text-center my-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Projects</h2>
          {/* Showcase your latest projects with brief descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1: Cloud-Native E-Commerce Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Cloud-Native E-Commerce Backend</h3>
              <p className="text-gray-700">
                Developed a robust cloud-native e-commerce backend using GraphQL and Express.js, providing a scalable and efficient solution for managing online transactions and product data.
              </p>
              <br />
              <p className="text-gray-800 font-bold">
                Key Achievements:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implemented GraphQL for efficient querying and manipulation of data, enhancing the flexibility of API interactions.</li>
                <li>Utilized Express.js to build a performant and modular backend architecture.</li>
                <li>Integrated with cloud services for seamless scalability and improved response times.</li>
                <li>Designed and implemented database schemas for optimal data storage and retrieval.</li>
                <li>Ensured data security and integrity through robust authentication and authorization mechanisms.</li>
                <li>Collaborated with the front-end team to define API contracts and ensure smooth communication between the layers of the application.</li>
              </ul>
            </div>

            {/* Project 2: Shopify Local App */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Shopify Local App</h3>
              <p className="text-gray-700">
                Participated in a hackathon conducted by Not just dev, contributing to the development of a React Native application that supports local businesses.
              </p>
              <br />
              <p className="text-gray-700 font-bold">
                Project Details:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed a React Native app, ShopWiseLocal, for the notJust.dev Hackathon.</li>
                <li>Supported local businesses by connecting them with customers through detailed business profiles and a rewards system.</li>
                <li>Implemented a points-based rewards system for users who purchase products from local businesses.</li>
                <li>Utilized React Native and Expo for cross-platform development.</li>
                <li>Focused on innovation by providing a unique approach to support local communities.</li>
                <li>Enabled users to explore and support local businesses, serving as a discovery and engagement platform.</li>
                <li>Explore the project codebase at the repository:
                  <Link href="https://github.com/Guruprasad1399/shopWiseLocal.git">
                    <p className="hover:underline font-bold">Github</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Project 3: Angular Blog Platform */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Angular Blog Platform</h3>
              <p className="text-gray-700">
                Built a blog platform using Angular and Spring Boot.
              </p>
              <br />
              <p className="text-gray-700 font-bold">Tech Stack:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Frontend: Angular 12, TypeScript, RxJS, Angular Material, NgRx</li>
                <li>Backend: Spring Boot 2.5, Java 11, Spring Security, Spring Data JPA, PostgreSQL</li>
                <li>Database & Storage: PostgreSQL, Amazon S3, Hibernate ORM, Liquibase</li>
                <li>Deployment & Infrastructure: Docker, Kubernetes, AWS, Jenkins, NGINX</li>
                <li>Testing & QA: Jasmine, Karma, JUnit, Mockito, Postman, SonarQube, Cypress</li>
              </ul>
            </div>

            {/* Project 4: React Native Chat Application */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-800">React Native Chat Application</h3>
              <p className="text-gray-700">
                Created various chat applications using React Native. Published two apps on the Play Store.
              </p>
              <br />
              <p className="text-gray-700 font-bold">Tech Stack:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Mobile App Development: React Native 0.64, JavaScript, TypeScript, Expo, React Navigation, Redux</li>
                <li>Backend: Node.js, Express, MongoDB, Mongoose, JWT, Socket.io</li>
                <li>Push Notifications & Cloud Services: FCM, Firebase Authentication, AWS Lambda, DynamoDB, AWS S3</li>
                <li>Deployment & Infrastructure: GitHub Actions, Heroku, Netlify, Docker, AWS Amplify</li>
                <li>Testing & QA: Jest, Enzyme, Postman, Detox, ESLint, Prettier, GitHub Actions</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Guruprasad Venkatraman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
