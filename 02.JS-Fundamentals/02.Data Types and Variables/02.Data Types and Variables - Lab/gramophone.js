function gramophone(band, album, song) {

    let songDuaration = album.length * band.length * song.length / 2;
    let plateRotations = Math.ceil(songDuaration / 2.5)
    console.log(`The plate was rotated ${plateRotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');