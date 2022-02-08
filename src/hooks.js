import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addAllSettings} from "./redux/actions";


export const useSaveSettings = () => {
  const [labelSave, setLabelSave] = useState(false)
  const settings = useSelector(state => state.settingsReducer)

  return {
    labelSave: labelSave,
    save: () => {
      localStorage.setItem("postSettings", JSON.stringify(settings))
      setLabelSave(true)
      setTimeout(() => {
        setLabelSave(false)
      }, 2000)
    }
  }
}

export const useSetSettings = () => {
  const dispatch = useDispatch()
  const settings = JSON.parse(localStorage.getItem("postSettings"))
  if (settings) dispatch(addAllSettings(settings))
}