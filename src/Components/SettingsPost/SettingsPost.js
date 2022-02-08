import React, {useState} from "react"
import {Button, Form, FormControl} from "react-bootstrap";
import style from "./SettingsPost.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
  addImgPath,
  changeValueHeader,
  changeValueTitle,
  changeValuePostText,
  switchHeaderCheckAC,
  switchImageCheckAC
} from "../../redux/actions";
import {useSaveSettings} from "../../hooks";

const SettingsPost = () => {
  const [drag, setDrag] = useState(false)

  const {
    valueTitle,
    valuePostText,
    valueHeader,
    headerCheck,
    imageCheck
  } = useSelector(state => state.settingsReducer)
  const dispatch = useDispatch()


  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }

  const dragDropHandler = (e) => {
    e.preventDefault()
    let file = [...e.dataTransfer.files]
    let imgPath = URL.createObjectURL(file[0])
    dispatch(addImgPath(imgPath))
    setDrag(false)
  }

  const {labelSave, save} = useSaveSettings()


  return (
    <>
      <div>
        {labelSave && <div className={style.saveLabel}>
          Post saved
        </div>}
        <Form>
          <FormControl
            onChange={(e) => dispatch(changeValueTitle(e.target.value))}
            value={valueTitle}
            className={style.input}
            placeholder="Title"
            aria-label="Title"
            aria-describedby="Title"
          />
          <FormControl
            onChange={(e) => dispatch(changeValuePostText(e.target.value))}
            value={valuePostText}
            className={style.textArea}
            as="textarea"
            placeholder="Post text"
            aria-label="textarea"
            aria-describedby="textarea"
          />
          <Form.Check
            onChange={() => dispatch(switchHeaderCheckAC())}
            checked={headerCheck}
            type="switch"
            label="header"
          />
          {headerCheck &&
            <FormControl
              onChange={(e) => dispatch(changeValueHeader(e.target.value))}
              value={valueHeader}
              className={style.input}
              placeholder="Header"
              aria-label="Header"
              aria-describedby="Header"
            />}
          <Form.Check
            onChange={() => dispatch(switchImageCheckAC())}
            checked={imageCheck}
            type="switch"
            label="image"
          />
          {imageCheck &&
            <div onDragStart={(e) => dragStartHandler(e)}
                 onDragLeave={(e) => dragLeaveHandler(e)}
                 onDragOver={(e) => dragStartHandler(e)}
                 onDrop={(e) => dragDropHandler(e)}
                 className={drag ?
                   style.uploadImageDrag :
                   style.uploadImageDrop}>{drag ? "Drop file" : "Drag file"}
            </div>}
          <Button onClick={save} className={style.btn} type="button" size="lg"
                  variant="primary">Save</Button>
        </Form>
      </div>
    </>
  )
}

export default SettingsPost