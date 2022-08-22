import styled from "styled-components";

export const Container = styled.header`
    background-color: #005B9E;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 5px;
    }

    .menu{
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.7em;
            font-family: inherit;
            height: 50px;
            width: 120px;

            @media (min-width: 320px) and (max-width: 480px) {
                width: 50px;
                p{
                    display: none;
                }                    
            }
        }
    }

    .menu:hover{
        transition: all 0.4s;
        background-color: #0095DA;
    }

    .logo{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .acessibility{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;

        @media (min-width: 320px) and (max-width: 480px) {
        }

        .languages{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            border-right: 1px solid #fff;
            padding: 0 10px;
            gap: 5px;

            @media (min-width: 320px) and (max-width: 480px) {
                
                svg{
                    height: 20px;
                    width: 20px;
                }

                select{
                    display: none;
                }
            }

            
            select{
                height: 30px;
                background: transparent;
                color: #fff;
                border: none;
            }

            option{
                color: #000;
            }
        }
        
        .themes{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            @media (min-width: 320px) and (max-width: 480px) {
                svg{
                    height: 20px;
                    width: 20px;
                }
            }

        }
    }
`;