import { useTimer } from 'react-timer-hook';

function GameTimer({ expiryTimestamp, onExpire, className }) {
  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire,
    autoStart: true,
  });

  return (
    <div className={className}>
      <span>{String(minutes).padStart(2, '0')}</span>:<span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}

export default GameTimer;
