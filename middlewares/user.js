function _0x5228(_0x24fadf, _0x3fc85c) { const _0x44b3b3 = _0x44b3(); return _0x5228 = function (_0x522860, _0x9ac75c) { _0x522860 = _0x522860 - 0x1e2; let _0x3cad30 = _0x44b3b3[_0x522860]; return _0x3cad30; }, _0x5228(_0x24fadf, _0x3fc85c); } const _0x15d5b1 = _0x5228; (function (_0x2a9d27, _0x4f0f41) { const _0x2692a0 = _0x5228, _0x5da773 = _0x2a9d27(); while (!![]) { try { const _0x1ebc36 = -parseInt(_0x2692a0(0x1fe)) / 0x1 + parseInt(_0x2692a0(0x1f4)) / 0x2 + parseInt(_0x2692a0(0x214)) / 0x3 * (-parseInt(_0x2692a0(0x1ec)) / 0x4) + -parseInt(_0x2692a0(0x212)) / 0x5 + parseInt(_0x2692a0(0x1ed)) / 0x6 * (parseInt(_0x2692a0(0x1f1)) / 0x7) + parseInt(_0x2692a0(0x1e7)) / 0x8 + -parseInt(_0x2692a0(0x1e9)) / 0x9 * (-parseInt(_0x2692a0(0x1f0)) / 0xa); if (_0x1ebc36 === _0x4f0f41) break; else _0x5da773['push'](_0x5da773['shift']()); } catch (_0x56819a) { _0x5da773['push'](_0x5da773['shift']()); } } }(_0x44b3, 0x898c3)); const con = require(_0x15d5b1(0x1ff)), jwt = require(_0x15d5b1(0x20d)), promisemysql = require('../config/promisemysql'); function _0x44b3() { const _0x5218bd = ['jsonwebtoken', 'split', 'Access\x20denies!\x20Invalid\x20token\x20found.', 'SELECT\x20*\x20FROM\x20admin\x20WHERE\x20email\x20=\x20\x27', 'email', '5029460rnBrSf', 'There\x20is\x20keys\x20issue\x20by\x20the\x20admin\x20side', '1976199fwdnXy', 'You\x20dont\x20have\x20whatsapp\x20bot\x20in\x20your\x20plan\x20or\x20you\x20exceeded\x20words\x20limit', 'Authorization', '\x27\x20and\x20password\x20=\x20\x27', 'openai_key', 'admin', 'length', 'env', '3494192KMamcS', 'whatsapp_bot', '5566284WpIcKu', 'No\x20plan\x20found\x20please\x20get\x20one.', 'verify', '4qvvlfq', '10806fwxcJj', 'Your\x20token:\x20', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20email\x20=\x20\x27', '40AFPniq', '595OjiVSZ', 'token', 'There\x20is\x20no\x20dall-e\x20hit\x20found\x20in\x20your\x20account.\x20Please\x20renew\x20your\x20plan', '352754vgKIzw', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20\x27', 'get', 'plan', 'json', 'Database\x20query\x20error', 'Invalid\x20token\x20found', 'JWTKEY', 'No\x20token\x20found', 'dall_e_hit_left', '1012120JLzyaI', '../config/config', 'There\x20is\x20no\x20words\x20left\x20found\x20in\x20your\x20account.\x20Please\x20renew\x20your\x20plan', 'word_left', 'password', 'hit_left', 'check\x20hit\x20error', 'query', 'parse', 'Unauthorized\x20token', 'role', 'SELECT\x20*\x20FROM\x20web', 'uid', 'log', 'decode']; _0x44b3 = function () { return _0x5218bd; }; return _0x44b3(); } module['exports'] = { 'isvalid': async (_0x18d9a2, _0x873ed8, _0x59ac6e) => { const _0x127342 = _0x15d5b1, _0x12c91d = _0x18d9a2[_0x127342(0x1f6)](_0x127342(0x216)); if (!_0x12c91d) return _0x873ed8[_0x127342(0x1f8)]({ 'msg': _0x127342(0x1fc), 'token': _0x127342(0x1ee) + _0x12c91d, 'logout': !![] }); try { if (_0x12c91d) jwt[_0x127342(0x1eb)](_0x12c91d['split']('\x20')[0x1], process[_0x127342(0x1e6)][_0x127342(0x1fb)], (_0x3d5f7d, _0x6f3f1e) => { const _0x4814a6 = _0x127342; if (_0x3d5f7d) return _0x873ed8[_0x4814a6(0x1f8)]({ 'success': 0x0, 'msg': _0x4814a6(0x1fa) }); else con['query']('SELECT\x20*\x20FROM\x20admin\x20WHERE\x20email\x20=\x20\x27' + _0x6f3f1e[_0x4814a6(0x211)] + _0x4814a6(0x1e2) + _0x6f3f1e[_0x4814a6(0x202)] + '\x27', (_0x3e3bca, _0x4f94d1) => { const _0x45c317 = _0x4814a6; if (_0x3e3bca) { _0x873ed8['json']({ 'success': ![], 'msg': _0x45c317(0x1f9), 'err': _0x3e3bca, 'token': _0x12c91d }); return; } else { if (_0x4f94d1[_0x45c317(0x1e5)] > 0x0) { if (_0x4f94d1[0x0][_0x45c317(0x208)] === _0x45c317(0x1e4)) _0x18d9a2[_0x45c317(0x20c)] = _0x6f3f1e, _0x59ac6e(); else return _0x873ed8[_0x45c317(0x1f8)]({ 'success': 0x0, 'msg': _0x45c317(0x207), 'token': _0x12c91d, 'logout': !![] }); } else return console['log'](_0x4f94d1), _0x873ed8[_0x45c317(0x1f8)]({ 'success': 0x0, 'msg': 'Invalid\x20token\x20found', 'token': _0x12c91d, 'logout': !![] }); } }); }); else return _0x873ed8[_0x127342(0x1f8)]({ 'success': 0x0, 'msg': _0x127342(0x20f), 'logout': !![] }); } catch (_0x17ae8e) { console[_0x127342(0x20b)](_0x17ae8e); } }, 'isuser': async (_0x2135c9, _0x3f89dd, _0x186c42) => { const _0x2c0b74 = _0x15d5b1, _0x1b1567 = _0x2135c9[_0x2c0b74(0x1f6)]('Authorization'); if (!_0x1b1567) return _0x3f89dd[_0x2c0b74(0x1f8)]({ 'msg': _0x2c0b74(0x1fc), 'token': _0x2c0b74(0x1ee) + _0x1b1567, 'logout': !![] }); try { if (_0x1b1567) jwt['verify'](_0x1b1567[_0x2c0b74(0x20e)]('\x20')[0x1], process[_0x2c0b74(0x1e6)][_0x2c0b74(0x1fb)], (_0x14f05e, _0x68336a) => { const _0x3d3891 = _0x2c0b74; if (_0x14f05e) return _0x3f89dd['json']({ 'success': 0x0, 'msg': _0x3d3891(0x1fa), 'token': _0x1b1567 }); else con[_0x3d3891(0x205)](_0x3d3891(0x1ef) + _0x68336a[_0x3d3891(0x211)] + _0x3d3891(0x1e2) + _0x68336a[_0x3d3891(0x202)] + '\x27', (_0x2d9ba6, _0x134d7f) => { const _0x21b720 = _0x3d3891; if (_0x2d9ba6) { _0x3f89dd[_0x21b720(0x1f8)]({ 'success': ![], 'msg': 'Database\x20query\x20error', 'err': _0x2d9ba6, 'token': _0x1b1567 }); return; } else { if (_0x134d7f[_0x21b720(0x1e5)] > 0x0) { if (_0x134d7f[0x0][_0x21b720(0x208)] === 'user') _0x2135c9['decode'] = _0x68336a, _0x186c42(); else return _0x3f89dd[_0x21b720(0x1f8)]({ 'success': 0x0, 'msg': _0x21b720(0x207), 'token': _0x1b1567, 'logout': !![] }); } else return _0x3f89dd[_0x21b720(0x1f8)]({ 'success': 0x0, 'msg': _0x21b720(0x1fa), 'token': _0x1b1567, 'logout': !![] }); } }); }); else return _0x3f89dd['json']({ 'success': 0x0, 'msg': _0x2c0b74(0x20f), 'logout': !![] }); } catch (_0xbb6b0e) { console[_0x2c0b74(0x20b)](_0xbb6b0e); } }, 'isvaliddownload': async (_0x38c343, _0x20a578, _0x2fb0e1) => { const _0x4c554b = _0x15d5b1, _0xfbd50d = _0x38c343[_0x4c554b(0x205)][_0x4c554b(0x1f2)]; if (!_0xfbd50d) return _0x20a578[_0x4c554b(0x1f8)]({ 'msg': 'No\x20token\x20found', 'token': _0x4c554b(0x1ee) + _0xfbd50d, 'logout': !![] }); try { if (_0xfbd50d) jwt[_0x4c554b(0x1eb)](_0xfbd50d, process[_0x4c554b(0x1e6)][_0x4c554b(0x1fb)], (_0x486448, _0x303a58) => { const _0x3525fb = _0x4c554b; if (_0x486448) return _0x20a578[_0x3525fb(0x1f8)]({ 'success': 0x0, 'msg': _0x3525fb(0x1fa) }); else con[_0x3525fb(0x205)](_0x3525fb(0x210) + _0x303a58[_0x3525fb(0x211)] + _0x3525fb(0x1e2) + _0x303a58[_0x3525fb(0x202)] + '\x27', (_0x48e3ec, _0x2c850a) => { const _0x26809e = _0x3525fb; if (_0x48e3ec) { _0x20a578[_0x26809e(0x1f8)]({ 'success': ![], 'msg': _0x26809e(0x1f9), 'err': _0x48e3ec, 'token': _0xfbd50d }); return; } else { if (_0x2c850a[_0x26809e(0x1e5)] > 0x0) { if (_0x2c850a[0x0][_0x26809e(0x208)] === _0x26809e(0x1e4)) _0x38c343[_0x26809e(0x20c)] = _0x303a58, _0x2fb0e1(); else return _0x20a578[_0x26809e(0x1f8)]({ 'success': 0x0, 'msg': _0x26809e(0x207), 'token': _0xfbd50d, 'logout': !![] }); } else return _0x20a578[_0x26809e(0x1f8)]({ 'success': 0x0, 'msg': _0x26809e(0x1fa), 'token': _0xfbd50d, 'logout': !![] }); } }); }); else return _0x20a578[_0x4c554b(0x1f8)]({ 'success': 0x0, 'msg': 'Access\x20denies!\x20Invalid\x20token\x20found.', 'logout': !![] }); } catch (_0x1de462) { console['log'](_0x1de462); } }, 'checkhit': async (_0x2b2b20, _0x1fd1c9, _0x47d9dd) => { const _0x1a441f = _0x15d5b1; try { const _0x5138a7 = await promisemysql[_0x1a441f(0x205)](_0x1a441f(0x1f5) + _0x2b2b20[_0x1a441f(0x20c)][_0x1a441f(0x20a)] + '\x27\x20'), _0x1bef13 = await promisemysql[_0x1a441f(0x205)](_0x1a441f(0x209)); if (!_0x1bef13[0x0][_0x1a441f(0x1e3)]) return _0x1fd1c9[_0x1a441f(0x1f8)]({ 'msg': _0x1a441f(0x213) }); if (!_0x5138a7[0x0][_0x1a441f(0x1f7)] || _0x5138a7[_0x1a441f(0x1e5)] < 0x1) return _0x1fd1c9[_0x1a441f(0x1f8)]({ 'msg': _0x1a441f(0x1ea) }); else { const _0x2283c6 = parseInt(_0x5138a7[0x0][_0x1a441f(0x201)]); if (!_0x2283c6 || _0x2283c6 < 0x1) return _0x1fd1c9['json']({ 'msg': _0x1a441f(0x200) }); else _0x2b2b20[_0x1a441f(0x1e3)] = _0x1bef13[0x0][_0x1a441f(0x1e3)], _0x2b2b20[_0x1a441f(0x201)] = _0x2283c6, _0x2b2b20[_0x1a441f(0x1f7)] = JSON[_0x1a441f(0x206)](_0x5138a7[0x0][_0x1a441f(0x1f7)]), _0x47d9dd(); } } catch (_0x3d6237) { console[_0x1a441f(0x20b)]({ 'err': _0x3d6237, 'msg': _0x1a441f(0x204) }); } }, 'checkdall': async (_0x479ccd, _0x1632d1, _0x2de66f) => { const _0x49c2a1 = _0x15d5b1; try { const _0x17e257 = await promisemysql['query'](_0x49c2a1(0x1f5) + _0x479ccd[_0x49c2a1(0x20c)][_0x49c2a1(0x20a)] + '\x27'), _0x4d0e9a = await promisemysql[_0x49c2a1(0x205)]('SELECT\x20*\x20FROM\x20web'); if (!_0x4d0e9a[0x0]['openai_key']) return _0x1632d1[_0x49c2a1(0x1f8)]({ 'msg': 'There\x20is\x20keys\x20issue\x20by\x20the\x20admin\x20side' }); if (!_0x17e257[0x0][_0x49c2a1(0x1f7)] || _0x17e257[_0x49c2a1(0x1e5)] < 0x1) return _0x1632d1[_0x49c2a1(0x1f8)]({ 'msg': 'No\x20plan\x20found\x20please\x20get\x20one.' }); else { const _0x4e3ed3 = parseInt(_0x17e257[0x0][_0x49c2a1(0x1fd)]); if (!_0x4e3ed3 || _0x4e3ed3 < 0x1) return _0x1632d1[_0x49c2a1(0x1f8)]({ 'msg': _0x49c2a1(0x1f3) }); else _0x479ccd[_0x49c2a1(0x1e3)] = _0x4d0e9a[0x0][_0x49c2a1(0x1e3)], _0x479ccd[_0x49c2a1(0x203)] = _0x4e3ed3, _0x479ccd[_0x49c2a1(0x1f7)] = JSON[_0x49c2a1(0x206)](_0x17e257[0x0]['plan']), _0x2de66f(); } } catch (_0x4fa81f) { console[_0x49c2a1(0x20b)]({ 'err': _0x4fa81f, 'msg': 'check\x20hit\x20error' }); } }, 'checkwhatsapp': async (_0x19abb9, _0x4a1c43, _0xe74ae6) => { const _0x5b2236 = _0x15d5b1; try { const _0x56a87e = await promisemysql[_0x5b2236(0x205)](_0x5b2236(0x1f5) + _0x19abb9[_0x5b2236(0x20c)][_0x5b2236(0x20a)] + '\x27\x20'), _0x29b789 = await promisemysql[_0x5b2236(0x205)](_0x5b2236(0x209)); if (!_0x29b789[0x0][_0x5b2236(0x1e3)]) return _0x4a1c43[_0x5b2236(0x1f8)]({ 'msg': _0x5b2236(0x213) }); if (!_0x56a87e[0x0][_0x5b2236(0x1f7)] || _0x56a87e['length'] < 0x1) return _0x4a1c43['json']({ 'msg': _0x5b2236(0x1ea) }); else { const _0x1012a0 = parseInt(_0x56a87e[0x0]['word_left']); if (!_0x1012a0 || _0x1012a0 < 0x1) return _0x4a1c43['json']({ 'msg': _0x5b2236(0x200) }); else { _0x19abb9[_0x5b2236(0x1e3)] = _0x29b789[0x0]['openai_key'], _0x19abb9[_0x5b2236(0x201)] = _0x1012a0, _0x19abb9['plan'] = JSON[_0x5b2236(0x206)](_0x56a87e[0x0][_0x5b2236(0x1f7)]); if (!_0x19abb9[_0x5b2236(0x1f7)][_0x5b2236(0x1e8)] || parseInt(_0x19abb9['plan']?.[_0x5b2236(0x1e8)]) < 0x1) return _0x4a1c43[_0x5b2236(0x1f8)]({ 'msg': _0x5b2236(0x215) }); _0xe74ae6(); } } } catch (_0x186eea) { console[_0x5b2236(0x20b)]({ 'err': _0x186eea, 'msg': 'check\x20hit\x20error' }); } } };