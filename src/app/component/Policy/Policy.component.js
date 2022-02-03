/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import {
    Trans,
    withTranslation
} from 'react-i18next';

import Delimiter from '@component/Delimiter';

import './Policy.style.scss';

export class Policy extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;

        return (
            <section
              className="Policy"
            >
                <Delimiter
                  headline={ t('privacy') }
                  subtitle="SIA Trinat"
                  positionDefault={ false }
                  imgIndex={ 3 }
                />
                <div className="container">
                    <h1>
                        { t('processing-principles') }
                    </h1>

                    <p>
                        { t('privacy-policy.valid') }
                    </p>

                    <p>
                        <Trans i18nKey="privacy-policy.primary">
                            { t('privacy-policy.primary') }
                            <b />
                        </Trans>
                    </p>

                    <p>
                        <Trans i18nKey="privacy-policy.main">
                            { t('privacy-policy.main') }
                            <a
                              href="https://trinat.lv"
                              aria-label={ t('trinat.title') }
                            >
                                https://trinat.lv
                            </a>
                        </Trans>
                    </p>

                    <p>
                        <Trans i18nKey="privacy-policy.consent">
                            { t('privacy-policy.consent') }
                            <a
                              href="https://trinat.lv"
                              aria-label={ t('trinat.title') }
                            >
                                https://trinat.lv
                            </a>
                        </Trans>
                    </p>

                    <p>
                        { t('privacy-policy.info') }
                    </p>

                    <p>
                        <a
                          href="assets/docs/privacy_policy.pdf"
                          aria-label={ t('aria.link-privacy') }
                        >
                            <button
                              className="Button Button-Reservation Button-Filled"
                              aria-label={ t('aria.privacy-download') }
                            >
                                <i className="fas fa-download" />
                                &nbsp;
                                { t('privacy') }
                            </button>
                        </a>
                    </p>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Policy);
