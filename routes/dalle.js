function _0x68ba() { const _0x4c6acf = ['decode', '341454SUXNeo', 'data', 'body', 'head', 'prompt', 'uid', '799800GbdnLQ', 'createImage', '/del_one', '\x27\x20WHERE\x20uid\x20=\x20\x27', '\x27,\x20\x27failed\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20', 'Router', 'INSERT\x20INTO\x20dalle\x20(uid,\x20prompt,\x20status)\x20VALUES\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27', 'UPDATE\x20user\x20SET\x20dall_e_hit_left\x20=\x20\x27', '/../client/public/dalle', 'jsonwebtoken', '162860woHnXE', '483cuCBLU', 'bcrypt', 'exports', 'query', '../config/promisemysql', 'express', 'moment', '\x27,\x20\x27', 'post', 'INSERT\x20INTO\x20dalle\x20(uid,\x20prompt,\x20image,\x20image_source_link,\x20status)\x20VALUES\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27', '\x27,\x20\x27success\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20', 'request', 'added\x20dalle\x20for:\x20', 'No\x20prompt\x20provided', 'url', 'dall\x20saved', 'createWriteStream', 'path', '512436UzsJkg', 'openai', 'email', '.png', '794920zQitKr', 'get', 'log', '131444LvDAjP', '../config/config', 'Request\x20has\x20been\x20generated,\x20Check\x20output\x20in\x20the\x20history\x20after\x20few\x20moments.', 'started\x20dalle\x20for:\x20', 'hit_left', '/gen_new', 'Server\x20error', 'Content\x20was\x20deleted', '../middlewares/user', 'json', '95616WDhpTM', 'SELECT\x20*\x20FROM\x20dalle\x20WHERE\x20uid\x20=\x20\x27']; _0x68ba = function () { return _0x4c6acf; }; return _0x68ba(); } const _0x27db85 = _0x1fe1; (function (_0x445d43, _0x5266e7) { const _0x1a803e = _0x1fe1, _0x133f9e = _0x445d43(); while (!![]) { try { const _0xa71b73 = -parseInt(_0x1a803e(0x15c)) / 0x1 + -parseInt(_0x1a803e(0x169)) / 0x2 + -parseInt(_0x1a803e(0x18c)) / 0x3 + parseInt(_0x1a803e(0x179)) / 0x4 + -parseInt(_0x1a803e(0x190)) / 0x5 + -parseInt(_0x1a803e(0x16f)) / 0x6 + -parseInt(_0x1a803e(0x17a)) / 0x7 * (-parseInt(_0x1a803e(0x166)) / 0x8); if (_0xa71b73 === _0x5266e7) break; else _0x133f9e['push'](_0x133f9e['shift']()); } catch (_0x4e0adc) { _0x133f9e['push'](_0x133f9e['shift']()); } } }(_0x68ba, 0x18728)); const router = require(_0x27db85(0x17f))[_0x27db85(0x174)](), con = require(_0x27db85(0x15d)), { sign } = require(_0x27db85(0x178)), bcrypt = require(_0x27db85(0x17b)), randomstring = require('randomstring'), moment = require(_0x27db85(0x180)), { isvalid, isvaliddownload, isuser, checkdall } = require(_0x27db85(0x164)), path = require(_0x27db85(0x18b)), fs = require('fs'), { Configuration, OpenAIApi } = require(_0x27db85(0x18d)), promisemysql = require(_0x27db85(0x17e)); function _0x1fe1(_0x23a967, _0x2ab20e) { const _0x68ba3e = _0x68ba(); return _0x1fe1 = function (_0x1fe18c, _0x5611d3) { _0x1fe18c = _0x1fe18c - 0x15a; let _0x104a5b = _0x68ba3e[_0x1fe18c]; return _0x104a5b; }, _0x1fe1(_0x23a967, _0x2ab20e); } request = require(_0x27db85(0x185)), router['post'](_0x27db85(0x161), isuser, checkdall, async (_0x160210, _0xe3d65b) => { const _0x23a3fb = _0x27db85; try { if (!_0x160210[_0x23a3fb(0x16b)]['prompt']) return _0xe3d65b['json']({ 'msg': _0x23a3fb(0x187) }); _0xe3d65b[_0x23a3fb(0x165)]({ 'msg': _0x23a3fb(0x15e), 'success': !![] }); const _0x2004af = _0x160210[_0x23a3fb(0x16b)][_0x23a3fb(0x16d)]; console[_0x23a3fb(0x15b)](_0x23a3fb(0x15f), _0x160210[_0x23a3fb(0x168)][_0x23a3fb(0x18e)]); const _0x5c3a8a = new Configuration({ 'apiKey': _0x160210['openai_key'] }), _0x5083bd = new OpenAIApi(_0x5c3a8a), _0x8f05a2 = await _0x5083bd[_0x23a3fb(0x170)]({ 'prompt': _0x2004af, 'n': 0x1, 'size': _0x160210['plan']['dall_e_size'] || '256x256' }), _0x24bc96 = _0x8f05a2[_0x23a3fb(0x16a)]?.[_0x23a3fb(0x16a)][0x0]?.[_0x23a3fb(0x188)], _0x4ab067 = _0x160210[_0x23a3fb(0x160)] - 0x1, _0x48b869 = Date['now']() + _0x23a3fb(0x18f), _0x579f15 = __dirname + _0x23a3fb(0x177); var _0x573755 = function (_0x57d6e3, _0x11de92, _0x451d50) { const _0x3d4595 = _0x23a3fb; request[_0x3d4595(0x16c)](_0x57d6e3, function (_0x2e4fa5, _0x51441f, _0x2a33df) { const _0xb9382c = _0x3d4595; request(_0x57d6e3)['pipe'](fs[_0xb9382c(0x18a)](_0x11de92))['on']('close', _0x451d50); }); }; _0x573755(_0x24bc96, _0x579f15 + '/' + _0x48b869, function () { const _0x4ea71b = _0x23a3fb; console['log'](_0x4ea71b(0x189)); }), await promisemysql[_0x23a3fb(0x17d)](_0x23a3fb(0x176) + _0x4ab067 + _0x23a3fb(0x172) + _0x160210[_0x23a3fb(0x168)][_0x23a3fb(0x16e)] + '\x27\x20'), await promisemysql['query'](_0x23a3fb(0x183) + _0x160210[_0x23a3fb(0x168)][_0x23a3fb(0x16e)] + _0x23a3fb(0x181) + _0x2004af + '\x27,\x20\x27' + _0x48b869 + _0x23a3fb(0x181) + _0x24bc96 + _0x23a3fb(0x184)), console[_0x23a3fb(0x15b)](_0x23a3fb(0x186), _0x160210[_0x23a3fb(0x168)][_0x23a3fb(0x18e)]); } catch (_0x7ae44d) { console[_0x23a3fb(0x15b)](_0x7ae44d), await promisemysql[_0x23a3fb(0x17d)](_0x23a3fb(0x175) + _0x160210['decode']['uid'] + '\x27,\x20\x27' + _0x160210['body'][_0x23a3fb(0x16d)] + _0x23a3fb(0x173)); } }), router[_0x27db85(0x15a)]('/get_user_dalle', isuser, async (_0x4d41ad, _0x4a7222) => { const _0xa3fd62 = _0x27db85; try { const _0x5211df = await promisemysql[_0xa3fd62(0x17d)](_0xa3fd62(0x167) + _0x4d41ad[_0xa3fd62(0x168)][_0xa3fd62(0x16e)] + '\x27'); _0x4a7222[_0xa3fd62(0x165)]({ 'success': !![], 'data': _0x5211df }); } catch (_0x1b7ec0) { console[_0xa3fd62(0x15b)](_0x1b7ec0), _0x4a7222[_0xa3fd62(0x165)]({ 'msg': _0xa3fd62(0x162), 'err': _0x1b7ec0 }); } }), router[_0x27db85(0x182)](_0x27db85(0x171), isuser, async (_0x23ce87, _0x214fce) => { const _0x4cbdf9 = _0x27db85; try { const _0x49c215 = await promisemysql[_0x4cbdf9(0x17d)]('DELETE\x20from\x20content\x20WHERE\x20id\x20=\x20\x27' + _0x23ce87[_0x4cbdf9(0x16b)]['id'] + '\x27\x20'); _0x214fce[_0x4cbdf9(0x165)]({ 'msg': _0x4cbdf9(0x163), 'success': !![] }); } catch (_0xfaf8e8) { console[_0x4cbdf9(0x15b)](_0xfaf8e8), _0x214fce['json']({ 'msg': _0x4cbdf9(0x162), 'err': _0xfaf8e8 }); } }), module[_0x27db85(0x17c)] = router;