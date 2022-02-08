import {Col, Container, Row} from "react-bootstrap";
import SettingsPost from "./Components/SettingsPost/SettingsPost";
import Post from "./Components/Post/Post";
import {useSetSettings} from "./hooks";
import style from "./App.module.css"

function App() {

  useSetSettings()

  return (
    <Container className={style.container}>
      <Row>
        <h1 className={style.title}>Settings</h1>
      </Row>
      <Row>
        <Col>
          <SettingsPost/>
        </Col>
        <Col>
          <Post/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
