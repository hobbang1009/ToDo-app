const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
AWS.config.loadFromPath("./config/awsconfig.json");

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "todo-app-hobbang1009/avatar",
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
      //todo limit the size of image
    }
  })
});

const deleteObj = keyValue => {
  s3.deleteObject(
    {
      Bucket: "todo-app-hobbang1009/avatar",
      Key: keyValue
    },
    (err, data) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

//todo 유저 아바타에 있던 기존 url을 제거할때 s3버킷 내에 있는 파일 이름과 같은 파일도 삭제진행

module.exports = { upload, deleteObj };
