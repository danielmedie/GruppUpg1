import express from "express";
// const express = require('express')

const exphbs = require('express-handlebars')


import * as moviesData from "./data/movies"
import * as usersData from "./data/users"

import { IMovie } from "./data/movies";
import { IUser } from "./data/users";


const app = express()

// Set up handlebars

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

// Shows a page with all movies
app.get('/movies', async (req, res) => {
    const movies = moviesData.getAll()

    res.render('movies-list', { movies })
})

// Saves a new movie
app.post('/new-movie', async (req, res) => {
    const newmovie: IMovie = {
        title: req.body.title,
        gengre: req.body.gengre
    }

    moviesData.add(newmovie)

    res.redirect('/movies')
})

// Shows a page with one movie
app.get('/movies/:id', async (req, res) => {
    const movie = moviesData.findById(req.params.id)

    res.render('movies-single', movie)
})

// Updates one movie
app.post('/movies/:id/update', async (req, res) => {
    moviesData.update(req.params.id, {
        title: req.body.title,
        gengre: req.body.gengre
    })

    res.redirect('/movies')
})

// Deletes a movie
app.post('/movies/:id/delete', async (req, res) => {
    moviesData.deleteById(req.params.id)

    res.redirect('/movies')
})


/// Users ///
app.get('/users', async (req, res) => {
    // TODO: Show all users
    
    const users = usersData.getAll()
    res.render("users-list", { users })

})

app.post('/new-user', async (req, res) => {
    const newUser: IUser = {
        name: req.body.name,
        description: req.body.description
    }

    usersData.add(newUser)

    res.redirect('/users')
})

app.get('/users/:id', async (req, res) => {
    const user = usersData.findById(req.params.id)

    res.render('users-single', user)
})

app.post('/users/:id/update', async (req, res) => {
    usersData.update(req.params.id, {
        name: req.body.name,
        description: req.body.description
    })

    res.redirect('/users')
})

app.post('/users/:id/delete', async (req, res) => {
    usersData.deleteById(req.params.id)

    res.redirect('/users')
})



app.listen(8008, () => {
    console.log("http://localhost:8008/");
})