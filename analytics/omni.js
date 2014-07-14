// Version: 20050603
// This file should be included before omniture javascript.
        // name - name of the desired cookie
        // return string containing value of specified cookie or null if cookie does not exist
        function getCookie(name)
        {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1)
            {
                begin = dc.indexOf(prefix);
                if (begin != 0)
                {
                    return null;
                }
            }
            else
            {
                begin += 2;
            }
            var end = document.cookie.indexOf(";", begin);
            if (end == -1)
            {
                end = dc.length;
            }
            return unescape(dc.substring(begin + prefix.length, end));
        }

        // These are the variables that can be used to assign to omniture s_prop.
        var reg_gender      = '';
        var reg_age_range   = '';
        var reg_subscriber  = '';
        var reg_zipcode     = '';

        function parseDemographicCookie()
        {
            var demographics = getCookie("mdwdemo");
            var authentication = getCookie("mdwac");
            if (demographics != null && demographics.length > 7)
            {
                var comma_a = demographics.indexOf(',');
                var comma_b = demographics.indexOf(',', comma_a + 1);
                var comma_c = demographics.indexOf(',', comma_b + 1);

                var gender = demographics.substring(0,comma_a);
                var age_range = demographics.substring(comma_a + 1, comma_b);
                var subscriber = demographics.substring(comma_b + 1,comma_c);

                reg_zipcode = demographics.substring(comma_c + 1, demographics.length);

                if ('1' == subscriber)
                {
                    reg_subscriber = 'Y';
                }
                else if ('0' == subscriber)
                {
                    reg_subscriber = 'N';
                }

                if ('1' == gender)
                {
                    reg_gender = 'M';
                }
                else if ('0' == gender)
                {
                    reg_gender = 'F';
                }

                if('A' == age_range)
                {
                    reg_age_range = '13-17';
                }
                else if('B' == age_range)
                {
                    reg_age_range = '18-24';
                }
                else if('C' == age_range)
                {
                    reg_age_range = '25-34';
                }
                else if('D' == age_range)
                {
                    reg_age_range = '35-44';
                }
                else if('E' == age_range)
                {
                    reg_age_range = '45-54';
                }
                else if('F' == age_range)
                {
                    reg_age_range = '55-64';
                }
                else if('G' == age_range)
                {
                    reg_age_range = '65+';
                }
            }
            else if (authentication != null)
            {
            	// This call needs to be removed if cookie is only to be set at login and signup.
                // document.write('<link rel="stylesheet" type="text/css" href="http://stats.morris.com/forge?tp=REGISTRATION%20DEVELOPMENT&tl=11&temp_type=DETAIL&category=DEFAULT%20IMPLEMENTATION">');
            }
        }

        parseDemographicCookie();