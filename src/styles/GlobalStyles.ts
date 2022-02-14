import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /*color: var(--secondary);*/

    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        background: none;
        font-family: Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    input {
        color: var(--gray);
    }

    html {
        background: var(--white);
    }

    :root {
        --primary: #7269ef;
        --secondary: #f7f7ff;
        --text: #495057;
        --white: #fff;
        --gray: #7a7f9a;
        --gray-dark: #343a40;
        --light: #e6ebf5;
        --green: #06d6a0;
        --notification: rgba(239,71,111,.18);
        --notification-text: #ef476f;
        --chat-active: #d9dce2;
    }

`;