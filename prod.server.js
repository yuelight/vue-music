const express = require('express');
const axios = require('axios');
const config = require('./config/index');

const app = express()

const apiRoutes = express.Router()
apiRoutes.get('/getDiscList', (req, res) => {
	const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

	axios.get(url, {
		headers: {
			referer: 'https://c.y.qq.com/',
			host: 'c.y.qq.com'
		},
		params: req.query
	}).then(response => {
		res.json(response.data);
	}).catch(e => {
		console.log(e);
	});
});

apiRoutes.get('/lyric', (req, res) => {
	const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';

	axios.get(url, {
		headers: {
			referer: 'https://c.y.qq.com/',
			host: 'c.y.qq.com'
		},
		params: req.query
	}).then(response => {
		let ret = response.data;
		if (typeof ret === 'string') {
			const reg = /^\w+\(({[^()]+})\)$/;
			const matches = ret.match(reg);
			if (matches) {
				ret = JSON.parse(matches[1]);
			}
		}
		res.json(ret);
	}).catch(e => {
		console.log(e);
	});
});

apiRoutes.get('/getSongList', (req, res) => {
	const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';

	axios.get(url, {
		headers: {
			referer: 'https://c.y.qq.com/',
			host: 'c.y.qq.com'
		},
		params: req.query
	}).then(response => {
		res.json(response.data);
	}).catch(e => {
		console.log(e);
	});
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

const port = process.env.PORT || config.build.port;
module.exports = app.listen(port, err => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`Listening at http://localhost:${port}\n`);
})
