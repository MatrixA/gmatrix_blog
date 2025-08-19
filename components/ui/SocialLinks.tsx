import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaDev, FaMedium } from 'react-icons/fa'

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/fernandojacob',
    icon: FaGithub,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/fernandojacob',
    icon: FaLinkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/fernandojacob',
    icon: FaTwitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    url: 'mailto:contact@fernandojacob.com',
    icon: FaEnvelope,
    color: 'hover:text-red-500',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/fernandojacob',
    icon: FaInstagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'DEV',
    url: 'https://dev.to/fernandojacob',
    icon: FaDev,
    color: 'hover:text-black dark:hover:text-white',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@fernandojacob',
    icon: FaMedium,
    color: 'hover:text-green-600',
  },
]

interface SocialLinksProps {
  size?: number
  className?: string
  iconClassName?: string
  showLabels?: boolean
  limit?: number
}

export default function SocialLinks({
  size = 24,
  className = '',
  iconClassName = '',
  showLabels = false,
  limit,
}: SocialLinksProps) {
  const linksToShow = limit ? socialLinks.slice(0, limit) : socialLinks

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {linksToShow.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-gray-600 dark:text-gray-400 
              ${social.color} 
              transition-colors duration-200
              ${showLabels ? 'flex items-center gap-2' : ''}
              ${iconClassName}
            `}
            aria-label={social.name}
            title={social.name}
          >
            <Icon size={size} />
            {showLabels && (
              <span className="text-sm font-medium">{social.name}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}