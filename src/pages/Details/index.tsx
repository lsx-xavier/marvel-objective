import React, { useState, useEffect, useCallback } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  Section,
  HeaderContent,
  ContentDashboardPerfil,
  Perfil,
  Timeline,
  CardSeries,
  ListSeries
} from './styles';

import api from '../../services/api';

interface CharacterParams {
  id: string;
}

interface CharacterPerfilResponse {
  id: string;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterPerfil {
  id: string;
  name: string;
  description: string;
  modified: string;
  thumbnail_url: string;
}

interface CharacterSeriesResponse {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: []
  }
}

interface CharacterSeries {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  creators: [];
}

interface CreatorData {
  name: string;
  role: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<CharacterParams>();
  const [character, setCharacter] = useState<CharacterPerfil>();
  const [characterSeries, setCharacterSeries] = useState<CharacterSeries[]>();
  const [changeDate, setChangeDate] = useState('events');

  useEffect(() => {
    api.get(`characters/${params.id}`, {
      params: {
        apikey: "e9d1061437dadb71b2f291effae59ffc",
        ts: "1",
        hash: "5cc7221292f2024dcf129005f59d80f5",
      }
    }).then(response => {
      response.data.data.results.map((item: CharacterPerfilResponse) => {        
        const dadosFormatted = {
          id: item.id,
          name: item.name,
          description: item.description,
          modified: item.modified,
          thumbnail_url: item.thumbnail.path+'.'+ item.thumbnail.extension,
        }
        return setCharacter(dadosFormatted);
      });
    })
  }, [params.id]);

  useEffect(() => {
    console.log(changeDate)
    api.get(`characters/${params.id}/${changeDate}`, {
      params: {
        apikey: "e9d1061437dadb71b2f291effae59ffc",
        ts: "1",
        hash: "5cc7221292f2024dcf129005f59d80f5",
      }
    }).then(response => {
      const dados = response.data.data.results.map((item: CharacterSeriesResponse, i: number) => { 
        if(changeDate === 'stories') {
          const dadosFormatted = {
            id: item.id,
            title: item.title,
            description: item.description,
            thumbnail_url: null,
            creators: item.creators.items
          }
          return dadosFormatted;
        } else {
          const dadosFormatted = {
            id: item.id,
            title: item.title,
            description: item.description,
            thumbnail_url: item.thumbnail.path+'.'+ item.thumbnail.extension,
            creators: item.creators.items
          }
          return dadosFormatted;
        }

        
      });
      setCharacterSeries(dados);
    })
    
  }, [params.id, changeDate]);

  const handleChangeDate = useCallback((item) => {
    setChangeDate(item)
  }, []);

  const titleInfo = () => {
    switch(changeDate) {
        case 'events': return 'Eventos';
        case 'comics': return 'Quadrinhos';
        case 'stories': return 'Histórias';
    }
  }

  return (
   <>
      <Section>
        <Container>
          <HeaderContent>
            <h2>
              Mais detalhes sobre o personagem:
            </h2>
            <Link to="../" ><FiChevronLeft size={16} color="#555555" /> Voltar</Link>
          </HeaderContent>
         {character && (
           <ContentDashboardPerfil>
             
             <Perfil>
                <div>
                  <img src={character.thumbnail_url} alt={character.name}/>
                  <h3>{character.name}</h3>
                  
                  <p>{character.description}</p>

                  <span>Updated: <strong>{character.modified}</strong></span>

                  <div>
                    <p>Mais sobre:</p>
                    <span className={changeDate === 'events' ? 'active' : ''} onClick={() => handleChangeDate('events')}>Eventos</span>
                    <span className={changeDate === 'comics' ? 'active' : ''} onClick={() => handleChangeDate('comics')}>Quadrinhos</span>
                    <span className={changeDate === 'stories' ? 'active' : ''} onClick={() => handleChangeDate('stories')}>Histórias</span>
                  </div>
                </div>

                
            </Perfil>

            <Timeline>
              <ListSeries>
                <h3>
                  Detalhes sobre {titleInfo()}:
                </h3>
                
                {characterSeries && characterSeries.map((charSeries, i) => (
                    <CardSeries
                      key={i}
                    >
                      <h4>{charSeries.title}</h4>
                      <div className="thumb-description">
                        {charSeries.thumbnail_url &&
                          <img src={charSeries.thumbnail_url} alt={charSeries.title}/>  
                        }
                        <span>
                          <strong>Descrição</strong>
                          <p>
                            {charSeries.description ? charSeries.description : 'Nenhuma descrição encontrada'}
                          </p>
                        </span>
                      </div>

                      <div className="team">
                        <p><strong>Equipe: </strong>
                          {charSeries.creators.join().length > 1 ? charSeries.creators.map((serie: CreatorData) => (
                            <>{serie.name} <span className={serie.role === 'editor' ? 'editor' : ''}>{serie.role}</span>; </>
                          )) : 'Nenhum dado encontrado'}
                        </p>
                      </div>
                    
                    </CardSeries>
                  ))
                }
              </ListSeries>
            </Timeline>

           </ContentDashboardPerfil>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Details;