import React from 'react'
import NewsHeader from './NewsHeader'
import NewsBody from './NewsBody'
import NewsVideo from './NewsVideo'

function News(props) {
  let article = props.data[0]
  return (
    <>
    <NewsHeader />
    <main className="container mb-5">

         {props.data.map((article, index) => (
          <div key={index} className="card shadow-lg p-4 mb-5">
            
          
            <NewsVideo />

            <hr className="my-4" />

           
            <NewsBody
              title={article.title}
              subtitle={article.subtitle}
              content={article.content}
              author={article.author}
            />

          </div>
        ))}

    </main>
    

        
       
        
    </>
  )
}

export default News