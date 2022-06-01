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

    await queryInterface.bulkInsert('matkuls', [{
      hari: '1',
      sesi: 1,
      jam: "12:30 - 15:30",
      link: "https://meet.google.com/yuw-toqm-bip",
      matkul: "Dasar Keuangan Sistem Informasi",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '2',
      sesi: 1,
      jam: "13:00 - 14:00",
      link: "https://meet.google.com/dxi-suen-bie?hs=122&authuser=1",
      matkul: "Probalitas Dan Statistika",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '3',
      sesi: 1,
      jam: "07:10 - 08:30",
      link: "https://meet.google.com/mac-xpij-fvm",
      matkul: "Bahasa Indonesia",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '3',
      sesi: 2,
      jam: "10:30 - 12:30",
      link: "https://meet.google.com/mxy-sbhm-gof",
      matkul: "Pendidikan Pancasila",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '4',
      sesi: 1,
      jam: "11:00 - 12:30",
      link: "https://meet.google.com/sso-zqzd-jur",
      matkul: "Kepemimpinan Dan Komunikasi",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '4',
      sesi: 2,
      jam: "14:00 - 15:30",
      link: "https://meet.google.com/dev-edpb-iuj",
      matkul: "Algoritma Dan Pemograman",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '5',
      sesi: 1,
      jam: "09:30 - 12:30",
      link: "https://teams.microsoft.com/l/team/19%3asbNHU4L-ZoPmGyqf28t-ShopFEgD0DYaQmTmsslKDzY1%40thread.tacv2/conversations?groupId=85a90e11-e091-4350-ac4b-d0a8b32617c1&tenantId=90affe0f-c2a3-4108-bb98-6ceb4e94ef15",
      matkul: "Matriks dan Ruang Vektor",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '5',
      sesi: 2,
      jam: "13:30 - 15:30",
      link: "https://lms.telkomuniversity.ac.id/mod/url/view.php?id=2059842",
      matkul: "Algoritma Dan Pemograman",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
