import React from 'react';
import { TextField, Typography, Grid, Button } from '@mui/material';

const HedgingInputs = ({
  originalOdds,
  setOriginalOdds,
  originalBetAmount,
  setOriginalBetAmount,
  hedgingOdds,
  setHedgingOdds,
  calculateHedging,
  hedgingBetAmount,
  guaranteedProfit
}) => {

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Original Odds"
              type="number"
              value={originalOdds}
              onChange={(e) => setOriginalOdds(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Original Bet Amount"
              type="number"
              value={originalBetAmount}
              onChange={(e) => setOriginalBetAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Hedging Odds"
              type="number"
              value={hedgingOdds}
              onChange={(e) => setHedgingOdds(e.target.value)}
            />
          </Grid>
        </Grid>
      
    </div>
  );
};

export default HedgingInputs;
