import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getSportsData } from '../redux/actions';

export default function LandingPage() {
  const sportsData = useSelector(appState => appState.reducer.sportsData);
  console.log(sportsData)
  useEffect(() => {
    getSportsData()
  }, [])
  return (
    <div>
      <h1>blah</h1>
    </div>
  )
}