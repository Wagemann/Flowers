# Flowers

Create a multi component React/Redux/Node app to process results from a REST service.

Backend (Node Express Server)

Frontend (React/Redux SPA)

## Nick Wagemann

* [API Design](Docs/api.md)
* [GHI Design](Docs/ghi.md)
* [Technologies](Docs/technologies.md)



Fork the Project

Copy the HTTPS Link

In the terminal run "git clone (paste in the HTTPS Link)"

Cd into Server 

In terminal run "nodemon server.js"

Cd into Client

In the terminal run "npm start"

---
When site loads up if you type into the Search Bar you will see cards generate with the data on them.

Upon Clicking the cards will bring you to the edit form for the car selected. The data from that card will be preloaded onto the card.

If you change the title or the body of the data in the update form and press the "Post" button you will be sent back to the home page. 

As long as you do not refresh the page and navigate via the "Nick Wagemann Assessment" link in the nav bar, which will bring you back to the Main page; or if you press the "Post" Button on the update form page you will see that the data you changed will persist as it is kept in the redux store. 