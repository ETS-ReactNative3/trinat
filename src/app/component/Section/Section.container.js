/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React, { createRef } from 'react';

import Section from './Section.component';

export class SectionContainer extends React.Component {
    static propTypes = {
        titleKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        textKey: PropTypes.string,
        scrollable: PropTypes.bool,
        mapEnabled: PropTypes.bool
    }

    static defaultProps = {
        scrollable: true,
        mapEnabled: false,
        textKey: ''
    }

    constructor(props) {
        super(props);

        this.contentRef = createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    containerProps() {
        const {
            titleKey = '',
            descriptionKey = '',
            textKey = '',
            scrollable,
            mapEnabled
        } = this.props;

        return {
            scrollable,
            mapEnabled,
            titleKey,
            descriptionKey,
            textKey,
            contentRef: this.contentRef
        };
    }

    handleScroll() {
        const {
            scrollable = true
        } = this.props;

        const currentPos = window.pageYOffset;
        const node = this.contentRef.current;
        const nodeOffsetTop = node.getBoundingClientRect().top;

        const DIVIDER = 18;

        if (scrollable && currentPos > nodeOffsetTop) {
            node.style.transform = `translateY(-${currentPos / DIVIDER}%)`;
        }
    }

    render() {
        return (
            <Section
              { ...this.containerProps() }
            />
        );
    }
}

export default SectionContainer;
