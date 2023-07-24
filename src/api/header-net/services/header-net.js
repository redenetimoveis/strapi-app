'use strict';

/**
 * header-net service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-net.header-net');
