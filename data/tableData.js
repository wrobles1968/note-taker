// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    itemOne: "This is a Note",
    itemThree: "This is a Note",
    customerID: "This is a Note",
   itemTwo: "This is a Note"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
