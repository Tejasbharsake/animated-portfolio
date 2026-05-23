export function scrollTo(id) {
    global.document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

export function openLink(link, target = "_blank") {
    window.open(link, target)
}

export function downloadFile(link, filename = "Tejas_Bharsake_Resume.pdf") {
    const a = document.createElement("a");
    a.href = link;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

