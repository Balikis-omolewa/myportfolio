"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../../style/external.css';
import '../../style/layout.css';
import Header from '../../components/pages/header';
import Hero from '../../components/pages/Hero';
import ContactForm from '../../components/contactForm';
import Footer from '../../components/footer';
import Services from '../../components/services';
import About from '../../components/about';
import Skills from '../../components/skill';

export default function Home() {
  useEffect(() => {
    // Add event listener for scroll to change header background color and padding
    const handleScroll = () => {
      const header = document.querySelector("header");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        header.style.backgroundColor = "#1C2455"; 
        header.style.padding = "10px";
      } else {
        header.style.backgroundColor = "transparent"; 
        header.style.padding = "20px"; // Reset to original padding
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle menu toggle and close when menu item is clicked
    const menuItems = document.querySelectorAll('.navbar a');
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.querySelector('.navbar');

    const toggleMenu = () => {
      menuIcon.querySelector('i').classList.toggle('bx-menu');
      menuIcon.querySelector('i').classList.toggle('bx-x');
      navbar.classList.toggle('open');
    };

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuIcon.querySelector('i').classList.toggle('bx-menu');
        menuIcon.querySelector('i').classList.toggle('bx-x');
        navbar.classList.remove('open');
      });
    });

    menuIcon.addEventListener('click', toggleMenu);

    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Balikis Omolewa | Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <Header />
      <Hero />
      <Skills />
      <About />
      <Services />
      <ContactForm />
      <Footer />

      <Script
        src="https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?57586"
        strategy="lazyOnload"
        onLoad={() => {
          CreateWhatsappChatWidget({
            enabled: true,
            chatButtonSetting: {
              backgroundColor: "#3E296E",
              boxShadow: "0 3px 10px #0003",
              ctaText: "",
              borderRadius: "25",
              marginLeft: "0",
              marginBottom: "30",
              marginRight: "50",
              position: "right",
            },
            brandSetting: {
              brandName: "CodeSis",
              brandSubTitle: "Typically replies instantly",
              welcomeText: "Hi there!\nHow can I help you?",
              messageText: "Hello, I have a question about {{page_link}}",
              backgroundColor: "#3E296E",
              ctaText: "Start Chat",
              borderRadius: "25",
              autoShow: false,
              phoneNumber: "2348085754756",
            },
          });
        }}
      />
    </>
  );
}
