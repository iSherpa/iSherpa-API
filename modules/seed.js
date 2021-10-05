const Park = require('../schema/parks')

let seedFunction = () => {

  let samplePark = new Park({
    fullName: "Mount Baker National Park",
    description: "Mount Baker is a beautiful national park located in Washington state",
    stateCode: "WA",
    directionsInfo: "Go North young one... Then East..",
    activity: "Hiking and Skiing",
    operatingHours: "ErrrrDay",
    contacts: "132-213-2312",
    });
  samplePark.save()
  console.log(samplePark)
  }
  seedFunction();