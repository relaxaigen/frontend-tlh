'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="relative group">
    <span className="text-blue-700 font-medium hover:text-blue-800 px-4 py-2 rounded-md text-sm 
      transition-all duration-300 ease-in-out hover:scale-105 inline-block">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 
        transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </span>
  </Link>
);

const NavButton = ({ variant, href, target, rel, children }: { variant: 'filled' | 'outlined', href: string, target: string, rel: string, children: React.ReactNode }) => {
  const baseStyles = "px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105";
  const variants = {
    filled: "bg-blue-700 text-white hover:bg-blue-800",
    outlined: "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50"
  };

  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="The Learning Hub Logo"
                width={40}
                height={40}
                className="w-auto h-8"
              />
            </motion.div>
            <span className="text-blue-700 font-bold text-lg">
              The Learning HUB
            </span>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/features">Features</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <NavButton 
                variant="filled" 
                href="https://student.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student
              </NavButton>
              <NavButton 
                variant="outlined"
                href="https://manage.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Library
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
