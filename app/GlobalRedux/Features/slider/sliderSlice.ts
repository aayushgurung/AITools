"use client";

import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SliderState {
  sliderValue: number;
}

const initialState: SliderState = {
  sliderValue: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliderValues: (state, action: PayloadAction<number>) => {
      state.sliderValue = action.payload;
    },
  },
});
export const { setSliderValues } = sliderSlice.actions;
export const selectSliderValue = createSelector(
  (state: RootState) => state.slider.sliderValue,
  (sliderValue) => sliderValue
);
export default sliderSlice.reducer;
