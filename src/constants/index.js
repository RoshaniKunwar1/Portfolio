import netflix from "../assets/projects/netflix.jpeg";
import loanApproval from "../assets/projects/loanApproval.png";
import ecommerce from "../assets/projects/ecommerce.jpeg";
import country from "../assets/projects/country.jpeg";
import ecommerce1 from "../assets/projects/ecommerce1.jpeg";
import contact from "../assets/projects/contact.jpeg";
import coffeePage from "../assets/projects/cofeePage.jpeg";


export const HERO_CONTENT = `An aspiring Frontend Developer pursuing degree in Information Management. With a solid foundation in HTML, CSS, and Java, constantly expanding my knowledge in web development, learning ReactJS, JavaScript, and Python along the way. familiar with tools like GitHub, MySQL, Bootstrap, and a bit of Tailwind.  Dedicated to learning and improving my skills as well as bring unique ideas and technical skills to dynamic team and gain hands-on experience through practical projects`;

export const ABOUT_TEXT = ` I thrive in collaborative environments, with adaptability, and continuous learning. Outside of development, I am well-versed in Microsoft Office tools, which complement my ability to organize, present, and communicate effectively. I am driven, self-motivated, and always eager to tackle new challenges in the ever-evolving tech landscape.`;

export const EDUCATIONS = [
  {
    year: "April 2021 - Present",
    role: "Bachelor of Information Management",
    description: `Janapriya Multiple Campus, Pokhara-9 Ratnachowk`,
  },
  {
    year: " March 2018 - 2020",
    role: " Higher Secondary Education (Management)",
    description: ` Prativa Secondary School, Palikhechowk`,
  },
];

export const PROJECTS = [
  {
    title: "Country Website",
    link: 'https://chola.netlify.app',
    image: country,
    description:
      "A fully functional React.js-based country information app, enabling users to search for and view detailed information about any country, including filtering by region and is hosted on Netlify for seamless accessibility.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Netflix-clone",
    image: netflix,
    description:
      "An React.js-based Netflix-clone website, integrating firebase for secure authentication functionalities.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "Contact Management App",
    image: contact,
    description:
      "A fully functional React.js-based contract management app, enabling contract creation and storage in Firebase for real - time data synchronization.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Firebase"],
  },
  {
    title: "Coffee Shop Website",
    image: coffeePage,
    description:
      "Built a fully responsive website using React, featuring a modern, user-friendly interface with smooth animations and pixel-perfect designs optimized for all devices.",
    technologies: [ "Tailwind",'Framer Motion', "React"],
  },
  {
    title: "Ecommerce Website",
    image: ecommerce1,
    description:
      "E-commerce website with all functionalities like add to cart, payment and all other frontend functionalities",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
  },
  {
    title: "Ecommerce website",
    image: ecommerce,
    description:
      "A full-stack e-commerce website, integrated with esewa for secure payment processing(testing) in wordpress.",
    technologies: ["Wordpress"],
  },
  {
    title: "Loan Approval System",
    image: loanApproval,
    description:
      "Loan Approval System for a summer project, featuring both client- side and admin - side functionalities",
    technologies: ["HTML", "CSS", "Bootstrap", "Java", "mySQL"],
  },
];

export const CONTACT = {
  address: "Bagaletole- 8, Pokhara",
  phoneNo: "+977 9816649262 ",
  email: "roshaniKunwar4008@gmail.com",
};
