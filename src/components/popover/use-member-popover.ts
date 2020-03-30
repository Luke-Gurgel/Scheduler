import { useDispatch } from "react-redux"
import { useForm, FormContextValues } from "react-hook-form"
import { ScheduleMemberItem, popoverSource } from "src/types"
import { updateMemberAction } from "src/state/schedule/actions"
import { updatedMemberListAction } from "src/state/members/actions"

interface UseMemberPopover {
  form: FormContextValues<ScheduleMemberItem>
  onUpdate: () => void
}

export default function useMemberPopover(
  member: ScheduleMemberItem,
  source: popoverSource,
): UseMemberPopover {
  const dispatch = useDispatch()

  const form = useForm<ScheduleMemberItem>({
    mode: "onBlur",
    submitFocusError: true,
    defaultValues: { ...member },
    validateCriteriaMode: "firstError",
  })

  const onUpdate = form.handleSubmit(() => {
    const updateAction =
      source === "schedule"
        ? updateMemberAction({ ...member, ...form.getValues() })
        : updatedMemberListAction({ ...member, ...form.getValues() })
    dispatch(updateAction)
  })

  return {
    form,
    onUpdate,
  }
}
