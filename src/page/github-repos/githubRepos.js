import { reat, useState, useEffect } from 'react';
import { format } from "date-fns";
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const GithubRepos = () =>
{
    const { id } = useParams();
    const [items, setItems] = useState([])
    const [user] = useState("dodokjr")

    useEffect(() =>
    {
        const fetchRepos = async () =>
        {
            const res = await fetch(
                `https://api-mfikria.vercel.app/v2/github/${user}/repos/${id}`
            )
            const data = await res.json()
            setItems(data)
        }

        fetchRepos()
    }, [user])

    return (
        <Container fluid >
            <Container className="project-section">
                <h1 className='text-center text-white'> repos  <a href={items.html_url} target='_blank'>{items.full_name}</a> {items.language}</h1>
                <div className='text-white'>
                    <h4 className=''>{items.description}</h4>
                    <p>Git : {items.git_url}</p>
                    <p>ssh : {items.ssh_url}</p>
                    <p>Clone Repostory : {items.clone_url}</p>
                    <a href={items.homepage} target='_blank'>{items.homepage}</a>
                </div>
            </Container>
        </Container >
    )
}

export default GithubRepos