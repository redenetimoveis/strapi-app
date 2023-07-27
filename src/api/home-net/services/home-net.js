'use strict';

/**
 * home-net service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-net.home-net');
