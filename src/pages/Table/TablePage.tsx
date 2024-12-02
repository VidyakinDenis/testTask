import React,  { useState } from 'react';

import { Table } from './Table';
import { useAppDispatch } from "../../redux/hooks";
import { deleteCompanies } from "../../redux/reducer";
import {AddingCompanyForm} from "./TableForm";
import * as S from "./styled";


export const TablePage = () => {

    const dispatch = useAppDispatch();

    const [showingForm, setShowingForm] = useState(false);

    const deleteItems = () => {
        dispatch(deleteCompanies());
    };

    return (
        <S.TableWrapper>
            {showingForm ? (<AddingCompanyForm setShowingForm={setShowingForm}/>) : (
                <S.ButtonWrapper>
                    <S.FormButton
                        width={45}
                        onClick={() => setShowingForm(true)}
                        color="#347efd"
                    >
                        Добавить новую компанию
                    </S.FormButton>
                    <S.FormButton
                        width={45}
                        onClick={deleteItems}
                        color='fd2323ff'
                    >
                        удалить выбранные компании
                    </S.FormButton>
                </S.ButtonWrapper>
            )}
            <Table/>
        </S.TableWrapper>
    );
};
