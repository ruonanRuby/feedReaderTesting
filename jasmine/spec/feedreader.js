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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each contains legal url', function() {
           for (let feed of allFeeds) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
           }
        });


        /* The test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each contains legal name', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            })
        });

    });


    /* A new test suite named "The menu" */
    
    describe('The menu', function() {
        const menu = document.querySelector('body');

        /* The test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element hidden by default', function() {
            expect(menu.classList).toContain('menu-hidden');
        });

         /* The test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu display when clicked', function() {
            expect(menu.classList.toggle('menu-hidden')).toBe(false);
            expect(menu.classList.toggle('menu-hidden')).toBe(true);
         });


    });


        
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* The test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0,done);
        });

    });


    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let initialFeed;
        let newFeed;
         /* The test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = document.querySelector('.feed').textContent;
                done();
            });
        });

        it('loads new feed', function() {
            loadFeed(2, function() {
                newFeed = document.querySelector('.feed').textContent;
                expect(newFeed).not.toEqual(initialFeed);
                done();
            })
        });

    });

}());
