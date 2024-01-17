import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';

export const Contaiaddner = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  border-radius: 10px;
  padding: 32px;
  display:flex;
  width: 800px;
  flex-direction: column;
  gap: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 223px;
  >p{
    color: theme.COLORS.GRAY;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    ${'' /* word-wrap: break-word;
    overflow: hidden;
    ${'' /* white-space: nowrap;
    flex-grow: 1;
    max-width: 100%;
    max-height: 50%;
    text-overflow: ellipsis; */}
    max-width: 100%;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }`


export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE_SHINY};
  font-family: 'Roboto Slab';
  display:flex;
  flex-direction: column;
  gap: 12px;

  height: 581px;
  width: 80dvww;

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
  }
  .user-date-info {
    font-family: 'Roboto';
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
    margin-bottom: 48px;
  }
  
  >div{
    display: flex;
    gap: 6px;
  }

   h1 {
    text-align: left;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 36px;
    font-style: normal;
    font-weight: 500;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-bottom: 48px;
  }

  .title-rating{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
    margin-bottom: 24px;
  }
  .rating{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  p{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;  
    word-wrap: break-word;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: justify;  
  flex-grow: 1;
`;