const { ref, uploadBytesResumable } = require("firebase/storage");

const { storage } = require("./index");

async function uploadImage(file, quantity) {
  try {
    const bucket = storage.bucket();

    if (quantity === "single") {
      const dateTime = Date.now();
      const fileName = `images/${dateTime}`;
      const metadata = {
        contentType: file.mimetype,
      };

      bucket
        .upload(file.buffer, { destination: fileName, metadata })
        .then(function (data) {
          console.log(data);
          const file = data[0];
        });
    }
    // if (quantity === "multiple") {
    //   for (let i = 0; i < file.images.length; i++) {
    //     const dateTime = Date.now();
    //     const fileName = `images/${dateTime}`;
    //     const storageRef = ref(storage, fileName);
    //     const metadata = {
    //       contentType: file.images[i].mimetype,
    //     };

    //     const saveImage = await Image.create({ imageUrl: fileName });
    //     file.item.imageId.push({ _id: saveImage._id });
    //     await file.item.save();

    //     await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);
    //   }
    // }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { uploadImage };
