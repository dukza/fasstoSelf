import React from 'react';

// hook
import routes from './../routes';


export const useData = ()=>{
    const getData = (pageId)=>{
        return routes
        .filter(data => data.name === pageId)[0]
    }
    return{
        getData
    }
}