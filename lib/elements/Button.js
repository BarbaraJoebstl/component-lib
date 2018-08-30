import styled from 'styled-components';

const Button = styled.button`
{
        outline: none;
        border: none;
        min-height: 50px;
        padding-left: 50px;
        padding-right: 50px;
        border-radius: 25px;
        color: white;
        font-size: 20px;
        line-height: 30px;
        background-color: $cv-red;
        margin: 25px;
        transition: all .25s ease;

        &:active {
            box-shadow: none;
            transition: all .1s ease;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: gray;
            cursor: pointer;
        }

        &:disabled {
            background-color: rgba(63, 63, 68, 0.2);

            &:hover {
                cursor: default;
                transform: none;
                box-shadow: none;
            }
        }
    }

`;