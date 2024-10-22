const asyncBreedDetails = function(breed, callback) {
  setTimeout(() => {
    let description;
    if (breed === "Bombay") {
      description = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    } else if (breed === "Malpre") {
      description = "Hairless breed";
    } else {
      description = undefined;
    }
    callback(description);
  }, 1000);
};

module.exports = asyncBreedDetails;