import React from 'react'
import {MdPlace} from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  font-family:'Poppins';
  padding: 2rem;
  background-color: #411530;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: white;
    background-color: #183D3D;
    padding: 1rem;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .info{
    color:white;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = 'I need text ',
  }) {
    return (
      <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </ItemStyles>
    );
  }