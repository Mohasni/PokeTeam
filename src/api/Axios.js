import axios from 'axios'
import React from 'react'

const Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export default Axios