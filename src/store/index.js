/* eslint-disable import/prefer-default-export */
import { createStore } from 'vuex';

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue3',
        tags: [{ title: 'work' }],
      },
      {
        title: 'Finish Course',
        tags: [
          { title: 'work' },
          { title: 'home' },
        ],
      },
    ],
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    removeNote(state, idx) {
      state.notes.splice(idx, 1);
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
