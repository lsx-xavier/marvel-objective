import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import {
  Container,
  Section,
  Search,
  Legenda,
  CharacterList,
  Footer,
  Pages,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationNextEnd,
  CotainerListPage
} from './styles';

import api from '../../services/api';

interface CharacterDetailsResponse {
  id: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: [
      {
        name: string,
      }
    ]
  }
  events: {
    items: [
      {
        name: string
      }
    ]
  }
}

interface CharacterDetails {
  id: string;
  name: string;
  thumbnail_url: string;
  series: Array<string>;
  events: Array<string>;
}

const Dashboard: React.FC = () => {
  const limit = 10;
  const [characters, setCharacters] = useState<CharacterDetails[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [pages, setPages] = useState<number[]>([1,2,3,4,5]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get(`characters`, {
      params: {
        apikey: "e9d1061437dadb71b2f291effae59ffc",
        ts: "1",
        hash: "5cc7221292f2024dcf129005f59d80f5",
        limit: limit,
        offset: currentPage * limit,
      }
    }).then(response => {
      const dados = response.data.data.results.map((item: CharacterDetailsResponse) => {        
        const dadosFormatted = {
          id: item.id,
          name: item.name,
          thumbnail_url: item.thumbnail.path+'.'+ item.thumbnail.extension,
          series: item.series.items.map(n => n.name),
          events: item.events.items.map(n => n.name),
        }
        return dadosFormatted; 
      });
      const totalData = response.data.data.total;
      setCharacters(dados)

      setTotal(Math.floor(totalData / limit));
    })
  }, [currentPage]);


  const handleNumbersPagination = useCallback((number) => {
    const arrayPages = [];
    if (number >= (total - 4)) {
      for(let i = number - 4; i <= number; i++) {
        arrayPages.push(i);
      }
    } else {
      for(let i = number; i <= number + 4; i++) {
        arrayPages.push(i);
      }
    }
    
    setCurrentPage(number);

    setPages(arrayPages);
  }, [total]);

  async function handleAddCharacter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    await api.get(`characters`, {
      params: {
        apikey: "e9d1061437dadb71b2f291effae59ffc",
        ts: "1",
        hash: "5cc7221292f2024dcf129005f59d80f5",
      }}).then(response => {
        const dados = response.data.data.results.filter((char: CharacterDetailsResponse) => char.name.toLowerCase().startsWith(searchValue.toLowerCase())).map((char: CharacterDetailsResponse) => {
          const dadosFormatted = {
            id: char.id,
            name: char.name,
            thumbnail_url: char.thumbnail.path+'.'+ char.thumbnail.extension,
            series: char.series.items.map(n => n.name),
            events: char.events.items.map(n => n.name),
          }
          return dadosFormatted; 
        });

        setCharacters(dados);
        setSearchValue('');
      })
  }

  return (
   <>
      <Section>
        <Container>
          <Search>
            <h1>Busca de personagens</h1>

            <form onSubmit={handleAddCharacter}>
              <label htmlFor="search">Nome do personagem
                <input
                  id="search"
                  name="search"
                  placeholder="Search"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <span><FiSearch size={14} color="#555555" /></span>
              </label>
            </form>
          </Search>
          
          <Legenda>
            <div>Personagem</div>
            <div>Séries</div>
            <div>Eventos</div>
          </Legenda>

          <CharacterList>
            {
              characters.map((character, i) => (   
                <Link
                  to={`/details/${character.id}`}
                  key={i}
                >
                  <div className="perfil">
                    <img src={character.thumbnail_url}  alt={character.name}/>

                    <p>{character.name}</p>
                  </div>

                  <div className="series">
                  {character.series.map((serie, i) => {
                    for(let index = i; index < 3; index++) {
                      return <p>{serie}</p>
                    }
                  })}
                  </div>

                  <div className="events">
                  {character.events.map((event, i) => {
                    for(let index = i; index < 3; index++) {
                        return <p>{event}</p>
                    }
                  })}
                  </div>
                </Link>
              ))
            }
          </CharacterList>
        </Container>
      </Section>

      <Footer>
        <Container>
          
          <Pages>
          {currentPage > 1 &&
              <PaginationPrev
                onClick={() => handleNumbersPagination(1)}
              >
                <FiChevronsLeft size={24} color="#555555" />
              </PaginationPrev>
            }

            {currentPage > 1 &&
              <PaginationPrev
                onClick={() => handleNumbersPagination(currentPage - 1)}
              >
                <FiChevronLeft size={24} color="#555555" />
              </PaginationPrev>
            }

            <CotainerListPage>
              {pages.map(page => (
                <PaginationItem
                  key={page}
                  onClick={() => handleNumbersPagination(page)}
                  isSelected={page === currentPage}
                >{page}</PaginationItem>
              ))}
            </CotainerListPage>

            {currentPage < total &&
              <PaginationNext
                onClick={() => handleNumbersPagination(currentPage + 1)}
              >
                <FiChevronRight size={24} color="#555555"  />
              </PaginationNext>
            }

            {currentPage < total  &&
              <PaginationNextEnd
                onClick={() => handleNumbersPagination(total)}
              >
                <FiChevronsRight size={24} color="#555555"  />
              </PaginationNextEnd>
            }
        </Pages>
        </Container>
      </Footer>
    </>
  );
};

export default Dashboard;