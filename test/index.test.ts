import {describe, expect, test} from '@jest/globals';
import cn from '../src/index'

describe('convert test', () => {
    test('number', () => {
        expect(cn(1,2,3)).toBe('1 2 3');
    });

    test('string', () => {
        expect(cn('card card-wrapper')).toBe('card card-wrapper');
    });

    test('array', () => {
        expect(cn(['card card-wrapper'])).toBe('card card-wrapper');
    });

    test('object', () => {
        expect(cn({name:true, active:true, hover:false})).toBe('name active');
    });

    test('mix', () => {
        const user = 'kong'
        expect(cn([{name:true, active:true, hover:false}, user, 1, 'hi'])).toBe('name active kong 1 hi');
    });
});