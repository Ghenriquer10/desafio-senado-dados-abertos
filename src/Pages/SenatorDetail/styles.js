import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    flex-direction: column;
    p{
        font-size: 2em;
        width: 100%;
    }
`;

export const SenatorAbout = styled.section`
    margin: 20px 0 20px 0;
    border-radius: 10px;
    width: 90%;
    background-color: #0095DA;
    color: #fff;
    
    .senator-about{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 80%;
        
        .senator-photo{
            width: 50%;
            img{
                height: 450px;
                width: 400px;
                border: 20px solid #0095DA;
            }
        }
        
        .senator-data{
            width: 50%;
            height: 110mm;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            flex-direction: column;

            .senator-name{
                font-size: 3.4em;
            }
        }
    }
`;

export const Commission = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;