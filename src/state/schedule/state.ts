import { ScheduleData } from "src/types/schedule"
import { initialData } from "src/components/schedule/constants"
import { getCurrentWeek } from "src/helpers/dates"

export interface ScheduleState {
  currentWeek: Date[]
  data: ScheduleData
}

const scheduleState: ScheduleState = {
  data: initialData,
  currentWeek: getCurrentWeek(),
}

export default scheduleState
