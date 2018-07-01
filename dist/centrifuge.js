(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Centrifuge", [], factory);
	else if(typeof exports === 'object')
		exports["Centrifuge"] = factory();
	else
		root["Centrifuge"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centrifuge = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

var _subscription = __webpack_require__(11);

var _subscription2 = _interopRequireDefault(_subscription);

var _json = __webpack_require__(12);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _errorTimeout = 'timeout';

var Centrifuge = exports.Centrifuge = function (_EventEmitter) {
  _inherits(Centrifuge, _EventEmitter);

  function Centrifuge(url, options) {
    _classCallCheck(this, Centrifuge);

    var _this = _possibleConstructorReturn(this, (Centrifuge.__proto__ || Object.getPrototypeOf(Centrifuge)).call(this));

    _this._url = url;
    _this._sockjs = null;
    _this._isSockjs = false;
    _this._binary = false;
    _this._methodType = null;
    _this._pushType = null;
    _this._encoder = null;
    _this._decoder = null;
    _this._status = 'disconnected';
    _this._reconnect = true;
    _this._reconnecting = false;
    _this._transport = null;
    _this._transportName = null;
    _this._transportClosed = true;
    _this._messageId = 0;
    _this._clientID = null;
    _this._expires = false;
    _this._subs = {};
    _this._lastPubUID = {};
    _this._messages = [];
    _this._isBatching = false;
    _this._isSubscribeBatching = false;
    _this._privateChannels = {};
    _this._numRefreshFailed = 0;
    _this._refreshTimeout = null;
    _this._pingInterval = null;
    _this._pongTimeout = null;
    _this._subRefreshTimeouts = {};
    _this._retries = 0;
    _this._callbacks = {};
    _this._latency = null;
    _this._latencyStart = null;
    _this._connectData = null;
    _this._token = null;
    _this._config = {
      debug: false,
      sockjs: null,
      promise: null,
      retry: 1000,
      maxRetry: 20000,
      timeout: 5000,
      resubscribe: true,
      ping: true,
      pingInterval: 30000,
      pongWaitTimeout: 5000,
      privateChannelPrefix: '$',
      onTransportClose: null,
      sockjsServer: null,
      sockjsTransports: ['websocket', 'xdr-streaming', 'xhr-streaming', 'eventsource', 'iframe-eventsource', 'iframe-htmlfile', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'],
      refreshEndpoint: '/centrifuge/refresh',
      refreshHeaders: {},
      refreshParams: {},
      refreshData: {},
      refreshAttempts: null,
      refreshInterval: 1000,
      onRefreshFailed: null,
      onRefresh: null,
      subscribeEndpoint: '/centrifuge/subscribe',
      subscribeHeaders: {},
      subscribeParams: {},
      subRefreshInterval: 1000,
      onPrivateSubscribe: null
    };
    _this._configure(options);
    return _this;
  }

  _createClass(Centrifuge, [{
    key: 'setToken',
    value: function setToken(token) {
      this._token = token;
    }
  }, {
    key: 'setConnectData',
    value: function setConnectData(data) {
      this._connectData = data;
    }
  }, {
    key: '_ajax',
    value: function _ajax(url, params, headers, data, callback) {
      var _this2 = this;

      var query = '';
      this._debug('sending AJAX request to', url);

      var xhr = global.XMLHttpRequest ? new global.XMLHttpRequest() : new global.ActiveXObject('Microsoft.XMLHTTP');

      for (var i in params) {
        if (params.hasOwnProperty(i)) {
          if (query.length > 0) {
            query += '&';
          }
          query += encodeURIComponent(i) + '=' + encodeURIComponent(params[i]);
        }
      }
      if (query.length > 0) {
        query = '?' + query;
      }
      xhr.open('POST', url + query, true);
      if ('withCredentials' in xhr) {
        xhr.withCredentials = true;
      }

      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-Type', 'application/json');
      for (var headerName in headers) {
        if (headers.hasOwnProperty(headerName)) {
          xhr.setRequestHeader(headerName, headers[headerName]);
        }
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var _data = void 0,
                parsed = false;
            try {
              _data = JSON.parse(xhr.responseText);
              parsed = true;
            } catch (e) {
              callback(true, 'JSON returned was invalid, yet status code was 200. Data was: ' + xhr.responseText);
            }
            if (parsed) {
              // prevents double execution.
              callback(false, _data);
            }
          } else {
            _this2._log("Couldn't get auth info from application", xhr.status);
            callback(true, 'wrong status code ' + xhr.status);
          }
        }
      };

      setTimeout(function () {
        return xhr.send(JSON.stringify(data));
      }, 20);
      return xhr;
    }
  }, {
    key: '_log',
    value: function _log() {
      (0, _utils.log)('info', arguments);
    }
  }, {
    key: '_debug',
    value: function _debug() {
      if (this._config.debug === true) {
        (0, _utils.log)('debug', arguments);
      }
    }
  }, {
    key: '_websocketSupported',
    value: function _websocketSupported() {
      return !(typeof WebSocket !== 'function' && (typeof WebSocket === 'undefined' ? 'undefined' : _typeof(WebSocket)) !== 'object');
    }
  }, {
    key: '_setFormat',
    value: function _setFormat(format) {
      if (this._formatOverride(format)) {
        return;
      }
      if (format === 'protobuf') {
        throw new Error('not implemented by JSON only Centrifuge client – use client with Protobuf');
      }
      this._binary = false;
      this._methodType = _json.JsonMethodType;
      this._pushType = _json.JsonPushType;
      this._encoder = new _json.JsonEncoder();
      this._decoder = new _json.JsonDecoder();
    }
  }, {
    key: '_formatOverride',
    value: function _formatOverride(format) {
      return false;
    }
  }, {
    key: '_configure',
    value: function _configure(configuration) {
      if (!('Promise' in global)) {
        throw new Error('Promise polyfill required');
      }

      Object.assign(this._config, configuration || {});
      this._debug('centrifuge config', this._config);

      if (!this._url) {
        throw new Error('url required');
      }

      if ((0, _utils.startsWith)(this._url, 'ws') && this._url.indexOf('format=protobuf') > -1) {
        this._setFormat('protobuf');
      } else {
        this._setFormat('json');
      }

      if ((0, _utils.startsWith)(this._url, 'http')) {
        this._debug('client will try to connect to SockJS endpoint');
        if (this._config.sockjs !== null) {
          this._debug('SockJS explicitly provided in options');
          this._sockjs = this._config.sockjs;
        } else {
          if (typeof global.SockJS === 'undefined') {
            throw new Error('SockJS not found, use ws:// in url or include SockJS');
          }
          this._debug('use globally defined SockJS');
          this._sockjs = global.SockJS;
        }
      } else {
        this._debug('client will connect to websocket endpoint');
      }
    }
  }, {
    key: '_setStatus',
    value: function _setStatus(newStatus) {
      if (this._status !== newStatus) {
        this._debug('Status', this._status, '->', newStatus);
        this._status = newStatus;
      }
    }
  }, {
    key: '_isDisconnected',
    value: function _isDisconnected() {
      return this._status === 'disconnected';
    }
  }, {
    key: '_isConnecting',
    value: function _isConnecting() {
      return this._status === 'connecting';
    }
  }, {
    key: '_isConnected',
    value: function _isConnected() {
      return this._status === 'connected';
    }
  }, {
    key: '_nextMessageId',
    value: function _nextMessageId() {
      return ++this._messageId;
    }
  }, {
    key: '_resetRetry',
    value: function _resetRetry() {
      this._debug('reset retries count to 0');
      this._retries = 0;
    }
  }, {
    key: '_getRetryInterval',
    value: function _getRetryInterval() {
      var interval = (0, _utils.backoff)(this._retries, this._config.retry, this._config.maxRetry);

      this._retries += 1;
      return interval;
    }
  }, {
    key: '_clearConnectedState',
    value: function _clearConnectedState(reconnect) {
      this._clientID = null;

      // fire errbacks of registered outgoing calls.
      for (var id in this._callbacks) {
        if (this._callbacks.hasOwnProperty(id)) {
          var callbacks = this._callbacks[id];
          clearTimeout(callbacks.timeout);
          var errback = callbacks.errback;
          if (!errback) {
            continue;
          }
          errback(this._createErrorObject('disconnected'));
        }
      }
      this._callbacks = {};

      // fire unsubscribe events
      for (var channel in this._subs) {
        if (this._subs.hasOwnProperty(channel)) {
          var sub = this._subs[channel];

          if (reconnect) {
            if (sub._isSuccess()) {
              sub._triggerUnsubscribe();
              sub._unsubscribedAt = new Date();
            }
            sub._setSubscribing();
          } else {
            sub._setUnsubscribed();
          }
        }
      }

      // clear refresh timer
      if (this._refreshTimeout !== null) {
        clearTimeout(this._refreshTimeout);
        this._refreshTimeout = null;
      }

      // clear sub refresh timers
      for (var _channel in this._subRefreshTimeouts) {
        if (this._subRefreshTimeouts.hasOwnProperty(_channel) && this._subRefreshTimeouts[_channel] !== null) {
          clearTimeout(this._subRefreshTimeouts[_channel]);
          this._subRefreshTimeouts[_channel] = null;
        }
      }
      this._subRefreshTimeouts = {};

      if (!this._config.resubscribe || !this._reconnect) {
        // completely clear connected state
        this._subs = {};
      }
    }
  }, {
    key: '_transportSend',
    value: function _transportSend(commands) {
      if (!commands.length) {
        return;
      }
      if (!this._transport) {
        throw new Error('transport not connected');
      }
      this._transport.send(this._encoder.encodeCommands(commands));
    }
  }, {
    key: '_setupTransport',
    value: function _setupTransport() {
      var _this3 = this;

      this._isSockjs = false;

      // detect transport to use - SockJS or Websocket
      if (this._sockjs !== null) {
        var sockjsOptions = {
          transports: this._config.sockjsTransports
        };

        if (this._config.sockjsServer !== null) {
          sockjsOptions.server = this._config.sockjsServer;
        }
        this._isSockjs = true;
        this._transport = new this._sockjs(this._url, null, sockjsOptions);
      } else {
        if (!this._websocketSupported()) {
          this._debug('No Websocket support and no SockJS configured, can not connect');
          return;
        }
        this._transport = new WebSocket(this._url);
        if (this._binary === true) {
          this._transport.binaryType = 'arraybuffer';
        }
      }

      this._transport.onopen = function () {
        _this3._transportClosed = false;

        if (_this3._isSockjs) {
          _this3._transportName = 'sockjs-' + _this3._transport.transport;
          _this3._transport.onheartbeat = function () {
            return _this3._restartPing();
          };
        } else {
          _this3._transportName = 'websocket';
        }

        // Can omit method here due to zero value.
        var msg = {
          // method: this._methodType.CONNECT
        };

        if (_this3._token || _this3._connectData) {
          msg.params = {};
        }

        if (_this3._token) {
          msg.params.token = _this3._token;
        }

        if (_this3._connectData) {
          msg.params.data = _this3._connectData;
        }

        _this3._latencyStart = new Date();
        _this3._call(msg).then(function (result) {
          _this3._connectResponse(_this3._decoder.decodeCommandResult(_this3._methodType.CONNECT, result));
        }, function (err) {
          if (err.code === 109) {
            // token expired.
            _this3._expires = true;
          }
          _this3._disconnect('connect error', true);
        });
      };

      this._transport.onerror = function (error) {
        _this3._debug('transport level error', error);
      };

      this._transport.onclose = function (closeEvent) {
        _this3._transportClosed = true;
        var reason = 'connection closed';
        var needReconnect = true;

        if (closeEvent && 'reason' in closeEvent && closeEvent.reason) {
          try {
            var advice = JSON.parse(closeEvent.reason);
            _this3._debug('reason is an advice object', advice);
            reason = advice.reason;
            needReconnect = advice.reconnect;
          } catch (e) {
            reason = closeEvent.reason;
            _this3._debug('reason is a plain string', reason);
          }
        }

        // onTransportClose callback should be executed every time transport was closed.
        // This can be helpful to catch failed connection events (because our disconnect
        // event only called once and every future attempts to connect do not fire disconnect
        // event again).
        if (_this3._config.onTransportClose !== null) {
          _this3._config.onTransportClose({
            event: closeEvent,
            reason: reason,
            reconnect: needReconnect
          });
        }

        _this3._disconnect(reason, needReconnect);

        if (_this3._reconnect === true) {
          _this3._reconnecting = true;
          var interval = _this3._getRetryInterval();

          _this3._debug('reconnect after ' + interval + ' milliseconds');
          setTimeout(function () {
            if (_this3._reconnect === true) {
              if (_this3._expires) {
                _this3._refresh();
              } else {
                _this3._connect();
              }
            }
          }, interval);
        }
      };

      this._transport.onmessage = function (event) {
        var replies = _this3._decoder.decodeReplies(event.data);
        for (var i in replies) {
          if (replies.hasOwnProperty(i)) {
            _this3._dispatchReply(replies[i]);
          }
        }
        _this3._restartPing();
      };
    }
  }, {
    key: 'rpc',
    value: function rpc(data) {
      var _this4 = this;

      var msg = {
        method: this._methodType.RPC,
        params: {
          data: data
        }
      };
      return this._call(msg).then(function (result) {
        return _this4._decoder.decodeCommandResult(_this4._methodType.RPC, result);
      });
    }
  }, {
    key: 'send',
    value: function send(data) {
      var msg = {
        method: this._methodType.SEND,
        params: {
          data: data
        }
      };

      return this._callAsync(msg);
    }
  }, {
    key: '_callAsync',
    value: function _callAsync(msg) {
      this._addMessage(msg, true);
    }
  }, {
    key: '_call',
    value: function _call(msg) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var id = _this5._addMessage(msg);
        _this5._registerCall(id, resolve, reject);
      });
    }
  }, {
    key: '_connect',
    value: function _connect() {
      if (this.isConnected()) {
        this._debug('connect called when already connected');
        return;
      }
      if (this._status === 'connecting') {
        return;
      }

      this._debug('start connecting');
      this._setStatus('connecting');
      this._clientID = null;
      this._reconnect = true;
      this._setupTransport();
    }
  }, {
    key: '_disconnect',
    value: function _disconnect(reason, shouldReconnect) {

      if (this._isDisconnected()) {
        return;
      }

      this._debug('disconnected:', reason, shouldReconnect);

      var reconnect = shouldReconnect || false;

      if (reconnect === false) {
        this._reconnect = false;
      }

      this._clearConnectedState(reconnect);

      if (!this._isDisconnected()) {
        this._setStatus('disconnected');
        if (this._refreshTimeout) {
          clearTimeout(this._refreshTimeout);
          this._refreshTimeout = null;
        }
        if (this._reconnecting === false) {
          this.emit('disconnect', {
            reason: reason,
            reconnect: reconnect
          });
        }
      }

      if (!this._transportClosed) {
        this._transport.close();
      }
    }
  }, {
    key: '_refreshFailed',
    value: function _refreshFailed() {
      this._numRefreshFailed = 0;
      if (!this._isDisconnected()) {
        this._disconnect('refresh failed', false);
      }
      if (this._config.onRefreshFailed !== null) {
        this._config.onRefreshFailed();
      }
    }
  }, {
    key: '_refresh',
    value: function _refresh() {
      var _this6 = this;

      // ask application for new connection token.
      this._debug('refresh token');

      if (this._config.refreshAttempts === 0) {
        this._debug('refresh attempts set to 0, do not send refresh request at all');
        this._refreshFailed();
        return;
      }

      if (this._refreshTimeout !== null) {
        clearTimeout(this._refreshTimeout);
        this._refreshTimeout = null;
      }

      var cb = function cb(error, data) {
        if (error === true) {
          // We don't perform any connection status related actions here as we are
          // relying on server that must close connection eventually.
          _this6._debug('error refreshing connection token', data);
          if (!_this6._reconnecting) {
            _this6._numRefreshFailed++;
          }
          if (_this6._refreshTimeout !== null) {
            clearTimeout(_this6._refreshTimeout);
            _this6._refreshTimeout = null;
          }
          if (_this6._config.refreshAttempts !== null && _this6._numRefreshFailed >= _this6._config.refreshAttempts) {
            _this6._refreshFailed();
            return;
          }
          if (!_this6._reconnecting) {
            var interval = _this6._config.refreshInterval + Math.round(Math.random() * 1000);
            _this6._refreshTimeout = setTimeout(function () {
              return _this6._refresh();
            }, interval);
          }
          return;
        }
        _this6._numRefreshFailed = 0;
        _this6._token = data.token;
        if (!_this6._token) {
          _this6._refreshFailed();
          return;
        }
        if (_this6._isDisconnected() && _this6._reconnect) {
          _this6._debug('token refreshed, connect from scratch');
          _this6._connect();
        } else {
          _this6._debug('send refreshed token');
          var msg = {
            method: _this6._methodType.REFRESH,
            params: {
              token: _this6._token
            }
          };
          _this6._call(msg).then(function (result) {
            _this6._refreshResponse(_this6._decoder.decodeCommandResult(_this6._methodType.REFRESH, result));
          }, function (err) {
            _this6._refreshError(err);
          });
        }
      };

      if (this._config.onRefresh !== null) {
        var context = {};
        this._config.onRefresh(context, cb);
      } else {
        this._ajax(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
      }
    }
  }, {
    key: '_refreshError',
    value: function _refreshError(err) {
      var _this7 = this;

      this._debug('refresh error', err);
      if (this._refreshTimeout) {
        clearTimeout(this._refreshTimeout);
        this._refreshTimeout = null;
      }
      var interval = this._config.refreshInterval + Math.round(Math.random() * 1000);
      this._refreshTimeout = setTimeout(function () {
        return _this7._refresh();
      }, interval);
    }
  }, {
    key: '_refreshResponse',
    value: function _refreshResponse(result) {
      var _this8 = this;

      if (this._refreshTimeout) {
        clearTimeout(this._refreshTimeout);
        this._refreshTimeout = null;
      }
      if (result.expires) {
        this._expires = true;
        this._clientID = result.client;
        this._refreshTimeout = setTimeout(function () {
          return _this8._refresh();
        }, result.ttl * 1000);
      } else {
        this._expires = false;
      }
    }
  }, {
    key: '_subRefresh',
    value: function _subRefresh(channel) {
      var _this9 = this;

      this._debug('refresh subscription token for channel', channel);

      if (this._subRefreshTimeouts[channel] !== undefined) {
        clearTimeout(this._subRefreshTimeouts[channel]);
        delete this._subRefreshTimeouts[channel];
      } else {
        return;
      }

      var cb = function cb(error, data) {
        if (error === true) {
          return;
        }

        var channelsData = {};
        if (data.channels) {
          for (var i in data.channels) {
            var channelData = data.channels[i];
            if (!channelData.channel) {
              continue;
            }
            channelsData[channelData.channel] = channelData.token;
          }
        }

        var token = channelsData[channel];
        if (!token) {
          return;
        }
        var msg = {
          method: _this9._methodType.SUB_REFRESH,
          params: {
            channel: channel,
            token: token
          }
        };

        var sub = _this9._getSub(channel);
        if (sub === null) {
          return;
        }

        _this9._call(msg).then(function (result) {
          _this9._subRefreshResponse(channel, _this9._decoder.decodeCommandResult(_this9._methodType.SUB_REFRESH, result));
        }, function (err) {
          _this9._subRefreshError(channel, err);
        });
      };

      var data = {
        client: this._clientID,
        channels: [channel]
      };

      if (this._config.onPrivateSubscribe !== null) {
        this._config.onPrivateSubscribe({
          data: data
        }, cb);
      } else {
        this._ajax(this._config.subscribeEndpoint, this._config.subscribeParams, this._config.subscribeHeaders, data, cb);
      }
    }
  }, {
    key: '_subRefreshError',
    value: function _subRefreshError(channel, err) {
      var _this10 = this;

      this._debug('subscription refresh error', channel, err);
      if (this._subRefreshTimeouts[channel] !== undefined) {
        clearTimeout(this._subRefreshTimeouts[channel]);
        delete this._subRefreshTimeouts[channel];
      }
      var sub = this._getSub(channel);
      if (sub === null) {
        return;
      }
      var jitter = Math.round(Math.random() * 1000);
      var subRefreshTimeout = setTimeout(function () {
        return _this10._subRefresh(channel);
      }, this._config.subRefreshInterval + jitter);
      this._subRefreshTimeouts[channel] = subRefreshTimeout;
      return;
    }
  }, {
    key: '_subRefreshResponse',
    value: function _subRefreshResponse(channel, result) {
      var _this11 = this;

      this._debug('subscription refresh success', channel);
      if (this._subRefreshTimeouts[channel] !== undefined) {
        clearTimeout(this._subRefreshTimeouts[channel]);
        delete this._subRefreshTimeouts[channel];
      }
      var sub = this._getSub(channel);
      if (sub === null) {
        return;
      }
      if (result.expires === true) {
        var subRefreshTimeout = setTimeout(function () {
          return _this11._subRefresh(channel);
        }, result.ttl * 1000);
        this._subRefreshTimeouts[channel] = subRefreshTimeout;
      }
      return;
    }
  }, {
    key: '_subscribe',
    value: function _subscribe(sub) {
      var _this12 = this;

      var channel = sub.channel;

      if (!(channel in this._subs)) {
        this._subs[channel] = sub;
      }

      if (!this.isConnected()) {
        // subscribe will be called later
        sub._setNew();
        return;
      }

      sub._setSubscribing();

      var msg = {
        method: this._methodType.SUBSCRIBE,
        params: {
          channel: channel
        }
      };

      // If channel name does not start with privateChannelPrefix - then we
      // can just send subscription message to Centrifuge. If channel name
      // starts with privateChannelPrefix - then this is a private channel
      // and we should ask web application backend for permission first.
      if ((0, _utils.startsWith)(channel, this._config.privateChannelPrefix)) {
        // private channel
        if (this._isSubscribeBatching) {
          this._privateChannels[channel] = true;
        } else {
          this.startSubscribeBatching();
          this._subscribe(sub);
          this.stopSubscribeBatching();
        }
      } else {
        var recover = this._recover(sub);

        if (recover === true) {
          msg.params.recover = true;
          var last = this._getLastID(channel);
          if (last !== '') {
            msg.params.last = last;
          }
          var away = sub._getAway();
          if (away !== 0) {
            msg.params.away = away;
          }
        }

        this._call(msg).then(function (result) {
          _this12._subscribeResponse(channel, _this12._decoder.decodeCommandResult(_this12._methodType.SUBSCRIBE, result));
        }, function (err) {
          _this12._subscribeError(err);
        });
      }
    }
  }, {
    key: '_unsubscribe',
    value: function _unsubscribe(sub) {
      if (this.isConnected()) {
        // No need to unsubscribe in disconnected state - i.e. client already unsubscribed.
        this._addMessage({
          method: this._methodType.UNSUBSCRIBE,
          params: {
            channel: sub.channel
          }
        });
      }
    }
  }, {
    key: 'getSub',
    value: function getSub(channel) {
      return this._getSub(channel);
    }
  }, {
    key: '_getSub',
    value: function _getSub(channel) {
      var sub = this._subs[channel];
      if (!sub) {
        return null;
      }
      return sub;
    }
  }, {
    key: '_connectResponse',
    value: function _connectResponse(result) {
      var _this13 = this;

      this._reconnecting = false;
      this._resetRetry();

      if (this.isConnected()) {
        return;
      }

      if (this._latencyStart !== null) {
        this._latency = new Date().getTime() - this._latencyStart.getTime();
        this._latencyStart = null;
      }

      if (result.expires) {
        this._expires = true;
      } else {
        this._expires = false;
      }

      this._clientID = result.client;
      this._setStatus('connected');

      if (this._refreshTimeout) {
        clearTimeout(this._refreshTimeout);
      }

      if (this._expires) {
        this._refreshTimeout = setTimeout(function () {
          return _this13._refresh();
        }, result.ttl * 1000);
      }

      if (this._config.resubscribe) {
        this.startBatching();
        this.startSubscribeBatching();
        for (var channel in this._subs) {
          if (this._subs.hasOwnProperty(channel)) {
            var sub = this._subs[channel];
            if (sub._shouldResubscribe()) {
              this._subscribe(sub);
            }
          }
        }
        this.stopSubscribeBatching();
        this.stopBatching();
      }

      this._restartPing();

      var ctx = {
        client: result.client,
        transport: this._transportName,
        latency: this._latency
      };
      if (result.data) {
        ctx.data = result.data;
      }

      this.emit('connect', ctx);
    }
  }, {
    key: '_stopPing',
    value: function _stopPing() {
      if (this._pongTimeout !== null) {
        clearTimeout(this._pongTimeout);
        this._pongTimeout = null;
      }
      if (this._pingInterval !== null) {
        clearInterval(this._pingInterval);
        this._pingInterval = null;
      }
    }
  }, {
    key: '_startPing',
    value: function _startPing() {
      var _this14 = this;

      if (this._config.ping !== true || this._config.pingInterval <= 0) {
        return;
      }
      if (!this.isConnected()) {
        return;
      }

      this._pingInterval = setInterval(function () {
        if (!_this14.isConnected()) {
          _this14._stopPing();
          return;
        }
        _this14.ping();
        _this14._pongTimeout = setTimeout(function () {
          _this14._disconnect('no ping', true);
        }, _this14._config.pongWaitTimeout);
      }, this._config.pingInterval);
    }
  }, {
    key: '_restartPing',
    value: function _restartPing() {
      this._stopPing();
      this._startPing();
    }
  }, {
    key: '_subscribeError',
    value: function _subscribeError(channel, error) {
      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      if (!sub._isSubscribing()) {
        return;
      }
      if (error.code === 0 && error.message === _errorTimeout) {
        // client side timeout.
        this._disconnect('timeout', true);
        return;
      }
      sub._setSubscribeError(error);
    }
  }, {
    key: '_subscribeResponse',
    value: function _subscribeResponse(channel, result) {
      var _this15 = this;

      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      if (!sub._isSubscribing()) {
        return;
      }

      if (result.expired === true) {
        sub._setSubscribeError(this._createErrorObject('token expired'));
        return;
      }

      var recovered = false;
      if ('recovered' in result) {
        recovered = result.recovered;
      }
      sub._setSubscribeSuccess(recovered);

      var pubs = result.publications;

      if (pubs && pubs.length > 0) {
        // handle missed pubs.
        pubs = pubs.reverse();
        for (var i in pubs) {
          if (pubs.hasOwnProperty(i)) {
            this._handlePublication(channel, pubs[i]);
          }
        }
      } else {
        if ('last' in result) {
          // no missed messages found so set last message id from result.
          this._lastPubUID[channel] = result.last;
        }
      }

      if (result.expires === true) {
        var subRefreshTimeout = setTimeout(function () {
          return _this15._subRefresh(channel);
        }, result.ttl * 1000);
        this._subRefreshTimeouts[channel] = subRefreshTimeout;
      }
    }
  }, {
    key: '_handleReply',
    value: function _handleReply(reply) {
      var id = reply.id;
      var result = reply.result;

      if (!(id in this._callbacks)) {
        return;
      }
      var callbacks = this._callbacks[id];
      clearTimeout(this._callbacks[id].timeout);
      delete this._callbacks[id];

      if (!(0, _utils.errorExists)(reply)) {
        var callback = callbacks.callback;
        if (!callback) {
          return;
        }
        callback(result);
      } else {
        var errback = callbacks.errback;
        if (!errback) {
          return;
        }
        errback(reply.error);
      }
    }
  }, {
    key: '_handleJoin',
    value: function _handleJoin(channel, join) {
      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      sub.emit('join', join);
    }
  }, {
    key: '_handleLeave',
    value: function _handleLeave(channel, leave) {
      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      sub.emit('leave', leave);
    }
  }, {
    key: '_handleUnsub',
    value: function _handleUnsub(channel, unsub) {
      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      sub.unsubscribe();
      if (unsub.resubscribe === true) {
        sub.subscribe();
      }
    }
  }, {
    key: '_handlePublication',
    value: function _handlePublication(channel, pub) {
      // keep last uid received from channel.
      this._lastPubUID[channel] = pub.uid;
      var sub = this._getSub(channel);
      if (!sub) {
        return;
      }
      sub.emit('publish', pub);
    }
  }, {
    key: '_handleMessage',
    value: function _handleMessage(message) {
      this.emit('message', message.data);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(data) {
      var push = this._decoder.decodePush(data);
      var type = 0;
      if ('type' in push) {
        type = push['type'];
      }
      var channel = push.channel;

      if (type === this._pushType.PUBLICATION) {
        var pub = this._decoder.decodePushData(this._pushType.PUBLICATION, push.data);
        this._handlePublication(channel, pub);
      } else if (type === this._pushType.MESSAGE) {
        var message = this._decoder.decodePushData(this._pushType.MESSAGE, push.data);
        this._handleMessage(message);
      } else if (type === this._pushType.JOIN) {
        var join = this._decoder.decodePushData(this._pushType.JOIN, push.data);
        this._handleJoin(channel, join);
      } else if (type === this._pushType.LEAVE) {
        var leave = this._decoder.decodePushData(this._pushType.LEAVE, push.data);
        this._handleLeave(channel, leave);
      } else if (type === this._pushType.UNSUB) {
        var unsub = this._decoder.decodePushData(this._pushType.UNSUB, push.data);
        this._handleUnsub(channel, unsub);
      }
    }
  }, {
    key: '_dispatchReply',
    value: function _dispatchReply(reply) {
      if (reply === undefined || reply === null) {
        this._debug('dispatch: got undefined or null reply');
        return;
      }

      var id = reply.id;

      if (id && id > 0) {
        this._handleReply(reply);
      } else {
        this._handlePush(reply.result);
      }
    }
  }, {
    key: '_flush',
    value: function _flush() {
      var messages = this._messages.slice(0);
      this._messages = [];
      this._transportSend(messages);
    }
  }, {
    key: '_ping',
    value: function _ping() {
      this._addMessage({
        method: this._methodType.PING
      });
    }
  }, {
    key: '_recover',
    value: function _recover(sub) {
      return sub._unsubscribedAt !== null;
    }
  }, {
    key: '_getLastID',
    value: function _getLastID(channel) {
      var lastUID = this._lastPubUID[channel];

      if (lastUID) {
        this._debug('last uid found and sent for channel', channel);
        return lastUID;
      }
      this._debug('no last uid found for channel', channel);
      return '';
    }
  }, {
    key: '_createErrorObject',
    value: function _createErrorObject(message, code) {
      var errObject = {
        message: message,
        code: code || 0
      };

      return errObject;
    }
  }, {
    key: '_registerCall',
    value: function _registerCall(id, callback, errback) {
      var _this16 = this;

      this._callbacks[id] = {
        callback: callback,
        errback: errback,
        timeout: null
      };
      this._callbacks[id].timeout = setTimeout(function () {
        delete _this16._callbacks[id];
        if ((0, _utils.isFunction)(errback)) {
          errback(_this16._createErrorObject(_errorTimeout));
        }
      }, this._config.timeout);
    }
  }, {
    key: '_addMessage',
    value: function _addMessage(message, async) {
      var id = void 0;
      if (!async) {
        id = this._nextMessageId();
        message.id = id;
      }
      if (this._isBatching === true) {
        this._messages.push(message);
      } else {
        this._transportSend([message]);
      }
      if (!async) {
        return id;
      }
      return 0;
    }
  }, {
    key: 'isConnected',
    value: function isConnected() {
      return this._isConnected();
    }
  }, {
    key: 'connect',
    value: function connect() {
      this._connect();
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      this._disconnect('client', false);
    }
  }, {
    key: 'ping',
    value: function ping() {
      return this._ping();
    }
  }, {
    key: 'startBatching',
    value: function startBatching() {
      // start collecting messages without sending them to Centrifuge until flush
      // method called
      this._isBatching = true;
    }
  }, {
    key: 'stopBatching',
    value: function stopBatching() {
      this._isBatching = false;
      this._flush();
    }
  }, {
    key: 'startSubscribeBatching',
    value: function startSubscribeBatching() {
      // start collecting private channels to create bulk authentication
      // request to subscribeEndpoint when stopSubscribeBatching will be called
      this._isSubscribeBatching = true;
    }
  }, {
    key: 'stopSubscribeBatching',
    value: function stopSubscribeBatching() {
      var _this17 = this;

      // create request to subscribeEndpoint with collected private channels
      // to ask if this client can subscribe on each channel
      this._isSubscribeBatching = false;
      var authChannels = this._privateChannels;

      this._privateChannels = {};
      var channels = [];

      for (var channel in authChannels) {
        if (authChannels.hasOwnProperty(channel)) {
          var sub = this._getSub(channel);

          if (!sub) {
            continue;
          }
          channels.push(channel);
        }
      }

      if (channels.length === 0) {
        return;
      }

      var data = {
        client: this._clientID,
        channels: channels
      };

      var cb = function cb(error, data) {
        if (error === true) {
          _this17._debug('authorization request failed');
          for (var i in channels) {
            if (channels.hasOwnProperty(i)) {
              var _channel2 = channels[i];
              _this17._subscribeError(_channel2, _this17._createErrorObject('authorization request failed'));
            }
          }
          return;
        }

        var channelsData = {};
        if (data.channels) {
          for (var _i in data.channels) {
            var channelData = data.channels[_i];
            if (!channelData.channel) {
              continue;
            }
            channelsData[channelData.channel] = channelData.token;
          }
        }

        // try to send all subscriptions in one request.
        var batch = false;

        if (!_this17._isBatching) {
          _this17.startBatching();
          batch = true;
        }

        for (var _i2 in channels) {
          if (channels.hasOwnProperty(_i2)) {
            var _ret = function () {
              var channel = channels[_i2];
              var token = channelsData[channel];

              if (!token) {
                // subscription:error
                _this17._subscribeError(channel, _this17._createErrorObject('channel token not provided'));
                return 'continue';
              } else {
                var msg = {
                  method: _this17._methodType.SUBSCRIBE,
                  params: {
                    channel: channel,
                    token: token
                  }
                };

                var _sub = _this17._getSub(channel);
                if (_sub === null) {
                  return 'continue';
                }

                var recover = _this17._recover(_sub);

                if (recover === true) {
                  msg.params.recover = true;
                  var last = _this17._getLastID(channel);
                  if (last !== '') {
                    msg.params.last = last;
                  }
                  var away = _sub._getAway();
                  if (away !== 0) {
                    msg.params.away = away;
                  }
                }
                _this17._call(msg).then(function (result) {
                  _this17._subscribeResponse(channel, _this17._decoder.decodeCommandResult(_this17._methodType.SUBSCRIBE, result));
                }, function (err) {
                  _this17._subscribeError(channel, err);
                });
              }
            }();

            if (_ret === 'continue') continue;
          }
        }

        if (batch) {
          _this17.stopBatching();
        }
      };

      if (this._config.onPrivateSubscribe !== null) {
        this._config.onPrivateSubscribe({
          data: data
        }, cb);
      } else {
        this._ajax(this._config.subscribeEndpoint, this._config.subscribeParams, this._config.subscribeHeaders, data, cb);
      }
    }
  }, {
    key: 'subscribe',
    value: function subscribe(channel, events) {
      if (arguments.length < 1) {
        throw new Error('Illegal arguments number: required 1, got ' + arguments.length);
      }
      if (!(0, _utils.isString)(channel)) {
        throw new Error('Illegal argument type: channel must be a string');
      }
      if (!this._config.resubscribe && !this.isConnected()) {
        throw new Error('Can not only subscribe in connected state when resubscribe option is off');
      }

      var currentSub = this._getSub(channel);

      if (currentSub !== null) {
        currentSub._setEvents(events);
        if (currentSub._isUnsubscribed()) {
          currentSub.subscribe();
        }
        return currentSub;
      }
      var sub = new _subscription2.default(this, channel, events);
      this._subs[channel] = sub;
      sub.subscribe();
      return sub;
    }
  }]);

  return Centrifuge;
}(_events2.default);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _STATE_NEW = 0;
var _STATE_SUBSCRIBING = 1;
var _STATE_SUCCESS = 2;
var _STATE_ERROR = 3;
var _STATE_UNSUBSCRIBED = 4;

var Subscription = function (_EventEmitter) {
  _inherits(Subscription, _EventEmitter);

  function Subscription(centrifuge, channel, events) {
    _classCallCheck(this, Subscription);

    var _this = _possibleConstructorReturn(this, (Subscription.__proto__ || Object.getPrototypeOf(Subscription)).call(this));

    _this.channel = channel;
    _this._centrifuge = centrifuge;
    _this._status = _STATE_NEW;
    _this._error = null;
    _this._isResubscribe = false;
    _this._recovered = false;
    _this._ready = false;
    _this._subscriptionPromise = null;
    _this._noResubscribe = false;
    _this._unsubscribedAt = null;
    _this._setEvents(events);
    _this._initializePromise();
    return _this;
  }

  _createClass(Subscription, [{
    key: '_initializePromise',
    value: function _initializePromise() {
      var _this2 = this;

      // this helps us to wait until subscription will successfully
      // subscribe and call actions such as presence, history etc in
      // synchronous way.
      this._ready = false;

      this._subscriptionPromise = new Promise(function (resolve, reject) {
        _this2._resolve = function (value) {
          _this2._ready = true;
          resolve(value);
        };
        _this2._reject = function (err) {
          _this2._ready = true;
          reject(err);
        };
      });
    }
  }, {
    key: '_getAway',
    value: function _getAway() {
      var now = new Date();
      return Math.round((now - this._unsubscribedAt) / 1000) + Math.round(this._centrifuge._config.timeout / 1000);
    }
  }, {
    key: '_setEvents',
    value: function _setEvents(events) {
      if (!events) {
        return;
      }
      if ((0, _utils.isFunction)(events)) {
        // events is just a function to handle publication received from channel.
        this.on('publish', events);
      } else if (Object.prototype.toString.call(events) === Object.prototype.toString.call({})) {
        var knownEvents = ['publish', 'join', 'leave', 'unsubscribe', 'subscribe', 'error'];
        for (var i = 0, l = knownEvents.length; i < l; i++) {
          var ev = knownEvents[i];
          if (ev in events) {
            this.on(ev, events[ev]);
          }
        }
      }
    }
  }, {
    key: '_isNew',
    value: function _isNew() {
      return this._status === _STATE_NEW;
    }
  }, {
    key: '_isUnsubscribed',
    value: function _isUnsubscribed() {
      return this._status === _STATE_UNSUBSCRIBED;
    }
  }, {
    key: '_isSubscribing',
    value: function _isSubscribing() {
      return this._status === _STATE_SUBSCRIBING;
    }
  }, {
    key: '_isReady',
    value: function _isReady() {
      return this._status === _STATE_SUCCESS || this._status === _STATE_ERROR;
    }
  }, {
    key: '_isSuccess',
    value: function _isSuccess() {
      return this._status === _STATE_SUCCESS;
    }
  }, {
    key: '_isError',
    value: function _isError() {
      return this._status === _STATE_ERROR;
    }
  }, {
    key: '_setNew',
    value: function _setNew() {
      this._status = _STATE_NEW;
    }
  }, {
    key: '_setSubscribing',
    value: function _setSubscribing() {
      if (this._ready === true) {
        // new promise for this subscription
        this._initializePromise();
        this._isResubscribe = true;
      }
      this._status = _STATE_SUBSCRIBING;
    }
  }, {
    key: '_setSubscribeSuccess',
    value: function _setSubscribeSuccess(recovered) {
      if (this._status === _STATE_SUCCESS) {
        return;
      }
      this._recovered = recovered;
      this._status = _STATE_SUCCESS;
      var successContext = this._getSubscribeSuccessContext(recovered);

      this._unsubscribedAt = null;
      this.emit('subscribe', successContext);
      this._resolve(successContext);
    }
  }, {
    key: '_setSubscribeError',
    value: function _setSubscribeError(err) {
      if (this._status === _STATE_ERROR) {
        return;
      }
      this._status = _STATE_ERROR;
      this._error = err;
      var errContext = this._getSubscribeErrorContext();

      this.emit('error', errContext);
      this._reject(errContext);
    }
  }, {
    key: '_triggerUnsubscribe',
    value: function _triggerUnsubscribe() {
      this.emit('unsubscribe', {
        channel: this.channel
      });
    }
  }, {
    key: '_setUnsubscribed',
    value: function _setUnsubscribed(noResubscribe) {
      if (this._status === _STATE_UNSUBSCRIBED) {
        return;
      }
      var needTrigger = this._status === _STATE_SUCCESS;
      this._status = _STATE_UNSUBSCRIBED;
      if (noResubscribe === true) {
        this._noResubscribe = true;
      }
      if (needTrigger) {
        this._triggerUnsubscribe();
      }
    }
  }, {
    key: '_shouldResubscribe',
    value: function _shouldResubscribe() {
      return !this._noResubscribe;
    }
  }, {
    key: '_getSubscribeSuccessContext',
    value: function _getSubscribeSuccessContext() {
      return {
        channel: this.channel,
        isResubscribe: this._isResubscribe,
        recovered: this._recovered
      };
    }
  }, {
    key: '_getSubscribeErrorContext',
    value: function _getSubscribeErrorContext() {
      var subscribeErrorContext = this._error;
      subscribeErrorContext.channel = this.channel;
      subscribeErrorContext.isResubscribe = this._isResubscribe;
      return subscribeErrorContext;
    }
  }, {
    key: 'ready',
    value: function ready(callback, errback) {
      if (this._ready) {
        if (this._isSuccess()) {
          callback(this._getSubscribeSuccessContext());
        } else {
          errback(this._getSubscribeErrorContext());
        }
      }
    }
  }, {
    key: 'subscribe',
    value: function subscribe() {
      if (this._status === _STATE_SUCCESS) {
        return;
      }
      this._centrifuge._subscribe(this);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      this._setUnsubscribed(true);
      this._unsubscribedAt = null;
      this._centrifuge._unsubscribe(this);
    }
  }, {
    key: '_methodCall',
    value: function _methodCall(message, type) {
      var _this3 = this;

      return this._subscriptionPromise.then(function () {
        return _this3._centrifuge._call(message);
      }).then(function (result) {
        return _this3._centrifuge._decoder.decodeCommandResult(type, result);
      });
    }
  }, {
    key: 'publish',
    value: function publish(data) {
      return this._methodCall({
        method: this._centrifuge._methodType.PUBLISH,
        params: {
          channel: this.channel,
          data: data
        }
      }, this._centrifuge._methodType.PUBLISH);
    }
  }, {
    key: 'presence',
    value: function presence() {
      return this._methodCall({
        method: this._centrifuge._methodType.PRESENCE,
        params: {
          channel: this.channel
        }
      }, this._centrifuge._methodType.PRESENCE);
    }
  }, {
    key: 'presenceStats',
    value: function presenceStats() {
      return this._methodCall({
        method: this._centrifuge._methodType.PRESENCE_STATS,
        params: {
          channel: this.channel
        }
      }, this._centrifuge._methodType.PRESENCE_STATS);
    }
  }, {
    key: 'history',
    value: function history() {
      return this._methodCall({
        method: this._centrifuge._methodType.HISTORY,
        params: {
          channel: this.channel
        }
      }, this._centrifuge._methodType.HISTORY);
    }
  }]);

  return Subscription;
}(_events2.default);

exports.default = Subscription;
module.exports = exports['default'];

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonMethodType = exports.JsonMethodType = {
  CONNECT: 0,
  SUBSCRIBE: 1,
  UNSUBSCRIBE: 2,
  PUBLISH: 3,
  PRESENCE: 4,
  PRESENCE_STATS: 5,
  HISTORY: 6,
  PING: 7,
  SEND: 8,
  RPC: 9,
  REFRESH: 10,
  SUB_REFRESH: 11
};

var JsonPushType = exports.JsonPushType = {
  PUBLICATION: 0,
  JOIN: 1,
  LEAVE: 2,
  UNSUB: 3,
  MESSAGE: 4
};

var JsonEncoder = exports.JsonEncoder = function () {
  function JsonEncoder() {
    _classCallCheck(this, JsonEncoder);
  }

  _createClass(JsonEncoder, [{
    key: 'encodeCommands',
    value: function encodeCommands(commands) {
      var encodedCommands = [];
      for (var i in commands) {
        if (commands.hasOwnProperty(i)) {
          encodedCommands.push(JSON.stringify(commands[i]));
        }
      }
      return encodedCommands.join('\n');
    }
  }]);

  return JsonEncoder;
}();

var JsonDecoder = exports.JsonDecoder = function () {
  function JsonDecoder() {
    _classCallCheck(this, JsonDecoder);
  }

  _createClass(JsonDecoder, [{
    key: 'decodeReplies',
    value: function decodeReplies(data) {
      var replies = [];
      var encodedReplies = data.split('\n');
      for (var i in encodedReplies) {
        if (encodedReplies.hasOwnProperty(i)) {
          if (!encodedReplies[i]) {
            continue;
          }
          var reply = JSON.parse(encodedReplies[i]);
          replies.push(reply);
        }
      }
      return replies;
    }
  }, {
    key: 'decodeCommandResult',
    value: function decodeCommandResult(methodType, data) {
      return data;
    }
  }, {
    key: 'decodePush',
    value: function decodePush(data) {
      return data;
    }
  }, {
    key: 'decodePushData',
    value: function decodePushData(pushType, data) {
      return data;
    }
  }]);

  return JsonDecoder;
}();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centrifuge = __webpack_require__(10);

exports.default = _centrifuge.Centrifuge;
module.exports = exports['default'];

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = startsWith;
exports.isString = isString;
exports.isFunction = isFunction;
exports.log = log;
exports.backoff = backoff;
exports.errorExists = errorExists;
function startsWith(value, prefix) {
  return value.lastIndexOf(prefix, 0) === 0;
};

function isString(value) {
  if (value === undefined || value === null) {
    return false;
  }
  return typeof value === 'string' || value instanceof String;
};

function isFunction(value) {
  if (value === undefined || value === null) {
    return false;
  }
  return typeof value === 'function';
};

function log(level, args) {
  if (global.console) {
    var logger = global.console[level];

    if (isFunction(logger)) {
      logger.apply(global.console, args);
    }
  }
};

function backoff(step, min, max) {
  var jitter = 0.5 * Math.random();
  var interval = Math.min(max, min * Math.pow(2, step + 1));

  return Math.floor((1 - jitter) * interval);
};

function errorExists(data) {
  return 'error' in data && data.error !== null;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })

/******/ });
});
//# sourceMappingURL=centrifuge.js.map