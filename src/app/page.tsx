import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Head Section for SEO */}
      <Head>
        <title>Akash Kumar | Portfolio</title>
        <meta name="description" content="Akash Kumar's personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Wrapper */}
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-5xl font-bold">Akash Kumar</h1>
          <p className="text-xl mt-4">Full Stack Developer | ML Enthusiast</p>
          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/88akash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/88-akashkumar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://x.com/88__akash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-800 w-full text-center px-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-gray-400">
            I’m Akash Kumar, a Full Stack Developer and Machine Learning Enthusiast passionate about creating impactful
            solutions. Let’s build something amazing together.
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-16 w-full text-center px-4">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="mt-6 text-lg text-gray-400">
            <h3 className="text-2xl font-semibold">AkamiCare</h3>
            <p className="mt-2">
              Developed an AI-powered healthcare chatbot that retrieves patient records, hospital database entries,
              and healthcare guidelines by processing CSV databases and PDFs.
            </p>
            <p className="mt-2">
              Built an intuitive dashboard providing real-time healthcare metrics, enabling quick and efficient
              decision-making for medical staff.
            </p>
            <p className="mt-2">
              Integrated Natural Language Processing (NLP) capabilities to allow seamless, conversational
              interactions for retrieving critical healthcare information.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-6 bg-gray-900 text-gray-400 w-full text-center">
          <p>&copy; {new Date().getFullYear()} Akash Kumar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
