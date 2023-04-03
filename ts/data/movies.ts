export interface IMovie {
    id?: number,
    title: string,
    gengre: string,
    description: string
}

const movies = [
    {
        id: 1,
        title: "Avatar",
        gengre: "SiFi",
        description: "Long but good"
    },
    {
        id: 2,
        title: "Bond",
        gengre: "Action",
        description: "Short and sweet"
    },
    {
        id: 3,
        title: "Get Hard",
        gengre: "Komedi",
        description: "MeH"
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
        gengre: movie.gengre,
        description: movie.description
    })
}

export const update = (id: string, movie: IMovie) => {
    const parsedId = parseInt(id)

    const i = movies.findIndex(c => c.id === parsedId)

    movies[i].title = movie.title
    movies[i].gengre = movie.gengre
    movies[i].description = movie.description
}

export const deleteById = (id: string) => {
    const parsedId = parseInt(id)

    const i = movies.findIndex(c => c.id === parsedId)
    movies.splice(i, 1)
}