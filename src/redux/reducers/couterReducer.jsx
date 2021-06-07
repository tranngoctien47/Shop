const { default: createSlice } = require("core/createSlice");


let initialState = 0;
let { reducer, action, TYPE } = createSlice({
    name: 'counter',
    initState: initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        abc: (state) => state
    }
})
