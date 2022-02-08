import React from "react"
import style from "./Post.module.css"
import {useSelector} from "react-redux";

const Post = () => {
  const {
    headerCheck,
    imageCheck,
    valueTitle,
    valuePostText,
    valueHeader,
    imgPath
  } = useSelector(state => state.settingsReducer)



  return (
    <>
      <div className={style.boxPost}>
        {headerCheck && <div className={style.headerText}>{valueHeader}</div>}
        {imageCheck &&
          imgPath && <div className={style.boxImg}>
            <img src={imgPath} alt="imagePost"/>
          </div>}
        <div className={style.descrText}>
          <h3>{valueTitle}</h3>
          <p>{valuePostText}</p>
        </div>

      </div>
    </>
  )
}

export default Post