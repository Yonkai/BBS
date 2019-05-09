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

//TODO: add use case for handling no reply, just the initial thread, make sure the schema is okay with that.

//To generate data for databases:
const seedGen = function seedGenerator(){
    //threadCount max is 100 on pages, with a 10 threads/10 pages setup on paginator component
    //5-5, new schema: threads_comment,threads_subject,threads_username,boards_boards_id
    var seedData = {
    seedReplys:{},
    seedThreads:{},
    replyCount:0,
    threadCount:100,
    boardCount:15
};

var totalThreads = seedData.threadCount*seedData.boardCount;
seedData.totalThreads=totalThreads;

    //Make it so this part of the seed loops theadCount*boardCount times in a double for loop:
    //Generate initial threads:
for(a=1;a<=seedData.boardCount;a++){
    for(i=1;i<=seedData.threadCount;i++){
        // let reply = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
        // let thread = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
        //seedData.seedReplys[i] = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
        seedData.seedThreads[i+((a-1)*100)] = {
            threads_comment:faker.lorem.sentences(3),
            threads_username:faker.name.firstName(10),
            seedonly_reply_count: faker.random.number(3) + 1, 
            threads_subject: faker.hacker.noun(), 
            boards_boards_id:a
        };
    }
}
    //console.log(seedData);

    //Generate replys to those initial threads that were just generated:
    var replyKey=0;
    
    //iterates through each thread object (i<reply_count) number of times, and and assigns reply object that thread object as an owner based on its key, and
    //sets a bool to 1 if its the first 'reply'.
    //5-5, new schema:replys_username,replys_comment,threads_threads_id,threads_boards_boards_id
    for (var key in seedData.seedThreads) {
        for(i=0;i<seedData.seedThreads[key].seedonly_reply_count;i++){
            seedData.seedReplys[replyKey++] = {
                replys_username:faker.name.firstName(10),
                replys_comment:faker.lorem.sentences(5),
                threads_threads_id:key,
                threads_boards_boards_id:seedData.seedThreads[key].boards_boards_id,
            };
        }
        seedData.replyCount += seedData.seedThreads[key].seedonly_reply_count;
        // console.log(seedData.replyCount);
      }
    //   console.log(seedData);

      //Add assertion testing here:

//     for(i=0;i<replyCount;i++){
//         //let reply = {reply_in_thread_pos: 1, reply_original: 1, reply_username: 'frank',reply_comment:'hello world',thread_owner:1};
//         //let thread = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
//         for (var key in seedData.seedThreads) {
//             //seedData.seedThreads[i] = {reply_count: 22, subject: 'Hello', board_position:2, board_owner:1};
//         }
//    }
      return seedData;

}
module.exports =  seedGen;

// seedGen();