var inst = mobiscroll.eventcalendar('#demo-desktop-month-view', {
    theme: 'auto',
    themeVariant: 'light',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: false,
    dragToResize: false,
    eventDelete: false,
    view: {
        calendar: {
            type: 'month',
            count: false,
            labels: 3,
            popover: true,
        },
        
    },
    onEventClick: function (event, inst) {
        mobiscroll.toast({
            message: event.event.title
        });
    }
      
});
mobiscroll.util.http.getJson('https://trial.mobiscroll.com/events/?vers=5', function (events) {
    inst.setEvents(events);
}, 'jsonp'); //essentially, fill in the link where we're gonna import events from