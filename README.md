# Express Redis Docker app to order books

The following is a side project to familiarize myself with Redis caching by simulating 
an online bookstore where you can 'order' a book and which are stored in a cache.

Requirements: [Docker Community Edition](https://www.docker.com/community-edition)

To start the app run: `docker-compose up`.

The bookstore will be running at localhost:3000(http://localhost:3000) at which you can 
order books to be stored in the cache. To view all the cache entries go to 
localhost:3000/admin(http://localhost:3000/admin).
