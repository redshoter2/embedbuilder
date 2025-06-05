/**
 * This script file will (or atleast should) run before the main script file runs.
 * This file should contain stuff like options, global variables (etc.) to be used by the main script.
 */

// Options

// URL options can override the options below.
// Options set through the menu can override both until the page is refreshed.
options = {
    username: "Roody's Shop",
    avatar: 'https://roody.es/assets/images/logo.png',
    verified: false,
    noUser: false,
    data: null,
    guiTabs: ['author', 'description'],
    useJsonEditor: false,
    reverseColumns: false,
    allowPlaceholders: false,
    autoUpdateURL: false,
    autoParams: false,
    hideEditor: false,
    hidePreview: false,
    hideMenu: false,
    single: false,
    noMultiEmbedsOption: false,
    sourceOption: false, // Display link to source code in menu.
}

// Default JSON object

json = {
    content: "¡Hola! 👋",
    embed: {
        title: "Esto es un embed custom",
        description: "¡Personalizalo a tu gusto! Usa el menú lateral de la izquierda para cambiar los valores que gustes, como título, descripción, color, imagen, etc.",
        color: "#ff0000",
        image: {
            url: "https://roody.es/assets/images/roody_banner.webp"
        },
        thumbnail: {
            url: "https://roody.es/assets/images/logo.png"
        },
        footer: {
            text: "¡Gracias por usar Roody's Shop! Usa la escoba mágica para limpiar el embed.",
            icon_url: "https://roody.es/assets/images/logo.png"
        },
     }
 }


// Write any code under the 'DOMContentLoaded' event to run after the page has loaded.
addEventListener('DOMContentLoaded', () => {
    // console.log('Hello 👋');

    // Remove the colour picker
    // document.querySelector('.colors').remove()
})