import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notifications from '../Notification/Notification';
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;
  const canResest = totalVotes > 0 ? true : false;

  function handleVote(type: VoteType) {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  }
  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canResest={canResest} />
        {totalVotes > 0 ? (
          <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
        ) : (
          <Notifications />
        )}
      </div>
    </>
  );
}
