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
	
	
	//	Having a beacon is a greatway to async send data strings to the server
	
	//	Beacon for Async data send
	nuo.beacon = function( strUrl, arrNameValue )
	{
		nuo.log("nuo.beacon(strUrl, arrNameValue)");
		
		//	Where relative uri, has not been added yet to nuo
		if(typeof strUrl !== "string") throw "typeof strUrl !== string";
		if(!nuo.isArray(arrNameValue)) throw "typeof arrNameValue !== array";
		
		//	This is very concise, but do I need to convert for url?
		return (new Image()).src = strUrl +"?"+arrNameValue.join("&");
	};
	
	
	//	cookies can be very helpful to have. Here are some basic methods to support them.
	//	Basic cookie operations; get, set and delete.

	//	set a cookies name and and value.
	nuo.setCookie = function( strName, scaValue )
	{
		nuo.log( "nuo.setCookie( strName, scaValue )" );
		
		//	no cookie name no cookie!
		if ( typeof strName !== "string" ) return;
		
		// no value. Provide empty value, so that the cookie can still be set.
        if ( scaValue === undefined ) scaValue = "";
		
		var expires;
		//	A date function, returning a future date.
		function rtnDate()
		{
			//  set or get a future date.
            var d = new Date(),
                m = d.getMonth(),
                t = d.getDate();
			
			//	Assign new expiry date in the future.
            d.setMonth( m+1, t );
			return d;
		};
		
		
		//	conditionally set the expires date.
		if ( arguments[2] )
        {
			if( nuo.isDate( arguments[2] ) ) 
			{
				expires = arguments[2];
			}
			else
			{
				expires = rtnDate();
			}
        }
        else
        {
            expires = rtnDate();
        }
		
		//   Actually sets the cookie name, value pair.
        document.cookie = strName + "=" + scaValue + ";expires=" + expires.toUTCString()+ ";";
		return;
	};
}());