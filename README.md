# Flix It Up Application

The **Flix It Up** application provides registered users with access to information about different movies, directors, and genres. Users can register an account, update their personal information, and create a list of their favorite movies. 

## Objective

This repository is a successor of  [Flix It Up server side component](https://github.com/BriWins/MyFlix.git). Using React, Flix It Up client-side is based on its existing REST API and database. The interface makes requests to and receives responses from the server-side. It includes several interface views built using the React library that handles data through the previously-defined REST API endpoints.

## **_Credits_**

**Primary Stakeholder:** [CAREERFOUNDRY](https://careerfoundry.com/)

**CAREERFOUNDRY Tutor:** [Adam Pagels](https://www.adampagels.com/)

**CAREERFOUNDRY Mentor:** Alfredo Salazar Vélez

## Technical Requirements

- single-page application (SPA)
- uses state routing to navigate between views and share URLs
- uses [Parcel](https://parceljs.org/) as its build tool
- written using the [React](https://reactjs.org/) library and in ES2015+
- uses [Bootstrap](https://react-bootstrap.github.io/) as a UI library for styling and responsiveness
- contain a mix of class components and function components


## Essential Features :rocket:

**Main View**

- Returns a list of ALL movies to the user
- Ability to select a moview for more details

**Single Movie View**

- Returns data (description,genre,director,image) about a single movie to the user
- Allows user to add a movie to their list of favorites
- Allows users to see which actors star in whcih movies
- Allows users to view more information about different movies, such as the release date and movie rating

**Login View**

- Allows users to log in with a username and password
- Registration View
- Allows new users to register (username, passoword, email, and birthday)

**Genre View** 

- Returns data about a genre, with a name and description

**Director View**

- Returns data about a director (name, bio, birth year, death year (if applicable))

**Profile view** 

- Allows users to update their user info (username, password, email, date of birth)
- Allows existing users to deregister
- Displays favorite movies
- Allows user to remove a movie from a list of their favorites
