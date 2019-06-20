# giphy-search
Simple GIPHY interface

I created this using a basic HTML and JavaScript structure. I used the jQuery lirbray since that allowed for simple use of the GIPHY API within JavaScript. I created a const variable for the API key which would be extremely useful if more functions and features were added to this project. The same concept was applied to the searchKeyword variable I created. I used the jQuery append() method to insert the GIPHY content into a div container and then wrote a simple for loop to do this multiple times when the function is initiated. Each time the gifSearch() function is intitiated, an empty() method will run on the container to make sure there is no content in the container, the value of the search field will be grabbed, then the append() method will fill the container with the GIFs it found from the search.

If I had more time I would probably take advantage of some of the GIPHY API parameters more, adding a random GIF button to refine the search a bit more as well as adding some more stylization. Overall, I enjoyed this and will probably continue to tinker with it.
