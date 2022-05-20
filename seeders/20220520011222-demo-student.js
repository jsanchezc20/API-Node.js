'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('students', [
      {
        studentname: "Jaime Sánchez",
        password: "123456",
        email: "jaime.sc@gmail.com",
        phonenumber: 666111222,
        birthdate: "1975-05-10",
        adult: true,
      },
      {
        studentname: "Erk Tingsvall",
        password: "654321",
        email: "erik.tingsvall@gmail.com",
        phonenumber: 666999888,
        birthdate: "1994-01-01",
        adult: true,
      },
      {
        studentname: "Marcello Krell",
        password: "456789",
        email: "marcelo.krell@gmail.com",
        phonenumber: 777444999,
        birthdate: "2006-10-10",
        adult: false,
      },
      {
        studentname: "Marc Molinuevo",
        password: "987654",
        email: "marc.molinuevo@gmail.com",
        phonenumber: 777111555,
        birthdate: "1996-07-07",
        adult: true,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
