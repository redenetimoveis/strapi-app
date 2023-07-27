'use strict';

/**
 * home-net router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-net.home-net');
