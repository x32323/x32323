import {number} from '../src/index';
import assert from 'assert';

describe('Test number modules', function(){

    it('random', async function(){
        const n = number.random(500, 100)
        assert(n > 500 && n < 1000, 'random number error')
    })

})