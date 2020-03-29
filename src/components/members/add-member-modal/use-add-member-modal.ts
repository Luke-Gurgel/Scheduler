import { useForm, FormContextValues } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/root-state"
import { v4 as uuidv4 } from "uuid"
import { idSeparator } from "src/constants"
import {
  addMemberAction,
  setLoadingAction,
  setAddMemberModalOpenAction,
} from "src/state/members/actions"

interface AddMemberForm {
  name: string
  email?: string
}

interface UseAddMemberModal {
  form: FormContextValues<AddMemberForm>
  isOpen: boolean
  loading: boolean
  onSubmit: (data: any) => void
  cancel: () => void
}

export default function useAddMemberModal(): UseAddMemberModal {
  const dispatch = useDispatch()
  const { isOpen, loading } = useSelector(
    (state: RootState) => state.members.addMemberModal,
  )

  const form = useForm<AddMemberForm>({
    mode: "onBlur",
    submitFocusError: true,
    validateCriteriaMode: "firstError",
  })

  const onSubmit = form.handleSubmit(({ name, email }) => {
    dispatch(setLoadingAction(true))
    setTimeout(() => {
      dispatch(
        addMemberAction({
          id: `members${idSeparator}${uuidv4()}`,
          name,
          email,
        }),
      )
      dispatch(setLoadingAction(false))
      dispatch(setAddMemberModalOpenAction(false))
      form.reset()
    }, 2000)
  })

  const cancel = () => {
    form.reset()
    dispatch(setAddMemberModalOpenAction(false))
  }

  return {
    form,
    isOpen,
    loading,
    onSubmit,
    cancel,
  }
}
