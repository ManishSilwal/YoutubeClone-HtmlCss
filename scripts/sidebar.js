const sidebars = [{
    image: "image/home.svg",
    sidebarName: 'Home'
}, {
    image: 'image/explore.svg',
    sidebarName: 'Explore'
}, {
    image: 'image/subscriptions.svg',
    sidebarName: 'Subscriptions'
}, {
    image: 'image/originals.svg',
    sidebarName: 'Originals'
}, {
    image: 'image/youtube-music.svg',
    sidebarName: 'Youtube Music'
}, {
    image: 'image/library.svg',
    sidebarName: 'Library'
}];

let sidebarHTML = '';

sidebars.forEach((sidebar) =>{
    sidebarHTML += `
    <div class="sidebar-link">
          <img src="${sidebar.image}">
          <div>${sidebar.sidebarName}</div>
        </div>
    `
})

document.querySelector('.sidebar')
    .innerHTML = sidebarHTML;