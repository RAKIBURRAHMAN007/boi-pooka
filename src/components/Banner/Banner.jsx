import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-xl lg:px-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                <img
                    src={bannerImg}
                    className="lg:max-w-sm rounded-lg shadow-2xl min-h-96" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <br /><br />
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;