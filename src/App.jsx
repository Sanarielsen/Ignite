import {Post} from './Post'
import {Header} from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {  
  return (
    <div> 

      <Header />

      <div className={styles.wrapper}> 

        <Sidebar />
        
        <main>
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
        </main>
      </div>                  
    </div>
  )
}

export default App
