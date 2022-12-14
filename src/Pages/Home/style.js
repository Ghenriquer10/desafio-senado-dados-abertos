import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
`;

export const SearchField = styled.div`
    height: 130px;
    background-color: #0095DA;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 7px;
`;

export const SearchAbout = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: 3.4em;
        font-weight: 100;
        height: 100%;
        width: 100%;

        @media (min-width: 320px) and (max-width: 659px) {
            font-size: 2.0em;
        }
    }
        .input-field{
            display: flex;
            align-items: center;
            justify-content: center;
    
            input{
                height: 40px;
                width: 230px;
                padding: 0 15px;
                background-color: #005B9E;
                color: #fff;
                border: none;
    
                @media (min-width: 320px) and (max-width: 480px) {
                    display: none;
                }
    
    
            }
    
            input::placeholder{
                color: #CCCCCC;
                font-size: 1.0em;
            }
    
            svg.web-search{
                background-color: #005B9E;
                height: 40px;
                width: 40px;
                padding: 10px;

                @media (min-width: 320px) and (max-width: 480px) {
                    display: none;
                }
            }

            svg.mobile-search{
                background-color: #0095DA;
                height: 40px;
                width: 40px;
                padding: 10px;

                @media (min-width: 481px) {
                    display: none;
                }
            }
        }
`;

export const MobileInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
        input{
            width: 100%;
            height: 35px;
            border: none;
            padding: 20px;
            font-size: 1.4em;
        }
`;

export const PageAbout = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    color: #ffffff;
    line-height: 1.5;
    font-weight: 400;
    font-size: 1.3em;

    p{
        font-weight: bold;
    }
`;

export const SenatorsContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 50px;

    .has--senators{
        display: grid;
        grid-gap: 60px;
        grid-template-columns: repeat(4, auto);  
        
        @media (min-width: 320px) and (max-width: 659px) {
            grid-template-columns: repeat(1, auto);  
        }

        @media (min-width: 660px) and (max-width: 1020px) {
            grid-template-columns: repeat(2, auto);  
        }
        @media (min-width: 1021px) and (max-width: 1400px)  {
            grid-template-columns: repeat(3, auto);  
        }
    }


`;