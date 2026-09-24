import React from 'react'
const Book = () => {
  return (
    <div>
    <div style={{border:'2px solid white',height:'1100px', width:'600px', backgroundColor:'black'}}>
   <h1 style={{ color:'cadetpink'}}>Book Shop</h1>
      <div>
      <img src='https://www.robinage.com/wp-content/uploads/2023/05/leopard-book-1.jpg' alt="Book" style={{ width: '200px', height: '200px' }} />
       <h3 style={{ color:'pink'}} > Dream land Book</h3>
       <h3 style={{ color:'pink'}}>300</h3>
      </div>
  
    <div>
      <img src='https://bookartwork.com/wp-content/uploads/2023/04/morevisual_somebody_editing_the_words_in_a_book_6217d0a5-db2c-4540-a938-bbe7579567a7.png' alt="Book" style={{ width: '200px', height: '200px', margin:'0 auto' }} />
       <h3 style={{ color:'pink'}}>Black magic Book</h3>
       <h3 style={{ color:'pink'}}>500</h3>
    </div>

   <div>
      <img src='https://tse4.mm.bing.net/th/id/OIP.gd2jinhl9vdNkA7Fo-QV-wHaEJ?r=0&w=626&h=351&rs=1&pid=ImgDetMain&o=7&rm=3' alt="Book" style={{ width: '200px', height: '200px' }} />
       <h3 style={{ color:'pink'}}>Animal Book</h3>
       <h3 style={{ color:'pink'}}>700</h3>
       </div>
    </div>
    </div>
   

    
  )
}

export default Book
