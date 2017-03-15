'use strict';
const isRoot = require('is-root');
const isAdmin = require('is-admin');

module.exports = () => process.platform === 'win32' ? isAdmin() : Promise.resolve().then(() => isRoot());
