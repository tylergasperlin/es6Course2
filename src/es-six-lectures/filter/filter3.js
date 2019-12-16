var post = {id:4, title:'New Post'}

var comments = [
    {postId:4, content: 'awesome post'},
    {postId:3, content: 'ok post'},
    {postId:4, content: 'neat post'},

]

const active = () =>{
    function commentsForPost(post, comments){
        return comments.filter(function(comment){
            return comment.postId ===post.id
        })
    }   
    const  res = commentsForPost(post,comments)
    console.log(res)
}
 
  export default active;