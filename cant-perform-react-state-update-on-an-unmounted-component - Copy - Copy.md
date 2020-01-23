I was getting this error in my airport scraper app.

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

it was happening when I was switching pages so I figured out that because I was making an API call (actually scraping for data, but anyway) so by the time the data came back, I was switching away from the page and the place the data wanted to go was no longer there. So, it cant update state on something that is no longer there.

you can add a

https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
