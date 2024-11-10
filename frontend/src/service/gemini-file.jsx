import { GoogleGenerativeAI } from "@google/generative-ai";




const apiKey = import.meta.env.VITE_GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location : Goa ,for 3 Days with a cheap budget for couple travelers, suggest an itinerary with Place Name , Place Details , Place Image URL, Geo Co-ordinates, Time travel each of the locations for 3 Days with each day plan with best time to Visit in JSON format"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\"itinerary\": [{\"day\": 1, \"plan\": [{\"placeName\": \"Calangute Beach\", \"placeDetails\": \"One of the most popular beaches in Goa, known for its lively atmosphere, water sports, and nightlife.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Calangute_Beach%2C_Goa%2C_India.jpg/1280px-Calangute_Beach%2C_Goa%2C_India.jpg\", \"geoCoordinates\": \"15.4642° N, 73.8211° E\", \"timeToTravel\": \"1 hour\", \"bestTimeToVisit\": \"Morning or evening for a pleasant experience\"}, {\"placeName\": \"Baga Beach\", \"placeDetails\": \"Adjacent to Calangute, Baga Beach is famous for its vibrant nightlife, water sports, and delicious seafood.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Baga_Beach_%28Goa%29.jpg/1024px-Baga_Beach_%28Goa%29.jpg\", \"geoCoordinates\": \"15.4621° N, 73.8288° E\", \"timeToTravel\": \"30 minutes\", \"bestTimeToVisit\": \"Evening for the vibrant atmosphere\"}, {\"placeName\": \"Tito's Lane\", \"placeDetails\": \"A lively street in Baga known for its numerous bars, clubs, and restaurants. Perfect for an evening filled with music and entertainment.\", \"placeImageURL\": \"https://www.goabooking.com/blog/wp-content/uploads/2017/05/Titos-Lane-Baga-Goa.jpg\", \"geoCoordinates\": \"15.4615° N, 73.8311° E\", \"timeToTravel\": \"5 minutes\", \"bestTimeToVisit\": \"After sunset for the nightlife scene\"}]}, {\"day\": 2, \"plan\": [{\"placeName\": \"Old Goa\", \"placeDetails\": \"A historic site with impressive churches like Se Cathedral and Basilica of Bom Jesus, offering a glimpse into Goa's colonial past.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Basilica_of_Bom_Jesus,_Old_Goa%2C_Goa%2C_India.jpg/1280px-Basilica_of_Bom_Jesus,_Old_Goa%2C_Goa%2C_India.jpg\", \"geoCoordinates\": \"15.5080° N, 73.8385° E\", \"timeToTravel\": \"1 hour\", \"bestTimeToVisit\": \"Morning or afternoon for a peaceful exploration\"}, {\"placeName\": \"Panaji\", \"placeDetails\": \"The capital city of Goa, Panaji offers a mix of Portuguese architecture, bustling markets, and charming cafes.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Panjim_Mandovi_River_Goa_India.jpg/1024px-Panjim_Mandovi_River_Goa_India.jpg\", \"geoCoordinates\": \"15.4977° N, 73.8266° E\", \"timeToTravel\": \"30 minutes\", \"bestTimeToVisit\": \"Morning or afternoon for a relaxed stroll\"}, {\"placeName\": \"Fontainhas\", \"placeDetails\": \"A colorful neighborhood in Panaji known for its charming houses with Portuguese architecture.\", \"placeImageURL\": \"https://www.goabooking.com/blog/wp-content/uploads/2019/03/Fontainhas-Goa.jpg\", \"geoCoordinates\": \"15.4945° N, 73.8295° E\", \"timeToTravel\": \"10 minutes\", \"bestTimeToVisit\": \"Any time for a picturesque walk\"}]}, {\"day\": 3, \"plan\": [{\"placeName\": \"Dudhsagar Falls\", \"placeDetails\": \"A stunning four-tiered waterfall surrounded by lush greenery. You can trek to the falls or take a jeep ride.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Dudhsagar_Falls_%281%29.jpg/1024px-Dudhsagar_Falls_%281%29.jpg\", \"geoCoordinates\": \"15.2465° N, 74.1067° E\", \"timeToTravel\": \"2 hours\", \"bestTimeToVisit\": \"Monsoon season (July-September) for the most impressive flow\"}, {\"placeName\": \"Palolem Beach\", \"placeDetails\": \"A serene beach in South Goa known for its calm waters, beautiful sunset views, and relaxed atmosphere.\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Palolem_Beach_2015.jpg/1280px-Palolem_Beach_2015.jpg\", \"geoCoordinates\": \"15.0269° N, 73.9703° E\", \"timeToTravel\": \"3 hours\", \"bestTimeToVisit\": \"Evening for a tranquil sunset\"}]}]}\n\n```"},
      ],
    },
  ],
});

export const PROMPT = "Generate Travel Plan for Location : {location} ,for {totalDays} Days with a {budget} budget for {traveler} travelers, suggest an itinerary with Place Name , Place Details , Place Image URL, Geo Co-ordinates, Time  travel each of the locations for {totalDays} Days with each day plan with best time to Visit in JSON format"




