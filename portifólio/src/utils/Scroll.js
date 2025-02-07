export default function scrollToElement(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}