import { playMode } from 'common/js/config';
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache';

const state = {
	url: '',
	singer: {},
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	disc: {},
	toplist: {},
	searchHistory: loadSearch(),
	playHistory: loadPlay(),
	favoriteList: loadFavorite()
};

export default state;
