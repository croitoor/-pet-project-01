import React from 'react';
import Header from './components/header/Header';
import NiteCity from './components/niteCity/NiteCity';
import PlayAndWin from './components/playAndWin/PlayAndWin';
import FullImmersion from './components/fullImmersion/FullImmersion';
import BuyTheGame from './components/buyTheGame/BuyTheGame';

export default function App() {
    return (
        <>
            <Header />
            <NiteCity />
            <PlayAndWin />
            <FullImmersion />
            <BuyTheGame />
        </>
    )
}
