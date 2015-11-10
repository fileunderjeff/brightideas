/**
 * Contain general JavaScript functions used in AnsPress
 * @author Rahul Aryan
 * @license GPL 2+
 * @since 2.0
 */

/**
 * For returning default value if passed value is undefined.
 * @param  {mixed} $value   A value to check
 * @param  {mixed} $default return this if $value is undefined
 * @return {string}
 * @since 2.0
 **/
function ap_default($value, $default){
	if(typeof $value !== 'undefined')
		return $value;

	return $default;
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function strEndsWith(str, suffix) {
    return str.match(suffix+"$")==suffix;
}

jQuery(document).ready(function () {
	jQuery("#ask_form").submit(function(e) {
        var domain = "houstontx.gov";
        var domain2 = "houstonpolice.org";
        var domain3 = "cityofhouston.net";
        var email = jQuery('#name').val();

        if (!email) {
            alert("Please enter email!");
            e.preventDefault();
            return false;
        } else if (!validateEmail(email)) {
			alert("Please enter valid email!");
            e.preventDefault();
            return false;
        } else if (!strEndsWith(email, domain) && !strEndsWith(email, domain2) && !strEndsWith(email, domain3)) {
            alert("Are you supposed to be here? This is only for City of Houston employees.");
            e.preventDefault();
            return false;
        }

        return true;
    });
});