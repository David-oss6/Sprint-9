import React, { useContext, useState } from 'react'
import { DataContext } from '../aplication/DataContext'
import { LogSignDiv, ModalDiv, MyForm } from './styled'

export default function Registro() {
    const [signUp, setSignUp] = useState(false)
    const [nombre, setNombre] = useState(null)
    const [pass, setPass] = useState(null)
    const [check, setCheck] = useState(null)
    const [log, setLog] = useState(false)
    const [user, setUser] = useState(null)

    const { state, setState } = useContext(DataContext)

    const defineUser = () => {
        console.log(nombre, pass, check)
        if (pass === check) {
            console.log("ok pass")
            console.log(state.signUpList)
            const okName = state.signUpList.find((el) => (el.name === nombre))
            console.log(okName)
            if (okName === undefined) {
                const newUser = {
                    name: nombre,
                    password: pass
                }
                setState({
                    ...state,
                    signUpList: [...state.signUpList, newUser]
                })
                setSignUp(!signUp)
            } else {
                alert("El nombre ya existe")
            }
        } else {
            alert("Contraseña no coincide")
        }
    }

    const login = () => {
        const okName = state.signUpList.find((el) => (el.name === nombre))
        if (okName !== undefined && okName.password === pass) {
            setUser(okName.name)
            setLog(!log)
            setState({
                ...state,
                logIn: true
            })
        } else {

            alert("El nombre o la contraseña no coincide")
        }
    }

    const logOut = () => {
        setUser(null)
        setState({
            ...state,
            logIn: false
        })
    }

    const logButton = (n) => {
        switch (n) {
            case 1:
                setLog(!log)
                setSignUp(false)
                break;
            case 2:
                setLog(false)
                setSignUp(!signUp)
        }
    }

    return (
        <div>

            {
                user ? <LogSignDiv>
                    {user}
                    <button className="log-sign-btn" onClick={() => logOut()}>LogOut</button>
                </LogSignDiv>
                    : <div>
                        <LogSignDiv>
                            <button className=" log-sign-btn" onClick={() => logButton(1)}>LogIn </button>
                            <button className=" log-sign-btn" onClick={() => logButton(2)} >SingUp</button>
                        </LogSignDiv>
                        {
                            signUp &&
                            <ModalDiv  >
                                <MyForm onClick={() => setLog(false)} >
                                    <input
                                        onInput={(event) => setNombre(event.target.value)}
                                        maxLength="8"
                                        type="text"
                                        placeholder="Introduce Name"
                                    />
                                    <input
                                        type="password"
                                        placeholder="What`s your password?"
                                        onInput={event => setPass(event.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Duble check your password"
                                        onInput={event => setCheck(event.target.value)}
                                    />
                                    <button type="button" onClick={() => defineUser()} >Submit</button>
                                    <button onClick={() => setSignUp(!signUp)}>X</button>
                                </MyForm>
                            </ModalDiv>
                        }
                        {
                            log && <ModalDiv >
                                <MyForm>
                                    <input
                                        onInput={(event) => setNombre(event.target.value)}
                                        type="text"
                                        placeholder="Introduce Name"
                                    />
                                    <input
                                        type="password"
                                        placeholder="What`s your password?"
                                        onInput={event => setPass(event.target.value)}
                                    />
                                    <button type="button" onClick={() => login()} >Submit</button>
                                    <button onClick={() => setLog(!log)} >X</button>
                                </MyForm>
                            </ModalDiv>
                        }
                    </div>

            }
        </div>
    )
}
