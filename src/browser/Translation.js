import Translations from './Translations';

export default (lang) => (key) => {
	return Translations[lang][key];
};