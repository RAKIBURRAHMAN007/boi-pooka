import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { image, bookName, author, tags, category,bookId } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 lg:w-80 h-[500px] shadow-xl p-6 border">
                <figure className="bg-[#F2F2F2] py-8 rounded-xl">
                    <img className="h-[166px]"
                        src={image} />
                </figure>
                <div className="card-body space-y-2">
                    <div className="flex gap-5">
                        {
                            tags.map(tag => <button className="btn  btn-xs bg-green-50 text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;