import React, { useEffect } from 'react';
import { fetchAuthor } from "./__fetchAuthor"
// import { fetchUser } from './../../http';
const TestAxios = () => {

    useEffect(() => {
        fetchAuthor().then(data => console.log({ data }))
    }, [])
    return (<div>Axios</div>)
}
export default TestAxios