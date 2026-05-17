import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Tejasbharsake',
        'instagram': 'https://www.instagram.com/tejas_bharsake/',
        'twitter': 'https://twitter.com/tejas_bharsake',
        'linkedin': 'https://www.linkedin.com/in/tejas-bharsake/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'tejasbharsake9@gmail.com',
        onClick: () => openLink('mailto:tejasbharsake9@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements