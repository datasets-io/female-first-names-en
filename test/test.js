/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	list = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-male-first-names-en', function tests() {

	it( 'should export an array', function test() {
		expect( list ).to.be.an( 'array' );
	});

	it( 'should only consist of strings', function test() {
		var len = list.length,
			i;

		for ( i = 0; i < len; i++ ) {
			assert.isString( list[ i ], i );
		}
	});

});
