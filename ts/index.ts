import express from "express";
// const express = require('express')

const exphbs = require('express-handlebars')

import * as moviesData from "./data/movies"
import { IMovie } from "./data/movies";

const app = express()

// handlebars

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


/// movies ///

//  all movies
app.get('/movies', async (req, res) => {
    const movies = moviesData.getAll()

    res.render('movies-list', { movies })
})

// Saves a new movie
app.post('/new-movies', async (req, res) => {
    const newmovie: IMovie = {
        title: req.body.title,
        gengre: req.body.gengre,
        description: req.body.description
    }

    moviesData.add(newmovie)

    res.redirect('/movies')
})

//get one movie
app.get('/movies/:id', async (req, res) => {
    const movie = moviesData.findById(req.params.id)

    res.render('movies-single', movie)
})

// Updates one movie
app.post('/movies/:id/update', async (req, res) => {
    moviesData.update(req.params.id, {
        title: req.body.title,
        gengre: req.body.gengre,
        description: req.body.description
    })
    res.redirect('/movies')
})

// Deletes a movie
app.post('/movies/:id/delete', async (req, res) => {
    moviesData.deleteById(req.params.id)
    res.redirect('/movies')
})

app.listen(8008, () => {
    console.log("http://localhost:8008/");
})