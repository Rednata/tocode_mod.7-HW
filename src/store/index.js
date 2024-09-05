/* eslint-disable import/prefer-default-export */
import { createStore } from 'vuex';

export const store = createStore({
  state: {
    notes: JSON.parse(localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : [],
  },
  getters: {

    allNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    removeNote(state, idx) {
      state.notes.splice(idx, 1);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
  },
  actions: {
    addNote(context, note) {
      context.commit('addNote', note);
    },
    removeNote(context, idx) {
      context.commit('removeNote', idx);
    },
  },
});
