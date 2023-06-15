'use strict';

/**
 * page1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page1.page1');
