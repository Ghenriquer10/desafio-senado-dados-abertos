import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        font-size: 14px;
        font-family: sans-serif;
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