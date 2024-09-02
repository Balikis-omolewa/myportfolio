import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import '../../style/portfolio.scss';

const items = [
    {
        id: 1,
        title: "Fashion Store",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quo labore saepe dolores vitae? Deserunt repellat laboriosam laborum voluptates vel autem nemo, aliquam aperiam adipisci? Error ab deleniti ipsam vitae.",
        link: "https://example.com/fashion-store"
    },
    {
        id: 2,
        title: "Tech Blog",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "Innovative tech blog showcasing the latest in technology trends and insights. Discover articles, tutorials, and reviews on cutting-edge tech topics.",
        link: "https://example.com/tech-blog"
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "A comprehensive e-commerce platform designed to provide a seamless shopping experience with intuitive navigation and secure transactions.",
        link: "https://example.com/e-commerce"
    },
    {
        id: 4,
        title: "Portfolio Website",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "A sleek and modern portfolio website to showcase your work and achievements. Features a clean layout and responsive design for all devices.",
        link: "https://example.com/portfolio"
    },
    {
        id: 5,
        title: "Travel Blog",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "Explore the world through captivating travel stories and stunning photographs. A blog dedicated to sharing travel experiences and tips.",
        link: "https://example.com/travel-blog"
    },
    {
        id: 6,
        title: "Restaurant Website",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApR6vgMf9J2vl1nbfp91lTIDMbCu-81x4CcCer2FE7cPLPkXvQo4hM5hEEnrHldYcz-8&usqp=CAU",
        desc: "An elegant restaurant website featuring a menu, reservation system, and gallery. Designed to attract and engage potential diners.",
        link: "https://example.com/restaurant"
    }
];

const Single = ({ item, y }) => {
    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <div className="img-contain">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="text-content" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}><button>View Project</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    // Smooth scrolling effect
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' id='portfolio' ref={ref}>
            <div className='progress'>
                <h2>Featured Work</h2>
                <p>Discover some of my creative work below.</p>
                <motion.div style={{ scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} y={y} />
            ))}
        </div>
    );
};

export default Portfolio;
