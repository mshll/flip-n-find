import { useTimer } from 'react-timer-hook'
import { useEffect } from 'react'

function GameTimer({ expiryTimestamp, onExpire, className, handleGameOver, resetGame }) {
  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire,
    autoStart: true,
  })

  useEffect(() => {
    restart(expiryTimestamp)
  }, [resetGame, restart, expiryTimestamp])

  return (
    <div className={className}>
      <span>{String(minutes).padStart(2, '0')}</span>:<span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default GameTimer
