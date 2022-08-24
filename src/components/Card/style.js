import styled from "styled-components";

export const Container = styled.article`
    height: 350px;
    width: 280px;
    border: 1px solid #0095DA;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: 280px 350px;

    &:hover{
        transition: all 2s;
        transform: scale(1.06);
    }

        .senator-field{
            width: 100%;
            height: 100%;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: end;
        }
        
        .senator-about{
            background-color: #005B9E;
            height: 120px;
            padding: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;
                p:first-child{
                    font-size: 1.5em;
                    text-align: center;
                }

                .button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: none;
                    height: 29px;
                    width: 100%;
                    color: #fff;
                    background-color: #0095DA;
                    font-size: 0.7em;
                    font-weight: bold;
                }

                .button:hover{
                    transition: all 1s;
                    background-color: #fff;
                    color: #000000;
                }
        }

`;