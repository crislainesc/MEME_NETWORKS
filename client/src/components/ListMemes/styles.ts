import styled from "styled-components";

export const ListMemesContainer = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
`

export const MemeContainer = styled.div`
    width: 9.5rem;
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const MemeImage = styled.img`
    width: 100%;
    height: 9rem;
    border: 5px solid white;
    border-radius: 10px;
    object-fit: cover;
`