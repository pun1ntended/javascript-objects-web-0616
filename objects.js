var playlist = Object.new();
function updatePlaylist(playlist,artist,song) {
    playlist[artist] = song;
}
function removeFromPlaylist(playlist,artist,song) {
    delete playlist[artist];
}