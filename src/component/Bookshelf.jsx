import { useState } from 'react';

const BookShelf = () => {
   
      const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
      const [newBook, setNewBook] = useState(
        { title: '', author: ''})
    
        const handleInputChange = (event) => {
          setNewBook({...newBook, [event.target.name]: event.target.value})
        }
        
        const handleSubmit = (event) => {
            event.preventDefault()
            setBooks([...books, newBook])
            setNewBook({ title: '', author: ''})
            console.log(books)
          }
          
        return (
    <div className="bookshelfDiv">
        <div className="formDiv">
             <h3>Add a Book</h3>
             <form onSubmit={handleSubmit}>
             <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label>Title</label>
          
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
             />
             <label>Author</label>
             <button type="submit">Add Book</button>
            </form>
        </div>
            {books.map((book,index)=> (
        <div className="bookCardsDiv" key={index}>
            <h5>Title: {book.title}</h5>
            <h6>Author: {book.author}</h6>
        </div>
        ))}
    </div>
    )
}
export default BookShelf