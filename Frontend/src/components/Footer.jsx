import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
