import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary-color: #2831e2;
        --secondary-color: #f7ed36;

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
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`