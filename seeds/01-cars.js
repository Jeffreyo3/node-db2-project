
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 12345678901234567, make: "Honda", model: "Civic", mileage: 14, transmissionType: "automatic", titleStatus: "Clean" },
        { VIN: 23456789012345678, make: "Toyota", model: "RAV-4", mileage: 248, transmissionType: null, titleStatus: null },
        { VIN: 34567890123456789, make: "Saturn", model: "Ion", mileage: 149730, transmissionType: "manual", titleStatus: "Totaled" }
      ]);
    });
};
