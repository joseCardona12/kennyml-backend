"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilio_phone_number = exports.secret = exports.name_db = exports.password_db = exports.user_db = exports.port_db = exports.host_db = exports.port = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
_a = process.env, _b = _a.PORT, exports.port = _b === void 0 ? "3002" : _b, _c = _a.HOST_DB, exports.host_db = _c === void 0 ? "localhost:3002" : _c, _d = _a.PORT_DB, exports.port_db = _d === void 0 ? "3003" : _d, _e = _a.USER_DB, exports.user_db = _e === void 0 ? "root" : _e, _f = _a.PASSWORD_DB, exports.password_db = _f === void 0 ? "" : _f, _g = _a.NAME_DB, exports.name_db = _g === void 0 ? "" : _g, _h = _a.SECRET, exports.secret = _h === void 0 ? "secret" : _h, exports.twilio_phone_number = _a.PHONE_NUMBER;
