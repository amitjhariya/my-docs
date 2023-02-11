npm i express dotenv cors mongoose

Create a movie:
Method: POST
URL: http://localhost:3000/api/v1/movies
Body:
json

{
"title": "The Dark Knight",
"year": 2008,
"genres": ["action", "crime", "drama"],
"ratings": [9, 9, 9, 8, 9]
}

Get all movies:
Method: GET
URL: http://localhost:3000/api/v1/movies

Get a movie by ID:
Method: GET
URL: http://localhost:3000/api/v1/movies/{movieId}

Update a movie:
Method: PATCH
URL: http://localhost:3000/api/v1/movies/{movieId}
Body:
json

{
"title": "The Dark Knight Rises"
}

Delete a movie:
Method: DELETE
URL: http://localhost:3000/api/v1/movies/{movieId}
Note: Replace {movieId} in the URL with the actual movie ID.

Create bulk movies:
Method: POST
URL: http://localhost:3000/api/v1/movies/bulk
Body (raw JSON):

[ { "title": "The Dark Knight", "year": 2008, "genres": ["action", "crime", "drama"],
"ratings": [9, 9, 9, 8, 9]
},
{
"title": "The Godfather",
"year": 1972,
"genres": ["crime", "drama"],
"ratings": [9, 9, 9, 9, 8]
}
]


Delete bulk movies:
Method: DELETE
URL: http://localhost:3000/api/v1/movies/bulk
Body (raw JSON):
css

[ "5f4d3b0c12f0a646888a8d73", "5f4d3b0c12f0a646888a8d74"]
Note: Replace the movie IDs with the actual movie IDs.

These are the basic endpoints that a Movies search engine app
