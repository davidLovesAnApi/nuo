;(function(){
	"use strict";
	
	//	Defining the nuo literal object.
	
	//	Throw if its not undefined by type.
	if( "undefined" !== typeof nuo ) throw "\"nuo\" is already defined!";
	//	Create nuo literal object if its typeof is undefined.
	var nuo = window.nuo = {};
	
	
	//	A inbuilt logging method for dev.
	
	// 	Declare a dev flag. Set to false so that it has to be prompted.
	nuo.dev = false;
	//	Create a log array.
	nuo.logArray = [];
	//	The logging method.
	nuo.log = function( sca )
	{
		if( this.dev === false || !window.console ) return;
		if( "undefined" === typeof sca ) sca = "";
		this.logArray.push( [ ( new Date() ).getTime(), sca ] );
	};
	//	
	nuo.logConsole = function()
	{
		var i = 0,
		    l = nuo.logArray.length;
		
		for( ; i < l; i += 1)
		{
			//console.log(i);
			//console.log(i-1);
			var b = i -1;
			if( b > -1 )
				console.log( "wating..." + ( nuo.logArray[i][0] - nuo.logArray[b][0] ) + "\n" + nuo.logArray[i][0] + " " + nuo.logArray[i][1] );
			else
			console.log( nuo.logArray[i][0] + " " + nuo.logArray[i][1] );
		};
	};
	
	
	//	A basic method that returns the callee documents name by splitting and popping path.
	nuo.rtnCurrentDocumentName = function()
	{
	    return window.location.pathname.split('/').pop();
	};
	
	// As an array is an object, use this.
    nuo.isArray = function( arrToCheck )
    {
        return arrToCheck.constructor === Array;
    };
	
	// As a function is an object use this.
    nuo.isFunction = function( funcToCheck )
    {
        return funcToCheck && {}.toString.call( funcToCheck ) === '[object Function]';
    };

	//	Returns true for any string that can be parsed as a date object.
    nuo.isDate = function( str )
    {
        return ( !isNaN( Date.parse( str ) ) );
    };
	
	//	When looking specifically for an object literal.
    nuo.isObject = function( objToCheck )
    {
        return Object.prototype.toString.call( objToCheck ) === '[object Object]';
    };
}());