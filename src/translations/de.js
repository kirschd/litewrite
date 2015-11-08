module.exports = {
  emptyDoc: 'Schreibe etwas …',
  search:   'Suchen …',
  footer:   'write lite, open source',
  share:    'teilen',
  open:     'öffnen',
  modified: 'zuletzt bearbeitet',
  welcome:  require('./welcome-de.txt'),
  secondAgo:   function ()  { return 'vor einer Sekunde'      ; },
  secondsAgo:  function (x) { return 'vor ' + x + ' Sekunden' ; },
  minuteAgo:   function ()  { return 'vor einer Minute'       ; },
  minutesAgo:  function (x) { return 'vor ' + x + ' Minuten'  ; },
  hourAgo:     function ()  { return 'vor einer Stunde'       ; },
  hoursAgo:    function (x) { return 'vor ' + x + ' Stunden'  ; },
  dayAgo:      function ()  { return 'vor einem Tag'          ; },
  daysAgo:     function (x) { return 'vor ' + x + ' Tagen'    ; },
  monthAgo:    function ()  { return 'vor einem Monat'        ; },
  monthsAgo:   function (x) { return 'vor ' + x + ' Monaten'  ; },
  yearAgo:     function ()  { return 'vor einem Jahr'         ; },
  yearsAgo:    function (x) { return 'vor ' + x + ' Jahren'   ; }
};
