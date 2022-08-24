import styled from "styled-components";

export const Container = styled.article`
    width: 90%;
    border: 1px solid #0095DA;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    background-color: #337AB7;
    color: #fff;
    p{
        font-size: 1.5em;
        display: flex;
            align-items: center;
    }
    
    .commission--date{
        align-items: center;
        flex-direction: row;
        display: flex;
        gap: 20px;
    }
`;