import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curSongId: null
}

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getSongId: (state, aciton) => {
            state.curSongId = aciton.payload
        }
    }
});


export const { getSongId } = musicSlice.actions

export default musicSlice.reducer