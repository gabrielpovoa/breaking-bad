import { useState, useEffect } from 'react'
import * as C from './styles'
import { request } from '../../types/requestType'
import { api } from '../../Service/api'


//Area da API
export const CharacterItem = () => {
    const [show, setShow] = useState<request[]>([])

    useEffect(() => {
        loadCharactes()
    }, [])

    const loadCharactes = async () => {
        let json = await api.getAllCharacters()
        setShow(json)
    }

    return <>
        {show.map((item, index) => (
            <C.Container>
                <>
                    <C.ImageContainer>
                        <C.Image src={item.img} alt='walter' />
                    </C.ImageContainer>

                    <C.Content key={index}>
                        <C.ContentTitle>
                            <h3>{item.name}</h3>
                        </C.ContentTitle>

                        <C.ContentInfo>
                            <p><strong>Birthday:</strong> {item.birthday}</p>
                            <p><strong>Nickname:</strong> {item.nickname}</p>
                        </C.ContentInfo>
                    </C.Content>
                </>
            </C.Container>
        ))}
    </>
}