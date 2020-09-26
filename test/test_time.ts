import {time} from '../src/index';
import { sleep } from '../src/time';

describe('Test time modules',function(){

    it('test sleep', async function(){
        console.log("start test");
        await sleep(1000);
        console.log("test sucess");
    })

})