import axios from 'axios'

//Register
export const signup = async (req, res) => {

    try {

        const { username, password } = req.body

        const chatEngineResponse = await axios.post(

            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: password
            },
            {
                headers: {

                    "Private-Key": process.env.PRIVATE_KEY

                }
            }

        )

        res.status(200).json({ response: chatEngineResponse.data })

    } catch (error) {

        console.error("error", error.message)

        res.status(500).json({ error: error.message })

    }

}

//Login
export const login = async (req, res) => {

    try {

        const { username, password } = req.body

        const chatEngineResponse = await axios.get(

            "https://api.chatengine.io/users/me",

            {
                headers: {

                    "Project-ID": process.env.PROJECT_ID,
                    "User-Name": username,
                    "User-Secret": password,

                }

            }

        )

        res.status(200).json({ response: chatEngineResponse.data })

    } catch (error) {

        console.error("error", error)

        res.status(500).json({ error: error.message })

    }

}