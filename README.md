## What's in here

This is a React-based frontend interface for displaying data from and interacting with an IoT device. This app is able to do the following:

* **Retrieve the device's state** from the backend.
* **Show each of the device's readings**: name, unit, value, timestamp, and active status.
* **Show a counter** showing how many readings are active and how many are inactive.
* **Implement a search input** that filters visible readings by name.
* A user should also be able to **toggle the active status of each reading** by making the proper requests to the backend. After successfully changing the status on the backend, the UI also display the updated state of the active counter.

## Getting started

To run the server locally: ```npm run start```

## Prerequisites

To install dependencies: ```npm install```

## Notes
* I've set up a basic webpack configuration to serve files. Code should hot reload, as should any styles in the `styles.css` file.
