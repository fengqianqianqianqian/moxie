var request = require('request');

describe("tes api", function() {
  it("hello",function(){
    console.log('this is a hello test');
  });
  // it("user api_create", function(done){
  //   request
  //     .post('http://localhost:3000/users/')
  //     .form({username:'123456',mobile:'123456',password:'123456'})
  //     .on('data', function(data) {
  //       console.log(''+data);
  //       done();
  //     });
  // });

  // it("user login", function(done){
  //   request
  //     .post('http://localhost:3000/users/login')
  //     .form({mobile:'123456'})
  //     .on('data', function(data) {
  //       console.log(''+data);
  //       done();
  //     });
  // });
  // it("user login", function(done){
  //   request
  //     .post('http://localhost/users/words/delete')
  //     .form({mobile: '123456',id:'084211af-718d-4824-b83a-6254d6d1fcd4'})
  //     .on('data', function(data) {
  //       console.log('---'+data);
  //       done();
  //     });
  // });

});