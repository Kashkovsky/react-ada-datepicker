import React from "react";
import PropTypes from "prop-types";

export default class MonthDropdownOptions extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  renderOptions = () => {
    return this.props.monthNames.map((month, i) => (
      <div
        className={
          this.props.month === i
            ? "react-ada-datepicker__month-option --selected_month"
            : "react-ada-datepicker__month-option"
        }
        key={month}
        ref={month}
        onClick={this.onChange.bind(this, i)}
      >
        {this.props.month === i ? (
          <span className="react-ada-datepicker__month-option--selected">
            ✓
          </span>
        ) : (
          ""
        )}
        {month}
      </div>
    ));
  };

  onChange = month => this.props.onChange(month);

  handleClickOutside = () => this.props.onCancel();

  render() {
    return (
      <div className="react-ada-datepicker__month-dropdown">
        {this.renderOptions()}
      </div>
    );
  }
}
