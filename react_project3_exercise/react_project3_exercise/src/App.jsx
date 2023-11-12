import {useState} from 'react'
import './App.css'
import PostsList from "./components/PostsList.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <PostsList />
        </div>
    );
}

export default App;
