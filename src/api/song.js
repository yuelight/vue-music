import { commonParams } from './config';

import axios from 'axios';

export function getLyric (mid) {
	const url = '/api/lyric';

	const data = Object.assign({}, commonParams, {
		songmid: mid,
		pcachetime: +new Date(),
		platform: 'h5',
		hostUin: 0,
		needNewCode: 1,
		nobase64: 1,
		uin: 0
	});

	return axios.get(url, {
		params: data
	}).then(res => {
		return Promise.resolve(res.data);
	});
}

export function getSong (mid) {
	const url = `/api/song/${mid}`;

	return axios.get(url).then(res => {
		return Promise.resolve(res.data);
	});
}
