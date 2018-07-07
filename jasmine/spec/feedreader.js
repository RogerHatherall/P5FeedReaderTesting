/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        /* This tests to make sure that the allFeeds variable has been defined and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and ensures
        that it has a URL defined and that the URL is not empty. */    
        it('has links', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* This test loops through each feed in the allFeeds object and ensures
         that it has a name defined and that the name is not empty. */
        it('has names', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });

    /* This test suite tests the menu functionality. */
    describe('The menu', function() {
        /*When the hamburger button is clicked the menu-hidden class is toggled.
        The class will be in the body tag when the menu is hidden. */
        let $menuHidden = $('body').hasClass('menu-hidden');
        const $menuIconLink = $('.menu-icon-link');

        /* This test ensures that the menu is hidden by default when the page loads */
        it('is hidden when page loads', function() {
            expect($menuHidden).toBeTruthy();
        });

         /* This test ensures the menu changes visibility when the menu icon is clicked.
         The menu should display when the hamburger button is clicked and hide when it's clicked again. */
        it('is displayed when the hamburger button is clicked and hidden when the button is clicked again',function(){
            /* simulate a click */
            $menuIconLink.trigger("click");
            /* Check body tag for class 'menu-hidden */
            $menuHidden = $('body').hasClass('menu-hidden');
            expect($menuHidden).not.toBeTruthy();
            /* simulate another click */
            $menuIconLink.trigger("click");
            /* Check body tag for class 'menu-hidden */
            $menuHidden = $('body').hasClass('menu-hidden');
            expect($menuHidden).toBeTruthy();
         });  
    });

    /* This test suite ensures that when the loadFeed function is called and completes its work,
    there is at least a single .entry element within the .feed container. */
    describe('Initial Entries', function() {

            /*Call the loadFeed function */
            beforeEach((done) => {
                loadFeed(0, done);
            });
            
            /*Check the length of the container */
            it('has at least one feed ', (done) => {
                expect($('.feed .entry').length).toBeGreaterThan(0);
                done();
            });
    });

    /* This test suite ensures when a new feed is loaded
    by the loadFeed function that the content actually changes. */
    describe('New Feed Selection', function() {

        let oldFeed,
            newFeed;
        
        /* This attempts to chain the loadFeed calls so that the first feed is loaded before the second. */
        beforeEach((done) => {
            loadFeed(0, () => {
                /*Store the first feed of the array */
                oldFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                    /*Store the second feed of the array */
                    newFeed = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        /* Check the new one against the first one*/
        it('changes the content', (done) => {
            expect(newFeed).not.toBe(oldFeed);
            done();
        });
    });
}());
