import React from 'react';
import { TextField, Typography, Grid, Button } from '@mui/material';
import OutcomeBox from './OutcomeBox';

const OptimalHedgSize = ({hedgingBetAmount, hedgingOdds, originalBetAmount, originalOdds, guaranteedProfit}) => {

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        <div className='row'>
          Hedging Bet Amount: {hedgingBetAmount !== null ? (
            <div className='results'> &nbsp; ${hedgingBetAmount}</div>
          ) : null}
        </div>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <div className='row'>
          Guaranteed Profit: {guaranteedProfit !== null ? (
            <div className='results'> &nbsp; ${guaranteedProfit}</div>
          ) : null}
        </div>
      </Typography>
    </div>
  );
};

export default OptimalHedgSize;
