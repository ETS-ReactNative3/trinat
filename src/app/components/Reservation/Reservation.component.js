/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import './reservation.style.scss';

class Reservation extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired,
      handler: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.renderReservationNotice = this.renderReservationNotice.bind(this);
      this.renderFormPrimaryRow = this.renderFormPrimaryRow.bind(this);
      this.renderFormSecondaryRow = this.renderFormSecondaryRow.bind(this);
      this.renderFormSelectItems = this.renderFormSelectItems.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      window.addEventListener('load', this.handleChange());
  }

  handleChange() {
      const formItems = document.querySelectorAll('.form-control');
      formItems.forEach((item) => {
          item.addEventListener('blur', (e) => {
              if (e.target.value.length > 0) {
                  e.target.classList.add('has-value');
              } else {
                  e.target.classList.remove('has-value');
              }
          });
      });
  }

  renderFormPrimaryRow() {
      const { t } = this.props;
      return (
          <div className="row custom-mg-25">
            <div className="col-sm-4">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder={ t('reservation-placeholders.email') }
              />
              <label htmlFor="email">{ t('reservation-items.email') }</label>
            </div>
            <div className="col-sm-4">
              <input
                id="tel"
                type="tel"
                className="form-control"
                placeholder={ t('reservation-placeholders.phone') }
              />
              <label htmlFor="tel">{ t('reservation-items.phone') }</label>
            </div>
            <div className="col-sm-4">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder={ t('reservation-placeholders.name') }
              />
              <label htmlFor="name">{ t('reservation-items.name') }</label>
            </div>
          </div>
      );
  }

  renderFormSecondaryRow() {
      const { t } = this.props;
      return (
          <div className="row custom-mg-25">
            <div className="col-sm-4">
              <input id="date" type="date" className="form-control" />
              <label htmlFor="date">{ t('reservation-items.date') }</label>
            </div>
            <div className="col-sm-4">
              <input id="time" type="time" className="form-control" />
              <label htmlFor="time">{ t('reservation-items.time') }</label>
            </div>
            <div className="col-sm-4">
              { this.renderFormSelectItems() }
            </div>
          </div>
      );
  }

  renderFormSelectItems() {
      const { t } = this.props;
      return (
          <select className="form-control">
            { Object.values(t('reservation-items.people', { returnObjects: true }))
                .map((item) => {
                    const { id } = item;

                    return (
                    <option value={ id } key={ id }>{ item }</option>
                    );
                }) }
          </select>
      );
  }

  renderForm() {
      return (
          <form autoComplete="off">
            { this.renderFormPrimaryRow() }
            { this.renderFormSecondaryRow() }
          </form>
      );
  }

  renderReservationNotice() {
      const { t } = this.props;
      return (
          <div>{ t('reservation-notice') }</div>
      );
  }

  render() {
      const { t, handler } = this.props;
      return (
          <div className="reservation-form">
            <div className="reservation-form-wrapper">
              <h2 className="custom-tac">
                <p className="title-first">{ t('table') }</p>
                <p className="title-caption">{ t('reservation') }</p>
              </h2>
              <div className="container">
                { this.renderReservationNotice() }
              </div>
              <button
                type="button"
                onClick={ handler }
                className="reservation-close-btn"
              >
                <i className="far fa-times-circle" />
              </button>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Reservation);
