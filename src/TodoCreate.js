import React from 'react';
import styled from 'styled-components';
import { CgAdd } from 'react-icons/cg';

const InputBox = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InputForm = styled.form`
    display:flex;
    background: #e9ecef;
    padding: 10px;
    margin: 40px;
    border: 1px solid #dee2e6;
    border-radius: 10px;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 90%;
    font-size: 16px;
    box-sizing: border-box;

`;

const Add = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 12px;
    color: white;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        color: gray;
    }

`;

function TodoCreate() {
    return(
        <>
            <InputBox>
                <InputForm>
                    <Input autoFocus placeholder="Enter Todo"/>
                    <Add>
                        <CgAdd/>
                    </Add>
                </InputForm>
                
            </InputBox>
        </>
    );
}

export default TodoCreate;