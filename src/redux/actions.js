import store from './store.js';
import axios from 'axios';

export function getSportsData() {
  axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=vegas_golden_knights')
    .then(res => {
      const data = res.data.teams[0]
      console.log(data)

      store.dispatch({
        type: 'GET_SPORTS_DATA',
        payload: data
      })
    })
    .catch(err => {
      if (err) {
        console.log(err)
      }
    })
}