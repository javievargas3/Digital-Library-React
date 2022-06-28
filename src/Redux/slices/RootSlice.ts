import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        author: 'author',
        title: 'title',
        length: 'length in pages',
        type: 'type',
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseTitle, chooseLength, chooseType } = rootSlice.actions;