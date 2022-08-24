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
        margin-bottom: 20px;
        width: 100%;
    }
    `;

export const SenatorAbout=styled.section`
    border-radius: 10px;
    padding: 30px;
    border: 2px solid #0095DA;
    width: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    width: 90%;
    
    .senator-about{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 80%;
        
        .senator-photo{
            width: 50%;
            img{
                height: 400px;
                width: 350px;
                border: 20px solid #0095DA;
            }
        }
        
        .senator-data{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
`;

export const Commission = styled.article`
    
`;