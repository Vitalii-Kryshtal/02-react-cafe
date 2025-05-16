import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canResest: boolean;
}

export default function VoteOptions({ onVote, onReset, canResest }: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button onClick={() => onVote('good')} className={css.button}>
          Good
        </button>
        <button onClick={() => onVote('neutral')} className={css.button}>
          Neutral
        </button>
        <button onClick={() => onVote('bad')} className={css.button}>
          Bad
        </button>
        {canResest && (
          <button onClick={onReset} className={`${css.button} ${css.reset}`}>
            Reset
          </button>
        )}
      </div>
    </>
  );
}
