const cars = [
    {
      model: "Honda Civic",
      //The top colour refers to the first item in the array below:
      //i.e. hondaTopColour = "black"
      coloursByPopularity: ["black", "silver", "white", "blue"],
      speedStats: {
        topSpeed: 140,
        zeroToSixty: 8.5
      }
    },
    {
      model: "Tesla Model 3",
      coloursByPopularity: ["red", "white", "grey", "black"],
      speedStats: {
        topSpeed: 150,
        zeroToSixty: 3.2
      }
    }
  ];
  
export default cars;