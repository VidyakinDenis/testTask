import React, {Dispatch, FC, SetStateAction, useState} from "react";

import * as S from "./styled";
import {ICompanyProps} from "../../models/ICompany";
import {addCompany} from "../../redux/reducer";
import {useAppDispatch} from "../../redux/hooks";

interface AddingCompanyFormProps {
    setShowingForm: Dispatch<SetStateAction<boolean>>
}

export const AddingCompanyForm: FC<AddingCompanyFormProps> = ({setShowingForm}) => {

    const dispatch = useAppDispatch();

    const [companyName, setCompanyName] = useState('');
    const [companyAddress,setCompanyAddress] = useState('');

    const addItem = (company:ICompanyProps) => {
        dispatch(addCompany(company));
        setCompanyName('');
        setCompanyAddress('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowingForm(false);
        if (companyName && companyAddress) {
            addItem({ name: companyName, address: companyAddress, selected: false});
        }
    };

    return (
        <S.CustomForm onSubmit={handleSubmit}>
            <S.FormButton type="submit" color='347efdff'>Добавить компанию</S.FormButton>

            <S.FormInputWrapper>
                <S.InputBlock>
                    <label>
                        название компании
                    </label>

                    <S.FormInput
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        maxLength={40}
                    />
                </S.InputBlock>
                <S.InputBlock>
                    <label>
                        адрес компании
                    </label>
                    <S.FormInput
                        type="text"
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                        maxLength={40}

                    />
                </S.InputBlock>
            </S.FormInputWrapper>
        </S.CustomForm>
    );
};