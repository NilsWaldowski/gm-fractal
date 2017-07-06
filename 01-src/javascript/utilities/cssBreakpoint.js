import './../vendor/on-media-query'
import {  debugMode } from './projectSettings'

let queries = [
    {
        context : 'xxs',
        //match   : function() { if (debugMode) { console.log('MATCH: xxs')} },
        match   : function() { debugMode ? console.log('MATCH: xxs') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: xxs') : false }
    },
    {
        context : 'xs',
        match   : function() { debugMode ? console.log('MATCH: xs') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: xs') : false; }
    },
    {
        context : 'sm',
        match   : function() { debugMode ? console.log('MATCH: sm') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: sm') : false; }
    },
    {
        context : 'md',
        match   : function() { debugMode ? console.log('MATCH: md') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: md') : false; }
    },
    {
        context : 'lg',
        match   : function() { debugMode ? console.log('MATCH: lg') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: lg') : false; }
    },
    {
        context : 'xl',
        match   : function() { debugMode ? console.log('MATCH: xl') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: xl') : false; }
    },
    {
        context : 'xxl',
        match   : function() { debugMode ? console.log('MATCH: xxl') : false },
        unmatch : function() { debugMode ? console.log('UNMATCH: xxl') : false; }
    }
    /*
    * Example of combined Breakpoints
    {
        context : ['lg', 'xl', 'xxl'],
        match: function() {
            ee.trigger('screen:desktop');
        },
        unmatch : function() {
            ee.trigger('screen:mobile');
        }
    }
    */
];

oMQ.init(queries);
