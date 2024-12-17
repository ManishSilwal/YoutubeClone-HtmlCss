const videos = [{
    thumbnail: 'image/ltt-thumbnail.PNG',
    duration: '16:34',
    logo: 'image/ltt-logo.svg',
    title: "I'm Scared of my viewer's MESS - The Setup Doctor",
    channelName: 'Linus Tech Tips',
    stats: '1.2M views &middot; 11 days ago'
}, {
    thumbnail: 'image/ltt-thumbnail.PNG',
    duration: '15:34',
    logo: 'image/ltt-logo.svg',
    title: "I'm Scared of my viewer's MESS - The Setup Docto",
    channelName: 'Linus Tech Tips',
    stats: '1.2M views &middot; 11 days ago'
}, {
    thumbnail: 'image/ltt-thumbnail.PNG',
    duration: '14:34',
    logo: 'image/ltt-logo.svg',
    title: "I'm Scared of my viewer's MESS - The Setup Doct",
    channelName: 'Linus Tech Tips',
    stats: '1.2M views &middot; 11 days ago'
}, {
    thumbnail: 'image/ltt-thumbnail.PNG',
    duration: '13:34',
    logo: 'image/ltt-logo.svg',
    title: "I'm Scared of my viewer's MESS - The Setup Doc",
    channelName: 'Linus Tech Tips',
    stats: '1.2M views &middot; 11 days ago'
}, {
    thumbnail: 'image/ltt-thumbnail.PNG',
    duration: '12:34',
    logo: 'image/ltt-logo.svg',
    title: "I'm Scared of my viewer's MESS - The Setup Do",
    channelName: 'Linus Tech Tips',
    stats: '1.2M views &middot; 11 days ago'
}];

let videosHTML = ''

videos.forEach((video) =>{
    videosHTML += `<div class="video-container">
            <div class="thumbnail">
              <img class="thumbnail-picture" src="${video.thumbnail}" alt="thumbnail">
              <div class="video-duration">
                ${video.duration}
              </div>
            </div>
            <div class="video-info-grid">
              <img class="channel-picture" src="${video.logo}" alt="channel logo">
              <div>
                <p class="video-title">${video.title}</p>
                <p class="channel-name">${video.channelName}</p>
                <p class="video-stats">${video.stats}</p>
              </div>  
            </div>
          </div>`
});

document.querySelector('.video-grid')
    .innerHTML = videosHTML;