import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/fernandojacob', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/fernandojacob', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/fernandojacob', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@fernandojacob.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fernando Jacob</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Fernando Jacob. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}