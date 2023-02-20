const millimeter = 1;
const centimeter = millimeter * 10;
const meter = centimeter * 100;
const inch = centimeter * 2.54;
const foot = inch * 12;

const microgram = 1;
const milligram = 1000 * microgram;
const gram = 1000 * milligram;
const kilogram = 1000 * gram;
const ounce = 0.02834952 * kilogram;
const pound = 0.4535925 * kilogram;
const stone = 14 * pound;

const kilojoule = 0.23;
const calorie = kilojoule;

const year = 365;
const month = year / 12;
const day = month / 30.5;

const units = {
  millimeter: 1,
  centimeter: millimeter * 10,
  meter: centimeter * 100,
  inch: centimeter * 2.54,
  foot: inch * 12,
  // Weight
  microgram: 1,
  milligram: 1000 * microgram,
  gram: 1000 * milligram,
  kilogram: 1000 * gram,
  ounce: 0.02834952 * kilogram,
  pound: 0.4535925 * kilogram,
  stone: 14 * pound,
  // Food
  kilojoule: 0.23,
  calorie: 4.184 * kilojoule,
  // Time
  year: 365,
  month: year / 12,
  day: month / 30.5,
};

export default units;
