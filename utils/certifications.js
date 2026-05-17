import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'Microsoft Certified: Azure Developer Associate',
            platform: 'Microsoft',
            link: '',
            date: 'Issued Jun 2023 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Docker for Enterprise Developers',
            platform: 'Coursera',
            link: '',
            date: 'Issued Sep 2022 · No Expiration Date',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Advanced C# and .NET Core Design Patterns',
            platform: 'Pluralsight',
            link: '',
            date: 'Issued Aug 2022 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Architecting Microservices in .NET Core',
            platform: 'LinkedIn Learning',
            link: '',
            date: 'Issued Dec 2022 · No Expiration Date',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        }
    ],
    handleIconClick: openLink
}

export default certifications