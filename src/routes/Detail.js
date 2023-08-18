import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from '../App.module.css';   // module css 임포트 방법
import PropTypes from "prop-types";

function Detail () {
    const {id} = useParams();
    // react 뒤로가기
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);

        setLoading(false);
        setMovie(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);

    const onClick = () => {
        navigate(`${process.env.PUBLIC_URL}/`);
    }

    console.log(location)
    return (
        <div style={{ backgroundImage: `url(${movie.background_image})`}}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div>
                        <button onClick={onClick}>뒤로가기</button>    
                    </div>
                    <div className={styled.center}>
                        <img src={movie.medium_cover_image}/>
                        {/* <Link to={`/movie/${id}`}><h2>{title}</h2></Link> */}
                        <h1>{movie.title} ({movie.year})</h1>
                        <h3>-{movie.description_full}</h3>
                        <ul>
                        {movie.genres.map(g =>
                            <li key={g}>{g}</li>
                        )}
                        </ul>
                    </div>
                </>
            )
            }

        </div>
    ) 
};

Detail.prototype = {
    movie: PropTypes.object.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description_full: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    background_image : PropTypes.string.isRequired
}


export default Detail;