'use strict';
const isRoot = require('is-root');
const isAdmin = require('is-admin');

module.exports = async () => process.platform === 'win32' ? isAdmin() : isRoot();
