module.exports = {
  emptyDoc: 'Write …',
  search:   'Search …',
  footer:   'write lite, open source',
  share:    'share',
  open:     'open',
  modified: 'modified',
  welcome:  require('./welcome.txt'),
  secondAgo:   function ()  { return 'a second ago'     ; },
  secondsAgo:  function (x) { return x + ' seconds ago' ; },
  minuteAgo:   function ()  { return 'a minute ago'     ; },
  minutesAgo:  function (x) { return x + ' minutes ago' ; },
  hourAgo:     function ()  { return 'an hour ago'      ; },
  hoursAgo:    function (x) { return x + ' hours ago'   ; },
  dayAgo:      function ()  { return 'a day ago'        ; },
  daysAgo:     function (x) { return x + ' days ago'    ; },
  monthAgo:    function ()  { return 'a month ago'      ; },
  monthsAgo:   function (x) { return x + ' months ago'  ; },
  yearAgo:     function ()  { return 'a year ago'       ; },
  yearsAgo:    function (x) { return x + ' years ago'   ; }
  };
