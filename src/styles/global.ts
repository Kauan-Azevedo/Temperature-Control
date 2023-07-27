import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary-color: #D43340;
        --secondary-color: #F6B03B;

        --text-color: #faf9db;
        --bg-color: #0d0e1f;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`