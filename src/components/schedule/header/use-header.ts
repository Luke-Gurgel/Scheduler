import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/root-state"
import { format } from "date-fns"
import { getNextWeek, getPrevWeek } from "src/helpers/dates"
import { getNextWeekAction, getPrevWeekAction } from "src/state/schedule/actions"

interface UseHeader {
  startDate: string
  endDate: string
  moveToNextWeek: () => void
  moveToPrevWeek: () => void
}

export default function useHeader(): UseHeader {
  const dispatch = useDispatch()
  const { currentWeek } = useSelector((state: RootState) => state.schedule)

  const moveToNextWeek = () => {
    const nextWeek = getNextWeek(currentWeek[0], currentWeek[6])
    dispatch(getNextWeekAction(nextWeek))
  }

  const moveToPrevWeek = () => {
    const prevWeek = getPrevWeek(currentWeek[0], currentWeek[6])
    dispatch(getPrevWeekAction(prevWeek))
  }

  return {
    moveToNextWeek,
    moveToPrevWeek,
    startDate: format(currentWeek[0], "MMM dd, yy"),
    endDate: format(currentWeek[6], "MMM dd, yy"),
  }
}
