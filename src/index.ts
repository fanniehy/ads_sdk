interface Ads {
    videourl: string,
    size: string,
    videowidth: number,
    videoheight: number,
}

function getAds(ads: Ads) {
    
}

let ads = { videourl: "Jane", size: "User", videowidth: 123, videoheight: 235 };

document.body.innerHTML = getAds(ads);