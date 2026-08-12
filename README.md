# 🎬 Smart Movie Recommendation System

A simple and user-friendly web-based movie recommendation system developed using HTML, CSS, and JavaScript.

The system recommends movies based on user-selected genres and movie ratings using a rule-based recommendation approach. No machine learning is used.

---

## 📌 Project Overview

The Smart Movie Recommendation System helps users discover movies based on their interests.

Users can:

- Search for movies
- Select movie genres
- Get movie recommendations
- View movie ratings
- View movie details
- Explore trending movies
- Add movies to My List
- Keep their saved movies using browser local storage

The project is designed to be simple, attractive, and easy to use.

---

## 🎯 Objectives

The main objectives of this project are:

1. To develop a simple movie recommendation website.
2. To recommend movies based on user preferences.
3. To provide genre-based movie filtering.
4. To provide a movie search feature.
5. To display movie ratings and details.
6. To allow users to maintain a personal movie list.
7. To create a responsive and user-friendly interface.

---

## 🧠 Recommendation System

This project uses a **rule-based recommendation algorithm** instead of Machine Learning.

The recommendation process works as follows:

1. The user selects a movie genre.
2. The system filters movies according to the selected genre.
3. Movies are evaluated using their ratings.
4. Movie year is also considered as a small ranking factor.
5. Movies with higher recommendation scores are displayed first.

### Recommendation Score

The project uses a simple scoring approach based mainly on:

- Movie rating
- Movie release year
- Selected genre

This makes the recommendation process easy to understand and explain.

---

## ✨ Features

### 🔍 Movie Search

Users can search for movies by title or genre.

### 🎭 Genre Filtering

Users can select genres such as:

- Action
- Comedy
- Drama
- Sci-Fi
- Thriller
- Romance

### ⭐ Movie Ratings

Each movie displays its rating.

### 🔥 Trending Movies

The system displays a collection of highly rated movies in the trending section.

### 🎬 Movie Details

Users can click a movie to view:

- Movie title
- Release year
- Genre
- Rating
- Description

### ❤️ My List

Users can add movies to their personal list.

### 💾 Local Storage

The browser's local storage is used to save the user's movie list.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Storage

- Browser Local Storage

### Development Tools

- Visual Studio Code
- Web Browser
- GitHub

---

## 📂 Project Structure

```text
smart-movie-recommendation-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
