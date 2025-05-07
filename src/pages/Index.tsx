import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import CountUp from '../components/CountUp';
import DigitalInitiative from '../components/DigitalInitiative';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Keep original slideshow image paths
const slideshowImages = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
];

// Keep ALL original logo paths exactly as they were
const digitalInitiatives = [
  {
    name: "Aadhaar",
    logoSrc: "/images/aadhaar.png", // Keep original
    leaders: [
      { name: "Shri Bhuvnesh Kumar", title: "CEO of UIDAI", email: "ceo@uidai.gov.in" }
    ],
    description: "World's largest biometric ID system with 1.3B+ enrolled users",
    path: "/digital-goods/aadhaar",
    stats: {
      users: "1.3B+",
      launch: "2009",
      coverage: "99% adults"
    }
  },
  {
    name: "UPI",
    logoSrc: "/images/image1.png", // Keep original 
    leaders: [
      { name: "Mr. Dilip Asbe", title: "MD & CEO, NPCI", email: "ceo@npci.org.in" }
    ],
    description: "Real-time payment system processing 10B+ monthly transactions",
    path: "/digital-goods/upi",
    stats: {
      users: "300M+",
      launch: "2016",
      transactions: "₹100T+ annually"
    }
  },
  {
    name: "DigiLocker",
    logoSrc: "/images/digilocker.png", // Keep original
    leaders: [
      { name: "Mr. Nand Kumaram", title: "P&CEO, NeGD", email: "ceo-negd@digitalindia.gov.in" }
    ],
    description: "Digital document wallet with 150M+ users and 5B+ documents",
    path: "/digital-goods/digilocker",
    stats: {
      users: "150M+",
      launch: "2015",
      documents: "5B+"
    }
  },
  {
    name: "Aarogya Setu",
    logoSrc: "/images/argyasetu.png", // Keep original spelling
    leaders: [
      { name: "Mr. IPS Sethi", title: "Director General, NIC", email: "dg@nic.in" }
    ],
    description: "Contact tracing app with 200M+ downloads during pandemic",
    path: "/digital-goods/aarogya-setu",
    stats: {
      users: "200M+",
      launch: "2020",
      alerts: "1M+"
    }
  },
  {
    name: "DIKSHA",
    logoSrc: "/images/diksha.png", // Keep original
    leaders: [
      { name: "Dr. Amarendra P. Behera", title: "Joint Director, NCERT", email: "jdciet.ncert@nic.in" }
    ],
    description: "National e-learning platform for 25M+ teachers and students",
    path: "/digital-goods/diksha",
    stats: {
      users: "25M+",
      launch: "2017",
      courses: "500K+"
    }
  },
  {
    name: "UMANG",
    logoSrc: "/images/UMANG.png", // Keep original uppercase
    leaders: [
      { name: "Mr. Nand Kumaram", title: "P&CEO, NeGD", email: "ceo-negd@digitalindia.gov.in" }
    ],
    description: "Unified app providing 1,200+ government services",
    path: "/digital-goods/umang",
    stats: {
      users: "100M+",
      launch: "2017",
      services: "1,200+"
    }
  },
  {
    name: "eSanjeevani",
    logoSrc: "/images/sanjeevani.png", // Keep original
    leaders: [
      { name: "Mr. Magesh Ethirajan", title: "DG, C-DAC", email: "dg@cdac.in" }
    ],
    description: "Telemedicine platform serving 100M+ patients",
    path: "/digital-goods/e-sanjeevani",
    stats: {
      users: "100M+",
      launch: "2019",
      consultations: "200M+"
    }
  },
  {
    name: "GeM",
    logoSrc: "/images/gem.png", // Keep original
    leaders: [
      { name: "Shri P.K. Singh", title: "CEO, GeM", email: "ceo@gem.gov.in" }
    ],
    description: "Government e-Marketplace with ₹4T+ annual transactions",
    path: "/digital-goods/gem",
    stats: {
      sellers: "2M+",
      launch: "2016",
      transactions: "₹4T+"
    }
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-theme-black">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 bg-theme-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">India's Digital Revolution</h2>
              <p className="text-lg leading-relaxed text-white/80">
                Explore India's groundbreaking digital public infrastructure that's transforming governance,
                finance, healthcare and more. From Aadhaar to UPI, discover how technology is enhancing
                accessibility, security and efficiency for 1.4B Indians.
              </p>
            </div>
            <div className="h-80 rounded-xl overflow-hidden">
              <Slideshow images={slideshowImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Digital India by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={1400000000} title="Aadhaar Users" suffix="+" duration={3} />
            <CountUp end={329000000000} title="Monthly UPI Transactions" suffix="+" duration={3} />
            <CountUp end={6740000000} title="DigiLocker Documents" suffix="+" duration={3} />
          </div>
        </div>
      </section>

      {/* Digital Initiatives Grid */}
      <section className="py-16 bg-theme-black">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Key Digital Initiatives
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {digitalInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <DigitalInitiative
                  name={initiative.name}
                  logoSrc={initiative.logoSrc}
                  leaders={initiative.leaders}
                  description={initiative.description}
                  path={initiative.path}
                 // stats={initiative.stats}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;