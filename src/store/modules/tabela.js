import EventService from '../../services/EventService'

export const namespaced = true

export const state = {
  stavke: []
}
export const mutations = {
  UCITAJ_PODATKE(state, payload) {
    state.stavke = payload
  }
}
export const actions = {
  fetchData({ commit }) {
    return EventService.getEvents()
      .then(response => {
        commit('UCITAJ_PODATKE', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}

export const gettes = {

}