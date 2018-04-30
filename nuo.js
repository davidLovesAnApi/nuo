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
}());