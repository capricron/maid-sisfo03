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
      jam: "14:30 - 16:30",
      ruang: "TULT-0911",
      matkul: "Pemodelan Proses Bisnis",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '2',
      sesi: 1,
      jam: "13:30 - 16:30",
      ruang: "KU2.03.03",
      matkul: "Desain Jaringan Komputer Dan Komunikasi Data",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '3',
      sesi: 1,
      jam: "10:30 - 12:30",
      ruang: "KU2.01.10",
      matkul: "Kewirausahaan",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '3',
      sesi: 2,
      jam: "15:30 - 18:30",
      ruang: "KU2.01.10",
      matkul: "Pengantar Pemograman Dan Logika",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '5',
      sesi: 1,
      jam: "06:30 - 09:30",
      ruang: "KU2.01.10",
      matkul: "Perilaku Organisasi",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '5',
      sesi: 2,
      jam: "13:30 - 15:30",
      ruang: "KU3.04.02",
      matkul: "Desain Pengalaman Pengguna",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '5',
      sesi: 3,
      jam: "15:30 - 18:30",
      ruang: "KU3.04.02",
      matkul: "Pemograman Berorientasi Objek",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('matkuls', [{
      hari: '6',
      sesi: 1,
      jam: "06:30 - 09:30",
      ruang: "TU-0910",
      matkul: "Statistika Industri",
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
