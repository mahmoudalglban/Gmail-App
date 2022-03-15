import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMailNow: (state, action) => {
      state.selectMail = action.payload;
    },

    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMailNow, openSendMessage, closeSendMessage } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSendMail = (state) => state.mail.selectMail;

export default mailSlice.reducer;
