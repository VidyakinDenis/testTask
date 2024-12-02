import React, {FC, memo} from 'react';
import { ICompany } from "../../models/ICompany";
import * as S from './styled';
import {ChangingInput} from "./ChangingInput";

interface ITableRowProps {
    company: ICompany;
    checkboxChange: (id: number, selected: boolean) => void;
}

export const TableRow: FC<ITableRowProps> = memo(({ company, checkboxChange }) => {

    let { selected, id } = company;

    const handleChangeCheckbox = () => {
        selected = !selected;
        checkboxChange(id, selected);
    }

    return (
        <S.TableRow selected={selected}>
            <S.TableCell>
                <input
                    type="checkbox"
                    onChange={handleChangeCheckbox}
                    checked={selected}
                />
            </S.TableCell>
            <ChangingInput id={id} field='name' />
            <ChangingInput id={id} field='address' />
        </S.TableRow>
    );
});
