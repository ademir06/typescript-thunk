import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypecSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Movies = () => {
    const {movies, page, loading, error} = useTypedSelector(s => s.movie)
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const {fetchingMovies, changeCurrentPage} = useTypedDispatch()

    useEffect(() => {
        fetchingMovies(page)
    }, [page])


    if (loading) {
        return <h3 className='flex items-center justify-center'><AiOutlineLoading3Quarters/></h3>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <div>
            <div className='container px-3'>
                <div className='flex items-center flex-wrap justify-between '>
                    {
                        movies.map(el => (
                            <div className='px-10'>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""
                                     className='w-[250px]'/>
                                <h2 className='w-[250px]'>{el.title}</h2>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-center'>
                    {
                        pages.map(el => (
                            <button
                                onClick={() => changeCurrentPage(el)}
                                key={el}
                                className='border py-2 px-4 mx-4 mt-14'>{el}</button>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Movies;