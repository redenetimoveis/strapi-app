'use strict';

/**
 * header-net router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header-net.header-net');
