import React from "react";
import styled from "styled-components";
import { FilterSort } from "../Components/FilterSort";
import { MusicAlbums } from "../Components/MusicAlbums";

export const MusicRecords = () => {
  return (
    <Wrapper>
      <WrapperFilterSort>
        <FilterSort />
      </WrapperFilterSort>
      <WrapperMusicAlbum>
        <MusicAlbums />
      </WrapperMusicAlbum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px solid gray;
  display: flex;
  height: 100vh;
`;

const WrapperFilterSort = styled.div`
  width: 200px;
  border: 1px solid black;
`;

const WrapperMusicAlbum = styled.div`
  width: 100%;
  border: 1px solid black;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,max-content));
  justify-content:center;
  grid-gap:10px;
`;