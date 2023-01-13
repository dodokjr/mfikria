import React, { useEffect, useState } from "react";
import { AnimeList } from "./AnimeList";
import { AnimeInfo } from "./AnimeInfo";
import { AddToList } from "./AddtoList";
import { RemoveFromList } from "./RemoveFromList";
import {FiSearch} from "react-icons/fi";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
function Anime()
{

    const [search, setSearch] = useState('s')
    const [animeData, setAnimeData] = useState();
    const [animeInfo, setAnimeInfo] = useState()
    const [myAnimeList, setMyAnimeList] = useState([])

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
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
        const resData = await res.json();
        setAnimeData(resData.data)
    }
    useEffect(() =>
    {
        getData()
    }, [search])

    return (
        <>
        <br/>
            <section id="anime" className="bg-anime">
                <Container>
                <h5>list Anime By jikan</h5>
                <div>
                <hr/>
                <InputGroup className="mb-3" name="search" id="default-search" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Your Anime" required>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <FiSearch/>
        </Button>
      </InputGroup>
                </div>
                {animeInfo && <AnimeInfo animeInfo={animeInfo} />} 
                <hr/>
                <Row xs={1} md={2} className="g-4">
                <AnimeList
                            animelist={animeData}
                            setAnimeInfo={setAnimeInfo}
                            animeComponent={AddToList}
                            handleList={(anime) => addTo(anime)}
                        />
                        </Row>
                </Container>
                    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <AnimeList
                            animelist={myAnimeList}
                            setAnimeInfo={setAnimeInfo}
                            animeComponent={RemoveFromList}
                            handleList={(anime) => removeFrom(anime)}
                        />
                    </div>
            </section>
        </>
    );
}

export default Anime;
