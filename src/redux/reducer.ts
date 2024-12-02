import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICompany, ICompanyProps} from "../models/ICompany";

interface CompaniesState {
    companies: ICompany[];
}

const initialState: CompaniesState = {
    companies : [
        {name: 'Google', address: 'Mountain View, California, USA', selected: false, id: 1},
        {name: 'Amazon', address: 'Seattle, Washington, USA', selected: false, id: 2},
        {name: 'Netflix', address: 'Los Gatos, California, USA', selected: false, id: 3},
        {name: 'Adept', address: 'Saint Petersburg, Russia', selected: false, id: 4},

    ]
}

export const RootSlice = createSlice({
    name: "companies",
    initialState,
    reducers:{
        addCompany(state,action:PayloadAction<ICompanyProps>){
            state.companies.push({...action.payload, id: state.companies.length+1})

        },
        deleteCompanies(state){
            state.companies = state.companies.filter(item => !item.selected )
        },
        setSelectedAll(state, action: PayloadAction<boolean>){
            state.companies.map(company => company.selected = !action.payload   )
        },
        updateAllCompanies(state){
            state.companies.map(company => {
                return {...company, selected: !company.selected}
            })
        },
        updateCompany(state, action:PayloadAction<{id: number, selected?: boolean, name?: string, address?: string}>) {
            const {payload} = action
            const company = state.companies.find(item => item.id === action.payload.id)
            if(company){
                if(payload.name) company.name = payload.name
                if(payload.address) company.address = payload.address
                if(payload.selected!== undefined) company.selected = payload.selected

            }
        }
    }
})
export const {
    addCompany,
    deleteCompanies,
    updateCompany,
    updateAllCompanies,
    setSelectedAll
} = RootSlice.actions
export default RootSlice.reducer;