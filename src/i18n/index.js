import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n);

const messages = {
  en: {
    title: 'VueJS Cordova Sample',
    showSample: 'Show code samples',
    home: "Home",
    vibration: "Vibration",
    camera: "Camera",
    flash: "Flash",
    contacts: "Contacts",
    see_on_github: "See On Github"
  },
  fr: {
    title: "Examples VueJS + Cordova",
    showSample: 'Afficher les examples',
    home: "Accueil",
    vibration: "Vibreur",
    camera: "Camera",
    flash: "Flash",
    contacts: "Contacts",
    see_on_github: "Voir sur Github"
  }
};


export const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
