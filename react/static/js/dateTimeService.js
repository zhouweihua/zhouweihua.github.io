define(["zepto","moment"],function(t,r){function n(){if(!(this instanceof n))return new n}return(n=n.prototype={_init:function(){},stringFromDateyyyy_MM_dd:function(t){return r(t).format("YYYY-MM-DD")},timeForYMDSecondDataString:function(t){return r(t).format("YYYY-MM-DD")},hourMinuteFormDate:function(t){return r(t).format("HH:mm")},month_DayFormDate:function(t){return r(t).format("MM-DD")},offsetDateFrom:function(t,n){var e=r(t,"YYYY-MM-DD")+1e3*parseInt(n,10)*60*60*24;return r(e).format("YYYY-MM-DD")},sharedDateFormatyyyy_MM_dd_HH_mm_ss:function(t){return r(t,"YYYY-MM-DD HH:mm:ss")},calcDaysFromBegin:function(t,n){var e=r(t,"YYYY-MM-DD"),a=r(n,"YYYY-MM-DD");return parseInt(Math.abs(e-a)/1e3/60/60/24)+1},getWeekFromDate:function(t){var e=r(t,"YYYY-MM-DD").weekday();return n.weekNumMapString(e)},weekNumMapString:function(t){switch(t){case 1:return"周一";case 2:return"周二";case 3:return"周三";case 4:return"周四";case 5:return"周五";case 6:return"周六";case 0:return"周天"}}})._init(),n});