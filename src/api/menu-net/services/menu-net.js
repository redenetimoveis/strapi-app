'use strict';

/**
 * menu-net service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::menu-net.menu-net');
