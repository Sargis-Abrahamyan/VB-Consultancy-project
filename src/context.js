import React, { useState, useContext } from 'react';

import programs from './images-logos/programs.png';
import events from './images-logos/events.png';
import admissions from './images-logos/admissions.png';
import notice from './images-logos/notice.png';
import courses from './images-logos/courses.png';
import news1 from './images-logos/news1.png';
import news2 from './images-logos/news2.png';

import worldUniversity from './images-logos/world-university.png';
import gamesEducation from './images-logos/games-background.png';
import februaryEducation from './images-logos/febrary-education.png';
import worldEducation from './images-logos/world-education-conf.png';
import reactConf from './images-logos/react.conf.png';
import digitalTransformation from './images-logos/digital-transformation.png';


import Rectangle1 from "./images-logos/Rectangle1.png"
import Rectangle2 from "./images-logos/Rectangle2.png"
import Rectangle3 from "./images-logos/Rectangle3.png"
import Rectangle4 from "./images-logos/Rectangle4.png"
import Rectangle5 from "./images-logos/Rectangle5.png"
import Rectangle6 from "./images-logos/Rectangle6.png"
import Rectangle7 from "./images-logos/Rectangle7.png"
import Rectangle8 from "./images-logos/Rectangle8.png"
import Rectangle9 from "./images-logos/Rectangle9.png"
import Rectangle10 from "./images-logos/Rectangle10.png"
import EllipseIcon1 from "./images-logos/Ellipse.png"
import EllipseIcon2 from "./images-logos/Ellipse1.png"
import EllipseIcon3 from "./images-logos/Ellipse2.png"
import doneIcon from "./images-logos/doneIcon.png"
import video from "./images-logos/sample-5s.mp4"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [dropDownState, setDropDownState] = useState('')
    const [showCourseVariations, setShowCourseVariations] = useState(true)
    const [showMembershipLevels, setShowMembershipLevels] = useState(true)
    const [formInformation, setFormInformation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

    const navItems = [
        {
            id: 1,
            title: 'courses'
        },
        {
            id: 2,
            title: 'pages'
        },
        {
            id: 3,
            title: 'events'
        },
        {
            id: 4,
            title: 'contact'
        }
    ]

    const coursesPages = [
        {
            id: 1,
            title: 'Course Variations',
            name: 'courses',
            to: '/courses'
        },
        {
            id: 2,
            title: 'Membership Levels',
            name: 'courses',
            to: '/courses'
        },
        {
            id: 3,
            title: 'About Us',
            name: 'pages',
            to: '/pages'
        },
        {
            id: 4,
            title: 'Pricing Table',
            name: 'pages',
            to: '/pages'
        }
    ]

    const platformInformation = [
        {
            id: 1,
            title: 'Programs',
            imgUrl: programs,
            bgColor: '#B5D56A',
            pageGoTo: '/'
        },
        {
            id: 2,
            title: 'Events',
            imgUrl: events,
            bgColor: '#FF6F6F',
            pageGoTo: '/events'
        },
        {
            id: 3,
            title: 'Admissions',
            imgUrl: admissions,
            bgColor: '#4886FF',
            pageGoTo: '/'
        },
        {
            id: 4,
            title: 'Notice',
            imgUrl: notice,
            bgColor: '#009688',
            pageGoTo: '/'
        },
        {
            id: 5,
            title: 'Courses',
            imgUrl: courses,
            bgColor: '#E71F43',
            pageGoTo: '/courses'
        }
    ]


    const upcomingEvents = [
        {
            id: 1,
            title: 'World University Convocation',
            date: {
                month: 'March',
                day: 22,
                timeStarts: '12:00 AM',
                timeEnds: '08:00 PM'
            }
        },
        {
            id: 2,
            title: 'The Games Education Summit',
            date: {
                month: 'March',
                day: 15,
                timeStarts: '12:00 AM',
                timeEnds: '08:00 PM'
            }
        },
    ]

    const latestNews = [
        {
            id: 1,
            heading: 'How to Learn Faster and Remember',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            link: '/',
            imgUrl: news1,
            date: 'June 6, 2022'
        },
        {
            id: 2,
            heading: 'Free Online Courses from Top Universities',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            link: '/',
            imgUrl: news2,
            date: 'June 6, 2022'
        },
        {
            id: 3,
            heading: 'Learn Exactly How I Improved Education',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            link: '/',
            imgUrl: news2,
            date: 'June 6, 2022'
        }
    ]

    const socialMedia = [
        {
            id: 1,
            href: '/',
            iconUrl: <i className="fa-brands fa-facebook-f"></i>
        },
        {
            id: 2,
            href: '/',
            iconUrl: <i className="fa-brands fa-instagram"></i>
        },
        {
            id: 3,
            href: '/',
            iconUrl: <i className="fa-brands fa-youtube"></i>
        },
        {
            id: 4,
            href: '/',
            iconUrl: <i className="fa-brands fa-whatsapp"></i>
        }
    ]


    const footerInfo = [
        {
            id: 1,
            heading: 'Feature Links',
            links: [
                {
                    id: 1,
                    title: 'About us',
                    linkTo: '/pages'
                },
                {
                    id: 2,
                    title: 'Graduation',
                    linkTo: '/'
                },
                {
                    id: 3,
                    title: 'Scholarship',
                    linkTo: '/'
                },
                {
                    id: 4,
                    title: 'Events',
                    linkTo: '/events'
                },
                {
                    id: 5,
                    title: 'Result',
                    linkTo: '/'
                }
            ]
        },
        {
            id: 2,
            heading: 'Support',
            links: [
                {
                    id: 1,
                    title: 'Privacy',
                    linkTo: '/'
                },
                {
                    id: 2,
                    title: 'FAQs',
                    linkTo: '/'
                },
                {
                    id: 3,
                    title: 'Support',
                    linkTo: '/'
                }
            ]
        },
        {
            id: 3,
            heading: 'Contact Us',
            links: [
                {
                    id: 1,
                    title: <span><i className="fa-solid fa-phone"></i> +374 44 199926</span>,
                    linkTo: '/'
                },
                {
                    id: 2,
                    title: <span><i className="fa-solid fa-envelope"></i> info@vbgroup.info</span>,
                    linkTo: '/'
                },
            ]
        }
    ]

    const whyChooseUsBlocks = [
        {
            id: 1,
            num: '01',
            title: 'Why Choose us',
            info: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendumauci elit sollicitudirem quibibendum auci'
        },
        {
            id: 2,
            num: '02',
            title: 'Our Mission',
            info: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendumauci elit sollicitudirem quibibendum auci'
        },
        {
            id: 3,
            num: '03',
            title: 'Our Visions',
            info: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendumauci elit sollicitudirem quibibendum auci'
        }
    ]

    const eventsGroup = [
        {
            id: 1,
            title: 'World University Convocation',
            date: 'March 22',
            background: worldUniversity,
            startTime: '12:00 AM',
            endTime: '11:59 PM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        },
        {
            id: 2,
            title: 'The Games Education Summit',
            date: 'March 15',
            background: gamesEducation,
            startTime: '12:00 AM',
            endTime: '11:59 PM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        },
        {
            id: 3,
            title: 'February Education Conferences',
            date: 'February 26',
            background: februaryEducation,
            startTime: '12:00 AM',
            endTime: '1:30 AM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        },
        {
            id: 4,
            title: 'World Education Day Conference',
            date: 'February 20',
            background: worldEducation,
            startTime: '12:00 AM',
            endTime: '11:59 PM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        },
        {
            id: 5,
            title: 'International React Conference',
            date: 'February 16',
            background: reactConf,
            startTime: '12:00 AM',
            endTime: '11:59 PM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        },
        {
            id: 6,
            title: 'Digital Transformation Conference',
            date: 'February 11',
            background: digitalTransformation,
            startTime: '8:00 AM',
            endTime: '5:00 PM',
            phone: '+374 44 199926',
            email: 'info@vbgroup.info',
            content: 'Lorem ipsum dolor sit amet, eirmod dolorum ne sit. Admodum placerat pri eu, eos at rebum eligendi luptatum. Ex debet dicant cum, ius paulo essent constituam id. Ne eum agam platonem, ei saepe inermis insolens vis. Cu oporteat mnesarchum his, sint complectitur reprehendunt cu qui. Debet bonorum in qui, erant veniam nonumes et est, eos no eruditi constituto. His doctus facilis ex, sed ne lobortis definiebas, facete urbanitas mel ex.'
        }
    ]

    const membership = [
        {
            id: 1,
            title: "Number of courses",
            basic: 3,
            standard: 1,
            advanced: 3
        }, {
            id: 2,
            title: "Learn JavaScript – Full Course for BeginnersN",
            basic: true,
            standard: false,
            advanced: true
        }, {
            id: 3,
            title: "A CSS Flexbox Tutorial for Beginners",
            basic: false,
            standard: false,
            advanced: true
        }, {
            id: 4,
            title: "Basic English Speaking and Grammar",
            basic: true,
            standard: true,
            advanced: true
        }, {
            id: 5,
            title: "30 Days Weight Loss Yoga & Fitness Course",
            basic: true,
            standard: false,
            advanced: false
        }
    ]


    const courseItems = [
        {
            id: 1,
            background: Rectangle1,
            name: "Tom",
            surName: "Hardy",
            iconImg: EllipseIcon1,
            rating: 5,
            link: "Full Stack Web Development Tutorial",
            information: {
                backgroundTitle: "Full Stack Web Development Tutorial",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon,
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle3: "Quizzes:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "1",
                duration: "15 Hour",
                lessons: "8 Lessons",
                Quiz: "1 Quiz",
                skillLevel: "Expert",
                category: "Programming",
                language: "English",
            }
        },
        {
            id: 2,
            background: Rectangle2,
            name: "Mark",
            surName: "Alen",
            iconImg: EllipseIcon3,
            rating: 5,
            link: "Complete Digital Marketing Course",
            information: {
                backgroundTitle: "Complete Digital Marketing Course",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle3: "Quizzes:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "122",
                duration: "15 Hour",
                lessons: "8 Lessons",
                Quiz: "1 Quiz",
                skillLevel: "Beginner",
                category: "Marketing",
                language: "English",
            }
        },
        {
            id: 3,
            background: Rectangle3,
            name: "Hanna",
            surName: "Ben",
            iconImg: EllipseIcon2,
            rating: 5,
            link: "Healthy food recipes for beginners",
            information: {
                backgroundTitle: "Healthy food recipes for beginners",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle3: "Quizzes:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "1",
                duration: "15 Hour",
                lessons: "7 Lessons",
                Quiz: "1 Quiz",
                skillLevel: "Intermediate",
                category: "Recipe",
                language: "English",
            }
        },
        {
            id: 4,
            background: Rectangle4,
            name: "Mark",
            surName: "Alen",
            iconImg: EllipseIcon3,
            rating: 5,
            link: "Teaching Children English Online Course",
            information: {
                backgroundTitle: "Teaching Children English Online Course",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "166",
                duration: "8 Week",
                lessons: "7 Lessons",
                skillLevel: "Business",
                category: "Marketing",
                language: "English",
            }
        }, {
            id: 5,
            background: Rectangle5,
            name: "Tom",
            surName: "Hardy",
            iconImg: EllipseIcon1,
            rating: 5,
            link: "30 Days Weight Loss Yoga & Fitness Course",
            information: {
                backgroundTitle: "30 Days Weight Loss Yoga & Fitness Course",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle3: "Quizzes:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "122",
                duration: "15 Hour",
                lessons: "8 Lessons",
                Quiz: "1 Quiz",
                skillLevel: "Beginner",
                category: "Marketing",
                language: "English",
            }
        }, {

            id: 6,
            background: Rectangle6,
            name: "Tom",
            surName: "Hardy",
            iconImg: EllipseIcon1,
            rating: 5,
            link: "Full Stack Web Development Tutorial",
            information: {
                backgroundTitle: "C Programming Tutorials for Beginners",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "6",
                duration: "10 Week",
                lessons: "7 Lessons",
                skillLevel: "All Levels",
                category: "Lifestyle",
                language: "French",
            }
        }, {

            id: 7,
            background: Rectangle7,
            name: "Mark ",
            surName: "Alen",
            iconImg: EllipseIcon3,
            rating: 4,
            link: "Basic English Speaking and Grammar",
            information: {
                backgroundTitle: "Basic English Speaking and Grammar",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "11",
                duration: "10 Week",
                lessons: "7 Lessons",
                skillLevel: "All Levels",
                category: "Programming",
                language: "English",
            }
        }, {

            id: 8,
            background: Rectangle8,
            name: "Hanna",
            surName: "Ben",
            iconImg: EllipseIcon2,
            rating: 5,
            link: "The Complete React Web Developer Course",
            information: {
                backgroundTitle: "The Complete React Web Developer Course",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "162",
                duration: "8 Week",
                lessons: "6 Lessons",
                skillLevel: "All Levels",
                category: "Business",
                language: "French",
            }
        }, {
            id: 9,
            background: Rectangle9,
            name: "Mark",
            surName: "Alen",
            iconImg: EllipseIcon3,
            rating: 5,
            link: "A CSS Flexbox Tutorial for Beginners",
            information: {
                backgroundTitle: "A CSS Flexbox Tutorial for Beginners",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "282",
                duration: "10 Week",
                lessons: "6 Lessons",
                skillLevel: "Expert",
                category: "Technology",
                language: "English",
            }
        }, {
            id: 10,
            background: Rectangle10,
            name: "Tom",
            surName: "Hardy",
            iconImg: EllipseIcon1,
            rating: 5,
            link: "Learn JavaScript – Full Course for Beginners",
            information: {
                backgroundTitle: "Learn JavaScript – Full Course for Beginners",
                title: "Overview",
                desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                titleDoneInfo: "What You Will Learn?",
                info: "Learn how perspective works and how to incorporate it into your art",
                info1: "Learn and apply industry-standard drawing techniques",
                info2: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                info3: "Learn how perspective works and how to incorporate it into your art",
                info4: "Learn and apply industry-standard drawing techniques",
                info5: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting",
                icon: doneIcon
            }, videoInformation: {
                video: video,
                videoInfoTitle: "Enrolled:",
                videoInfoTitle1: "Duration:",
                videoInfoTitle2: "Lessons:",
                videoInfoTitle4: "Skill Level:",
                videoInfoTitle5: "Category:",
                videoInfoTitle6: "Language:",
                enrolled: "10",
                duration: "10 Week",
                lessons: "8 Lessons",
                skillLevel: "All Levels",
                category: "Programming",
                language: "English",
            }
        }
    ]


    return (
        <AppContext.Provider
            value={{
                navItems,
                coursesPages,
                dropDownState,
                platformInformation,
                upcomingEvents,
                latestNews,
                socialMedia,
                footerInfo,
                whyChooseUsBlocks,
                eventsGroup,
                showCourseVariations,
                showMembershipLevels,
                formInformation,
                membership,
                courseItems,
                setFormInformation,
                setShowMembershipLevels,
                setShowCourseVariations,
                setDropDownState
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };