/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '@store/store';

import Forehead from '@components/Forehead/Forehead.component';
import Hero from '@components/Hero/Hero.component';
import Footer from '@components/Footer/Footer';
import Blockquote from '@components/Blockquote/Blockquote.component';
import Story from '@components/Story/Story.component';
import Contact from '@components/Contact/Contact.component';
import FoodMenu from '@components/FoodMenu/FoodMenu.component';
import Starters from '@components/Starters/Starters.component';
import EmbeddedMapComponent from '@components/EmbeddedMap/EmbeddedMap.component';

class App extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired
    }

    constructor(props) {
        super(props);

        this.handleCallback = this.handleCallback.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    handleCallback(callbackData) {
        if (callbackData === undefined) {
            return;
        }
        this.changeLanguage(callbackData);
    }

    getCurrentLanguage() {
        const { i18n } = this.props;
        const { language } = i18n;

        return language;
    }

    changeLanguage(language) {
        const { i18n } = this.props;
        i18n.changeLanguage(language);
    }

    render() {
        const { t } = this.props;
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <Provider store={ store }>
                  <Forehead parentCallback={ this.handleCallback } />
                  <Hero
                    welcomeMessage={ t('welcome') }
                    titleCaptionFront={ t('trinat.title') }
                    titleCaptionBold={ t('trinat.type') }
                    subtitle={ t('hero.title') }
                  />
                  <Blockquote
                    content={ t('blockquote.blockquote-content') }
                    author={ t('blockquote.author') }
                    description={ t('blockquote.description') }
                  />
                  <Story
                    title={ t('story.title') }
                    description={ t('story.description') }
                    storyText={ t('story.text') }
                  />
                  <FoodMenu
                    languageCode={ this.getCurrentLanguage() }
                  />
                  <Starters
                    languageCode={ this.getCurrentLanguage() }
                  />
                  <Contact />
                  <EmbeddedMapComponent />
                  <Footer />
                </Provider>
              </Route>
            </Switch>
          </Router>
        );
    }
}

export default withTranslation()(App);
