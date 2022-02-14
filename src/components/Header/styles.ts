import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    display: flex;
    border-left: 1px solid var(--light);

    @media(max-width: 1000px){
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    padding-left: 1rem;
    margin-right: 1rem;

    > img {
        width: 35px;
        height: 35px;
    }
`;

export const Options = styled.ul`
    display:flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;

    > li {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 7px;
        font-size: 18px;
        color: var(--gray);
        width: 200px;
        height: 56px;
        padding: 0;
        border: 0;
        cursor: pointer;

        &.active,
        &:hover {
            color: blue;
            border-bottom: blue;
            border-bottom-width: 3px;
            border-bottom-style: solid;
        }
    }

    @media(max-width: 1000px){
        flex-direction: column;
    }
`;

export const Logout = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin-left: 28em;
    margin-top: 0.5rem;

    font-size: 18px;
    color: var(--gray);
    width: 40px;
    height: 56px;
    padding: 0;
    border: 0;
    cursor: pointer;

    &.active,
    &:hover {
        color: blue;
    }
`;
