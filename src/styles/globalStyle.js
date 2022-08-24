import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        font-size: 14px;
        background-color: ${props => props.theme.colors.primary};
    }

    button{
        cursor: pointer;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }
`;