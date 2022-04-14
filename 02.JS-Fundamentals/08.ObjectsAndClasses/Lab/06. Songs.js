function songs(input) {
    let songsNum = input.shift();
    let typeList = input.pop();
    class Song {
        constructor(type, name, time) {
            this.typeList = type;
            this.songName = name;
            this.songTime = time;
        }
    }
    let songsToPrint = [];
    for (let currentSong of input) {
        let [type, name, time] = currentSong.split("_");
        if (typeList === "all" || type === typeList) {
            let song = new Song(type, name, time);
            songsToPrint.push(song)
        }
    }
    for (let songToPrint of songsToPrint) {
        console.log(songToPrint.songName);
    }
}
// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);