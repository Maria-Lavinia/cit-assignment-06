function Image({images}) {
    return (
        
        images.map((image, index) => (
            <div key={index}>
                <img src={`https://image.tmdb.org/t/p/w45/${image.file_path}`} alt={image.file_path} />
            </div>
        ))
    );
}

export default Image;