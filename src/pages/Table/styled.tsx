import styled from "styled-components"

export const TableWrapper = styled.div`
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: auto;
    overflow: hidden !important;
`;

export const Table = styled.table`
    width: 100%;
    border: 1px solid #000;
    border-spacing: 0;
    table-layout: fixed;
`;

export const TableRow = styled.tr<{ selected?: boolean }>`
    background-color: ${(props) => (props.selected ? '#fd2323' : '#fff')};
    border-bottom: 1px solid #000;
    height: 40px;
    display: table; /* Для сохранения структуры таблицы */
    width: 100%;
    table-layout: fixed;
`;

export const TableCell = styled.td`
    padding: 8px;
    text-align: center;
    border: 1px solid #000;
`;

export const TableHeadCell = styled.th`
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #000;
    text-align: center;
`;

export const TableHead = styled.thead`
    display: table;
    width: 100%;
    table-layout: fixed;
`;

export const TableBody = styled.tbody`
`;

export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 40px;
`

export const FormButton = styled.button<{color: string, width?: number}>`
    background-color: ${props => `#${props.color}`};
    width: ${props => props.width || 100}%;
    height: 40px;
`
export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

`
export const FormInput = styled.input`
    width: 70%;
    height: 25px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

`

