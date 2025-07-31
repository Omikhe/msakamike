import { 
  Home, 
  Code, 
  Camera,  
  User,
  Github,
  Instagram, 
  Palette
} from "lucide-react";

// Social media links with proper Lucide icons where available
export const socialLinks = [
  {
    href: "https://x.com/mikemsaka/",
    icon: (
      <svg 
        className="w-3 h-3" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        aria-label="X (Twitter)"
      >
        <path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />
      </svg>
    ),
    label: "X",
    external: true
  },
  {
    href: "https://www.pinterest.com/omikhe_/",
    icon: (
      <svg 
        className="w-3 h-3" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        aria-label="Pinterest"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    label: "Pinterest",
    external: true
  },
  {
    href: "https://github.com/omikhe",
    icon: <Github className="w-3 h-3" />,
    label: "GitHub",
    external: true
  },
  {
    href: "https://instagram.com/omikhe_",
    icon: <Instagram className="w-3 h-3" />,
    label: "Instagram",
    external: true
  }
];

// Navigation links with proper Lucide icons
export const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="w-5 h-5" />,
    description: "Back to homepage"
  },
  {
    href:"/design",
    label: "Design",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    href: "/webdev",
    label: "Code",
    icon: <Code className="w-5 h-5" />,
    description: "My web development projects and skills"
  },
  {
    href: "/shots",
    label: "Shots",
    icon: <Camera className="w-5 h-5" />,
    description: "Photo gallery and photography work"
  },
  {
    href: "/about",
    label: "About",
    icon: <User className="w-5 h-5" />,
    description: "Learn more about me"
  }
];