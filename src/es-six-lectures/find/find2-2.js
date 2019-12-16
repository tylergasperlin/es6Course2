
var posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'},

]
var comment = {postId:1, content: 'Great Post'}

const active = () =>{
    const postForComment = (posts,comment) =>{
        return posts.find(post =>{
            return post.id === comment.postId
        })
    }

    const res = postForComment(posts,comment)
    console.log(res)
  }
 
  export default active;