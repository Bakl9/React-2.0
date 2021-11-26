import s from './App.module.css';
import {useState} from "react";
import AddPost from "./Component/AddPost";
import PostList from "./Component/PostList";
import Input from "./Component/BLL/MyInput/Input";
import MyButton from "./Component/BLL/MyButton/MyButton";
import FormPost from "./Component/FormPost";

function App() {

    const [post, setPost] = useState( [   
        {id:1, title:'Javascript', body:'Description'},
        {id:2, title:'Javascript', body:'Description'},
        {id:3, title:'Javascript', body:'Description'}
    ])

    const createPost = (newPost) => {
      setPost([...post,newPost])
    }
  
    const removePost = (posts) => {
        setPost(post.filter( p => p.id !== posts.id))
    }

  return (
      <div className={s.App}>
          <FormPost create={createPost} />
          {post.length
            ? <PostList remove={removePost} post={post} title={'Новый Пост'}/>
              : <h1 style={{textAlign:'center'}}>
                  Постов нет
              </h1>
          }


      </div>
  );
}

export default App;
