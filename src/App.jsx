import {Post} from './Post'
import {Header} from './components/Header'
import './styles.css'

function App() {  
  return (
    <div> 

      <Header />
      
      <h1> Hello world </h1> 
      <Post 
        author="Samuel Henrique"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto blanditiis quod neque autem, aliquam odit sint nam corporis, voluptatem at ea tempora? Sint aspernatur a vero deserunt aliquid nam." 
      />

      <Post 
        author="Gui"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto blanditiis quod neque autem, aliquam odit sint nam corporis, voluptatem at ea tempora? Sint aspernatur a vero deserunt aliquid nam." 
      />

      <Post 
        author="Gabriel Narimatsu"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto blanditiis quod neque autem, aliquam odit sint nam corporis, voluptatem at ea tempora? Sint aspernatur a vero deserunt aliquid nam." 
      />
    </div> 
  )
}

export default App
