import React, {useState} from 'react';

import * as S from "./styled";
import {updateCompany} from "../../redux/reducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

interface ChangingInputProps {
    id: number;
    field: 'address' | 'name';
}

export const ChangingInput: React.FC<ChangingInputProps> = ({id, field}) => {

    const dispatch = useAppDispatch();

    const company = useAppSelector(state => state.companies.find(company => company.id === id));

    const [inputValue, setInputValue] = useState<string>(company ? company[field] : '')
    const [isEditing, setIsEditing] = useState(false);

    const saveEdit = (field: 'name' | 'address') => {
        dispatch(updateCompany({id, [field]:inputValue}));
        setIsEditing(false);
    };

    return (
        <S.TableCell onClick={() => setIsEditing(true)}>
            {isEditing ? (
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => saveEdit(field)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            saveEdit(field);
                        }
                    }}
                />
            ) : (
                inputValue
            )}
        </S.TableCell>
    );
};
