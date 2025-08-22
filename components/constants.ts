export const menu = [
    {
        id: 0,
        label: 'Home',
        link: '/',
        newTab: false,
    },
    {
        id: 1,
        label: 'About',
        link: '/#Introduction',
        newTab: false,
    },
    {
        id: 4,
        label: 'Call for Papers',
        link: '/call-for-papers',
        newTab: false,
    },
    {
        id: 2,
        label: 'Speakers',
        link: '/#Speakers',
        newTab: false,
    },
    // {
    //     id: 3,
    //     label: 'Schedule',
    //     link: '/#Schedule',
    //     newTab: false,
    // },
    {
        id: 4,
        label: 'Committee',
        link: '#',
        dropdownItems: [
            {
                id: 'advisory',
                label: 'Advisory Board',
                link: '/advisory-board',
            },
            {
                id: 'organizing',
                label: 'Organizing Committee',
                link: '/organizing-committee',
            },
        ],
    },
    {
        id: 5,
        label: 'For Authors',
        link: '#',
        dropdownItems: [
            {
                id: 'guidelines',
                label: 'Guidelines for Authors',
                link: '/author-guidelines',
            },
            {
                id: 'submission',
                label: 'Paper Submission',
                link: 'https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIC2025',
                newTab: true,
            },
            {
                id: 'registration',
                label: 'Registration',
                link: '/registration',
            },
            {
                id: 'brochure',
                label: 'Conference Brochure',
                link: '/#', // todo
            },
        ],
    },
    {
        id: 6,
        label: 'Contact',
        link: '/#Contact',
        newTab: false,
    },
]

export const speakers = [
    {
        id: 2,
        fullName: 'Vineeta Hariharan',
        des: 'Senior Public Policy Expert',
        profileimage: '/images/speakers/Vineeta-Hariharan.JPG',
        linkedin: '#',
        website: '#'
    },
    {
        id: 7,
        fullName: 'Dr Shiv Mohan',
        des: 'Sr Director, Chandrayaan 1, Distinguished Career Scientist, ISRO',
        profileimage: '/images/speakers/Shiv-Mohan.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 3,
        fullName: 'Dr Vijender Singh Chauhan',
        des: 'UPSC Expert, Associate Professor, DU',
        profileimage: '/images/speakers/Vijender-Chauhan.JPG',
        linkedin: '#',
        website: '#'
    },
    {
        id: 4,
        fullName: 'Dr Pawan Kumar Singh',
        des: 'Director, IIM Trichy | Professor of HR',
        profileimage: '/images/speakers/Pawan-Kumar-Singh.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 5,
        fullName: 'Dr Shuchi Sinha',
        des: 'Associate Professor, DMS, IIT Delhi',
        profileimage: '/images/speakers/Shuchi-Sinha.JPG',
        linkedin: '#',
        website: '#'
    },
    // {
    //     id: 6,
    //     fullName: 'Dr Arushi Malik',
    //     des: 'Divisional Commissioner, Jaipur',
    //     profileimage: '',
    // },
    {
        id: 8,
        fullName: 'Siddharth R',
        des: 'Career Diplomat, UN | Adjunct Professor, MUJ',
        profileimage: '/images/speakers/Siddharth-Rajhans.JPG',
        linkedin: '#',
        website: '#'
    },
    {
        id: 9,
        fullName: 'Chef Thiru',
        des: 'Principal, WGSHA, MAHE, Sustainability in Hospitality',
        profileimage: '/images/speakers/Siddharth-Rajhans.JPG',
        linkedin: '#',
        website: '#'
    },
    {
        id: 10,
        fullName: 'Aravind Chinchure',
        des: 'Founder and CEO of QLeap Academy',
        profileimage: '/images/speakers/Siddharth-Rajhans.JPG',
        linkedin: '#',
        website: '#'
    },
    {
        id: 11,
        fullName: 'Monika Singh',
        des: 'Sustainability Expert in Aviation, IndiGo Airlines',
        profileimage: '/images/speakers/Monika-Singh.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 12,
        fullName: 'Shilpa Mehta',
        des: 'Executive Director, PwC India',
        profileimage: '/images/speakers/Shilpa-Mehta.JPG',
        linkedin: '#',
        website: '#'
    },
    // {
    //     id: 13,
    //     fullName: 'Dr Prayatna Jain',
    //     des: 'Marketing & Economics, PIMR, Indore',
    //     profileimage: '',
    // },
    // {
    //     id: 14,
    //     fullName: 'Dr Jayashree Periwal',
    //     des: 'Chairperson, Jayashree Periwal Group of Institutions',
    //     profileimage: '/images/speakers/Jayshree-Periwal.jpg',
    // },
    // {
    //     id: 15,
    //     fullName: 'Dr Ajit Upadhyay',
    //     des: 'Sr Professor, PIMR Indore, Former Director, PIMR Dewas',
    //     profileimage: '/images/speakers/Ajit-Upadhyay.JPG',
    // },
    // {
    //     id: 16,
    //     fullName: 'Chef K Thiru',
    //     des: 'Principal, WGSHA, MAHE, Sustainability in Hospitality',
    //     profileimage: '/images/speakers/Chef-Thiru.jpg',
    // },
    // {
    //     id: 17,
    //     fullName: 'Dr Aravind Chinchure',
    //     des: 'Founder & CEO, QLeap Academy, & Member of Board of Management at MUJ',
    //     profileimage: '/images/speakers/Aravind-Chinchure.jpeg',
    // },
    // {
    //     id: 18,
    //     fullName: 'Dr N D Mathur',
    //     des: 'Dean at Jaipur School of Economics, JECRC University',
    //     profileimage: '/images/speakers/N-D-Mathur.jpeg',
    // },
    // {
    //     id: 19,
    //     fullName: 'Dr Arun Shanbhag',
    //     des: 'Dean FoE, Manipal University Jaipur',
    //     profileimage: '/images/speakers/Arun-Shanbhag.jpeg',
    // },
];

export const committee = {
    main: [
        {
            id: 1,
            name: 'Mr. S. Vaitheeswaran',
            des: 'Chairperson',
            role: 'Chief Patron',
            picture: '/images/committee/S-Vaitheeswaran.jpg',
        },
        {
            id: 2,
            name: 'Prof. N. N. Sharma',
            des: 'President',
            role: 'Patron',
            picture: '/images/committee/dr-nnsharma.jpg',
        },
        {
            id: 3,
            name: 'Prof. Karunakar A Kotegar',
            des: 'Pro-President',
            role: 'Co-Patron',
            picture: '/images/committee/karunakar-1.jpg',
        },
        {
            id: 4,
            name: 'Prof. Amit Soni',
            des: 'Registrar',
            role: 'Co-Patron',
            picture: '/images/committee/amit-soni.jpg',
        },
        {
            id: 5,
            name: 'Dr. Nitu Bhatnagar',
            des: 'Registrar',
            role: 'Co-Patron',
            picture: '/images/committee/Nitu-Bhatnagar.jpg',
        },
        // {
        //     id: 5,
        //     name: 'Dr. Arun Shanbhag',
        //     des: 'Dean, FoE',
        //     role: 'General Chair',
        //     picture: '/images/committee/Arun-Shanbhag.jpg',
        // },
        {
            id: 6,
            name: 'Prof. Kuldip Singh Sangwan',
            des: 'Dean FoSTA',
            role: 'General Chair',
            picture: '/images/committee/Dr-Kuldip-Singh.jpg',
        },
        {
            id: 7,
            name: 'Dr. Chhatar Singh Lamba',
            des: 'Associate Dean, SCSE',
            role: 'General Co-Chair',
            picture: '/images/committee/cslamba.jpg',
        },
        {
            id: 8,
            name: 'Dr. Sandeep Chaurasia',
            des: 'Director, Placement',
            role: 'General Co-Chair',
            picture: '/images/committee/sandeep-chaurasia.jpg',
        },
        {
            id: 10,
            name: 'Prof. Neha Chaudhary',
            des: 'HoD, CSE',
            role: 'Program Chair',
            picture: '/images/committee/Neha-Chaudhary.jpeg',
        },
        {
            id: 11,
            name: 'Dr. Mahesh Jangid',
            des: 'Associate Professor, CSE',
            role: 'Program Co-chair',
            picture: '/images/committee/Mahesh-Jangid.jpg',
        },
        {
            id: 9,
            name: 'Dr. Satyabrata Roy',
            des: 'Associate Professor, CSE',
            role: 'Program Co-chair',
            picture: '/images/committee/Dr-Satyabrata-Roy.jpg',
        },
        {
            id: 12,
            name: 'Dr. Neelam Chaplot',
            des: 'Associate Professor, CSE',
            role: 'Technical Session Chair',
            picture: '/images/committee/neelam.jpg',
        },
        {
            id: 13,
            name: 'Dr. Sayar Singh Shekhawat',
            des: 'Associate Professor, CSE',
            role: 'Publicity Chair',
            picture: '/images/committee/sayarsingh.jpg',
        },
        {
            id: 14,
            name: 'Mr. Shishir Singh Chauhan',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/shishir.jpg',
        },
        {
            id: 15,
            name: 'Ms. Anita Shrotriya',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/anita.jpg',
        },
        {
            id: 16,
            name: 'Ms. Juhi Singh',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Co-chair',
            picture: '/images/committee/juhi.jpg',
        },
        {
            id: 17,
            name: 'Dr. Sakshi Shringi',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Co-chair',
            picture: '/images/committee/Sakshi-Shringi.jpg',
        },
    ],
    technical: [
        {
            id: 1,
            name: 'Dr Satyabrata Roy',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Amit Garg',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Ankur Pandey',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Mr Tarun Jain',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Dr Neelam Chaplot',
            dept: 'Department of CSE',
        },
    ],
    finance: [
        {
            id: 1,
            name: 'Dr Amit Kumar Gupta',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Anita Shotriya',
            dept: 'Department of CSE',
        },
    ],
    travel: [
        {
            id: 1,
            name: 'Dr Ajit Noonia',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Mayank Namdev',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Ms. Babita Tiwari',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Vivek Bhardwaj',
            dept: 'Department of AIML',
        },
    ],
    stage: [
        {
            id: 1,
            name: 'Ms. Anita Shotriya',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Ginika Mahajan',
            dept: 'Department of Data Science',
        },
        {
            id: 3,
            name: 'Mr. Harish Sharma',
            dept: 'Department of AIML',
        },
        {
            id: 4,
            name: 'Ms. Vipasha Sharma',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Ms. Ishita Nainwal',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Ms. Sushama',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Mr. Mayank Jain',
            dept: 'Department of CSE',
        },
    ],
    printing: [
        {
            id: 1,
            name: 'Dr Amit Kumar Bairwa',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Ms. Kirti Paliwal',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Vaishali Chauhan',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Atul Kumar Verma',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Dr Pallavi',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Dr Shikha Mundra',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Vivek Kumar',
            dept: 'Department of CSE',
        },
    ],
    food: [
        {
            id: 1,
            name: 'Mr. Venkatesh Gauri Shankar',
            dept: 'Department of IT',
        },
        {
            id: 2,
            name: 'Dr Aditya Sinha',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Mr. Tarun Jain',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Mr. Lav Upadhyay',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Mr. Vivek Sharma',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Dr Anil Kumar',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Nishant Jain',
            dept: 'Department of CSE',
        },
    ],
    social: [
        {
            id: 1,
            name: 'Dr Juhi Singh',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Santoshi Rudrakar',
            dept: 'Department of CSE',
        },
    ],
    liaison: [
        {
            id: 1,
            name: 'Dr Satpal Singh Kushwaha',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Varun Tiwari',
            dept: 'Department of AIML',
        },
        {
            id: 3,
            name: 'Dr Puneet Mittal',
            dept: 'Department of AIML',
        },
        {
            id: 4,
            name: 'Dr Yadvendra Pratap',
            dept: 'Department of AIML',
        },
        {
            id: 5,
            name: 'Dr Arun Poonia',
            dept: 'FOA, Language',
        },
        {
            id: 6,
            name: 'Dr Ajay Kumar',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Surendra Solanki',
            dept: 'Department of AIML',
        },
        {
            id: 8,
            name: 'Mr. Siddharth Kumar',
            dept: 'Department of AIML',
        },
        {
            id: 9,
            name: 'Mr. Prashant Hemrajani',
            dept: 'Department of AIML',
        },
        {
            id: 10,
            name: 'Dr Akshay Jadav',
            dept: 'Department of CSE',
        },
        {
            id: 11,
            name: 'Dr Saurabh Singh Verma',
            dept: 'Department of CCE',
        },
        {
            id: 12,
            name: 'Ms. Sri Geetha M',
            dept: 'Department of AIML',
        },
        {
            id: 13,
            name: 'Dr Shikha Mundra',
            dept: 'Department of CSE',
        },
        {
            id: 14,
            name: 'Dr Abhay Sharma',
            dept: 'Department of IoT',
        },
        {
            id: 15,
            name: 'Mr. Aditya Hathi',
            dept: 'Department of CCE',
        },
        {
            id: 16,
            name: 'Ms. Babita Tiwari',
            dept: 'Department of CSE',
        },
    ],
    print: [
        {
            id: 1,
            name: 'Dr Sayar Singh Shekhawat',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Prakash Ramani',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Surbhi Sharma',
            dept: 'Department of CSE',
        },
    ],
    Souvenir: [
        {
            id: 1,
            name: 'Dr Deepak Panwar',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Dr Neha Janu',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Ms. Anjali Yadav',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Rahul Saxena',
            dept: 'Department of IT',
        },
    ],
    web: [
        {
            id: 1,
            name: 'Dr Amit Garg',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Smaranika Mohapatra',
            dept: 'Department of IT',
        },
    ],
    local: [
        {
            id: 1,
            name: 'Dr Puneet Mittal',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Dr Praneet Saurabh',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Anand Pandey',
            dept: 'Department of Mechanical Engineering',
        },
        {
            id: 4,
            name: 'Dr Dalip Singh',
            dept: 'Department of Mechanical Engineering',
        },
        {
            id: 5,
            name: 'Mr Jaydeep Kishore',
            dept: 'Department of AIML',
        },
        {
            id: 6,
            name: 'Dr Jayakishan V',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Mr. Sanjay Kumar Tehariya',
            dept: 'Department of AIML',
        },
        {
            id: 8,
            name: 'Mr. Rohit Singh',
            dept: 'Department of IoT',
        },
        {
            id: 9,
            name: 'Ms. Nandini Babbar',
            dept: 'Department of IoT',
        },
    ],
    cultural: [
        {
            id: 1,
            name: 'Dr Arun Kumar Poonia',
            dept: 'Department of Arts',
        },
        {
            id: 2,
            name: 'Divya Thakur',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Neha Singh',
            dept: 'Department of CSE',
        },
    ],
    registration: [
        {
            id: 1,
            name: 'Dr Kusum Lata Jain',
            dept: 'Department of CCE',
        },
        {
            id: 2,
            name: 'Ms. Bali Devi',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Sushila Bishnoi',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Ms. Smarnika Mahapatra',
            dept: 'Department of IT',
        },
        {
            id: 5,
            name: 'Prashant Vats',
            dept: 'Department of CSE',
        },
    ],
}