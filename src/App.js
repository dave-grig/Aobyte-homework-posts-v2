import logo from './logo.svg';
import './App.css';
import avatar from '@material-ui/core/Avatar'
import { Pool } from './posts/Pool';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List } from './lists/List';
import {postsData} from './postsData'
import {useState, useEffect} from 'react'

function App() {
  const [listPosts, setListPosts] = useState([]);
  const [s, setS] = useState();
  const [posts, setPosts] = useState();

  // const [lastPostIndex, setLastPostIndex] = useState(postsData.length - 1);
  const [removeIndex, setRemoveIndex] = useState(0);
  
  useEffect(() => {
    setPosts([...postsData]);
  },[])
  
  // console.log(listPosts,"rrrrrrrrrr")
  
  const handleClick = (e, listId) => {
    // console.log(JSON.stringify(postsData,"uuu"))

    setListPosts( (oldState) => {
      posts[posts.length - 1].listId = listId;
      return [...listPosts,posts[posts.length - 1]];
    });
    setPosts(posts.filter((post,index) => index !== posts.length - 1));  
  }

  const handleRemove = (e,removingPostIndex) => {
    // console.log(JSON.stringify(listPosts),"xxxxx")
    
    setListPosts(listPosts.filter((post, index) =>{
      if (index !== removingPostIndex) {
        return post
      } else {
        post.listId = "";
        console.log(post,"fff");
      }

    }));

    const removedPostPriority = listPosts[removingPostIndex].priority;
    
    if (posts.length && posts[posts.length - 1].priority > removedPostPriority) {
      const lastPost = posts.pop();
      setPosts([...posts,listPosts[removingPostIndex], lastPost]);
    } else {
      setPosts([...posts,listPosts[removingPostIndex]]);
    }
  }

  return (
    <div className="App">
      <Container fixed>
        <Pool />
        <Grid container>
          <Grid item md={6}>
            <List listPosts={listPosts} handleClick={handleClick} handleRemove={handleRemove} listId={"1"}/>
          </Grid>
          <Grid item md={6}>
            <List  listPosts={listPosts} handleClick={handleClick} handleRemove={handleRemove}  listId={"2"}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;


// [2,1] [4,3]


// [1,2,3,4] [4,3,2] [1,2,3,4] [4,3,2,1] 


// [1,2,3,4] [1,4] [3,2]