import { rest } from 'msw'
import { API_URL } from '../app/constants'

const data = [{
    quote: "I don't want to sound like a killjoy.",
    character: "Marge Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    characterDirection: "Right"
}]

const randomData = [{
    quote: "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.",
    character: "Dr. Nick",
    image: "https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png",
    characterDirection: "Right"
}]

//?character=
const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        if(req.url.searchParams.get("character")){
            return res(
                ctx.status(200),
                ctx.json(
                    data
                )
            )
        }
        return res(
            ctx.status(200),
            ctx.json(
                randomData
            )
        )
    })
]

export {data, handlers}