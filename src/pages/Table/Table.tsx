import React, {useCallback, useState} from 'react';
import {FixedSizeList} from 'react-window';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {setSelectedAll, updateCompany} from "../../redux/reducer";
import {TableRow} from "./TableRow";

import * as S from "./styled";


export const Table = () => {

    const dispatch = useAppDispatch();

    const companies = useAppSelector(store => store.companies);
    const [selectedAllState, setSelectedAllState] = useState(false);

    const checkboxChange = useCallback((id: number, selected: boolean): void => {
        dispatch(updateCompany({id, selected}))
    },[dispatch]);

    const handleSetSelectedAll = () => {
        dispatch(setSelectedAll(selectedAllState));
        setSelectedAllState(!selectedAllState);
    }

    const Row = ({ index }: { index: number}) => {
        const company = companies[index];
        return (
            <TableRow company={company} checkboxChange={checkboxChange} />
        );
    };

    return (
        <S.TableWrapper>
            <S.Table>
                <S.TableHead>
                    <S.TableRow>
                        <S.TableHeadCell>
                            <label>
                                Select All
                                <input
                                    type="checkbox"
                                    id="selectAllCheckbox"
                                    onChange={handleSetSelectedAll}
                                    checked={selectedAllState}
                                />
                            </label>
                        </S.TableHeadCell>
                        <S.TableHeadCell>Company Name</S.TableHeadCell>
                        <S.TableHeadCell>Company Address</S.TableHeadCell>
                    </S.TableRow>
                </S.TableHead>
                <S.TableBody>
                    <FixedSizeList
                        height={400}
                        itemCount={companies.length}
                        itemSize={40}
                        width="100%"
                        style={{overflowX: 'auto', scrollbarWidth: 'none'}}
                    >
                        {Row}
                    </FixedSizeList>
                </S.TableBody>
            </S.Table>
        </S.TableWrapper>
    );
};