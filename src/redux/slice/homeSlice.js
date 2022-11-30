import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
const initialState = {
    slider: []
}

export const getBanner = createAsyncThunk('slider', async () => {
    try {
        const response = await axios.get('/home');
       return response.data.data.items
        
    } catch (error) {
        
    }
})

const homeSlice = createSlice({
  name: 'gethome',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getBanner.fulfilled, (state, action) => {
        const banner = action.payload
        state.slider = banner.find(item => item.sectionType === 'banner')
        
    })
  }
});

export default homeSlice.reducer