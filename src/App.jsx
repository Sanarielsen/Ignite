import {Post} from './components/Post'
import {Header} from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/sanarielsen.png',
      nameA: 'Samuel Henrique',
      role: 'Desenvolvedor Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date ('2022-08-09 20:00:00')
  },
  {

    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      nameA: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date ('2022-08-09 21:00:00')
  },
  {

    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      nameA: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date ('2022-08-10 10:00:00')
  }
]

function App() {  
  return (
    <div> 

      <Header />

      <div className={styles.wrapper}> 

        <Sidebar />
        
        <main>

          {posts.map(post => {

            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
