var faker = require('faker');


//Array of all the hosted images
var imageBank = ['https://xillow.s3-us-west-1.amazonaws.com/house/image1.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image10.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image11.jpeg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image12.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image13.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image14.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image15.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image16.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image17.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image18.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image19.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image2.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image20.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image21.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image22.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image23.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image24.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image25.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image26.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image27.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image28.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image3.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image30.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image31.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image32.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image4.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image5.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image7.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image8.jpg', 'https://xillow.s3-us-west-1.amazonaws.com/house/image9.jpg'];


//Helper function to generate random number of images for a given num of houses
var randomImagesArray = (num, images) => {
  var result = [];
  var imagesCopy = [...images];
  for (var i = 0; i < num; i++) {
    var randomNum = Math.floor(Math.random() * imagesCopy.length);
    result.push(imagesCopy[randomNum]);
    imagesCopy.splice(randomNum, 1); 
  }
  return result;
};



var seedData = (number) => {
  let result = [];
  for (var i = 0; i < number; i++) {
    var entry = {};
    var address = '';
  
    //Generate random numbers for description
    entry.description = {};
    entry.description.price = faker.random.number();
    entry.description.bdrm = faker.random.number();
    entry.description.bthrm = faker.random.number();
    entry.description.sqft = faker.random.number();
  
  
    //Generate fake address
    address += faker.address.streetAddress() + " ";
    address += faker.address.streetName() + " ";
    address += faker.address.city() + " ";
    address += faker.address.state() + " ";
    address += faker.address.zipCode();
    entry.address = address;
  
  
    //Generate fake images
    var imageCount = Math.floor((Math.random() * 16) + 6);
    var randomImages = randomImagesArray(imageCount, imageBank);
    entry.images = randomImages;
  
    //Generate fake ID
    entry.id = i;
  
    result.push(entry);
  };
  return result;
};


// module.exports = {seedData: seedData};

