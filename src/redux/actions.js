import store from './store.js';
import axios from 'axios';

export function getSportsData() {
  axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=vegas_golden_knights')
    .then(res => {
      const data = res.data.teams[0]

      // separate the data needed in each section, so I don't pass ALL the data to each component unneccesarily
      const headerData = {
        strTeamFanart3: data.strTeamFanart3,
        strTeamLogo: data.strTeamLogo
      }
      const aboutData = {
        strTeamJersey: data.strTeamJersey,
        strWebsite: data.strWebsite,
        strDescriptionEN: data.strDescriptionEN
      }
      const logoData = {
        strTeamFanart2: data.strTeamFanart2,
        strTeamBadge: data.strTeamBadge
      }
      const locationData = {
        strStadiumThumb: data.strStadiumThumb,
        strStadiumDescription: data.strStadiumDescription
      }
      const footerData = {
        strFacebook: data.strFacebook,
        strTwitter: data.strTwitter,
        strInstagram: data.strInstagram,
        strYoutube: data.strYoutube
      }

      store.dispatch({
        type: 'GET_SPORTS_DATA',
        payload: {
          headerData,
          aboutData,
          logoData,
          locationData,
          footerData
        }
      })
    })
    .catch(err => {
      if (err) {
        console.log(err)
      }
    })
}