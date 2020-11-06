import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import logoObjective from '../../assets/logo-objective.png';

import {
  Header,
} from './styles';

interface Props {
  themeSeted: () => void;
}

const HeaderContent: React.FC<Props> = ({themeSeted}) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Header>
      <img src={logoObjective} alt="Logo Objective"/>
      <div className="info_candidato">
        <p>
          <strong>Lucas Starke Xavier</strong>
          Teste de Front-end
        </p>
        <span>
          CB
        </span>
        <Switch
          onChange={themeSeted}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.secondary)}
          onColor={colors.primary}
        />
      </div>
    </Header>
  )
}

export default HeaderContent;