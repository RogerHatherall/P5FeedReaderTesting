# P5FeedReaderTesting

This project is to amend the feedreader.js supplied by Udacity to include the following Jasmine tests:

A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
A new test suite named `"The menu"`.
A test that ensures the menu element is hidden by default. 
A test that ensures the menu changes visibility when the menu icon is clicked. (This test should have two expectations: does the menu display when clicked and does it hide when clicked again.)
A new test suite named `"Initial Entries"`.
A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
A new test suite named `"New Feed Selection"`.
A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# How to use:

Open the index.html file in a web browser.
Scroll down to the bottom of the page to see the Jasmine test results displayed under the feeds.

# NB

I have sometimes found the async functionality failed with a timeout error but reloading the page corrects this.
