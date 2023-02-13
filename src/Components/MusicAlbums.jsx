import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";

export const MusicAlbums = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const genre = searchParams.getAll("genre");
      const queryParams = {
        params: {
          genre: genre,
          _sort:searchParams.get('sortBy') && "year",
          _order:searchParams.get('sortBy'),
        },
      }; 
      dispatch(getMusicRecord(queryParams));
    }
  }, [location.search]);

  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((album) => (
          <div key={album.id} style={{border:"1px solid red" , margin:"5px"}}>
            <div>{album.name}</div>
            <div>
              <img src={album.img} alt={album.name} />
            </div>
            <div>{album.year}</div>
            <Link to={`/music/${album.id}/edit`}>
            <button>EDIT</button>
            <button>Add to cart</button>
            </Link>
          </div>
        ))}
    </>
  );
};