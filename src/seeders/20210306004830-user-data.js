'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [{
     firstName: 'Gefy Aqiilah',
     lastName: 'Aqshal',
     gender: 'M',
     bornDate: new Date(),
     address: 'Soreang, Kab. Bandung',
     phoneNumber: '08927483224',
     hashPassword: '$2b$10$olg1VEqDSbeg49xrKSdlKeJXF0qgps7jtOd2UflvGF3piIEksHCBK',
     email: 'gefyaqiilah26@gmail.com',
     createdAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
