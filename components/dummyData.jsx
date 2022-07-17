import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
export const navData = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Placement Programs",
        slug: "/placement-programs",
        submenu: [
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
        ]
    },
    {
        label: "All Courses",
        slug: "/all-courses"
    },
]

export const slideData = [
    '/images/banner/3.jpg',
    '/images/banner/2.jpg',
    '/images/banner/1.png',
]

export const socialData = [
    { link: '/', icon: <AiFillPhone className='text-lg' /> },
    { link: '/', icon: <HiOutlineMail className='text-lg' /> },
    { link: '/', icon: <FaFacebookF className='text-lg' /> },
    { link: '/', icon: <FaInstagram className='text-lg' /> },
    { link: '/', icon: <FaPinterestP className='text-lg' /> },
]

export const galleryData = [
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/1.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/2.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/3.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/4.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/5.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/1.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/2.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/3.jpg'
    },
    {
        heading: 'Lorem Ipsum',
        text: '',
        imageUrl: '/images/gallery/4.jpg'
    },
]

export const cardData = [
    { heading: "TALK ABOUT IT", text: 'Discuss design ideas, options, budget, with your jewelry consultant - your guide to the custom experience.', icon: '/images/services/talk-icon.png' },
    { heading: "GET IT DESIGNED", text: 'See sketches and concept art designed just for you by our jewelry artists.', icon: '/images/services/design-icon.png' },
    { heading: "SEE IT COME TO LIFE", text: `Visualize your piece with high resolution 3D renderings, and we'll adjust every detail until you tell us it's perfect.`, icon: '/images/services/mobile-hand-icon.png' },
    { heading: "TREASURE IT", text: `Receive your custom piece, with the assurance it's been made to wear and last a lifetime.`, icon: '/images/services/treasure-icon.png' },
]
export const serviceData = [
    {
        heading: "Dedicated Service",
        text: `Our team of design consultants helps you figure out the details, weigh all the options, and guides you through each step of creating a piece of custom jewelry.`,
        imageUrl: '/images/banner/3.jpg'
    },
    {
        heading: "Personalized Design",
        text: `Our team of artists design pieces just for you, and we'll tweak the details until you say it's perfect.`,
        imageUrl: '/images/services/2.jpg'
    },
    {
        heading: "Expertise",
        text: `From your design consultants and artists, to our staff gemologists and our experienced jewelers, your project is handled with the utmost precision, care, and knowledge.`,
        imageUrl: '/images/services/1.jpg'

    },
]

export const courses=[
    {
        title:'Cloud Masters',
        desc:'Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain',
        projects:[
            {
                0:'Cisco CCNA',
            },
            {
                1:'AWS Associate , AWS Professional and AWS Security'
            },

               { 
                2:'GCP And MS AZURE'
            },
               
                {
                    3:'Cloud and Cloud Security Projects'
                },
        ]
    },
    {
        title:'Cyber Masters',
        desc:'Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. Lifetime video access to course.',
        projects:[
            {
                0:'Cisco CCNA',
            },
            {
                1:'AWS Associate , AWS Professional and AWS Security'
            },

               { 
                2:'GCP And MS AZURE'
            },
               
                {
                    3:'Cloud and Cloud Security Projects'
                },
            
        ]
    },
    {
        title:'CCIE Enterprise Integrated',
        desc:'This program suitable for candidates who want to build career in Core Networking. Cover SDN, SDWAN and more advance technologies',
        img:'/assets/images/people4.jpeg'
    
        
    },
    {
        title:'CCIE Security Integrated',
        desc:'6 Months Training program suitable for candidates who want to build a career in Cyber Security and Network security domain',
        img:'/assets/images/people4.jpeg'
        
    },
    {
        title:'CCNA + CCNP Combo',
        desc:'This program suitable for candidates who want to build career in Networking Industry. Learn MPLS,SDWAN and SDACCESS technologies',
     
        
    },
    {
        title:'Blockchain Masters',
        desc:'Blockchain Masters program for building long-lasting career in Web3 technologies. Hands on lab with projects',
      
        
    },
]