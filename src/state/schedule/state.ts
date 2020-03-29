import { ScheduleData } from "src/types"
import { blankSchedule } from "src/constants"
import { getCurrentWeek } from "src/helpers/date"

export interface ScheduleState {
  currentWeek: Date[]
  data: ScheduleData
}

const scheduleState: ScheduleState = {
  data: blankSchedule,
  currentWeek: getCurrentWeek(),
}

export default scheduleState
