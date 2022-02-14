import styled from 'styled-components';

export const Container = styled.div``;

export const Panel = styled.div`
    width: 30%;
    margin: 200px auto;
`;

export const Label = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    width: 100%;
    background: var(--light);
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ButtonEnter = styled(Button)`
    background: blue;
    border-radius: 15px;
`;

export const ButtonTextEnter = styled(ButtonEnter)`
    padding: 10px;
    font-size: 14px;
    color: white;
    width: 9em;
    margin: 20px auto;
`;
