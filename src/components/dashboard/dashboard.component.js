import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import { fetchCharacter } from "./../../actions/characterActions";
import { fetchBackgrounds } from "./../../actions/backgroundsActions";
import { fetchActors } from "./../../actions/actorsActions";
import { fetchTexts } from "./../../actions/textsActions";
import Character from "./../character/character.component";
import Ground from "./../ground/ground.component";
import Cloud from "./../cloud/cloud.component";
import Building from "./../building/building.component";
import Mountain from "./../mountain/mountain.component";
import Panel from "./../panel/panel.component";
import Pillar from "./../pillar/pillar.component";
import Roof from "./../roof/roof.component";
import Bookshelf from "./../bookshelf/bookshelf.component";
import Theater from "./../theater/theater.component";

import Seesaw from "./../actors/seesaw.component";
import Junglegym from "./../actors/junglegym.component";
import Slide from "./../actors/slide.component";

import TextBlank from "./../texts/text-blank.component";


require('./dashboard.component.scss');


@connect((store) => {
  return {
    character: store.character.character,
    backgrounds: store.backgrounds.backgrounds,
    actors: store.actors.actors,
    texts: store.texts.texts,
    localization: store.localization.localization,
  }
})
export default class Dashboard extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.dispatch(fetchCharacter());
    this.props.dispatch(fetchBackgrounds());
    this.props.dispatch(fetchActors());
    this.props.dispatch(fetchTexts());
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {

  }
  render() {
    let character, backgrounds, actors, texts;
    if (this.props.character) {
      character = <Character character={this.props.character} />;
    }
    backgrounds = this.props.backgrounds.map((item, index) => {
      if (item.type == "GROUND") {
        return <Ground key={"background-" + index} ground={item} />;
      } else if (item.type == "CLOUD") {
        return <Cloud key={"background-" + index} cloud={item} />;
      } else if (item.type == "BUILDING") {
        return <Building key={"background-" + index} building={item} />;
      } else if (item.type == "MOUNTAIN") {
        return <Mountain key={"background-" + index} mountain={item} />;
      } else if (item.type == "PANEL") {
        return <Panel key={"background-" + index} panel={item} />;
      } else if (item.type == "PILLAR") {
        return <Pillar key={"background-" + index} pillar={item} />;
      } else if (item.type == "ROOF") {
        return <Roof key={"background-" + index} roof={item} />;
      } else if (item.type == "BOOKSHELF") {
        return <Bookshelf key={"background-" + index} bookshelf={item} />;
      } else if (item.type == "THEATER") {
        return <Theater key={"background-" + index} theater={item} />;
      }
    });
    actors = this.props.actors.map((item, index) => {
      if (item.type == "SEESAW") {
        return <Seesaw key={"actor-" + index} actor={item} />;
      } else if (item.type == "JUNGLEGYM") {
        return <Junglegym key={"actor-" + index} actor={item} />;
      } else if (item.type == "SLIDE") {
        return <Slide key={"actor-" + index} actor={item} />;
      }
    });
    texts = this.props.texts.map((item, index) => {
      if (item.type == "BLANK") {
        return <TextBlank key={"text" + index} item={item} />
      }
    });
    return (
      <div className="dashboard">
        {backgrounds}
        {actors}
        {texts}
        {character}
      </div>
    )
  }
}
