//Util
var faker = require('faker');

//thread_owner is foreign key reference to the boards table
//reply_original is a bool value to see if the reply is the first post of a thread.

//Example query/data for loading replys:  
//INSERT INTO replys (reply_in_thread_pos,reply_original,reply_username,reply_comment,thread_owner) VALUES (1,1,'frank','hello world',1);
//let reply = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};

//Example query for loading threads (max 100, or 10 pages with 10 threads each.):
//INSERT INTO threads (reply_count,subject,board_position,board_owner) VALUES (22,'Hello',2,1);
//let thread = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};



//To generate data for databases:
function seedGenerator(){
    var seedData = {seedReplys:{},seedThreads:{}};
    var threadCount = 100; //Maximum value:100
    
    //Generate initial threads:
    for(i=0;i<threadCount;i++){
        // let reply = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
        // let thread = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
        //seedData.seedReplys[i] = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
        seedData.seedThreads[i] = {reply_count: faker.random.number(20), subject: faker.random.word(25), board_position:i, board_owner:faker.random.number(7) + 1};
    }
    console.log(seedData);

    //Generate replys to those initial threads that were just generated:
    var replyCount=0;
    for (var key in seedData.seedThreads) {
        replyCount += seedData.seedThreads[key].reply_count;
        console.log(replyCount);
      }


    //for(i=0;i<replyCount;i++){
        // let reply = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
        // let thread = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
        //seedData.seedReplys[i] = {reply_in_thread_pos: i, reply_original: 0, reply_username:faker.random.word(10),reply_comment:faker.lorem.sentences(100),thread_owner:faker.random.number(99)+1};
        //seedData.seedThreads[i] = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
   // }

}

seedGenerator();