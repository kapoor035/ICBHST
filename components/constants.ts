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
                link: 'https://cmt3.research.microsoft.com/TrustNet2026',
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
        link: '#footer', // Changed from '/#Contact'
        newTab: false,
    },
]

export const speakers = [
    {
        id: 2,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 7,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 3,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 4,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 5,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
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
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 9,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 10,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 11,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
    {
        id: 12,
        fullName: 'Name',
        des: 'Designation',
        profileimage: '/images/speakers/blank-pfp.jpg',
        linkedin: '#',
        website: '#'
    },
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
            name: 'Prof. Dr. N. N. Sharma',
            des: 'President',
            role: 'Patron',
            picture: '/images/committee/dr-nnsharma.jpg',
        },
        {
            id: 3,
            name: 'Dr. Karunakar A Kotegar',
            des: 'Pro-President',
            role: 'Co-Patron',
            picture: '/images/committee/karunakar-1.jpg',
        },
        {
            id: 4,
            name: 'Dr. Amit Soni',
            des: 'Registrar',
            role: 'Co-Patron',
            picture: '/images/committee/amit-soni.jpg',
        },
        {
            id: 5,
            name: 'Dr. Kuldip Singh Sangwan',
            des: 'Dean, FoSTA',
            role: 'Co-Patron',
            picture: '/images/committee/Dr-Kuldip-Singh.jpg',
        },
        {
            id: 6,
            name: 'Dr. Ravikant Gupta',
            des: '',
            role: 'Conference Chair',
            picture: '',
        },
        {
            id: 7,
            name: 'Dr. Manisha Sharma',
            des: '',
            role: 'Conference Co-Chair',
            picture: '',
        },
        {
            id: 8,
            name: 'Dr. Ankit Srivastava',
            des: '',
            role: 'Convenor',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Prathap Somu',
            des: '',
            role: 'Convenor',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Anees Ahmed ',
            des: '',
            role: 'Co-Convenor',
            picture: '',
        },
        {
            id: 9,
            name: 'Dr. Nikhil Kumar',
            des: '',
            role: 'Co-Convenor',
            picture: '',
        },
        {
            id: 11,
            name: 'Dr. Chandrabhan Seniya',
            des: '',
            role: 'Coordinator',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Akhilesh Kumar Yadav',
            des: '',
            role: 'Organising Secretary',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Akhilesh Kumar Yadav',
            des: '',
            role: 'Convenor',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Prathap Somu',
            des: '',
            role: 'Member',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Ankit Srivastava',
            des: '',
            role: 'Member',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Abhijeet Ojha',
            des: '',
            role: 'Member',
            picture: '',
        },
        {
            id: 10,
            name: 'Dr. Shikha Suman',
            des: '',
            role: 'Member',
            picture: '',
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