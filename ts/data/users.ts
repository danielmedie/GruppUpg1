export interface IUser {
    id?: number,
    name: string,
    description: string
}

const users = [
    {
        id: 1,
        name: "Daniel",
        description: "lång"
    },
    {
        id: 2,
        name: "Oliver",
        description: "kort"
    },
    {
        id: 3,
        name: "Carl",
        description: "knubbig"
    },
]

export const getAll = () => {
    return users
}

export const findById = (id: string) => {
    const parsedId = parseInt(id)

    const user = users.find(u => u.id === parsedId)
    return user
}

export const add = (user: IUser) => {
    const lastUser = users.slice(-1)[0]

    let id = (lastUser?.id);
    id = id ? id + 1 : 1;

    users.push({
        id,
        name: user.name,
        description: user.description
    })
}


export const update = (id: string, user: IUser) => {
    const parsedId = parseInt(id)

    const i = users.findIndex(u => u.id === parsedId)

    users[i].name = user.name
    users[i].description = user.description
}

export const deleteById = (id: string) => {
    const parsedId = parseInt(id)

    const i = users.findIndex(u => u.id === parsedId)
    users.splice(i, 1)
}