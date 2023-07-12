'use strict';

/**
 * lgpd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lgpd.lgpd');
