# Get Users Location

This project lists the location of users in detail using their `IP address`.
It displays the location of the user with a popup on the map.
At the same time, users can access detailed information about IP-related location by manually entering their IP addresses.
`Live Demo` => [GetUserLocation](get-user-location.netlify.app)


## What information do we provide?

`Country:` Information about which country the IP address belongs to.
`Region:` In which part of the country was access provided.
`City:` The name of the city where the user is located.
`Country Code:` Countries short alphabetic geographical codes.
`Calling Code:` Country calling codes, which are issued for special services, or for international/inter regional zones.
`Currency:` Currency of the country where the user is located.
`Org:` Internet provider information.

## Which API and Map was used?

[ipapi.co](https://ipapi.co/) : Provides a REST API to find the location of an IP address.
The API can also help you to find the `public IP address` of a device.
The API can be integrated in your application either on the server side or on the client side.

[Leaflet](https://leafletjs.com/) : Leaflet is the leading **_open-source_** JavaScript library for mobile-friendly interactive maps. Weighing just about **39 KB** of JS, it has all the mapping features most developers ever need.
Leaflet is designed with _**simplicity**_, performance and **_usability_** in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to.

[Mapbox](https://www.mapbox.com/) : Mapbox is a provider of custom online maps for websites and applications such as Foursquare, Lonely Planet, the Financial Times, The Weather Channel, Instacart Inc. and Snapchat.



