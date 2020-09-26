import {file} from '../src/index';
import assert from 'assert';

describe('Test file modules', function(){

    it('isJson', function(){
        const a = `{"xxx":123, "aaa":"bbb"}`
        const b = "dww"
        assert(file.isJsonStr(a))
        assert(!file.isJsonStr(b))
    })

    it('isExists', async function(){
        assert(await file.isExists('./test/filetest/abc.json'));
        assert(!await file.isExists('./test/filetest/axx.bxx'));
    })

    it('size', async function(){
        await file.size('./test/filetest/abc.json')
    })

    it('read and write', async function() {
        const msg = {
            "xxx":123,
            "bbq":"abd"
        }
        await file.write('./test/filetest/ttt.json', msg)
        const datas = await file.read('./test/filetest/ttt.json');
        assert(datas["xxx"] == 123);
    })

})