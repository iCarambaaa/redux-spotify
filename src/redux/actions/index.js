export const SELECTED_SONG = 'SELECTED_SONG'

export const selectSongAction = (song) => ({
    type: SELECTED_SONG,
    payload: song
})