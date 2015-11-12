function checkURL( elem ) {
return elem.value == '' || !elem.value == 'http://' ||
/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test( elem.value );
}

function checkEmail( elem ) {
return elem.value == '' || /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test( elem.value );
}

function checkPhone( elem ) {
var m = /(\d{2}).*(\d{4}).*(\d{4,5})/.exec( elem.value );
if ( m !== null )
elem.value = "(" + m[1] + ") " + m[2] + "-" + m[3];
return elem.value == '' || m !== null;
}

function checkDate( elem ) {
return !elem.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(elem.value);
}

