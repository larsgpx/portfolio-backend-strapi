'use strict';

/**
 * my-information service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-information.my-information');
