//const posts = [
//    {title: 'Post One',body: 'This is Post One'},
//    {title: 'Post Two',body: 'This is Post Two'}
//];
//
//function createPost(post) {
//    setTimeout(() => posts.push(post),2000);
//}
//
//function getPosts(){
//    setTimeout(() => {
//        let output = '';
//        posts.forEach((obj) => {
//            output +=  `${obj.title}: `;
//            output +=  `${obj.body} \n`;
//        });
////        document.body.innerHTML = output;
//        console.log(output);
//    },1000);
//}
//
//
//createPost({title: 'Post three', body: 'This is 3rd post'});
//getPosts();
/*************
THE ABOVE IS A SYNCHRONOUS WAY OF CALLING
FUNCTIONS
*****************/


const posts = [
    {title: 'Post One',body: 'This is Post One'},
    {title: 'Post Two',body: 'This is Post Two'}
];

function createPost(post,callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((obj) => {
            output +=  `${obj.title}: `;
            output +=  `${obj.body} \n`;
        });
//        document.body.innerHTML = output;
        console.log(output);
    },1000);
}


createPost({title: 'Post three', body: 'This is 3rd post'},getPosts);
getPosts();
