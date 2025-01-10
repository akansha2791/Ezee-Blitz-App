import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'
import { uniq, sortBy } from "lodash";
import {loremIpsum} from 'lorem-ipsum'
import {stringSimilarity as getScore} from 'string-similarity-js'
const categories = uniq(data.map((product) => product.category)).sort()
const DEFAULT_CATEGORY = "All"

data.forEach((product) => {
    product.description = loremIpsum()
})
const initialState = {
    products: data,
    productFromSearch: data,   
    categories: [DEFAULT_CATEGORY, ...categories],
    selectedCategory: DEFAULT_CATEGORY,
    single: data[0],
    singleSimilarProduct: data.slice(0,4),
    searchTerm: ""
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchTerm : (state, action) => {
            const {payload: searchTerm} = action
            state.searchTerm = searchTerm
            // console.log(state.searchTerm)
            if(state.searchTerm.length > 0){
            state.productFromSearch.forEach((p)=> {
              p.simScore = getScore(`${p.name} ${p.category}`, state.searchTerm)
            })
            state.productFromSearch = sortBy(state.productFromSearch, "simScore").reverse()
        }
    },
    setSelectedCategory : (state, action) => {
        const {payload: selectedCategory} = action
        state.selectedCategory = selectedCategory
        state.searchTerm = ""
        if(state.selectedCategory === DEFAULT_CATEGORY){
            state.productFromSearch = state.products
        }else{
           state.productFromSearch = state.products.filter((p)=> {
                return p.category === state.selectedCategory
            })
        }
    },
     setSingleProduct: (state, action) => {
        const {payload: id} = action
        state.single = state.products.find((p)=>{
           return p.id === +id;
        })
        state.singleSimilarProduct = state.products.filter((p)=> {
             return p.category === state.single.category && p.id !== state.single.id
        })        
     }
    }
})
export const {setSearchTerm, setSelectedCategory, setSingleProduct} = productSlice.actions;
export default productSlice.reducer

