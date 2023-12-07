import Head from 'next/head'
import Link from 'next/link';

function About() {
    return (
        <>
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
            <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-md shadow-md text-gray-800">
                <Head>
                    <title>About Me - Guruprasad Venkatraman</title>
                    <meta name="description" content="Learn more about Guruprasad Venkatraman, a skilled software developer." />
                </Head>

                {/* Skills Overview */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills Overview</h2>
                    <p className="text-lg">
                        I specialize in a variety of technologies including Java, JavaScript, TypeScript, C, MongoDB, MSSQL, Node, Express, React, Vue, Redux, jQuery, NoSQL, Git, Spring, Spring Boot, Hibernate ORM, AngularJS, React-native, Kubernetes, Docker, MySQL, Python, GraphQL, Linux, Shell Scripting, PHP, .Net, Jenkins, Azure, AWS, Cloud Computing, CI/CD, JUnit, Jest, Cucumber, Unit Testing, Ansible, Lambda, Apache Kafka, Terraform, RabbitMQ. I have experience in Microservices, Distributed Systems, Frontend, Backend, and Full-Stack development.
                    </p>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Education</h2>
                    <ul className="list-disc pl-6 text-lg">
                        <li>Bachelor of Engineering, Electronics and Computer Engineering, Anna University, Chennai, TN, India (08/2016 - 07/2020)</li>
                        <li>Master of Science, Computer Science, Cleveland State University, Cleveland, OH, USA (01/2022 – 05/2023)</li>
                    </ul>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Experience</h2>
                    {/* Software Developer at SkillNet Solutions */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-blue-900">Software Developer</h3>
                        <p className="text-gray-600 mb-2">SkillNet Solutions, Twinsburg, OH, USA (06/2023 – 10/2023)</p>
                        <ul className="list-disc pl-6">
                            <li>Proposed and created responsive web applications using JavaScript, React JS, and Redux focusing on user interface design and interactivity.</li>
                            <li>Developed RESTful API services using Node.js, seamlessly integrating with the React Native application and improving data retrieval efficiency by 50%.</li>
                            <li>Conducted extensive testing and debugging, reducing application downtimes by 25% and enhancing overall reliability.</li>
                            <li>Integrated cloud-based database services, optimizing application functionality and reducing response time by 40%.</li>
                        </ul>
                    </div>

                    {/* Software Engineer at Drughelp-Care */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-blue-900">Full Stack Engineer</h3>
                        <p className="text-gray-600 mb-2">Drughelp-Care, Cleveland, OH, USA (02/2022 - 05/2023)</p>
                        <ul className="list-disc pl-6">
                            <li>Spearheaded the implementation of React.js and Angular frameworks to create scalable front-end components, resulting in a 50% increase in user satisfaction and a 25% decrease in bounce rate.</li>
                            <li>Worked closely with backend teams on API development and integration, ensuring seamless full-stack functionality.</li>
                            <li>Managed state and data flow in applications, leading to a 15% boost in efficiency and scalability.</li>
                            <li>Transformed the marketing platform's user-experience testing process by integrating Nightwatch and Selenium, cutting down testing time by 60%.</li>
                        </ul>
                    </div>

                    {/* Software Engineer at Stack Smith */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-blue-900">Mobile Application Developer</h3>
                        <p className="text-gray-600 mb-2">Stack Smith, Odisha, India (08/2021 - 02/2022)</p>
                        <ul className="list-disc pl-6">
                            <li>Integrated cloud-based database services for enhanced application functionality. Built RESTful API services using Node.js that integrate with the React Native application. Integrated push notifications into the mobile app using Firebase Cloud Messaging.</li>
                            <li>Directed a team of 8 in the advanced development of React Native mobile apps, achieving a 30% enhancement in system performance. This pivotal project led to a 40% increase in user engagement and contributed to a 25% growth in annual revenue.</li>
                            <li>Performed unit testing and debugging to identify and resolve software bugs, ensuring smooth application performance.</li>
                            <li>Configured continuous integration tools such as Jenkins for automated deployment processes.</li>
                        </ul>
                    </div>

                    {/* Software Engineer at Triloki Smart Systems */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-blue-900">Software Engineer</h3>
                        <p className="text-gray-600 mb-2">Triloki Smart Systems, Bangalore, India (08/2020 - 07/2021)</p>
                        <ul className="list-disc pl-6">
                            <li>Streamlined website deployment processes using Jenkins, reducing deployment times by 50% and improving operational efficiency.</li>
                            <li>Played a crucial role in development for various projects, focusing on backend systems, API integrations, and cloud-based solutions.</li>
                            <li>Created and re-organized software solutions for data analysis and reporting, utilizing modern programming languages and database technologies.</li>
                        </ul>
                    </div>
                </section>

                {/* Mentorship */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Mentorship</h2>
                    <p className="text-lg">
                        Computer Science Tutor: Programming, Data Structure and Algorithms, Coding Interview Prep, Professional Portfolio.
                    </p>
                </section>

                {/* Certifications */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Certifications</h2>
                    <p className="text-lg">AWS Certified Solutions Architect (02/2020)</p>
                </section>
            </div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Guruprasad Venkatraman. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default About;