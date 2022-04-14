function seriesCalculator(input) {

    let film = input[0]
    let seasons = Number(input[1])
    let episodes = Number(input[2])
    let extraEpisodesTime = seasons * 10
    let episodesTimeNoAds = Number(input[3])
    let episodesTimeWithAds = episodesTimeNoAds + episodesTimeNoAds * 0.20

    console.log(`Total time needed to watch the ${film} series is ${seasons * episodes * episodesTimeWithAds + extraEpisodesTime} minutes.`)
}
seriesCalculator(["Lucifer", "3", "18", "55"])