import React, { useEffect, useState } from "react";
import { AnimeList } from "./AnimeList";
import { AnimeInfo } from "./AnimeInfo";
import { AddToList } from "./AddtoList";
import { RemoveFromList } from "./RemoveFromList";
import { ModalAnime } from "./ModalAnime";
import { FiSearch } from "react-icons/fi";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function Anime()
{
    const [search, setSearch] = useState('e')
    const [animeData, setAnimeData] = useState([]);
    const [animeInfo, setAnimeInfo] = useState();
    const [myAnimeList, setMyAnimeList] = useState([]);

    const addTo = (anime) =>
    {
        const index = myAnimeList.findIndex((myanime) =>
        {
            return myanime.mal_id === anime.mal_id
        })
        if (index < 0)
        {
            const newArray = [...myAnimeList, anime]
            setMyAnimeList(newArray);
        }

    }
    const removeFrom = (anime) =>
    {
        const newArray = myAnimeList.filter((myanime) =>
        {
            return myanime.mal_id !== anime.mal_id
        })
        setMyAnimeList(newArray)
    }
    const getData = async () =>
    {
        const res = await fetch(`https://api-mfikria.vercel.app/v2/${search}`)
        const resData = await res.json();
        setAnimeData(resData.data)
    }
    useEffect(() =>
    {
        getData()
    }, [search])


    useEffect(() =>
    {
        document.title = "MFikriA  | Anime";
    });
    return (
        <>
            <br />
            <section id="anime" className="anime">
                <Container>
                    <h5>list Anime By jikan</h5>
                    <div>
                        <hr />
                        <InputGroup className="mb-3" name="search" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Your Anime" required>
                            <Form.Control
                                placeholder="Seacrh your Anime"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </div>
                    {/* {animeInfo && <AnimeInfo animeInfo={animeInfo} />} */}
                    <hr />
                    <Row xs={1} md={2} className="g-4">
                        <AnimeList
                            animelist={animeData}
                            setAnimeInfo={setAnimeInfo}
                            animeComponent={AddToList}
                            handleList={(anime) => addTo(anime)}
                        />
                        <AnimeList
                            animelist={myAnimeList}
                            setAnimeInfo={setAnimeInfo}
                            animeComponent={RemoveFromList}
                            handleList={(anime) => removeFrom(anime)}
                        />
                    </Row>
                </Container>

            </section>
        </>
    );
}

export default Anime;
