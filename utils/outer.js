import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Tejas Bharsake,',
    decrypTexts: [
        'A Software Developer',
        'A .NET Full Stack Developer',
        'I build scalable web apps',
        'A Database Specialist',
        'An Azure Enthusiast',
    ],
    desciption: `A dedicated and disciplined Software Developer with 3.1 years of experience in designing and developing scalable web and desktop applications using .NET Core, C#, ASP.NET, and modern frontend frameworks like Angular. Proficient in building RESTful APIs, cloud deployment (Azure), and secure payment systems.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:tejasbharsake9@gmail.com?subject=Hello')
    }
}

export default outer
