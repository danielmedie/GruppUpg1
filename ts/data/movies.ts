export interface IMovie {
    id?: number,
    title: string,
    gengre: string,
    // description: string
}

const movies = [
    {
        id: 1,
        title: "Avatar",
        gengre: "SiFi"
    },
    {
        id: 2,
        title: "Bond",
        gengre: "Action"
    },
    {
        id: 3,
        title: "Get Hard",
        gengre: "Komedi"
    },
]

export const getAll = () => {
    return movies
}

export const findById = (id: string) => {
    const parsedId = parseInt(id)

    const movie = movies.find(c => c.id === parsedId)
    return movie
}

export const add = (movie: IMovie) => {
    const lastmovie = movies.slice(-1)[0]

    let id = (lastmovie?.id);
    id = id ? id + 1 : 1;

    movies.push({
        id,
        title: movie.title,
        gengre: movie.gengre
    })
}

export const update = (id: string, movie: IMovie) => {
    const parsedId = parseInt(id)

    const i = movies.findIndex(c => c.id === parsedId)

    movies[i].title = movie.title
    movies[i].gengre = movie.gengre
}

export const deleteById = (id: string) => {
    const parsedId = parseInt(id)

    const i = movies.findIndex(c => c.id === parsedId)
    movies.splice(i, 1)
}