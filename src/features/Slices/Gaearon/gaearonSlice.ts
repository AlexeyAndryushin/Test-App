import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { fetchGaearon } from "../../Queries/gaearon/fetchGaearon";

type GaearonState = {
	status: "loading" | "idle";
	error: string | null;
	gaearon: Gaearon;
};

export type Gaearon = {
	name: string;
	avatar_url: string;
	company: string;
};

const initialState: GaearonState = {
	status: 'idle',
	error: null,
	gaearon: undefined,
}

export const gaearonSlice = createSlice({
	name: "gaearon",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchGaearon.pending, (state) => {
			state.status = "loading";
			state.error = null;
		})
		builder.addCase(fetchGaearon.fulfilled,
			(state, action) => {
				state.gaearon = action.payload
				state.status = "idle"
			})
	}

})

export const selectStatus = (state: RootState) => state.gaearon.status

export default gaearonSlice.reducer