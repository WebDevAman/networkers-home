import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
export const navData = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Placement Programs",
        slug: "#",
        submenu: [
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cloud Masters',
                slug: 'cloud-masters',
                description: '100% Placement program in Multicloud and Cloud security'
            },
            {
                heading: 'CCIE Enterprise',
                slug: 'ccie-enterprise-infra-training',
                description: 'Most demanded Networking certification- 100 % Placement'
            },
            {
                heading: 'CCIE Security',
                slug: 'ccie-security-training-course',
                description: 'Most demanded Networking certification- 100% Placement'
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
    { link: '/', icon: <FaFacebookF className='text-lg' /> },
    { link: '/', icon: <FaTwitter className='text-lg' /> },
    { link: '/', icon: <FaInstagram className='text-lg' /> },
]


export const courses = [
    {
        title: 'Cloud Masters',
        link: '/cloud-masters',
        desc: 'Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain',
        projects: [
            {
                0: 'Cisco CCNA',
            },
            {
                1: 'AWS Associate , AWS Professional and AWS Security'
            },

            {
                2: 'GCP And MS AZURE'
            },

            {
                3: 'Cloud and Cloud Security Projects'
            },
        ]
    },
    {
        title: 'Cyberx Masters',
        link: '/cyberx-masters',
        desc: 'Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. Lifetime video access to course.',
        projects: [
            {
                0: 'Cisco CCNA',
            },
            {
                1: 'AWS Associate , AWS Professional and AWS Security'
            },

            {
                2: 'GCP And MS AZURE'
            },

            {
                3: 'Cloud and Cloud Security Projects'
            },

        ]
    },
    {
        title: 'CCIE Enterprise Integrated',
        link: '/ccie-enterprise-infra-training',
        desc: 'This program suitable for candidates who want to build career in Core Networking. Cover SDN, SDWAN and more advance technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Security Integrated',
        link: '/ccie-security-training-course',
        desc: '6 Months Training program suitable for candidates who want to build a career in Cyber Security and Network security domain',
        img: '/assets/images/people4.jpeg'

    },
    {
        link: '/ccna-ccnp-training-online-combo',
        title: 'CCNA + CCNP Combo',
        desc: 'This program suitable for candidates who want to build career in Networking Industry. Learn MPLS,SDWAN and SDACCESS technologies',
    },
    {
        link: '/ccie-security-training-course',
        title: 'Blockchain Masters',
        desc: 'Blockchain Masters program for building long-lasting career in Web3 technologies. Hands on lab with projects',
    },
]

export const reviews = [
    {
        name: 'Kiran Vishnu',
        message: 'I completed CCNA, CCNP Enterprice , PCNSE training from Networkershome. They are the best training institute for networking courses. I know many students from different background are placed at big companies. Networkershome is achieving this through well trained & experience faculties and very effective placement team.',
        rating: 5
    },
    {
        name: 'Sri Chakraverthi',
        message: 'If anyone want to start a carrier in networking domain then its a perfect place for it. Believe me here we can get very good environment for lab practices and self studies and there are lot of supportive trainers who can teach good and also guide you for your placements and CCIE lab exam also',
        rating: 5
    },
    {
        name: 'Sachin Bangari',
        message: `My personal experience in networkers home is very very good. I had joined for a course here and got 2 offers immediately after completion of my course.My advice to the candidates willing to do networking course is that, this is the Best training institute in Bangalore in networking domain, the concepts clarity, the lab facility anytime we need, the support and respect from the management and special mention the HR Preethi ma'am will support everyone to get placed it you are serious about your learning.`,
        rating: 5
    },
    {
        name: 'Purthviraj BN',
        message: `I have joined this institute in jan 2021 and i enrolled for ccie security integrated traing and recently got placed in Capgemini through Networkers Home. Networkers home has best quality training and best lab facilities . Here training starts from the scratch and give the in-depth knowledge about on each topics. Lab facilites are really good. And all the trainers are very friendly and helpfull.`,
        rating: 5
    },
    {
        name: 'Alekh Parekh',
        message: `If you are looking to start your career in the networking domain, I would definitely suggest Networkers home because they provide the best training for CCNA, CCNP and CCIE. I have opted for the CCIE  security integrated course where the trainers teach you from the basics of networking to high-level security concepts. And one more thing which is worth mentioning are their trainers, who are highly knowledgeable and will answer all your questions. If you are preparing for CCIE exams, they provide you with server access 24/7.`,
        rating: 5
    },
    {
        name: 'Belari Kiran',
        message: `I've joined this institute in January 2021 and I've opted for CCIE Security Integrated program and I got placed in Tejas Networks Ltd in R&D with an excellent package through NetworkersHome. NetworkersHome has the best quality in training, best quality in lab facility and the trainers here are the certified professional who trains from beginner level to advance level in every course.`,
        rating: 5
    },
    {
        name: 'Sunil Sundar U',
        message: `I am from different stream ( Mech ) having 4years experience in different domain. Actually I want to switch my career to networking domain so I preferred and enrolled my CCNP Enterprise course in Networkers home which is one of the best networking institute in India. With help of NH team I improved my technical skills in networking. NH gave me lot of opportunities to attend the interview and also provided technical interview preparation session which helped me to crack the interview`,
        rating: 5
    },
    {
        name: 'Girish Dhini',
        message: `I joined this institute to take networking course they suggested me with CCIE security. They provide very good training all the trainers are very friendly.  They provide CCNA CCNP CCIE CYBERSECURITY CEH AWS and other firewall training.. if interested please do join the institute.`,
        rating: 5
    },
    {
        name: 'Vinod Ravi',
        message: `Hi I'm Vinod ravi and I have completed CCIE Security  from Networkers home. NH provided us quality of training and 24*7 lab access more over faculties are very friendly. NH helps us to build the carrier in network Security domain. I got placed in Rakuten India as a network security engineer with a very good package. I would like to thank all NH faculties,`,
        rating: 5
    },
    {
        name: 'Divakar Naik K',
        message: `Hi I'm Divakar Naik and I completed CCNA and CCNP switching and routing from Networkers home. The NH provided us quality of training faculties are very friendly. This NH helps us to build the carrier in networking domain. I got placed in IBM as a network analyst with a very good package. I would like to thanks all NH faculties, manager and HR prithi mam who is take care about our placement....This is the best place for who all are planning to get into networking domain.`,
        rating: 5
    },
    {
        name: 'Kiran Vishnu',
        message: 'I completed CCNA, CCNP Enterprice , PCNSE training from Networkershome. They are the best training institute for networking courses. I know many students from different background are placed at big companies. Networkershome is achieving this through well trained & experience faculties and very effective placement team.',
        rating: 5
    },
    {
        name: 'Sri Chakraverthi',
        message: 'If anyone want to start a carrier in networking domain then its a perfect place for it. Believe me here we can get very good environment for lab practices and self studies and there are lot of supportive trainers who can teach good and also guide you for your placements and CCIE lab exam also',
        rating: 5
    },

]

export const coursePageGridData = [
    {
        heading: 'CCNA 200-301',
        text: 'CCNA is entry-level Networking certification in the Cisco domain. Covers various technologies like Routing/switching and automation fundamentals in detail.',
        slug: '/ccna-course-in-bangalore-india'
    },
    {
        heading: 'CCNP Enterprise',
        text: 'Cisco Advanced Level certifications. We teach ENCORE, ENARSI and Cisco SDWAN Modules in our CCNP Enterprise course',
        slug: '/ccnp-enterprise-training-bangalore',
        highlight: true
    },
    {
        heading: 'Cisco SDWAN',
        text: `Most demanded course today for working professionals and must have technology to upgrade your career. Learn from India's best instructors`,
        slug: '/cisco-sdwan-training-online'
    },
    {
        heading: 'Cisco DNAC',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/cisco-dna-center-training-online-dnac-ise'
    },
    {
        heading: 'CEH',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'F5 LTM',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'PALO ALTO',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'Fortigate',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'AWS Assocaite',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'AWS Professional',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'AWS Security',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'AWS Advance Networking',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
    {
        heading: 'CCIE Enterprise',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccie-enterprise-infra-training'
    },
    {
        heading: 'CCIE Security',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccie-security-training-course'
    },
    {
        heading: 'CCNA+CCNP Combo',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccna-ccnp-training-online-combo'
    },
    {
        heading: 'Blockchain',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '#'
    },
]

export const coursePageProgramsData = [
    {
        title: 'Cloud Masters',
        link: '/cloud-masters',
        desc: 'Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'Cyber Masters',
        link: '/cyberx-masters',
        desc: 'Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. Lifetime video access to course.',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Enterprise Integrated',
        link: '/ccie-enterprise-infra-training',
        desc: 'This program suitable for candidates who want to build career in Core Networking. Cover SDN, SDWAN and more advance technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Security Integrated',
        link: '/ccie-security-training-course',
        desc: '6 Months Training program suitable for candidates who want to build a career in Cyber Security and Network security domain',
        img: '/assets/images/people4.jpeg'

    },
    {
        link: '/ccna-ccnp-training-online-combo',
        title: 'CCNA + CCNP Combo',
        desc: 'This program suitable for candidates who want to build career in Networking Industry. Learn MPLS,SDWAN and SDACCESS technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        link: '/ccie-security-training-course',
        title: 'Blockchain Masters',
        desc: 'Blockchain Masters program for building long-lasting career in Web3 technologies. Hands on lab with projects',
        img: '/assets/images/people4.jpeg'
    },
]