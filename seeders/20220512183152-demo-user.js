'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        username: "Jaime Sánchez",
        password: "123456",
        email: "jaime.sc@gmail.com"
      },
      {
        username: "Erk Tingsvall",
        password: "654321",
        email: "erik.tingsvall@gmail.com"
      },
      {
        username: "Marcello Krell",
        password: "456789",
        email: "marcelo.krell@gmail.com"
      },
      {
        username: "Marc Molinuevo",
        password: "987654",
        email: "marc.molinuevo@gmail.com"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
