'use strict';

var names = require( './../lib' );

var len = names.length,
	N = 10,
	idx,
	i;

// Select random names from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( names[ idx ] );
}
