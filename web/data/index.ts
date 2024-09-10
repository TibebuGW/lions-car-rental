export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Your Journey Begins With Us.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/assets/cars/dark_lambo.jfif",
    spareImg: "",
  },
  {
    id: 2,
    title: "What sets us apart?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Options?",
    description: "Choose your car.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "We have a vehicle that matches your interest with the best pricing.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/currency.png",
  },

  {
    id: 5,
    title: "UAE’s Largest Car Rental Company",
    description: "Experience the convenience of renting with Lions Car Rental",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[500px] w-72",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/assets/cars/Rolls_Royce.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to visit our showroom?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Lions Car Rental provided exceptional service! The car was clean, well-maintained, and the staff was incredibly helpful. Highly recommend!",
    name: "Al-Mustapha Waleed",
  },
  {
    quote:
      "I had a fantastic experience with Lions Car Rental. The booking process was smooth, and the car exceeded my expectations. Will definitely use their service again.",
    name: "Chris Davis",
  },
  {
    quote:
      "Great service and affordable prices. The car was in excellent condition, and the customer service was top-notch. Thank you, Lions Car Rental!",
    name: "Pedro Rodriguez",
  },
  {
    quote:
      "Lions Car Rental made my trip stress-free. The car was ready on time, and the staff was friendly and professional. I couldn't have asked for a better experience.",
    name: "Timothy Lee",
  },
  {
    quote:
      "I was impressed with the quality of service at Lions Car Rental. The car was spotless, and the rental process was quick and easy. Highly recommend to anyone in need of a rental car in the UAE.",
    name: "Francesca Rossi",
  },
];

export const companies = [
  {
    id: 1,
    name: "Lamborghini",
    img: "/assets/car_logos/Lamborghini.jpg",
  },
  {
    id: 2,
    name: "Ferrari",
    img: "/assets/car_logos/Ferrari.jpg",
  },
  {
    id: 3,
    name: "Rolls Royce",
    img: "/assets/car_logos/Rolls_Royce.jpg",
  },
  {
    id: 4,
    name: "Toyota",
    img: "/assets/car_logos/Toyota.jpg",
  },
  {
    id: 5,
    name: "Maserati",
    img: "/assets/car_logos/Maserati.jpg",
  },
  {
    id: 6,
    name: "Hyundai",
    img: "/assets/car_logos/Hyundai.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const team = [
  {
    id: 1,
    title: "Ab Marshall",
    desc: "Co-owner",
    className: "md:col-span-2",
    thumbnail: "/assets/people/ab_marshall.jpg",
  },
  {
    id: 2,
    title: "Zak Jemal",
    desc: "Co-owner",
    className: "md:col-span-2",
    thumbnail: "/assets/people/zak_jemal.jpg",
  },
]

export const socialMedia = [
  {
    id: 3,
    url: "https://www.instagram.com/lion_car_rental/",
    img: "/link.svg",
  },
];

export const cars = [
  {
    index: 1,
    name: "Mercedes GLE 53 AMG",
    description: {
      year: "2024",
      color: "White",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery",
    },
    tags: [
      { name: "Mercedes", color: "text-blue-200" },
      { name: "2024", color: "text-green-200" },
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_456322137_828318596036571_2131098764390820208_n.jpg",
  },
  {
    index: 2,
    name: "Mercedes G63 AMG",
    description: {
      year: "2023",
      color: "White",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Mercedes", color: "text-blue-200" },
      { name: "2023", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_451390385_903689354940572_8595432284703737303_n.jpg"
  },
  {
    index: 3,
    name: "Ford Mustang Cabrio",
    description: {
      year: "2023",
      color: "Dark Grey",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Ford", color: "text-blue-200" },
      { name: "2023", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_455359687_1064272618629885_6293663822888685164_n.jpg"
  },
  {
    index: 4,
    name: "Hyundai Tucson",
    description: {
      year: "2022",
      color: "White",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Hyundai", color: "text-blue-200" },
      { name: "2022", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_456551107_1568988940668559_3590357647377618174_n.jpg"
  },
  {
    index: 5,
    name: "Lamborghini Huracan",
    description: {
      year: "2021",
      color: "Red",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Lamborghini", color: "text-blue-200" },
      { name: "2021", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_456260861_534826689120243_7297594453670204396_n.jpg"
  },
  {
    index: 6,
    name: "Range Rover",
    description: {
      year: "2021",
      color: "Black",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Range Rover", color: "text-blue-200" },
      { name: "2021", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_455759699_8754487697899343_4222567209557157414_n.jpg"
  },
  {
    index: 7,
    name: "Corvette",
    description: {
      year: "2023",
      color: "Dark Blue",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Corvette", color: "text-blue-200" },
      { name: "2023", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_455677304_410557348216428_2084555723933958378_n.jpg"
  },
  {
    index: 8,
    name: "Ferrari 488 Spider",
    description: {
      year: "2022",
      color: "Dark Grey",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Ferrari", color: "text-blue-200" },
      { name: "2022", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_455899188_1591080084771127_6898719431949951353_n.jpg"
  },
  {
    index: 9,
    name: "Bentley Continental, V8",
    description: {
      year: "2023",
      color: "Deep Grey",
      deposit: "No deposit needed",
      delivery: "Free & Fast Delivery"
    },
    tags: [
      { name: "Bentley", color: "text-blue-200" },
      { name: "2023", color: "text-green-200" }
    ],
    image: "https://lionscarrentaldubai.com/wp-content/uploads/2024/08/SaveClip.App_454785190_481546164748449_678938613319223006_n.jpg"
  }
  
]