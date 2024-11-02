import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utilits/addToDb";


const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const { image ,bookName,totalPages,review,publisher,yearOfPublishing,rating,author,category,tags} = book;
    const handleMarkAsRead =(id) =>{
        addToStoredReadList(id)

    }
    const handAddToWishList = (id) =>{
        addToStoredWishList(id)
    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-32 ">
                <div className="bg-base-200 w-1/2 p-20 rounded-xl">
                    <img
                        src={image}
                        className="  rounded-lg shadow-2xl" />

                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold">{bookName}</h1><br />
                    <p>By : {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p className="font-bold">Review : <span className="text-xs font-normal">{review}</span></p><br />
                    <div className="flex gap-3 items-center">
                        <div>
                            <h2 className="font-bold">Tag</h2>
                        </div>
                        <div className="flex gap-2">
                            {
                                tags.map(tag => <button className="bg-green-50 text-green-700 rounded-lg p-1">{tag}</button>)
                            }

                        </div>
                    </div>
                    <div className="divider"></div>
                    <p>Number of Pages: <span className="font-bold lg:ml-20">{totalPages}</span></p>
                    <p>Publisher: <span className="font-bold lg:ml-36">{publisher}</span>   </p>
                    <p>Year of Publishing: <span className="font-bold lg:ml-20">{yearOfPublishing}</span>   </p>
                    <p>Rating: <span className="font-bold lg:ml-40">{rating}</span>     </p>
                    <br /><br />
                    <div className="flex gap-2">
                        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">MArk As Read</button>
                        <button onClick={()=>handAddToWishList(bookId)} className="btn btn-accent">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;