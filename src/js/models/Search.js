// 6b4bf1afa285c09297fb9d6c21d03b03
// https://www.food2fork.com/api/search

import axios from 'axios';

export default class Search {

    constructor(query) {

        this.query = query;
    }

    async getResuts(query) {

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '5b0c1b90feff6b30058eb4804123e4a3';
    
        try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
    
        this.result = res.data.recipes;
        console.log(this.result);
       // console.log(this.result);
    
    } catch(error) {
        
        alert(error);
    }
    }
}



