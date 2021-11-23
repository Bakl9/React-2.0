import s from './App.module.css';
import {useState} from "react";
import AddPost from "./Component/AddPost";
import PostList from "./Component/PostList";
import Input from "./Component/BLL/MyInput/Input";
import MyButton from "./Component/BLL/MyButton/MyButton";

function App() {

    const [post, setPost] = useState( [
        {id:1, title:'Javascript', body:'Description'},
        {id:2, title:'Javascript', body:'Description'},
        {id:3, title:'Javascript', body:'Description'}
    ])

    const [posts, setPosts] = useState({body: ' ',title: '' })


    const addNewPost = (e) => {
        e.preventDefault()
        setPost([...post,{...posts, id:Date.now()}])
        setPosts({body: ' ',title: '' })
    }

  return (
      <div className={s.App}>
          <form>
              <Input type="text"
                     placeholder={'введите текс'}
                     value={posts.title}
                     onChange={e => setPosts ({...posts,title: e.target.value})}
              />
              <Input
                  type="text"
                  placeholder={'введите текс'}
                  value={posts.body}
                  onChange={e => setPosts ({...posts, body: e.target.value})}
              />
              <MyButton onClick={addNewPost}>Добавить</MyButton>
          </form>
          <PostList post={post} title={'Новый Пост'}/>
      </div>
  );
}

export default App;
