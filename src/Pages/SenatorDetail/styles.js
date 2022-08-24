import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    flex-direction: column;

    .title{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .button-back{
        height: 40px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #005B9E;
        border: none;
        color: #fff;
        font-size: 1.3em;
        font-weight: bold;
    }

    .button-back:hover{
        transition: all 0.5s;
        background-color: #0095DA;
    }

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
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
    
    .senator-about{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 80%;

        @media (min-width: 320px) and (max-width: 1240px) {
            flex-direction: column;
            width: 100%;
        }
        
        .senator-photo{
            width: 50%;

            .no-photo{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 200px;
            }

            @media (min-width: 320px) and (max-width: 780px) {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            img{
                height: 450px;
                width: 400px;
                border: 20px solid #0095DA;
                
                @media (min-width: 320px) and (max-width: 1280px) {
                    width: 100%;
                    height: 320px;
                    width: 320px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        
        .senator-data{
            width: 50%;
            height: 110mm;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            flex-direction: column;
            
            @media (min-width: 320px) and (max-width: 1240px) {
                height: 60mm;
                width: 100%;
                align-items: center;
                justify-content: flex-start;
            }

            .senator-name{
                font-size: 3.4em;

                @media (min-width: 320px) and (max-width: 780px) {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }
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